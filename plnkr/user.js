(function(root) {
  const { assign } = crocks
  const { compose } = crocks
  const { curry } = crocks

  const { joinWords } = helpers

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

  root.user = {
    updateFirstName
  }
})(window)
