module.exports = {

    path: 'app',

    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./appDetail')
            ])
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../components/SiteListPage'),
            })
        })
    },
  }
