webpackJsonp([2,16],{

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'designer/:type/:appId',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      callback(null, __webpack_require__(193));
	    });
	  }
	};

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'user',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(4, function (require) {
	      callback(null, [__webpack_require__(260), __webpack_require__(264)]);
	    });
	  }
	};

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'template',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(7, function (require) {
	      callback(null, [__webpack_require__(267), __webpack_require__(269), __webpack_require__(274)]);
	    });
	  }
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'my',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(11, function (require) {
	      callback(null, [__webpack_require__(282)]);
	    });
	  },
	  getIndexRoute: function getIndexRoute(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(13, function (require) {
	      callback(null, {
	        component: __webpack_require__(284)
	      });
	    });
	  }
	};

/***/ }

});