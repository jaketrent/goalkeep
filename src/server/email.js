const AWS = require('aws-sdk')

const config = require('./config')

const ses = new AWS.SES()

// TODO: validate email before this point
const sendConfirm = (token, email) => {
  // prettier-ignore
  const confirmLink = `${config.clientHost}/login/confirm?email=${encodeURIComponent(email)}&token=${token}`

  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `To login to goalkeep, follow this link: <a href="${confirmLink}" target="_blank">to confirm your email</a>.`
        },
        Text: {
          Charset: 'UTF-8',
          Data: `To login to goalkeep, follow this link to confirm your email: ${confirmLink}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Verify your email address to use goalkeep'
      }
    },
    ReturnPath: config.emailFrom,
    Source: config.emailFrom
  }
  return ses.sendEmail(params).promise()
}

exports.sendConfirm = sendConfirm
