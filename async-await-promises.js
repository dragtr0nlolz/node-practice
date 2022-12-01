const fs = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const start = async (path, path2) => {
    try {
        const first = await fs.readFile(path, 'utf-8');
        const second = await fs.readFile(path2, 'utf-8');
        await fs.writeFile(path, `Writing Data hehe ${first} ${second}`, {
            flag: 'a'
        })
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start('./content/first.txt', './content/second.txt')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })