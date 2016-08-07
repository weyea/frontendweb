

  module.exports  = {

      path: 'my',
      getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
          callback(null, [
            require('./routes/app'),
            // require('./routes/preview'),
            // require('./routes/market')
          ])
        })
      },
      getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
          callback(null, {
            component: require('./components'),
          })
        })
      },

    }
