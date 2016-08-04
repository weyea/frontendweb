module.exports = {

    path: 'template/create',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./CreateTemplate'))
    })
    }
  }
