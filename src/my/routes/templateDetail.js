module.exports = {

    path: 'template/:id',

    getComponents(nextState, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/template'))
      })
    }
  }
