/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var bindContext = require('bind-context')
var isObject = require('is-plain-object')
var useware = require('useware')
var map = require('arr-map')

module.exports = function usewareContext () {
  var args = useware(arguments)
  var ctx = isObject(arguments[0]) ? arguments[0] : (this || {})

  return map(args, function (fn) {
    return bindContext(ctx, fn)
  })
}
