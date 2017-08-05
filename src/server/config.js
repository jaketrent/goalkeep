// @flow
const dotenv = require('dotenv')

type Cache = {
  awsRegion: string,
  awsAccessKeyId: string,
  awsSecretAccessKey: string,
  clientHost: string,
  corsWhitelist: string[],
  databaseUrl: string,
  emailFrom: string,
  port: number
}

const getVar = name => {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

let cache: Cache = {
  awsRegion: '',
  awsAccessKeyId: '',
  awsSecretAccessKey: '',
  clientHost: '',
  corsWhitelist: [],
  databaseUrl: '',
  emailFrom: '',
  port: 3001
}

const requiredVars = [
  'AWS_REGION',
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY',
  'DATABASE_URL',
  'EMAIL_FROM',
  'CORS_WHITELIST',
  'CLIENT_HOST'
]

function loadFromEnv(seed: ?Cache): Cache {
  dotenv.config({ silent: true })

  cache = Object.assign(cache, seed, {
    awsRegion: getVar('AWS_REGION'),
    awsAccessKeyId: getVar('AWS_ACCESS_KEY_ID'),
    awsSecretAccessKey: getVar('AWS_SECRET_ACCESS_KEY'),
    clientHost: getVar('CLIENT_HOST'),
    corsWhitelist: getVar('CORS_WHITELIST').split(','),
    databaseUrl: getVar('DATABASE_URL'),
    emailFrom: getVar('EMAIL_FROM'),
    port: parseInt(process.env.PORT, 10) || cache.port
  })

  return cache
}

module.exports = loadFromEnv()
