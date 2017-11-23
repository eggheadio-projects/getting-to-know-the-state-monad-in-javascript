(function(root) {
  // getWord :: Number -> String -> String
  const getWord =
    indx => str => str.split(' ')[indx] || ''

  // nameify :: String -> String -> String
  const nameify =
    first => last => `${last}, ${first}`

  root.helpers = {
    getWord,
    nameify
  }
})(window)