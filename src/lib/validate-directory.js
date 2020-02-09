/*=====================================================
    // Check if directory is workable
    // Dir should be a Ghost theme's root or Ghost's installation root
    // "validateDirectory" function returns an object with "dir" and "type"
    // "dir" key will be a workable directory path, 
    // "type" will be either "theme-root" or "ghost-root"
    // if directory is not workable then show error message and exist.
=====================================================*/

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function validateDir(dir) {
    var dirObj = {}
    
    // check if path exist, if not then exit
    // this code block only execute when user sets an invalid path
    // If user no not sets a path then sets to current working directory at the beginning
    if (false === fs.existsSync(dir)) {
        console.log(chalk.red('Error: the theme root you have mentioned is not exist'));
        console.log(chalk.blue('Run the command from a ghost theme root directory'));
        console.log(chalk.blue('OR run the command from a ghost installation directory using -n / --theme-name option'));
        console.log(chalk.blue('Or mention a Ghost theme root directory using -d / --dir option'));
        process.exit(1);
    }
    // check if path points to a directory, if not then exit
    if (false === fs.lstatSync(dir).isDirectory()) {
        console.log(chalk.red('Error: the path is not a directory'));
        console.log(chalk.blue('Run the command from a ghost theme root directory'));
        console.log(chalk.blue('OR run the command from a ghost installation directory using -n / --theme-name option'));
        console.log(chalk.blue('Or mention a Ghost theme root directory using -d / --dir option'));
        process.exit(1);
    }
    // check if path points to file system root, if yes then exit
    if (dir === path.parse(dir).root) {
        console.log(chalk.red('Error: the path is a filesystem root and not a proper workable directory'));
        console.log(chalk.blue('Run the command from a ghost theme root directory'));
        console.log(chalk.blue('OR run the command from a ghost installation directory using -n / --theme-name option'));
        console.log(chalk.blue('Or mention a Ghost theme root directory using -d / --dir option'));
        process.exit(1);
    }
    // Check path is a ghost theme's root directory
    if (true === fs.existsSync(`${dir}/package.json`)) {
        let content = fs.readFileSync(`${dir}/package.json`, 'utf8')
        content = JSON.parse(content);
        if(content.hasOwnProperty('engines') && content.engines.hasOwnProperty('ghost')) {
            // this is a ghost theme, return correct object
            dirObj.dirPath = dir;
            dirObj.dirType = 'theme-root'
            return dirObj;
        }
    }
    // else check path is root of ghost installation directory
    // Else show error message and exit
    if (true === fs.existsSync(`${dir}/versions/`)) {
        const versions = fs.readdirSync(`${dir}/versions/`)
        const packageFile = `${dir}/versions/${versions[0]}/package.json`;
        if (fs.existsSync(packageFile) === true) {
            let content = fs.readFileSync(packageFile, 'utf8')
            content = JSON.parse(content);
            if(content.name === 'ghost') {
                // this is root of ghost installation directory, return correct object
                dirObj.dirPath = dir;
                dirObj.dirType = 'ghost-root'
                return dirObj;
            }
        }
    } else {
        console.log(chalk.red('Error: the working path is not a Ghost theme root directory'));
        console.log(chalk.blue('Run the command from a ghost theme root directory'));
        console.log(chalk.blue('OR run the command from a ghost installation directory using -n / --theme-name option'));
        console.log(chalk.blue('Or mention a Ghost theme root directory using -d / --dir option'));
        process.exit(1);
    }
}

module.exports = validateDir;