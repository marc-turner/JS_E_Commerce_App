const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        content: `<div>
                Your id is: ${req.session.userId}
                <form method="POST">
                    <input type='text' name='email' placeholder='email'/>
                    ${getError(errors, 'email')}
                    <input type='password' name='password' placeholder='password'/>
                    ${getError(errors, 'password')}
                    <input type='password' name='confirmPassword' placeholder='confirm password'/>
                    ${getError(errors, 'confirmPassword')}
                    <button>Sign Up!</button>
                </form>
            </div>`
    });
};
