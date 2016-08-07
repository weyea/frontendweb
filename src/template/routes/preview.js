module.exports = {

    path: 'preview/:id',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/preview'))
    })
    }
  }
