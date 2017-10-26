webpackJsonp([15],{

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: 'create',

  getComponents: function getComponents(nextState, callback) {
    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      callback(null, __webpack_require__(868));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    path: 'market/:type',

    getComponents: function getComponents(nextState, callback) {
        __webpack_require__.e/* require.ensure */(2/* duplicate */).then((function (require) {
            callback(null, __webpack_require__(512));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    },
    getIndexRoute: function getIndexRoute(partialNextState, callback) {
        __webpack_require__.e/* require.ensure */(2/* duplicate */).then((function (require) {
            callback(null, {
                component: __webpack_require__(512)
            });
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ })

});