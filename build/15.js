webpackJsonp([15],{

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: 'create',

  getComponents: function getComponents(nextState, callback) {
    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      callback(null, __webpack_require__(886));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    path: 'market/:type',

    getComponents: function getComponents(nextState, callback) {
        __webpack_require__.e/* require.ensure */(2/* duplicate */).then((function (require) {
            callback(null, __webpack_require__(514));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    },
    getIndexRoute: function getIndexRoute(partialNextState, callback) {
        __webpack_require__.e/* require.ensure */(2/* duplicate */).then((function (require) {
            callback(null, {
                component: __webpack_require__(514)
            });
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ })

});