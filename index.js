const tty = require('tty')
const chalk = require('chalk')

console.log('stdout is tty?', process.stdout.isTTY, tty.isatty(1))
console.log('stderr is tty?', process.stderr.isTTY, tty.isatty(2))

console.log('colored output on stdout?', chalk.red('this should be red'))
console.error('colored output on stderr?', chalk.red('this should be red'))
