process.env.DEBUG='stdout-stderr-testing'

const tty = require('tty')
const execa = require('execa')
const debug = require('debug')('stdout-stderr-testing')
const supportsColor = require('supports-color')
const symbols = require('log-symbols')

console.log('process.env.TERM is set to:', process.env.TERM)
console.log("process.type=", process.type)
console.log("electron.version=", process.versions.electron)

console.log('process.env.FORCE_COLOR=', process.env.FORCE_COLOR)

debug('some debug output %o', { foo: 'bar', baz: true })

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

console.log('***PARENT DONE***\n\n\n')

console.log('---spawning inherit child---')
execa('node', ['child.js'], { stdio: 'inherit' })
.on('exit', () => {
  console.log('\n\n\n')
  console.log('---spawning pipe child---')

  const p = execa('node', ['child.js'])
  p.stdin.pipe(process.stdin)
  p.stdout.pipe(process.stdout)
  p.stderr.pipe(process.stderr)
  p.on('exit', () => {
    console.log('\n\n\n')
    console.log('---spawning on data child---')

    const p2 = execa('node', ['child.js'])
    p2.stderr.on('data', (d) => {
      console.log(`got data: ${d}`)
    })
    p2.stdout.on('data', (d) => {
      console.log(`got data: ${d}`)
    })
    p2.on('exit', process.exit)
  })
})
