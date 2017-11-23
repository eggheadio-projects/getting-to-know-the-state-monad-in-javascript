// getWord :: Number -> String -> String
const getWord =
  indx => str => str.split(' ')[indx] || ''

// nameify :: String -> String -> String
const nameify =
  first => last => `${last}, ${first}`

module.exports = {
  getWord,
  nameify
}
