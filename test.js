/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var usewareContext = require('./index')

function fn1 () {
  return this.foo
}

function fn2 () {
  return this.bar
}

test('should work as `useware` package', function (done) {
  var result = usewareContext(fn1, fn2)
  var func1 = result[0]
  var func2 = result[1]
  var actual = [func1.name, func2.name]
  var expected = ['fn1', 'fn2']

  test.deepEqual(actual, expected)
  test.deepEqual(typeof func1, 'function')
  test.deepEqual(typeof func2, 'function')
  test.deepEqual(func1(), undefined)
  test.deepEqual(func2(), undefined)
  done()
})

test('should recognize 1st argument as context if object', function (done) {
  var res = usewareContext({foo: 'baz', bar: 'qux'}, [1, 2, [fn1, 3]], 'arg', fn2)
  var func1 = res[0]
  var func2 = res[1]

  var names = [func1.name, func2.name]
  var _names = ['fn1', 'fn2']

  test.deepEqual(names, _names)
  test.deepEqual(typeof func1, 'function')
  test.deepEqual(typeof func2, 'function')
  test.deepEqual(func1(), 'baz')
  test.deepEqual(func2(), 'qux')
  done()
})

test('should accept context through `.call`, `.apply` etc', function (done) {
  var fns1 = usewareContext.call({foo: 'bbb'}, [fn1, 2, [3, fn2]], 1, fn1, fn2)
  var fns2 = usewareContext.apply({foo: 'ccc'}, [[fn1, 2, [3, fn2]], 1, fn1, fn2])

  test.equal(fns1.length, 4)
  test.equal(fns2.length, 4)
  test.equal(fns1[0](), 'bbb')
  test.equal(fns2[0](), 'ccc')
  done()
})

test('should `useware(ctx, arguments)` work same way as `.call(ctx, arguments)`', function (done) {
  function App () {
    this.foo = 'bar'
    this.fns = []
  }
  App.prototype.use = function () {
    this.fns = this.fns.concat(usewareContext(this, arguments))
    return this
  }
  var app = new App()
    .use(fn1, fn2)
    .use([fn1, [fn2, fn1], fn2])
    .use(1, 'foo', fn1, [fn2, 3, fn1], fn2)

  test.strictEqual(app.fns.length, 10)
  test.strictEqual(app.fns[0](), 'bar')
  test.strictEqual(app.fns[8](), 'bar')
  done()
})
