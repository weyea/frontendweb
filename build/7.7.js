webpackJsonp([7,19],{

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'create',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      callback(null, __webpack_require__(654));
	    });
	  }
	};

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    path: 'market/:type',

	    getComponents: function getComponents(nextState, callback) {
	        __webpack_require__.e/* nsure */(9, function (require) {
	            callback(null, __webpack_require__(656));
	        });
	    },
	    getIndexRoute: function getIndexRoute(partialNextState, callback) {
	        __webpack_require__.e/* nsure */(9/* duplicate */, function (require) {
	            callback(null, {
	                component: __webpack_require__(656)
	            });
	        });
	    }
	};

/***/ }

});