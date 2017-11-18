const { State } = crocks
const { Pair } = crocks
const { Unit } = crocks

const { modify } = State

const { mapProps } = crocks

const { add } = helpers

// State s a
// (s -> (a, s))

const state =
  { bubbles: 42 }

// modifyState :: (s -> s) -> State s ()
const modifyState = fn =>
  State(s => Pair(Unit(), fn(s)))

log(
  'modifyState evalWith',
  modifyState(mapProps({ bubbles: add(1) }))
    .evalWith(state)
)

log(
  'modifyState execWith',
  modifyState(mapProps({ bubbles: add(1) }))
    .execWith(state)
)

log(
  'modify execWith',
  modify(mapProps({ bubbles: add(1) }))
    .execWith(state)
)

log(
  'modify evalWith',
  modify(mapProps({ bubbles: add(1) }))
    .evalWith(state)
)

// blowBubbles :: Number -> State Object ()
const blowBubbles = n =>
  modify(mapProps({ bubbles: add(n) }))

log(
  'blowBubbles execWith',
  blowBubbles(10)
    .execWith(state)
)

log(
  'blowBubbles evalWith',
  blowBubbles(10)
    .evalWith(state)
)

// blowBubble :: () -> State Object ()
const blowBubble = () =>
  blowBubbles(1)

log(
  'blowBubble execWith',
  blowBubble()
    .execWith(state)
)

log(
  'blowBubble evalWith',
  blowBubble()
    .evalWith(state)
)

// burstBubbles :: Number -> State Object ()
const burstBubbles = n =>
  blowBubbles(-(n))

log(
  'burstBubbles execWith',
  burstBubbles(10)
    .execWith(state)
)

log(
  'burstBubbles evalWith',
  burstBubbles(10)
    .evalWith(state)
)

// burstBubble :: () -> State Object ()
const burstBubble = () =>
  burstBubbles(1)

log(
  'burstBubble execWith',
  burstBubble()
    .execWith(state)
)

log(
  'burstBubble evalWith',
  burstBubble()
    .evalWith(state)
)
