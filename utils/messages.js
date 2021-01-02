const dayjs = require('dayjs')

function formatMessage(username, text) {
  return {
    username,
    text,
    time: dayjs().format('h:mm a'),
  }
}

module.exports = formatMessage
