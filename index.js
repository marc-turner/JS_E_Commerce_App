const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input type='text' name='email' placeholder='email'/>
                <input type='password' name='password' placeholder='password'/>
                <input type='password' name='confirmPassword' placeholder='confirm password'/>
                <button>Sign Up!</button>
            </form>
        </div>
    `);
});

app.post('/', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send('Email in Use');
    }
    if (password != confirmPassword) {
        return res.send('Passwords must match');
    }

    res.send('account created');
});

app.listen(3000, () => {
    console.log('Listen');
});
