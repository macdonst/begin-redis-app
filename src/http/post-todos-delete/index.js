const { http } = require('@architect/functions')
const { createConnectedClient, clientContext, clientClose } = require('@architect/shared/redis-client')

exports.handler = http.async(clientContext, destroy)

async function destroy(req) {
  const client = await createConnectedClient()

  let { key } = http.helpers.bodyParser(req)

  await client.hDel('todos', key)

  await clientClose()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
