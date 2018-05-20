process.env.DEBUG='stdout-stderr-testing'
const termSize = require('term-size')
const debug = require('debug')('stdout-stderr-testing')

console.log('process.stdout columns?', process.stdout.columns)
console.log('process.stdout rows?', process.stdout.rows)
debug('process.env.COLUMNS=', process.env.COLUMNS)
debug('process.env.LINES=', process.env.LINES)
debug('termSize %o', termSize())
