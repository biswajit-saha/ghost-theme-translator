/*=====================================================
    // This should be used only if dir is a ghost root
    // Takes two arguments, theme-name and ghost root
    // and checks if theme folder exist
    //  If theme folder exist then returns the path to theme root
    // if no theme exist then show error message and exit
=====================================================*/
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function checkThemeName(ghostRoot, themeName) {
    // Check path is a ghost theme's root directory
    const themeRoot = path.join(ghostRoot, '/content/themes/', themeName);
    if (true === fs.existsSync(themeRoot)) {
        const jsonFile = path.join(themeRoot, '/package.json');
        let content = fs.readFileSync(jsonFile, 'utf8')
        content = JSON.parse(content);
        if(content.hasOwnProperty('engines') && content.engines.hasOwnProperty('ghost')) {
            return themeRoot;
        }
    } else {
        console.log(chalk.red('Error: Theme folder not found'))
        console.log(chalk.blue('pass a correct and existing theme folder name using --theme-name option.'));
        process.exit(1);
    }
}

module.exports = checkThemeName;
