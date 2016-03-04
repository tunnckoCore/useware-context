/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Pass different kind of values and get only functions.
 * They also are bounded with `ctx` (if given) and if it is first argument,
 * or using `.call` / `.apply` as usual.
 *
 * **Example**
 *
 * ```js
 * var useware = require('useware-context')
 *
 * function pluginOne () {
 *   return this.foo
 * }
 *
 * function pluginTwo () {
 *   return this.bar
 * }
 *
 * // pass context as first argument
 * var fns = useware({
 *   foo: 'baz',
 *   bar: 'qux'
 * }, [1, 2, [pluginOne, 3]], 'arg', pluginTwo)
 *
 * console.log(fns) // => [ [Function: pluginOne], [Function: pluginTwo] ]
 * console.log(fns[0]()) // => 'baz'
 * console.log(fns[1]()) // => 'qux'
 * ```
 *
 * @name   usewareContext
 * @param  {Object=} `ctx` If first argument is object, it's considered as context.
 * @param  {*} `args` Any number of arguments, only functions are filtered.
 * @return {Array} Flattened array containing only functions.
 * @api public
 */

module.exports = function usewareContext () {
  var args = utils.useware.apply(this, arguments)
  var ctx = utils.isObject(arguments[0]) ? arguments[0] : (this || {})

  if (utils.isArguments(arguments[1])) {
    args = utils.useware.apply(this, arguments[1])
  }

  return utils.arrMap(args, function (fn) {
    return utils.bindContext(ctx, fn)
  })
}
