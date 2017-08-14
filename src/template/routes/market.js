module.exports = {

    path: 'market/:type',

    getComponents(nextState, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/market'))
      })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../components/market'),
            })
        })
    },

}
