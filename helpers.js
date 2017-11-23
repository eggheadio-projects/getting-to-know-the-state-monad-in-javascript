const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// joinWords :: String -> String -> String
const joinWords = curry(
  (x, y) => `${x} ${y}`
)

// propOr :: (String, a) -> Object -> b
const propOr = (key, def) =>
  compose(option(def), prop(key))

module.exports = {
  joinWords,
  propOr
}
