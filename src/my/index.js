
var login = require("../common/login");

module.exports  = {

    path: 'my',
    getChildRoutes(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, [
            require('./routes/app'),
            //require('./routes/preview'),
            require('./routes/template'),
            require('./routes/templateDetail')
        ])
      })
    },
    onEnter:login.checkLoginRouter,
    getIndexRoute(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('./components/SiteListPage'),
        })
      })
    }

  }
