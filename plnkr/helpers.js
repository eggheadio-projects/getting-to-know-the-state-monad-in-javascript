(function(root) {
  const { compose } = crocks
  const { curry } = crocks
  const { option } = crocks
  const { prop } = crocks

  // joinWords :: String -> String -> String
  const joinWords = curry(
    (x, y) => `${x} ${y}`
  )

  // propOr :: (String, a) -> Object -> b
  const propOr = (key, def) =>
    compose(option(def), prop(key))

  root.helpers = {
    joinWords,
    propOr
  }
})(window)
