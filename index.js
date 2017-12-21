const tty = require('tty')

console.log('stdout is tty?', process.stdout.isTTY, tty.isatty(1))
console.log('stderr is tty?', process.stderr.isTTY, tty.isatty(2))
