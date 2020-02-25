const fs = require('fs');

class UsersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            // checks if file exists
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
        // open the file
        const contents = await fs.promises.readFile(this.filename, {
            encoding: 'utf8'
        });

        // Read its contents
        console.log(contents);

        // PArse contents

        // return the parsed
    }
}

// testing code - helper function
const test = async () => {
    const repo = new UsersRepository('users.json');

    await repo.getAll();
};

test();
