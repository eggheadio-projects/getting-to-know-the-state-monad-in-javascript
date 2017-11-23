const log = require('./logger')

const user = require('./user')
const model = require('./model')

const data = {
  firstName: 'Bobby',
  lastName: 'Pickles',
  fullName: 'Bobby Pickles'
}

log(
  'using normal functions',
  user.updateFirstName('Jimmy', data)
)

log(
  'using State',
  model.updateFirstName('Jimmy')
    .execWith(data)
)
