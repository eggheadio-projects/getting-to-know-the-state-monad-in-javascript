const log = require('./logger')

const State  = require('crocks/State')

const composeK = require('crocks/helpers/composeK')

const {
  addState,
  incState,
  multiplyState
} = require('./helpers')

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .chain(addState)
    .chain(incState)
    .chain(multiplyState)

log(
  'compute instance',
  compute(10)
)

log(
  'compute runWith 2',
  compute(10)
    .runWith(2)
)

// chain :: State s a ~> (a -> State s b) -> State s b
// (State s) m => a -> m b

// addAndInc :: Number -> State Number
const addAndInc =
  composeK(incState, addState)

// chainAddAndInc :: Number -> State Number
const chainAddAndInc = n =>
  State.of(n)
    .chain(addAndInc)
    .chain(multiplyState)

log(
  'chainAddAndInc',
  chainAddAndInc(10)
    .runWith(2)
)

// chainNoOf:: Number -> State Number
const chainNoOf = n =>
  addAndInc(n)
    .chain(multiplyState)

log(
  'chainNoOf',
  chainNoOf(10)
    .runWith(2)
)

const composeAll =
  composeK(multiplyState, addAndInc)

log(
  'composeAll',
  composeAll(10)
    .runWith(2)
)
