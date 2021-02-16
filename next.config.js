module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://stephenlai2015:NYNuJureSyoKVGge@cluster0.8ql1n.mongodb.net/note-app?retryWrites=true&w=majority"
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}