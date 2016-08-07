module.exports = {

    path: 'create',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/CreateTemplate'))
    })
    }
  }
