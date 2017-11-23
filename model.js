const { get, modify } = require('crocks/State')

const assign = require('crocks/helpers/assign')
const liftA2 = require('crocks/helpers/liftA2')

const { joinWords, propOr } = require('./helpers')

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

module.exports = {
  updateFirstName
}
