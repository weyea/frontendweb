
var login = require("../common/login");
module.exports = {

    path: 'designer/:type/:appId',
    onEnter:login.checkLoginRouter,
    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components'))
    })
    }
  
}
