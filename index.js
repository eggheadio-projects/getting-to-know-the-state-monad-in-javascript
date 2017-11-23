const log = require('./logger')

const State = require('crocks/State')
const { get } = State

const liftA2 = require('crocks/helpers/liftA2')

const { getWord, nameify } = require('./helpers')

// getFirst :: State String
const getFirst =
  get(getWord(0))

// getLast :: State String
const getLast =
  get(getWord(1))

log(
  'getFirst instance',
  getFirst
)

log(
  'getFirst runWith',
  getFirst
    .runWith('Robert Paulson')
)

log(
  'getFirst evalWith',
  getFirst
    .evalWith('Robert Paulson')
)

log(
  'chain getLast',
  getFirst
    .chain(f => getLast)
    .evalWith('Robert Paulson')
)

log(
  'chain nameify',
  getFirst
    .chain(f => getLast.map(nameify(f)))
    .evalWith('Robert Paulson')
)

// ap :: State s (a -> b) ~> State a -> State b

log(
  'lift function',
  State.of(nameify)
    .evalWith('Robert Paulson')
)

log(
  'apply getFirst',
  State.of(nameify)
    .ap(getFirst)
    .evalWith('Robert Paulson')
)

log(
  'apply getLast',
  State.of(nameify)
    .ap(getFirst)
    .ap(getLast)
    .evalWith('Robert Paulson')
)

log(
  'map over getFirst',
  getFirst
    .map(nameify)
    .ap(getLast)
    .evalWith('Robert Paulson')
)

// format :: State String
const format =
  liftA2(nameify, getFirst, getLast)

log(
  'format with liftA2',
  format
    .evalWith('Robert Paulson')
)
