webpackJsonp([10,19],{

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'app/:id',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(11, function (require) {
	      callback(null, __webpack_require__(664));
	    });
	  }
	};

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    path: 'template',

	    getChildRoutes: function getChildRoutes(partialNextState, callback) {
	        !/* require.ensure */(function (require) {
	            callback(null, [__webpack_require__(672)]);
	        }(__webpack_require__));
	    },
	    getIndexRoute: function getIndexRoute(partialNextState, callback) {
	        __webpack_require__.e/* nsure */(13, function (require) {
	            callback(null, {
	                component: __webpack_require__(674)
	            });
	        });
	    }
	};

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'template/:id',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(12, function (require) {
	      callback(null, __webpack_require__(673));
	    });
	  }
	};

/***/ }

});