const uuid = require('uuid/v4')

const tempTokens = {}

const generate = email => {
  const token = uuid()
  tempTokens[token] = { token, email }
  return token
}

exports.generate = generate
