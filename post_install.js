var fs = require('fs');
const { spawn } = require("child_process");
var installCopy = spawn("npm", ["i", "gently-copy"], {shell: true});
installCopy.on('exit', (code)=>{
    var gentlyCopy = require('gently-copy')
    var filesToCopy = ['public', 'src', '.gitignore', 'LICENSE', 'package.json', 'README.md', 'tsconfig.json', 'yarn.lock'];
    // User's local directory
    var userPath = process.env.INIT_CWD
    // Moving files to user's local directory
    gentlyCopy(filesToCopy, userPath);
    console.log('All done');
})







