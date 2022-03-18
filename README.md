A super simple Begin **c**reate **r**ead **u**pdate **d**elete app that exemplifies a basic todo app that uses one static html page and four API endpoints that connect to a Redis database.

# Prerequisites

1. Follow [this tutorial](https://developer.redis.com/create/aws/redis-on-aws) to sign up for a free Redis Enterprise Cloud account.

2. Create an `.env` file in the root of this project and add the content below with your server secret added

```sh
@testing
REDIS_URL=Your redis url

@staging
REDIS_URL=Your redis url

@production
REDIS_URL=Your redis url
```

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-redis)

Deploy your own clone of this app to Begin!

## Local development

- Follow the [Redis quickstart](https://redis.io/topics/quickstart) to run the DB locally
- Start the local dev server: `npm start`

## Reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
