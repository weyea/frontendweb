module.exports = {

    path: 'app/:id',

    getComponents(nextState, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/app'))
      })
    }
  }
