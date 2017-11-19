// add :: Number -> Number -> Number
const add =
  x => y => x + y

// inc :: Number -> Number
const inc =
  add(1)

module.exports = {
  add,
  inc
}
