const assign = require('crocks/helpers/assign')
const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const { joinWords } = require('./helpers')

// updateFirstName :: String -> User -> User
const updateFirstName = curry(
  firstName => compose(
    buildFullName,
    assign({ firstName })
  )
)

// updateFullName :: String -> User -> User
const updateFullName = curry(
  fullName => assign({ fullName })
)

// buildFullName :: User -> User
function buildFullName(user) {
  const { firstName, lastName } = user

  const fullName =
    joinWords(firstName, lastName)

  return updateFullName(fullName, user)
}

module.exports = {
  updateFirstName
}
