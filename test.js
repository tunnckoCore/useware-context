/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
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

test('useware-context:', function () {
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
  test('should accept this as context when `.call`, `.apply` etc', function (done) {
    var res = usewareContext.call({foo: 'b', c: 'd'}, [fn1, 2, [3, fn2]], 1, fn1, fn2)
    var func1 = res[0]

    test.equal(res.length, 4)
    test.equal(func1(), 'b')
    done()
  })
})
