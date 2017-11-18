const { State } = crocks
const { Pair } = crocks
const { Unit } = crocks

const { put } = State

// State s a
// (s -> (a, s))

// putState :: s -> State s ()
const putState = state =>
  State(() => Pair(Unit(), state))

log(
  'putState runWith',
  putState('Grand Canyon')
    .runWith('Evergreen')
)

log(
  'putState state (snd)',
  putState('Grand Canyon')
    .runWith('Evergreen')
    .snd()
)

log(
  'putState evalWith',
  putState('Grand Canyon')
    .evalWith('Evergreen')
)

log(
  'putState execWith (snd)',
  putState('Grand Canyon')
    .execWith('Evergreen')
)

// reset :: () -> State String ()
const reset = () =>
  put('Grand Canyon')

log(
  'reset execWith',
  reset('Grand Canyon')
    .execWith('Evergreen')
)

log(
  'reset evalWith',
  reset('Grand Canyon')
    .evalWith('Evergreen')
)

log(
  'reset runWith',
  reset('Grand Canyon')
    .runWith('Evergreen')
)
