
import { browserHistory,hashHistory, Router, Route, IndexRoute } from 'react-router'


var currentScript = document.currentScript|| document.getElementsByTagName("script");

if(currentScript.src){
  var lastIndex = currentScript.src.lastIndexOf("/");
  var src = currentScript.src.substring(0,lastIndex);
  __webpack_public_path__ =  src+"/";
}






var history;
if(/localhost:8484/.test(location.href)){
  history = browserHistory
  window.rootPath = "/"
}
else {
  history = browserHistory
    window.rootPath = "/frontendweb/"

}


if(/localhost:8484/.test(location.href)){
    window.debug = true
}
else{
    window.debug = false
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
          require("./nofound")
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
var onError = function(error){

}



ReactDOM.render(
  <Router history={history} onError={onError}  routes={rootRoute}/>,
  document.getElementById('root')
)
