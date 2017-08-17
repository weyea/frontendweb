module.exports = {

    path: '/home',

    getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, require('./components'))
        })
    }
  }
