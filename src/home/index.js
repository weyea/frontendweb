module.exports = {

    path: '/',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components'))
    })
    }
  }
