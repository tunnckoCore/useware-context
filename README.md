# [useware-context][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Much like [useware][], but with the ability to bind given context to each function.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i useware-context --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const usewareContext = require('useware-context')
```

### [usewareContext](index.js#L48)
> Pass different kind of values and get only functions. They also are bounded with `ctx` (if given) and if it is first argument, or using `.call` / `.apply` as usual.

**Params**

* `ctx` **{Object=}**: If first argument is object, it's considered as context.    
* `args` **{*}**: Any number of arguments, only functions are filtered.    
* `returns` **{Array}**: Flattened array containing only functions.  

**Example**

```js
var useware = require('useware-context')

function pluginOne () {
  return this.foo
}

function pluginTwo () {
  return this.bar
}

// pass context as first argument
var fns = useware({
  foo: 'baz',
  bar: 'qux'
}, [1, 2, [pluginOne, 3]], 'arg', pluginTwo)

console.log(fns) // => [ [Function: pluginOne], [Function: pluginTwo] ]
console.log(fns[0]()) // => 'baz'
console.log(fns[1]()) // => 'qux'
```

## Related
* [arr-filter](https://www.npmjs.com/package/arr-filter): Faster alternative to javascript's native filter method. | [homepage](https://github.com/jonschlinkert/arr-filter)
* [arr-map](https://www.npmjs.com/package/arr-map): Faster, node.js focused alternative to JavaScript's native array map. | [homepage](https://github.com/jonschlinkert/arr-map)
* [async-control](https://www.npmjs.com/package/async-control): Ultimate asynchronous control flow goodness with built-in hook system and compose,… [more](https://www.npmjs.com/package/async-control) | [homepage](https://github.com/hybridables/async-control)
* [bind-context](https://www.npmjs.com/package/bind-context): Bind context to a function and preserves her name. Can be… [more](https://www.npmjs.com/package/bind-context) | [homepage](https://github.com/tunnckocore/bind-context)
* [plugins](https://www.npmjs.com/package/plugins): Run a value through a plugin stack. | [homepage](https://github.com/jonschlinkert/plugins)
* [use](https://www.npmjs.com/package/use): Easily add plugin support to your node.js application. | [homepage](https://github.com/jonschlinkert/use)
* [useware](https://www.npmjs.com/package/useware): Accept Arguments object or multiple arguments that can be any value,… [more](https://www.npmjs.com/package/useware) | [homepage](https://github.com/tunnckocore/useware)
* [vez](https://www.npmjs.com/package/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`, `koa-compose`… [more](https://www.npmjs.com/package/vez) | [homepage](https://github.com/tunnckocore/vez)
* [ware](https://www.npmjs.com/package/ware): Easily create your own middleware layer. | [homepage](https://github.com/segmentio/ware)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/useware-context/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[useware]: https://github.com/tunnckocore/useware

[npmjs-url]: https://www.npmjs.com/package/useware-context
[npmjs-img]: https://img.shields.io/npm/v/useware-context.svg?label=useware-context

[license-url]: https://github.com/tunnckoCore/useware-context/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/useware-context
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/useware-context.svg

[travis-url]: https://travis-ci.org/tunnckoCore/useware-context
[travis-img]: https://img.shields.io/travis/tunnckoCore/useware-context/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/useware-context
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/useware-context.svg

[david-url]: https://david-dm.org/tunnckoCore/useware-context
[david-img]: https://img.shields.io/david/tunnckoCore/useware-context.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

