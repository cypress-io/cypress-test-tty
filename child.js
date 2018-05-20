process.env.DEBUG='stdout-stderr-testing'

const tty = require('tty')
const supportsColor = require('supports-color')
const symbols = require('log-symbols')
const debug = require('debug')('stdout-stderr-testing')
const termSize = require('term-size')

console.log('********** INSIDE CHILD *************')

debug('child debug output %o', { foo: 'bar', baz: true })

console.log('i am stdout 1')
console.error('i am stderror 1')

console.log('i am stdout 2')
console.error('i am stderror 2')

console.log('stdout isatty', tty.isatty(1))
console.log('stderr isatty', tty.isatty(2))

console.log('stdout colors?', supportsColor.stdout)
console.log('stderr colors?', supportsColor.stderr)

console.log(symbols.info, 'info')
console.log(symbols.success, 'success')
console.log(symbols.error, 'error')
console.log(symbols.warning, 'warning')

debug('some debug output %o', { foo: 'bar', baz: true })

console.log('process.stdout columns?', process.stdout.columns)
console.log('process.stdout rows?', process.stdout.rows)
debug('process.env.COLUMNS=', process.env.COLUMNS)
debug('process.env.LINES=', process.env.LINES)
debug('termSize %o', termSize())

process.exit()
