const os = require('os');
const figlet = require('figlet');
const chalk = require('chalk');
var osType = '';
switch (os.type()) {
    case 'Linux': 
        osType = 'Linux';
    break;
    case 'Darwin':
        osType = 'MacOS';
    break;
    case 'Windows_NT':
        osType = 'Windows';
    break;
}
console.log(chalk.greenBright.bold(figlet.textSync(osType, 
{font: 'Red Phoenix',
horizontalLayout: 'default',
verticalLayout: 'default',
width: 200,
whitespaceBreak: true}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
})));
// OS Information 
console.log(chalk.yellow.bold(`\n\nKernel/Core: ${ os.type() }\n\nOS version: ${ os.version() }\n\nCPU Arch: ${ os.arch()}\n\nPlatform: ${ os.platform() }\n\nHomedir: ${ os.homedir() }\n\nTotal memory: ${ os.totalmem } bytes\n\nHostname: ${ os.hostname }\n`));
