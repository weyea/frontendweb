
import { browserHistory,hashHistory, Router, Route, IndexRoute } from 'react-router'


var history;
if(location.host == "localhost:8484"){
  history = hashHistory
}
else {
  history = browserHistory
}

const rootRoute = {

    path: '/',
    getChildRoutes(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('./designer'),
          require('./user'),
          require('./template'),
        ])
      })
    },
    getIndexRoute(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('./home/components'),
        })
      })
    },
    getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./App'))
    })
    }
  }

//   const rootRoute = {
//   childRoutes: [ {
//     path: '/',
//     component: require('./App'),
//     childRoutes: [
//       require('./home'),
//       require('./designer'),
//       require('./user'),
//       require('./template'),
//     ]
//   } ]
// }




ReactDOM.render(
  <Router history={history}  routes={rootRoute}/>,
  document.getElementById('root')
)
