const log = require('./logger')

const State  = require('crocks/State')
const { get, modify } = State

const constant = require('crocks/combinators/constant')

const { add, inc } = require('./helpers')

// State s a
// State.of :: a -> State s a

log(
  'State of instance',
  State.of(10)
)

log(
  'State of runWith',
  State.of(10)
    .runWith(2)
)

log(
  'State of execWith',
  State.of(10)
    .execWith(2)
)

log(
  'State of evalWith',
  State.of(10)
    .evalWith(2)
)

// computeMap :: Number -> State Number
const computeMap = n =>
  State.of(n)
    .map(add(2))

log(
  'computeMap evalWith 2',
  computeMap(10)
    .evalWith(2)
)

// chain :: State s a ~> (a -> State s b) -> State s b

// computeChain :: Number -> State Number
const computeChain = n =>
  State.of(n)
    .chain(x => get(add(x)))

log(
  'computeChain evalWith 5',
  computeChain(10)
    .evalWith(5)
)

log(
  'computeChain evalWith 2',
  computeChain(10)
    .evalWith(2)
)

// addState :: Number -> State Number
const addState = n =>
  get(add(n))

// computeAddState :: Number -> State Number
const computeAddState = n =>
  State.of(n)
    .chain(addState)

log(
  'computeAddState evalWith 2',
  computeAddState(10)
    .evalWith(2)
)

log(
  'computeAddState evalWith 5',
  computeAddState(10)
    .evalWith(5)
)

log(
  'computeAddState execWith 2',
  computeAddState(10)
    .execWith(2)
)

log(
  'computeInc execWith 2',
  computeAddState(10)
    .chain(() => modify(inc))
    .execWith(2)
)

log(
  'computeInc evalWith 2',
  computeAddState(10)
    .chain(() => modify(inc))
    .evalWith(2)
)

// incState :: Number -> State Number
const incState = n =>
  modify(inc)
    .map(constant(n))

log(
  'incState evalWith 2',
  computeAddState(10)
    .chain(incState)
    .evalWith(2)
)

log(
  'incState execWith 2',
  computeAddState(10)
    .chain(incState)
    .execWith(2)
)

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .chain(addState)
    .chain(incState)
    .chain(addState)

log(
  'compute evalWith 2',
  compute(10)
    .evalWith(2)
)

log(
  'compute execWith 2',
  compute(10)
    .execWith(2)
)

log(
  'compute runWith 2',
  compute(10)
    .runWith(2)
)
