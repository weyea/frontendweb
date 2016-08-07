

  module.exports  = {

      path: 'tempalte',
      getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
          callback(null, [
            require('./routes/create.js'),
            require('./routes/preview.js'),
            require('./routes/market.js')
          ])
        })
      }
    }
