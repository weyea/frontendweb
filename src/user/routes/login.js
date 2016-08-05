module.exports = {
    path: 'login',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/login.js'))
    })
    }
  }
