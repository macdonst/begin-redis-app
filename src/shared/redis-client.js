const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL
})

async function createConnectedClient() {
  client.on('connect', () => {
    console.log("connected to redis");
  })

  client.on("error", (error) => {
    console.error(error);
  });

  client.on("end", () => {
    console.log("dis-connected from redis");
  });

  await client.connect()
  return client;
}

async function clientClose() {
  client.quit()
}

async function clientContext(req, context) {
  process.env.ARC_ENV === 'testing' ? context.callbackWaitsForEmptyEventLoop = true : context.callbackWaitsForEmptyEventLoop = false
}

module.exports = { createConnectedClient, clientContext, clientClose };
