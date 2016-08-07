module.exports = {

    path: 'market',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/market'))
    })
    }
  }
