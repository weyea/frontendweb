webpackJsonp([8,21],{

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'create',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      callback(null, __webpack_require__(680));
	    });
	  }
	};

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    path: 'market/:type',

	    getComponents: function getComponents(nextState, callback) {
	        __webpack_require__.e/* nsure */(10, function (require) {
	            callback(null, __webpack_require__(682));
	        });
	    },
	    getIndexRoute: function getIndexRoute(partialNextState, callback) {
	        __webpack_require__.e/* nsure */(10/* duplicate */, function (require) {
	            callback(null, {
	                component: __webpack_require__(682)
	            });
	        });
	    }
	};

/***/ }

});