webpackJsonp([2,12],{

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
	      callback(null, [__webpack_require__(260)]);
	    });
	  }
	};

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'tempalte',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      callback(null, [__webpack_require__(265), __webpack_require__(267), __webpack_require__(272)]);
	    });
	  }
	};

/***/ }

});