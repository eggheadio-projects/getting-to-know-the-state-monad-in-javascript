const { get } = crocks.State

const { compose } = crocks
const { objOf } = crocks
const { option } = crocks
const { prop } = crocks

const { burgers, tacos } = data

// State s a
// (s -> (a, s))

log(
  'get instance',
  get()
)

log(
  'get runWith burgers',
  get()
    .runWith(burgers)
)

log(
  'get state (snd)',
  get()
    .runWith(burgers)
    .snd()
)

log(
  'get resultant (fst)',
  get()
    .runWith(burgers)
    .fst()
)

log(
  'getMaybe resultant (fst)',
  get()
    .map(prop('burgers'))
    .runWith(burgers)
    .fst()
)

log(
  'getMaybe with tacos resultant (fst)',
  get()
    .map(prop('burgers'))
    .runWith(tacos)
    .fst()
)

log(
  'getMaybe with tacos state (snd)',
  get()
    .map(prop('burgers'))
    .runWith(tacos)
    .snd()
)

log(
  'getMaybe evalWith tacos',
  get()
    .map(prop('burgers'))
    .evalWith(tacos)
)

log(
  'getMaybe evalWith burgers',
  get()
    .map(prop('burgers'))
    .evalWith(burgers)
)

log(
  'getMaybe no map',
  get(prop('burgers'))
    .evalWith(burgers)
)

log(
  'getMaybe no map (tacos)',
  get(prop('burgers'))
    .evalWith(tacos)
)

log(
  'option (burgers)',
  get(prop('burgers'))
    .map(option(0))
    .evalWith(burgers)
)

log(
  'option (tacos)',
  get(prop('burgers'))
    .map(option(0))
    .evalWith(tacos)
)

// defaultProp :: (String, a) -> Object -> b
const defaultProp = (key, def) => compose(
  option(def),
  prop(key)
)

// getBurgers :: State Object a
const getBurgers =
  get(defaultProp('burgers', 0))

log(
  'defaultProp (burgers)',
  getBurgers
    .evalWith(burgers)
)

log(
  'defaultProp (tacos)',
  getBurgers
    .evalWith(tacos)
)

// burgersToTacos  :: State Object
const burgersToTacos =
  getBurgers
    .map(objOf('tacos'))

log(
  'burgersToTacos with tacos',
  burgersToTacos
    .evalWith(tacos)
)

log(
  'burgersToTacos with burgers',
  burgersToTacos
    .evalWith(burgers)
)