

const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

const config = {
  all: {
    mongo: {
      uri: process.env.MONGODB_URI_DEV,
      mongooseOptions: {
        user: requireProcessEnv('DB_DEV_USER'),
        pass: requireProcessEnv('DB_DEV_PWD'),
        authSource: requireProcessEnv('DB_DEV_AUTHDB'),
      },
      options: {
        debug: true
      }
    },
}
}

module.exports = Object.assign(config.all, config[config.all.env])
export default module.exports
