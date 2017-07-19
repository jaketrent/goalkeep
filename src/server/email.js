const AWS = require('aws-sdk')

const ses = new AWS.SES()

// TODO: validate email before this point
const sendConfirm = (token, email) => {
  // prettier-ignore
  // TODO: ui host env var
  const confirmLink = `http://localhost:3000/api/v1/login/confirm?email=${encodeURIComponent(email)}&token=${token}`

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
    ReturnPath: process.env.EMAIL_FROM,
    Source: process.env.EMAIL_FROM
  }
  return ses.sendEmail(params).promise()
}

exports.sendConfirm = sendConfirm
