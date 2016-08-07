module.exports = {

    path: 'preivew',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/preview'))
    })
    }
  }
