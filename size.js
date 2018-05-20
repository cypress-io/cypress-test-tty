process.env.DEBUG='stdout-stderr-testing'
const termSize = require('term-size')
const debug = require('debug')('stdout-stderr-testing')

console.log('stdout columns?', process.stdout.columns)
debug('termSize %o', termSize())
debug('process.env.COLUMNS=', process.env.COLUMNS)
debug('process.env.LINES=', process.env.LINES)
