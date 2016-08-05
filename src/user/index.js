module.exports  = {

    path: '/user',
    getChildRoutes(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('./routes/login')
        ])
      })
    }
  }
