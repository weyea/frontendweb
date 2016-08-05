module.exports = {

    path: 'designer/:type/:appId',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components'))
    })
    }
  
}
