'use strict'

var gentlyCopy = require('gently-copy')
var fs = require('fs');
var filesToCopy = ['public', 'src', '.gitignore', 'LICENSE', 'package.json', 'README.md', 'tsconfig.json', 'yarn.lock'];

// User's local directory
var userPath = process.env.INIT_CWD

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)

fs.writeFile('../../post_install.js', "console.log('To start the app run npm start or yarn start Happy Coding')", function (err, file) {
    if (err) throw err;
    console.log('Installation Completed');
  }); 