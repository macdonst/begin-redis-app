const { http } = require('@architect/functions')
const { nanoid } = require('nanoid')
const { createConnectedClient, clientContext, clientClose } = require('@architect/shared/redis-client')

exports.handler = http.async(clientContext, create)

async function create(req) {
  const client = await createConnectedClient()

  let todo = http.helpers.bodyParser(req)

  await client.hSet('todos', nanoid(), JSON.stringify(todo))

  await clientClose()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
