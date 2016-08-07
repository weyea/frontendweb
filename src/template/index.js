

  module.exports  = {

      path: 'template',
      getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
          callback(null, [
            require('./routes/create'),
            require('./routes/preview'),
            require('./routes/market')
          ])
        })
      }
    }
