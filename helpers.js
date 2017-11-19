const { get, modify } = require('crocks/State')
const constant = require('crocks/combinators/constant')

// add :: Number -> Number -> Number
const add =
  x => y => x + y

// inc :: Number -> Number
const inc =
  add(1)

// multiply :: Number -> Number -> Number
const multiply =
  x => y => x * y

// addState :: Number -> State Number
const addState = n =>
  get(add(n))

// incState :: Number -> State Number
const incState = n =>
  modify(inc)
    .map(constant(n))

// multiplyState :: Number -> State Number
const multiplyState = n =>
  get(multiply(n))

module.exports = {
  addState,
  incState,
  multiplyState
}
