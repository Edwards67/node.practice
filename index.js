/*
//Node API. Test. Is everything working?
console.log('Chelsea');

//Import chalk

//ES6
import chalk from 'chalk';

//Common JS
//const chalk = require('chalk');

const log = console.log

//ES6
//console.log(chalk.blue('Hello world!'));

//log(chalk.blue.bgRed.bold('Hello World!'));

log(chalk.cyanBright(`
chelsea
was
here
`));  
*/
import figlet from 'figlet';

figlet("CHELSEA!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });


