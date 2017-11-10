const { State } = crocks
const { Pair } = crocks
const { compose } = crocks

const { get } = State

const { add, pluralize } = helpers

// State s a
// (s -> (a, s))

// state :: State Number
const state =
  State(s => Pair(s + 10, s))

log(
  'state instance',
  state
)

log(
  'state runWith',
  state.runWith(23)
)

log(
  'state resultant (fst)',
  state.runWith(23).fst()
)

log(
  'state state (snd)',
  state.runWith(23).snd()
)

// map :: State s a ~> (a -> b) -> State s b

// getState :: () -> State s
const getState = () =>
  State(s => Pair(s, s))

log(
  'getState (snd)',
  getState().runWith(23).snd()
)

log(
  'getState (fst)',
  getState().runWith(23).snd()
)

log(
  'getState',
  getState().runWith(23)
)

log(
  'map add(10) (fst)',
  getState()
    .map(add(10))
    .runWith(23)
    .fst()
)

log(
  'map add(10) with 0 (fst)',
  getState()
    .map(add(10))
    .runWith(0)
    .fst()
)

log(
  'map add(10) with 0 (snd)',
  getState()
    .map(add(10))
    .runWith(0)
    .snd()
)

// makeAwesome :: Number -> String
const makeAwesome =
  pluralize('Awesome', 'Awesomes')

log(
  'makeAwesome with zero (snd)',
  getState()
    .map(makeAwesome)
    .runWith(0)
    .snd()
)

log(
  'makeAwesome with zero (fst)',
  getState()
    .map(makeAwesome)
    .runWith(0)
    .fst()
)

log(
  'makeAwesome with 1 (fst)',
  getState()
    .map(makeAwesome)
    .runWith(1)
    .fst()
)

log(
  'makeAwesome with 100 (fst)',
  getState()
    .map(makeAwesome)
    .runWith(100)
    .fst()
)

log(
  'map with both (fst)',
  getState()
    .map(add(10))
    .map(makeAwesome)
    .runWith(100)
    .fst()
)

// flow :: Number -> String
const flow = compose(
  makeAwesome,
  add(10)
)

log(
  'composed (fst)',
  getState()
    .map(flow)
    .runWith(100)
    .fst()
)

log(
  'composed (snd)',
  getState()
    .map(flow)
    .runWith(100)
    .snd()
)

log(
  'composed with -9 (snd)',
  getState()
    .map(flow)
    .runWith(-9)
    .snd()
)

log(
  'composed with -9 (fst)',
  getState()
    .map(flow)
    .runWith(-9)
    .fst()
)

log(
  'composed with 23 (fst)',
  getState()
    .map(flow)
    .runWith(23)
    .fst()
)

log(
  'using get (fst)',
  get()
    .map(flow)
    .runWith(23)
    .fst()
)

log(
  'using get (snd)',
  get()
    .map(flow)
    .runWith(23)
    .snd()
)

log(
  'using get (runWith)',
  get()
    .map(flow)
    .runWith(23)
)
