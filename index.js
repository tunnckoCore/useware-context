/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var bind = require('bind-context')
var filter = require('arr-filter-fn')
var isObject = require('is-plain-object')
var isArguments = require('is-arguments')
var manageArguments = require('manage-arguments')

module.exports = function usewareContext (val) {
  var args = isArguments(val) ? manageArguments(val) : manageArguments(arguments)
  var ctx = this || {}
  if (isObject(args[0])) {
    ctx = args[0]
    args = args.slice(1)
  }

  return filter.call(ctx, args, function (fn) {
    return bind(fn, this)
  })
}
