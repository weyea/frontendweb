module.exports = {

    path: 'template',

    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [

                require('./templateDetail')

            ])
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../components/TemplateList'),
            })
        })
    },
  }
