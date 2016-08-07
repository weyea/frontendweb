module.exports = {
    path: 'signup',

    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../components/signup.js'))
    })
    }
  }
