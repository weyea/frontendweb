
import { browserHistory,hashHistory, Router, Route, IndexRoute } from 'react-router'


var currentScript = document.currentScript|| document.getElementsByTagName("script");

if(currentScript.src){
  var lastIndex = currentScript.src.lastIndexOf("/");
  var src = currentScript.src.substring(0,lastIndex);
  __webpack_public_path__ =  src+"/";
}






var history;
if(location.host == "localhost:8484"){
  history = hashHistory
  window.rootPath = "/"
}
else {
  history = browserHistory
    window.rootPath = "/frontendweb/"

}

const rootRoute = {

    path: '/',
    getChildRoutes(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('./designer'),
          require('./user'),
          require('./template'),
            require('./my'),
              require('./preview'),
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
