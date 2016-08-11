module.exports = {

    path: 'preview/template/:id',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components'))
    })
    }
  }
