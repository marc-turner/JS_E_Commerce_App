const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input type='text' name='email' placeholder='email'/>
                <input type='password' name='password' placeholder='password'/>
                <input type='password' name='confirmPassword' placeholder='confirm password'/>
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

app.post('/', (req, res) => {
    res.send('account created');
});

app.listen(3000, () => {
    console.log('Listen');
});
