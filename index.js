/*!
 * useware-context <https://github.com/tunnckoCore/useware-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

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
