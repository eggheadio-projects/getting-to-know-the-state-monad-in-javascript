const { State } = crocks
const { Pair } = crocks


// State s a
// (s -> Pair(a, s))
// m :: State Number String

const m =
  State(state => Pair('value', state))

log('State instance', m)

log(
  'Running',
  m.runWith(45)
)

log(
  'pull value (fst)',
  m.runWith(45).fst()
)

log(
  'pull state (snd)',
  m.runWith(45).snd()
)

const resultant =
  State(state => Pair(state + 5, state))

log(
  'resultant (fst)',
  resultant.runWith(45).fst()
)

const state =
  State(state => Pair(state, state + 5))

log(
  'state (snd)',
  state.runWith(45).snd()
)

// updateValue :: Number -> State Number
const updateValue = x =>
  State(s => Pair(s + x, s))

log(
  'updateValue',
  updateValue(10)
    .runWith(45)
)

// updateState :: Number -> State Number
const updateState = x =>
  State(s => Pair(s, s + x))

log(
  'updateState',
  updateState(10)
    .runWith(45)
)
