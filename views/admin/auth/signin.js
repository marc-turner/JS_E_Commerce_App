module.exports = () => {
    return `
        <div>
            <form method="POST">
                <input type='text' name='email' placeholder='email'/>
                <input type='password' name='password' placeholder='password'/>
                <button>Sign In!</button>
            </form>
        </div>
    `;
};
