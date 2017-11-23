(function(root) {
const { get, modify } = crocks.State

const { assign } = crocks
const { liftA2 } = crocks

const { joinWords, propOr } = helpers

// getFirstName :: () -> State User String
const getFirstName = () =>
  get(propOr('firstName', ''))

// getLastName :: () -> State User String
const getLastName = () =>
  get(propOr('lastName', ''))

// updateFirstName :: String -> State User ()
const updateFirstName = firstName =>
  modify(assign({ firstName }))
    .chain(buildFullName)

// updateFullName :: String -> State User ()
const updateFullName = fullName =>
  modify(assign({ fullName }))

// buildFullName :: () -> State User ()
const buildFullName = () =>
  liftA2(joinWords, getFirstName(), getLastName())
    .chain(updateFullName)

  root.model = {
    updateFirstName
  }
})(window)
