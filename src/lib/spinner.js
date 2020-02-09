/*=====================================================
    Spinner class
    Shows a spinner at CLI when start method invoked
=====================================================*/
const process = require('process');
const readline = require('readline');
const cliCursor = require('cli-cursor');
const chalk = require('chalk')

class Spinner {
    constructor() {
        this.timer = 0;
    }
    start(text) {
        let spinners = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
        let interval = 80;
        if (process.platform === 'win32') {
            spinners = ['-', '\\', '-', '/'];
            interval = 100;
        }
        let index = 0;
        
        this.timer = setInterval(() => {
            if(index >= spinners.length) {
                index = 0;
            }
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(chalk.yellow.bold(`${spinners[index]} ${text}`));
            cliCursor.hide();
            index++
        }, interval);
    }
    stop() {
        clearInterval(this.timer);
        this.timer = 0;
        process.stdout.write('\x1B[2K');
        readline.cursorTo(process.stdout, 0);
        cliCursor.show();
    }
}

module.exports = Spinner;