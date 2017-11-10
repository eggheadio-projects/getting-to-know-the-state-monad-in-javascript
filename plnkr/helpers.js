(function(root) {

  // add :: Number -> Number -> Number
  const add =
    x => y => x + y

  // pluralize :: (String, String) -> Number -> String
  const pluralize =
    (single, plural) => num =>
      `${num} ${Math.abs(num) === 1 ? single : plural}`

  root.helpers = {
    add,
    pluralize
  }
})(window)
