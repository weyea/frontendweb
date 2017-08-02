/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var app = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	window.__DEV__ = true;
	var Sophie = __webpack_require__(2);
	__webpack_require__(66);
	window.App = {
	  getMaxWidth: function getMaxWidth() {
	    return $("body").attr("data-maxwidth") || 1100;
	  },
	  updateLayout: __webpack_require__(67).update,
	  getMediaName: function getMediaName() {
	    var id = $(document.documentElement).attr("id");
	    if (id == "media-pc") return "pc";else {
	      return "phone";
	    }
	  }
	};

	__webpack_require__(68);
	__webpack_require__(69);

	var template = __webpack_require__(73);

	$.extend(App, {
	  template: template,
	  // run:function(APP){
	  //   Sophie.runApp(APP||template.App);
	  // },
	  render: template.renderData,

	  Header: __webpack_require__(82),
	  Body: __webpack_require__(85),
	  Footer: __webpack_require__(84),
	  Page: __webpack_require__(75),
	  Site: __webpack_require__(74),

	  LayoutInner: __webpack_require__(90),
	  LayoutTwo: __webpack_require__(91),
	  LayoutThree: __webpack_require__(92),
	  LayoutTwoResponse: __webpack_require__(93),
	  LayoutTwoNoResponse: __webpack_require__(94),
	  LayoutThreeResponse: __webpack_require__(95),
	  LayoutThreeNoResponse: __webpack_require__(96),
	  Pic: __webpack_require__(97),
	  Bg: __webpack_require__(98),
	  Masonry: __webpack_require__(99),
	  Logo: __webpack_require__(107),
	  Grid: __webpack_require__(78),
	  Group: __webpack_require__(108),

	  NavPage: __webpack_require__(109),
	  NavPageMask: __webpack_require__(86),
	  NavPageInline: __webpack_require__(110),
	  NavPageAbsolute: __webpack_require__(111),

	  A: __webpack_require__(88),
	  Text: __webpack_require__(112),

	  List: __webpack_require__(113),

	  ListImg: __webpack_require__(116),

	  //--
	  // require('./components/p-masonry.js')
	  // require('./components/p-icon.js')
	  // require('./components/p-text-icon.js')


	  // require('./components/p-nav-h.js')
	  //
	  // require('./components/p-nav-v.js')
	  Slide: __webpack_require__(117)
	});

	__webpack_require__(118);
	App.creater = __webpack_require__(119);

	App.render(window.serverData);

	module.exports = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	var Register = __webpack_require__(45);
	var Element = __webpack_require__(49);
	var mount = __webpack_require__(62);


	var Import = __webpack_require__(63);
	var StyleSheet = __webpack_require__(53);
	var Compontent = __webpack_require__(64);
	var Bootstrap = __webpack_require__(65);
	var EE = __webpack_require__(47);

	var Sophie = {
	  runApp: Bootstrap.runApp,
	  ready: Bootstrap.ready,
	  renderElement: Bootstrap.renderElement,
	  renderToJSON: Bootstrap.renderToJSON,
	  renderFromJSON: Bootstrap.renderFromJSON,
	  isBaseVnode: Bootstrap.isBaseVnode,

	  getOwner: Bootstrap.getOwner,
	  getParent: Bootstrap.getParent,
	  closestBaseParent: Bootstrap.closestBaseParent,
	  getBaseParent: Bootstrap.getBaseParent,

	  getMainDocumentParent: Bootstrap.getBaseParent,
	  isMainDocumentEl: Bootstrap.isBaseVnode,
	  getMainDocumentEl: Bootstrap.closestBaseParent,

	  createVnodeByTagName: Bootstrap.createVnodeByTagName,
	  createVnodeByFun: Bootstrap.createVnodeByFun,

	  createElementByVnode: Bootstrap.createElementByVnode,

	  createElementByTagName: Bootstrap.createElementByTagName,

	  mountElement: mount,
	  element: Element,
	  register: Register.register,
	  createClass: Compontent,
	  import: Import,
	  createStyleSheet: StyleSheet.create,
	  StyleSheet: StyleSheet,
	  on: function on() {
	    EE.on.apply(EE, arguments);
	  },
	  isLeaf: Register.isLeaf,
	  isSophie: Register.isLeaf,
	  upgrade: Register.upgrade,
	  registry: Register.registry,
	  upgradeDocument: Register.upgradeDocument,
	  isThunk: function isThunk(node) {
	    return node.type === 'thunk';
	  }

	};

	window.Sophie = Sophie;
	module.exports = Sophie;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.h = exports.dom = exports.diff = exports.vnode = exports.string = exports.element = exports.createApp = undefined;

	var _diff = __webpack_require__(4);

	var diff = _interopRequireWildcard(_diff);

	var _element = __webpack_require__(5);

	var vnode = _interopRequireWildcard(_element);

	var _string = __webpack_require__(19);

	var string = _interopRequireWildcard(_string);

	var _dom = __webpack_require__(22);

	var dom = _interopRequireWildcard(_dom);

	var _app = __webpack_require__(43);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var element = vnode.create;
	var h = vnode.create;

	exports.createApp = _app.createApp;
	exports.element = element;
	exports.string = string;
	exports.vnode = vnode;
	exports.diff = diff;
	exports.dom = dom;
	exports.h = h;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Actions = undefined;
	exports.diffAttributes = diffAttributes;
	exports.diffChildren = diffChildren;
	exports.diffNode = diffNode;

	var _element = __webpack_require__(5);

	var _dift = __webpack_require__(11);

	var diffActions = _interopRequireWildcard(_dift);

	var _isUndefined = __webpack_require__(6);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	var _isNull = __webpack_require__(10);

	var _isNull2 = _interopRequireDefault(_isNull);

	var _unionType = __webpack_require__(13);

	var _unionType2 = _interopRequireDefault(_unionType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var Any = function Any() {
	  return true;
	};
	var Path = function Path() {
	  return String;
	};

	/**
	 * Patch actions
	 */

	var Actions = exports.Actions = (0, _unionType2.default)({
	  setHTML: [String, String],
	  setAttribute: [String, Any, Any],
	  removeAttribute: [String, Any],
	  insertChild: [Any, Number, Path],
	  removeChild: [Number],
	  updateChild: [Number, Array],
	  updateChildren: [Array],
	  insertBefore: [Number],
	  replaceNode: [Any, Any, Path],
	  removeNode: [Any],
	  sameNode: [],
	  updateThunk: [Any, Any, Path]
	});

	/**
	 * Diff two attribute objects and return an array of actions that represent
	 * changes to transform the old object into the new one.
	 */

	function diffAttributes(previous, next) {
	  var setAttribute = Actions.setAttribute;
	  var removeAttribute = Actions.removeAttribute;

	  var changes = [];
	  var pAttrs = previous.attributes;
	  var nAttrs = next.attributes;

	  for (var name in nAttrs) {
	    if (nAttrs[name] !== pAttrs[name]) {
	      changes.push(setAttribute(name, nAttrs[name], pAttrs[name]));
	    }
	  }

	  for (var _name in pAttrs) {
	    if (!(_name in nAttrs)) {
	      changes.push(removeAttribute(_name, pAttrs[_name]));
	    }
	  }

	  return changes;
	}

	/**
	 * Compare two arrays of virtual nodes and return an array of actions
	 * to transform the left into the right. A starting path is supplied that use
	 * recursively to build up unique paths for each node.
	 */

	function diffChildren(previous, next, parentPath) {
	  var insertChild = Actions.insertChild;
	  var updateChild = Actions.updateChild;
	  var removeChild = Actions.removeChild;
	  var insertBefore = Actions.insertBefore;
	  var updateChildren = Actions.updateChildren;
	  var CREATE = diffActions.CREATE;
	  var UPDATE = diffActions.UPDATE;
	  var MOVE = diffActions.MOVE;
	  var REMOVE = diffActions.REMOVE;

	  var previousChildren = (0, _element.groupByKey)(previous.children);
	  var nextChildren = (0, _element.groupByKey)(next.children);
	  var key = function key(a) {
	    return a.key;
	  };

	  var changes = [];

	  var equal = function equal(prev, next) {

	    // No left node to compare it to
	    // TODO: This should just return a createNode action
	    if ((0, _isUndefined2.default)(prev)) {
	      throw new Error('Left node must not be null or undefined');
	    }

	    // Bail out and skip updating this whole sub-tree
	    if (prev === next) {
	      return true;
	    }

	    if ((prev.key && prev.key) == (next.key && next.key)) {
	      return true;
	    }

	    if ((prev.nativeNode && prev.nativeNode) == (next.nativeNode && next.nativeNode)) {
	      return true;
	    }

	    // Native
	    if ((0, _element.isNative)(prev) && (0, _element.isNative)(next)) {
	      if (prev.tagName == next.tagName) {
	        return true;
	      }
	    }

	    // Text
	    if ((0, _element.isText)(prev) && (0, _element.isText)(next)) {
	      if (prev.nodeValue == next.nodeValue) {
	        return true;
	      }
	    }
	    // html
	    if (prev.type == "html" && prev.type == "html") {
	      if (prev.nodeValue == next.nodeValue) {
	        return true;
	      }
	    }

	    // Thunk
	    if ((0, _element.isThunk)(prev) && (0, _element.isThunk)(next)) {
	      if ((0, _element.isSameThunk)(prev, next)) {
	        return true;
	      }
	    }
	  };

	  function effect(type, prev, next, pos) {
	    var nextPath = next ? (0, _element.createPath)(parentPath, next.key == null ? next.index : next.key) : null;
	    switch (type) {
	      case CREATE:
	        {
	          changes.push(insertChild(next.item, pos, nextPath));
	          break;
	        }
	      case UPDATE:
	        {
	          var actions = diffNode(prev.item, next.item, nextPath);
	          if (actions.length > 0) {
	            changes.push(updateChild(prev.index, actions));
	          }
	          break;
	        }
	      case MOVE:
	        {
	          var _actions = diffNode(prev.item, next.item, nextPath);
	          _actions.push(insertBefore(pos));
	          changes.push(updateChild(prev.index, _actions));
	          break;
	        }
	      case REMOVE:
	        {
	          changes.push(removeChild(prev.index));
	          break;
	        }
	    }
	  }

	  (0, diffActions.default)(previousChildren, nextChildren, effect, equal);

	  return updateChildren(changes);
	}

	/**
	 * Compare two virtual nodes and return an array of changes to turn the left
	 * into the right.
	 */

	function diffNode(prev, next, path) {
	  var replaceNode = Actions.replaceNode;
	  var setAttribute = Actions.setAttribute;
	  var setHTML = Actions.setHTML;
	  var sameNode = Actions.sameNode;
	  var removeNode = Actions.removeNode;
	  var updateThunk = Actions.updateThunk;

	  // No left node to compare it to
	  // TODO: This should just return a createNode action

	  if ((0, _isUndefined2.default)(prev)) {
	    throw new Error('Left node must not be null or undefined');
	  }

	  // Bail out and skip updating this whole sub-tree
	  if (prev === next) {
	    return [sameNode()];
	  }

	  // Remove
	  if (!(0, _isUndefined2.default)(prev) && (0, _isUndefined2.default)(next)) {
	    return [removeNode(prev)];
	  }

	  // Replace with empty
	  if (!(0, _isNull2.default)(prev) && (0, _isNull2.default)(next) || (0, _isNull2.default)(prev) && !(0, _isNull2.default)(next)) {
	    return [replaceNode(prev, next, path)];
	  }

	  // Replace
	  if (prev.type !== next.type) {
	    return [replaceNode(prev, next, path)];
	  }

	  // Native
	  if ((0, _element.isNative)(next)) {
	    if (prev.tagName !== next.tagName) {
	      return [replaceNode(prev, next, path)];
	    }
	    var changes = diffAttributes(prev, next);
	    changes.push(diffChildren(prev, next, path));
	    return changes;
	  }

	  // Text
	  if ((0, _element.isText)(next)) {
	    var _changes = [];
	    if (prev.nodeValue !== next.nodeValue) {
	      _changes.push(setAttribute('nodeValue', next.nodeValue, prev.nodeValue));
	    }
	    return _changes;
	  }
	  if (next.type == "html") {
	    var _changes2 = [];
	    if (prev.nodeValue !== next.nodeValue) {
	      _changes2.push(setHTML(next.nodeValue, prev.nodeValue));
	    }
	    return _changes2;
	  }

	  // Thunk
	  if ((0, _element.isThunk)(next)) {
	    var _changes3 = [];
	    if ((0, _element.isSameThunk)(prev, next)) {
	      _changes3.push(updateThunk(prev, next, path));
	    } else {
	      _changes3.push(replaceNode(prev, next, path));
	    }
	    return _changes3;
	  }

	  // Empty
	  if ((0, _element.isEmpty)(next)) {
	    return [];
	  }

	  return [];
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPath = exports.groupByKey = exports.isSameThunk = exports.isNative = exports.isEmpty = exports.isText = exports.isThunk = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.create = create;
	exports.createTextElement = createTextElement;
	exports.createEmptyElement = createEmptyElement;
	exports.createThunkElement = createThunkElement;

	var _isUndefined = __webpack_require__(6);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	var _reduceArray = __webpack_require__(7);

	var _reduceArray2 = _interopRequireDefault(_reduceArray);

	var _isString = __webpack_require__(8);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(9);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isNull = __webpack_require__(10);

	var _isNull2 = _interopRequireDefault(_isNull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * This function lets us create virtual nodes using a simple
	 * syntax. It is compatible with JSX transforms so you can use
	 * JSX to write nodes that will compile to this function.
	 *
	 * let node = element('div', { id: 'foo' }, [
	 *   element('a', { href: 'http://google.com' },
	 *     element('span', {}, 'Google'),
	 *     element('b', {}, 'Link')
	 *   )
	 * ])
	 */

	function create(type, attributes) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  if (!type) throw new TypeError('element() needs a type.');
	  attributes = attributes || {};
	  children = (0, _reduceArray2.default)(reduceChildren, [], children || []);

	  var key = (0, _isString2.default)(attributes.key) || (0, _isNumber2.default)(attributes.key) ? attributes.key : null;

	  delete attributes.key;

	  if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
	    return createThunkElement(type.render, key, attributes, children, type);
	  }

	  if (typeof type === 'function') {
	    return createThunkElement(type, key, attributes, children, type);
	  }

	  return {
	    type: 'native',
	    tagName: type,
	    attributes: attributes,
	    children: children,
	    key: key
	  };
	}

	/**
	 * Cleans up the array of child elements.
	 * - Flattens nested arrays
	 * - Converts raw strings and numbers into vnodes
	 * - Filters out undefined elements
	 */

	function reduceChildren(children, vnode) {
	  if ((0, _isString2.default)(vnode) || (0, _isNumber2.default)(vnode)) {
	    children.push(createTextElement(vnode));
	  } else if ((0, _isNull2.default)(vnode)) {
	    children.push(createEmptyElement());
	  } else if (Array.isArray(vnode)) {
	    children = [].concat(_toConsumableArray(children), _toConsumableArray(vnode.reduce(reduceChildren, [])));
	  } else if ((0, _isUndefined2.default)(vnode)) {
	    throw new Error('vnode can\'t be undefined. Did you mean to use null?');
	  } else {
	    children.push(vnode);
	  }
	  return children;
	}

	/**
	 * Text nodes are stored as objects to keep things simple
	 */

	function createTextElement(text) {
	  return {
	    type: 'text',
	    nodeValue: text
	  };
	}

	/**
	 * Text nodes are stored as objects to keep things simple
	 */

	function createEmptyElement() {
	  return {
	    type: 'empty'
	  };
	}

	/**
	 * Lazily-rendered virtual nodes
	 */

	function createThunkElement(fn, key, props, children, options) {
	  return {
	    type: 'thunk',
	    fn: fn,
	    children: children,
	    props: props,
	    options: options,
	    key: key
	  };
	}

	/**
	 * Functional type checking
	 */

	var isThunk = exports.isThunk = function isThunk(node) {
	  return node.type === 'thunk';
	};

	var isText = exports.isText = function isText(node) {
	  return node.type === 'text';
	};

	var isEmpty = exports.isEmpty = function isEmpty(node) {
	  return node.type === 'empty';
	};

	var isNative = exports.isNative = function isNative(node) {
	  return node.type === 'native';
	};

	var isSameThunk = exports.isSameThunk = function isSameThunk(left, right) {
	  return isThunk(left) && isThunk(right) && left.constructor === right.constructor;
	};

	/**
	 * Group an array of virtual elements by their key, using index as a fallback.
	 */

	var groupByKey = exports.groupByKey = function groupByKey(children) {
	  var iterator = function iterator(acc, child, i) {
	    if (!(0, _isUndefined2.default)(child) && child !== false) {
	      var key = (0, _isNull2.default)(child) ? i : child.key || i;
	      acc.push({
	        key: String(key),
	        item: child,
	        index: i
	      });
	    }
	    return acc;
	  };

	  return (0, _reduceArray2.default)(iterator, [], children);
	};

	/**
	 * Create a node path, eg. (23,5,2,4) => '23.5.2.4'
	 */

	var createPath = exports.createPath = function createPath() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  return args.join('.');
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose isUndefined
	 */

	module.exports = isUndefined['default'] = isUndefined;

	/**
	 * Check if undefined.
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */

	function isUndefined(value) {
	  return typeof value === 'undefined';
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Modules
	 */

	/**
	 * Expose reduceArray
	 */

	module.exports = reduceArray['default'] = reduceArray;

	/**
	 * reduceArray
	 */

	function reduceArray(cb, init, arr) {
	  var len = arr.length;
	  var acc = init;
	  if (!arr.length) return init;

	  for (var i = 0; i < len; i++) {
	    acc = cb(acc, arr[i], i, arr);
	  }

	  return acc;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose isString
	 */

	module.exports = isString['default'] = isString;

	/**
	 * Check if string
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	function isString(value) {
	  return typeof value === 'string';
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Modules
	 */

	/**
	 * Expose isNumber
	 */

	module.exports = isNumber['default'] = isNumber;

	/**
	 * isNumber
	 */

	function isNumber(value) {
	  return typeof value === 'number';
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose isNull
	 */

	module.exports = isNull['default'] = isNull;

	/**
	 * isNull
	 */

	function isNull(val) {
	  return val === null;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.REMOVE = exports.MOVE = exports.UPDATE = exports.CREATE = undefined;

	var _bitVector = __webpack_require__(12);

	/**
	 * Actions
	 */

	var CREATE = 0; /**
	                 * Imports
	                 */

	var UPDATE = 1;
	var MOVE = 2;
	var REMOVE = 3;

	/**
	 * dift
	 */

	function dift(prev, next, effect, equal) {
	    var pStartIdx = 0;
	    var nStartIdx = 0;
	    var pEndIdx = prev.length - 1;
	    var nEndIdx = next.length - 1;
	    var pStartItem = prev[pStartIdx];
	    var nStartItem = next[nStartIdx];

	    // List head is the same
	    while (pStartIdx <= pEndIdx && nStartIdx <= nEndIdx && equal(pStartItem, nStartItem)) {
	        effect(UPDATE, pStartItem, nStartItem, nStartIdx);
	        pStartItem = prev[++pStartIdx];
	        nStartItem = next[++nStartIdx];
	    }

	    // The above case is orders of magnitude more common than the others, so fast-path it
	    if (nStartIdx > nEndIdx && pStartIdx > pEndIdx) {
	        return;
	    }

	    var pEndItem = prev[pEndIdx];
	    var nEndItem = next[nEndIdx];
	    var movedFromFront = 0;

	    // Reversed
	    while (pStartIdx <= pEndIdx && nStartIdx <= nEndIdx && equal(pStartItem, nEndItem)) {
	        effect(MOVE, pStartItem, nEndItem, pEndIdx - movedFromFront + 1);
	        pStartItem = prev[++pStartIdx];
	        nEndItem = next[--nEndIdx];
	        ++movedFromFront;
	    }

	    // Reversed the other way (in case of e.g. reverse and append)
	    while (pEndIdx >= pStartIdx && nStartIdx <= nEndIdx && equal(nStartItem, pEndItem)) {
	        effect(MOVE, pEndItem, nStartItem, nStartIdx);
	        pEndItem = prev[--pEndIdx];
	        nStartItem = next[++nStartIdx];
	        --movedFromFront;
	    }

	    // List tail is the same
	    while (pEndIdx >= pStartIdx && nEndIdx >= nStartIdx && equal(pEndItem, nEndItem)) {
	        effect(UPDATE, pEndItem, nEndItem, nEndIdx);
	        pEndItem = prev[--pEndIdx];
	        nEndItem = next[--nEndIdx];
	    }

	    if (pStartIdx > pEndIdx) {
	        while (nStartIdx <= nEndIdx) {
	            effect(CREATE, null, nStartItem, nStartIdx);
	            nStartItem = next[++nStartIdx];
	        }

	        return;
	    }

	    if (nStartIdx > nEndIdx) {
	        while (pStartIdx <= pEndIdx) {
	            effect(REMOVE, pStartItem);
	            pStartItem = prev[++pStartIdx];
	        }

	        return;
	    }

	    var created = 0;
	    var pivotDest = null;
	    var pivotIdx = pStartIdx - movedFromFront;
	    var keepBase = pStartIdx;
	    var keep = (0, _bitVector.createBv)(pEndIdx - pStartIdx);

	    var prevMap = keyMap(prev, pStartIdx, pEndIdx + 1, key);

	    for (; nStartIdx <= nEndIdx; nStartItem = next[++nStartIdx]) {
	        var oldIdx = prevMap[key(nStartItem)];

	        if (isUndefined(oldIdx)) {
	            effect(CREATE, null, nStartItem, pivotIdx++);
	            ++created;
	        } else if (pStartIdx !== oldIdx) {
	            (0, _bitVector.setBit)(keep, oldIdx - keepBase);
	            effect(MOVE, prev[oldIdx], nStartItem, pivotIdx++);
	        } else {
	            pivotDest = nStartIdx;
	        }
	    }

	    if (pivotDest !== null) {
	        (0, _bitVector.setBit)(keep, 0);
	        effect(MOVE, prev[pStartIdx], next[pivotDest], pivotDest);
	    }

	    // If there are no creations, then you have to
	    // remove exactly max(prevLen - nextLen, 0) elements in this
	    // diff. You have to remove one more for each element
	    // that was created. This means once we have
	    // removed that many, we can stop.
	    var necessaryRemovals = prev.length - next.length + created;
	    for (var removals = 0; removals < necessaryRemovals; pStartItem = prev[++pStartIdx]) {
	        if (!(0, _bitVector.getBit)(keep, pStartIdx - keepBase)) {
	            effect(REMOVE, pStartItem);
	            ++removals;
	        }
	    }
	}

	function isUndefined(val) {
	    return typeof val === 'undefined';
	}

	function keyMap(items, start, end, key) {
	    var map = {};

	    for (var i = start; i < end; ++i) {
	        map[key(items[i])] = i;
	    }

	    return map;
	}

	/**
	 * Exports
	 */

	exports.default = dift;
	exports.CREATE = CREATE;
	exports.UPDATE = UPDATE;
	exports.MOVE = MOVE;
	exports.REMOVE = REMOVE;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Use typed arrays if we can
	 */

	var FastArray = typeof Uint32Array === 'undefined' ? Array : Uint32Array;

	/**
	 * Bit vector
	 */

	function createBv(sizeInBits) {
	  return new FastArray(Math.ceil(sizeInBits / 32));
	}

	function setBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;

	  v[pos] |= 1 << r;
	}

	function clearBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;

	  v[pos] &= ~(1 << r);
	}

	function getBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;

	  return !!(v[pos] & 1 << r);
	}

	/**
	 * Exports
	 */

	exports.createBv = createBv;
	exports.setBit = setBit;
	exports.clearBit = clearBit;
	exports.getBit = getBit;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var curryN = __webpack_require__(14);

	function isString(s) {
	  return typeof s === 'string';
	}
	function isNumber(n) {
	  return typeof n === 'number';
	}
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}
	function isFunction(f) {
	  return typeof f === 'function';
	}
	var isArray = Array.isArray || function (a) {
	  return 'length' in a;
	};

	var mapConstrToFn = curryN(2, function (group, constr) {
	  return constr === String ? isString : constr === Number ? isNumber : constr === Object ? isObject : constr === Array ? isArray : constr === Function ? isFunction : constr === undefined ? group : constr;
	});

	function Constructor(group, name, validators) {
	  validators = validators.map(mapConstrToFn(group));
	  var constructor = curryN(validators.length, function () {
	    var val = [],
	        v,
	        validator;
	    for (var i = 0; i < arguments.length; ++i) {
	      v = arguments[i];
	      validator = validators[i];
	      if (typeof validator === 'function' && validator(v) || v !== undefined && v !== null && v.of === validator) {
	        val[i] = arguments[i];
	      } else {
	        throw new TypeError('wrong value ' + v + ' passed to location ' + i + ' in ' + name);
	      }
	    }
	    val.of = group;
	    val.name = name;
	    return val;
	  });
	  return constructor;
	}

	function rawCase(type, cases, action, arg) {
	  if (type !== action.of) throw new TypeError('wrong type passed to case');
	  var name = action.name in cases ? action.name : '_' in cases ? '_' : undefined;
	  if (name === undefined) {
	    throw new Error('unhandled value passed to case');
	  } else {
	    return cases[name].apply(undefined, arg !== undefined ? action.concat([arg]) : action);
	  }
	}

	var typeCase = curryN(3, rawCase);
	var caseOn = curryN(4, rawCase);

	function Type(desc) {
	  var obj = {};
	  for (var key in desc) {
	    obj[key] = Constructor(obj, key, desc[key]);
	  }
	  obj.case = typeCase(obj);
	  obj.caseOn = caseOn(obj);
	  return obj;
	}

	module.exports = Type;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(15);
	var _curryN = __webpack_require__(17);
	var arity = __webpack_require__(18);

	/**
	 * Returns a curried equivalent of the provided function, with the
	 * specified arity. The curried function has two unusual capabilities.
	 * First, its arguments needn't be provided one at a time. If `g` is
	 * `R.curryN(3, f)`, the following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`,
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFourNumbers = function() {
	 *        return R.sum([].slice.call(arguments, 0, 4));
	 *      };
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  return arity(length, _curryN(length, [], fn));
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(16);

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    var n = arguments.length;
	    if (n === 0) {
	      return f2;
	    } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 1) {
	      return _curry1(function (b) {
	        return fn(a, b);
	      });
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
	      return _curry1(function (a) {
	        return fn(a, b);
	      });
	    } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
	      return _curry1(function (b) {
	        return fn(a, b);
	      });
	    } else {
	      return fn(a, b);
	    }
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0) {
	      return f1;
	    } else if (a != null && a['@@functional/placeholder'] === true) {
	      return f1;
	    } else {
	      return fn(a);
	    }
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arity = __webpack_require__(18);

	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @return {array} An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function () {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length && (received[combinedIdx] == null || received[combinedIdx]['@@functional/placeholder'] !== true || argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (result == null || result['@@functional/placeholder'] !== true) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : arity(left, _curryN(length, combined, fn));
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(15);

	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
	 * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
	 * functions produced by `arity` will pass all provided arguments to the wrapped function.
	 *
	 * @func
	 * @memberOf R
	 * @sig (Number, (* -> *)) -> (* -> *)
	 * @category Function
	 * @param {Number} n The desired arity of the returned function.
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is
	 *         guaranteed to be of arity `n`.
	 * @deprecated since v0.15.0
	 * @example
	 *
	 *      var takesTwoArgs = function(a, b) {
	 *        return [a, b];
	 *      };
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.arity(1, takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // All arguments are passed through to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, 2]
	 */
	module.exports = _curry2(function (n, fn) {
	  // jshint unused:vars
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.apply(this, arguments);
	      };
	    case 1:
	      return function (a0) {
	        return fn.apply(this, arguments);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.apply(this, arguments);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.apply(this, arguments);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.apply(this, arguments);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.apply(this, arguments);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.apply(this, arguments);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.apply(this, arguments);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.apply(this, arguments);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.apply(this, arguments);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.apply(this, arguments);
	      };
	    default:
	      throw new Error('First argument to arity must be a non-negative integer no greater than ten');
	  }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.render = undefined;

	var _renderString = __webpack_require__(20);

	var render = _renderString.renderString;

	exports.render = render;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderString = renderString;

	var _isValidAttr = __webpack_require__(21);

	var _isValidAttr2 = _interopRequireDefault(_isValidAttr);

	var _isNull = __webpack_require__(10);

	var _isNull2 = _interopRequireDefault(_isNull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Turn an object of key/value pairs into a HTML attribute string. This
	 * function is responsible for what attributes are allowed to be rendered and
	 * should handle any other special cases specific to deku.
	 */

	function attributesToString(attributes) {
	  var str = '';
	  for (var name in attributes) {
	    var value = attributes[name];
	    if (name === 'innerHTML') continue;
	    if ((0, _isValidAttr2.default)(value)) str += ' ' + name + '="' + attributes[name] + '"';
	  }
	  return str;
	}

	/**
	 * Render a virtual element to a string. You can pass in an option state context
	 * object that will be given to all components.
	 */

	function renderString(vnode, context) {
	  var path = arguments.length <= 2 || arguments[2] === undefined ? '0' : arguments[2];

	  switch (vnode.type) {
	    case 'text':
	      return renderTextNode(vnode);
	    case 'empty':
	      return renderEmptyNode();
	    case 'thunk':
	      return renderThunk(vnode, path, context);
	    case 'native':
	      return renderHTML(vnode, path, context);
	  }
	}

	function renderTextNode(vnode) {
	  return vnode.nodeValue;
	}

	function renderEmptyNode() {
	  return '<noscript></noscript>';
	}

	function renderThunk(vnode, path, context) {
	  var props = vnode.props;
	  var children = vnode.children;

	  var output = vnode.fn({ children: children, props: props, path: path, context: context });
	  return renderString(output, context, path);
	}

	function renderHTML(vnode, path, context) {
	  var attributes = vnode.attributes;
	  var tagName = vnode.tagName;
	  var children = vnode.children;

	  var innerHTML = attributes.innerHTML;
	  var str = '<' + tagName + attributesToString(attributes) + '>';

	  if (innerHTML) {
	    str += innerHTML;
	  } else {
	    str += children.map(function (child, i) {
	      return renderString(child, context, path + '.' + ((0, _isNull2.default)(child.key) ? i : child.key));
	    }).join('');
	  }

	  str += '</' + tagName + '>';
	  return str;
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Expose isValidAttr
	 */

	module.exports = isValidAttr;

	/**
	 * isValidAttr
	 */

	function isValidAttr(val) {
	  switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
	    case 'string':
	    case 'number':
	      return true;
	    case 'boolean':
	      return val;
	    default:
	      return false;
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateElement = exports.createElement = undefined;

	var _create = __webpack_require__(23);

	var _update = __webpack_require__(35);

	exports.createElement = _create.createElement;
	exports.updateElement = _update.updateElement;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createElement = createElement;

	var _createElement = __webpack_require__(24);

	var _createElement2 = _interopRequireDefault(_createElement);

	var _element = __webpack_require__(5);

	var _setAttribute = __webpack_require__(25);

	var _isUndefined = __webpack_require__(6);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	var _isString = __webpack_require__(8);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(9);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isNull = __webpack_require__(10);

	var _isNull2 = _interopRequireDefault(_isNull);

	var _create = __webpack_require__(34);

	var create = _interopRequireWildcard(_create);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = {};
	function createElement(vnode, path, dispatch, context) {

	  switch (vnode.type) {
	    case 'text':
	      return create.createElement(vnode, path, dispatch, context);
	    case 'html':
	      return createFragment(vnode.nodeValue);
	    case 'empty':
	      return create.createElement(vnode, path, dispatch, context);
	    case 'thunk':
	      return createThunk(vnode, path, dispatch, context);
	    case 'native':
	      return createHTMLElement(vnode, path, dispatch, context);
	  }
	}

	function createFragment(html) {
	  var div = document.createElement("div");
	  div.innerHTML = html;
	  var fragment = document.createDocumentFragment();
	  var children = [];
	  for (var i = 0; i < div.childNodes.length; i++) {
	    children[i] = div.childNodes[i];
	  }

	  for (var i = 0; i < children.length; i++) {
	    fragment.appendChild(children[i]);
	  }

	  return fragment;
	}

	function getCachedElement(type) {
	  var cached = cache[type];
	  if ((0, _isUndefined2.default)(cached)) {
	    cached = cache[type] = (0, _createElement2.default)(type);
	  }
	  return cached.cloneNode(false);
	}

	function createThunk(vnode, path, dispatch, context) {
	  if (vnode.type == "thunk") {
	    if (vnode.options.rootNode) {
	      return vnode.options.rootNode;
	    }
	  }

	  if (vnode.options.componentWillMount) {
	    vnode.options.componentWillMount();
	  }

	  var props = vnode.props;
	  var children = vnode.children;
	  var onCreate = vnode.options.onCreate;

	  var model = {
	    children: children,
	    props: props,
	    path: path,
	    dispatch: dispatch,
	    context: context
	  };
	  var output = vnode.fn(model);
	  var childPath = (0, _element.createPath)(path, output.key || '0');
	  var DOMElement = createElement(output, childPath, dispatch, context);
	  var id = vnode.attributes.id || vnode.attributes.key;
	  if (id) {
	    (0, _setAttribute.setAttribute)(DOMElement, "id", id);
	  }
	  if (onCreate) dispatch(onCreate(model));

	  //++
	  if (output.type == "thunk") {
	    throw new Error("组件的跟元素必须是DOM元素");
	  }
	  //保留输出，setState，进行对比
	  vnode.options.vnode = vnode.options.rootVnode = output;
	  vnode.options.node = vnode.options.nativeNode = vnode.options.rootNode = DOMElement;
	  vnode.options.output = output;
	  vnode.nativeNode = DOMElement;
	  DOMElement.vnode = vnode.options;
	  DOMElement.rootVnode = vnode.options;
	  DOMElement.vnodeInstance = vnode;

	  return DOMElement;
	}

	function createHTMLElement(vnode, path, dispatch, context) {
	  var tagName = vnode.tagName;
	  var attributes = vnode.attributes;
	  var children = vnode.children;

	  var DOMElement = getCachedElement(tagName);

	  for (var name in attributes) {
	    (0, _setAttribute.setAttribute)(DOMElement, name, attributes[name]);
	  }

	  children.forEach(function (node, index) {
	    if ((0, _isNull2.default)(node) || (0, _isUndefined2.default)(node)) return;
	    var childPath = (0, _element.createPath)(path, node.key || index);
	    var child = createElement(node, childPath, dispatch, context);
	    DOMElement.appendChild(child);
	  });

	  DOMElement.vnode = vnode;

	  vnode.node = vnode.nativeNode = vnode.rootNode = DOMElement;

	  return DOMElement;
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (type) {
	  return document.createElement(type);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeAttribute = removeAttribute;
	exports.setAttribute = setAttribute;

	var _setAttribute = __webpack_require__(26);

	var _setAttribute2 = _interopRequireDefault(_setAttribute);

	var _isValidAttr = __webpack_require__(21);

	var _isValidAttr2 = _interopRequireDefault(_isValidAttr);

	var _isFunction = __webpack_require__(29);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _indexOf = __webpack_require__(30);

	var _indexOf2 = _interopRequireDefault(_indexOf);

	var _setify = __webpack_require__(31);

	var _setify2 = _interopRequireDefault(_setify);

	var _events = __webpack_require__(33);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function removeAttribute(DOMElement, name, previousValue) {
	  var eventType = _events2.default[name];
	  if (eventType && (0, _isFunction2.default)(previousValue)) {
	    DOMElement.removeEventListener(eventType, previousValue);
	    return;
	  }
	  switch (name) {
	    case 'checked':
	    case 'disabled':
	    case 'selected':
	      DOMElement[name] = false;
	      break;
	    case 'innerHTML':
	    case 'nodeValue':
	    case 'value':
	      DOMElement[name] = '';
	      break;
	    default:
	      DOMElement.removeAttribute(name);
	      break;
	  }
	}

	function setAttribute(DOMElement, name, value, previousValue) {
	  var eventType = _events2.default[name];
	  if (value === previousValue) {
	    return;
	  }
	  if (eventType) {
	    if ((0, _isFunction2.default)(previousValue)) {
	      DOMElement.removeEventListener(eventType, previousValue);
	    }
	    DOMElement.addEventListener(eventType, value);
	    return;
	  }
	  if (!(0, _isValidAttr2.default)(value)) {
	    removeAttribute(DOMElement, name, previousValue);
	    return;
	  }
	  switch (name) {
	    case 'checked':
	    case 'disabled':
	    case 'innerHTML':
	    case 'nodeValue':
	      DOMElement[name] = value;
	      break;
	    case 'selected':
	      DOMElement.selected = value;
	      // Fix for IE/Safari where select is not correctly selected on change
	      if (DOMElement.tagName === 'OPTION' && DOMElement.parentNode) {
	        var select = DOMElement.parentNode;
	        select.selectedIndex = (0, _indexOf2.default)(select.options, DOMElement);
	      }
	      break;
	    case 'value':
	      (0, _setify2.default)(DOMElement, value);
	      break;
	    default:
	      (0, _setAttribute2.default)(DOMElement, name, value);
	      break;
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Modules
	 */

	var svgAttributeNamespace = __webpack_require__(27);

	/**
	 * Expose setAttribute
	 */

	module.exports = setAttribute['default'] = setAttribute;

	/**
	 * setAttribute
	 */

	function setAttribute(node, name, value) {
	  var ns = svgAttributeNamespace(name);
	  return ns ? node.setAttributeNS(ns, name, value) : node.setAttribute(name, value);
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Modules
	 */

	var namespaces = __webpack_require__(28);

	/**
	 * Exports
	 */

	module.exports = svgAttributeNamespace['default'] = svgAttributeNamespace;

	/**
	 * Get namespace of svg attribute
	 *
	 * @param {String} attributeName
	 * @return {String} namespace
	 */

	function svgAttributeNamespace(attributeName) {
	  // if no prefix separator in attributeName, then no namespace
	  if (attributeName.indexOf(':') === -1) return null;

	  // get prefix from attributeName
	  var prefix = attributeName.split(':', 1)[0];

	  // if prefix in supported prefixes
	  if (namespaces.hasOwnProperty(prefix)) {
	    // then namespace of prefix
	    return namespaces[prefix];
	  } else {
	    // else unsupported prefix
	    throw new Error('svg-attribute-namespace: prefix "' + prefix + '" is not supported by SVG.');
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	/*
	 * Supported SVG attribute namespaces by prefix.
	 *
	 * References:
	 * - http://www.w3.org/TR/SVGTiny12/attributeTable.html
	 * - http://www.w3.org/TR/SVG/attindex.html
	 * - http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS
	 */

	var svgAttributeNamespaces = {
	  ev: 'http://www.w3.org/2001/xml-events',
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace',
	  xmlns: 'http://www.w3.org/2000/xmlns/'
	};

	/**
	 * Expose svgAttributeNamespaces
	 */

	module.exports = svgAttributeNamespaces;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Modules
	 */

	/**
	 * Expose isFunction
	 */

	module.exports = isFunction['default'] = isFunction;

	/**
	 * isFunction
	 */

	function isFunction(value) {
	  return typeof value === 'function';
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	/*!
	 * index-of <https://github.com/jonschlinkert/index-of>
	 *
	 * Copyright (c) 2014-2015 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */

	'use strict';

	module.exports = function indexOf(arr, ele, start) {
	  start = start || 0;
	  var idx = -1;

	  if (arr == null) return idx;
	  var len = arr.length;
	  var i = start < 0 ? len + start : start;

	  if (i >= arr.length) {
	    return -1;
	  }

	  while (i < len) {
	    if (arr[i] === ele) {
	      return i;
	    }
	    i++;
	  }

	  return -1;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var naturalSelection = __webpack_require__(32);

	module.exports = function (element, value) {
	    var canSet = naturalSelection(element) && element === document.activeElement;

	    if (canSet) {
	        var start = element.selectionStart,
	            end = element.selectionEnd;

	        element.value = value;
	        element.setSelectionRange(start, end);
	    } else {
	        element.value = value;
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	var supportedTypes = ['text', 'search', 'tel', 'url', 'password'];

	module.exports = function (element) {
	    return !!(element.setSelectionRange && ~supportedTypes.indexOf(element.type));
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Special attributes that map to DOM events.
	 */

	exports.default = {
	  onAbort: 'abort',
	  onAnimationStart: 'animationstart',
	  onAnimationIteration: 'animationiteration',
	  onAnimationEnd: 'animationend',
	  onBlur: 'blur',
	  onCanPlay: 'canplay',
	  onCanPlayThrough: 'canplaythrough',
	  onChange: 'change',
	  onClick: 'click',
	  onContextMenu: 'contextmenu',
	  onCopy: 'copy',
	  onCut: 'cut',
	  onDoubleClick: 'dblclick',
	  onDrag: 'drag',
	  onDragEnd: 'dragend',
	  onDragEnter: 'dragenter',
	  onDragExit: 'dragexit',
	  onDragLeave: 'dragleave',
	  onDragOver: 'dragover',
	  onDragStart: 'dragstart',
	  onDrop: 'drop',
	  onDurationChange: 'durationchange',
	  onEmptied: 'emptied',
	  onEncrypted: 'encrypted',
	  onEnded: 'ended',
	  onError: 'error',
	  onFocus: 'focus',
	  onInput: 'input',
	  onInvalid: 'invalid',
	  onKeyDown: 'keydown',
	  onKeyPress: 'keypress',
	  onKeyUp: 'keyup',
	  onLoad: 'load',
	  onLoadedData: 'loadeddata',
	  onLoadedMetadata: 'loadedmetadata',
	  onLoadStart: 'loadstart',
	  onPause: 'pause',
	  onPlay: 'play',
	  onPlaying: 'playing',
	  onProgress: 'progress',
	  onMouseDown: 'mousedown',
	  onMouseEnter: 'mouseenter',
	  onMouseLeave: 'mouseleave',
	  onMouseMove: 'mousemove',
	  onMouseOut: 'mouseout',
	  onMouseOver: 'mouseover',
	  onMouseUp: 'mouseup',
	  onPaste: 'paste',
	  onRateChange: 'ratechange',
	  onReset: 'reset',
	  onScroll: 'scroll',
	  onSeeked: 'seeked',
	  onSeeking: 'seeking',
	  onSubmit: 'submit',
	  onStalled: 'stalled',
	  onSuspend: 'suspend',
	  onTimeUpdate: 'timeupdate',
	  onTransitionEnd: 'transitionend',
	  onTouchCancel: 'touchcancel',
	  onTouchEnd: 'touchend',
	  onTouchMove: 'touchmove',
	  onTouchStart: 'touchstart',
	  onVolumeChange: 'volumechange',
	  onWaiting: 'waiting',
	  onWheel: 'wheel'
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createElement = createElement;

	var _createElement = __webpack_require__(24);

	var _createElement2 = _interopRequireDefault(_createElement);

	var _element = __webpack_require__(5);

	var _setAttribute = __webpack_require__(25);

	var _isUndefined = __webpack_require__(6);

	var _isUndefined2 = _interopRequireDefault(_isUndefined);

	var _isString = __webpack_require__(8);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(9);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isNull = __webpack_require__(10);

	var _isNull2 = _interopRequireDefault(_isNull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = {};

	/**
	 * Create a real DOM element from a virtual element, recursively looping down.
	 * When it finds custom elements it will render them, cache them, and keep going,
	 * so they are treated like any other native element.
	 */

	function createElement(vnode, path, dispatch, context) {
	  switch (vnode.type) {
	    case 'text':
	      return createTextNode(vnode.nodeValue);
	    case 'empty':
	      return getCachedElement('noscript');
	    case 'thunk':
	      return createThunk(vnode, path, dispatch, context);
	    case 'native':
	      return createHTMLElement(vnode, path, dispatch, context);
	  }
	}

	function getCachedElement(type) {
	  var cached = cache[type];
	  if ((0, _isUndefined2.default)(cached)) {
	    cached = cache[type] = (0, _createElement2.default)(type);
	  }
	  return cached.cloneNode(false);
	}

	function createTextNode(text) {
	  var value = (0, _isString2.default)(text) || (0, _isNumber2.default)(text) ? text : '';
	  return document.createTextNode(value);
	}

	function createFragment(html) {
	  var div = document.createElement("div");
	  div.innerHTML = html;
	  var fragment = document.createDocumentFragment();
	  var children = div.childNodes;
	  for (var i = 0; i < children.length; i++) {
	    fragment.appendChild(children[i]);
	  }

	  return fragment;
	}

	function createThunk(vnode, path, dispatch, context) {
	  var props = vnode.props;
	  var children = vnode.children;
	  var onCreate = vnode.options.onCreate;

	  var model = {
	    children: children,
	    props: props,
	    path: path,
	    dispatch: dispatch,
	    context: context
	  };
	  var output = vnode.fn(model);
	  var childPath = (0, _element.createPath)(path, output.key || '0');
	  var DOMElement = createElement(output, childPath, dispatch, context);
	  if (onCreate) dispatch(onCreate(model));
	  vnode.state = {
	    vnode: output,
	    model: model
	  };
	  return DOMElement;
	}

	function createHTMLElement(vnode, path, dispatch, context) {
	  var tagName = vnode.tagName;
	  var attributes = vnode.attributes;
	  var children = vnode.children;

	  var DOMElement = getCachedElement(tagName);

	  for (var name in attributes) {
	    (0, _setAttribute.setAttribute)(DOMElement, name, attributes[name]);
	  }

	  children.forEach(function (node, index) {
	    if ((0, _isNull2.default)(node) || (0, _isUndefined2.default)(node)) return;
	    var childPath = (0, _element.createPath)(path, node.key || index);
	    var child = createElement(node, childPath, dispatch, context);
	    DOMElement.appendChild(child);
	  });

	  return DOMElement;
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.insertAtIndex = undefined;
	exports.updateElement = updateElement;

	var _setAttribute2 = __webpack_require__(25);

	var _element = __webpack_require__(5);

	var _diff = __webpack_require__(4);

	var _reduceArray = __webpack_require__(7);

	var _reduceArray2 = _interopRequireDefault(_reduceArray);

	var _create = __webpack_require__(23);

	var _toArray = __webpack_require__(36);

	var _toArray2 = _interopRequireDefault(_toArray);

	var _foreach = __webpack_require__(37);

	var _foreach2 = _interopRequireDefault(_foreach);

	var _noop = __webpack_require__(42);

	var _noop2 = _interopRequireDefault(_noop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Modify a DOM element given an array of actions.
	 */

	function updateElement(dispatch, context) {
	  return function (DOMElement, action) {
	    _diff.Actions.case({
	      sameNode: _noop2.default,
	      setAttribute: function setAttribute(name, value, previousValue) {
	        (0, _setAttribute2.setAttribute)(DOMElement, name, value, previousValue);
	      },
	      setHTML: function setHTML(html) {
	        var div = document.createElement("div");
	        div.innerHTML = html;
	        var children = [];
	        for (var i = 0; i < div.childNodes.length; i++) {
	          children[i] = div.childNodes[i];
	        }
	        for (var i = 0; i < children.length; i++) {
	          DOMElement.appendChild(children[i]);
	        }
	      },

	      removeAttribute: function removeAttribute(name, previousValue) {
	        (0, _setAttribute2.removeAttribute)(DOMElement, name, previousValue);
	      },
	      insertBefore: function insertBefore(index) {
	        insertAtIndex(DOMElement.parentNode, index, DOMElement);
	      },
	      updateChildren: function updateChildren(changes) {
	        _updateChildren(DOMElement, changes, dispatch, context);
	      },
	      updateThunk: function updateThunk(prev, next, path) {
	        DOMElement = _updateThunk(DOMElement, prev, next, path, dispatch, context);
	      },
	      replaceNode: function replaceNode(prev, next, path) {

	        var parentEl = DOMElement.parentNode;
	        var placeHolder = document.createElement("div");
	        if (parentEl) {
	          parentEl.replaceChild(placeHolder, DOMElement);
	        }

	        var newEl = (0, _create.createElement)(next, path, dispatch, context);

	        if (parentEl) {
	          parentEl.replaceChild(newEl, placeHolder);
	        }

	        DOMElement = newEl;
	        removeThunks(prev, dispatch);
	      },
	      removeNode: function removeNode(prev) {
	        removeThunks(prev);
	        DOMElement.parentNode.removeChild(DOMElement);
	        DOMElement = null;
	      }
	    }, action);

	    return DOMElement;
	  };
	}

	/**
	 * Update all the children of a DOMElement using an array of actions
	 */

	function _updateChildren(DOMElement, changes, dispatch, context) {
	  // Create a clone of the children so we can reference them later
	  // using their original position even if they move around
	  var childNodes = (0, _toArray2.default)(DOMElement.childNodes);
	  changes.forEach(function (change) {
	    _diff.Actions.case({
	      insertChild: function insertChild(vnode, index, path) {
	        insertAtIndex(DOMElement, index, (0, _create.createElement)(vnode, path, dispatch, context));
	      },
	      removeChild: function removeChild(index) {
	        if (childNodes[index] && childNodes[index].parentNode == DOMElement) DOMElement.removeChild(childNodes[index]);
	      },
	      updateChild: function updateChild(index, actions) {
	        var _update = updateElement(dispatch, context);
	        actions.forEach(function (action) {
	          return _update(childNodes[index], action);
	        });
	      }
	    }, change);
	  });
	}

	/**
	 * Update a thunk and only re-render the subtree if needed.
	 */

	function _updateThunk(DOMElement, prev, next, path, dispatch, context) {
	  var props = next.props;
	  var children = next.children;
	  var onUpdate = next.options.onUpdate;

	  var prevNode = prev.rootVnode;
	  var model = {
	    children: children,
	    props: props,
	    path: path,
	    dispatch: dispatch,
	    context: context
	  };
	  var nextNode = next.fn(model);
	  var changes = (0, _diff.diffNode)(prevNode, nextNode, (0, _element.createPath)(path, '0'));
	  DOMElement = (0, _reduceArray2.default)(updateElement(dispatch, context), DOMElement, changes);
	  if (onUpdate) dispatch(onUpdate(model));
	  next.rootVnode = nextNode;
	  next.nativeNode = DOMElement;
	  return DOMElement;
	}

	/**
	 * Recursively remove all thunks
	 */

	function removeThunks(vnode, dispatch) {
	  while (vnode && (0, _element.isThunk)(vnode)) {
	    var onRemove = vnode.options.onRemove;
	    var model = vnode.state.model;

	    if (onRemove) dispatch(onRemove(model));
	    vnode = vnode.state.vnode;
	  }
	  if (vnode && vnode.props.children) {
	    (0, _foreach2.default)(vnode.props.children, function (child) {
	      return removeThunks(child, dispatch);
	    });
	  }
	}

	/**
	 * Slightly nicer insertBefore
	 */

	var insertAtIndex = exports.insertAtIndex = function insertAtIndex(parent, index, el) {
	  var target = parent.childNodes[index];
	  if (target) {
	    parent.insertBefore(el, target);
	  } else {
	    parent.appendChild(el);
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose toArray
	 */

	module.exports = toArray['default'] = toArray;

	/**
	 * Convert to an array from array like
	 * @param  {ArrayLike} arr
	 * @return {Array}
	 */

	function toArray(arr) {
	  var len = arr.length;
	  var idx = -1;

	  var array = new Array(len);
	  while (++idx < len) {
	    array[idx] = arr[idx];
	  }
	  return array;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Modules
	 */

	var isObject = __webpack_require__(38);
	var isArray = __webpack_require__(39);
	var forEachObj = __webpack_require__(40);
	var forEachArr = __webpack_require__(41);

	/**
	 * Expose foreach
	 */

	module.exports = forEach['default'] = forEach;

	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */

	function forEach(fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a);
	  if (isObject(a)) return forEachObj.call(this, fn, a);
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Modules
	 */

	var isFunction = __webpack_require__(29);

	/**
	 * Expose isObject
	 */

	module.exports = isObject;

	/**
	 * Constants
	 */

	var objString = toString(Object);

	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(val) {
	  return !!val && (val.constructor === Object || isObjectString(val.constructor));
	}

	function isObjectString(val) {
	  return !!val && isFunction(val) && toString(val) === objString;
	}

	function toString(val) {
	  return Function.prototype.toString.call(val);
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose isArray
	 */

	module.exports = isArray['default'] = isArray;

	/**
	 * isArray
	 */

	function isArray(val) {
	  return Array.isArray(val);
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Expose forEach
	 */

	module.exports = forEach;

	/**
	 * forEach
	 */

	function forEach(fn, obj) {
	  if (!obj) return;

	  var keys = Object.keys(obj);

	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i];
	    fn.call(this, obj[key], key, i);
	  }
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Expose forEach
	 */

	module.exports = forEach['default'] = forEach;

	/**
	 * forEach
	 */

	function forEach(fn, arr) {
	  if (!arr) return;

	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i);
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Exports
	 */

	module.exports = noop['default'] = noop;

	/**
	 * Noop
	 */

	function noop() {}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createApp = createApp;

	var _dom = __webpack_require__(22);

	var dom = _interopRequireWildcard(_dom);

	var _diff = __webpack_require__(4);

	var _emptyElement = __webpack_require__(44);

	var _emptyElement2 = _interopRequireDefault(_emptyElement);

	var _noop = __webpack_require__(42);

	var _noop2 = _interopRequireDefault(_noop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Create a DOM renderer using a container element. Everything will be rendered
	 * inside of that container. Returns a function that accepts new state that can
	 * replace what is currently rendered.
	 */

	function createApp(container) {
	  var handler = arguments.length <= 1 || arguments[1] === undefined ? _noop2.default : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var oldVnode = null;
	  var node = null;
	  var rootId = options.id || '0';
	  var dispatch = function dispatch(effect) {
	    return effect && handler(effect);
	  };

	  if (container) {
	    (0, _emptyElement2.default)(container);
	  }

	  var update = function update(newVnode, context) {
	    var changes = (0, _diff.diffNode)(oldVnode, newVnode, rootId);
	    node = changes.reduce(dom.updateElement(dispatch, context), node);
	    oldVnode = newVnode;
	    return node;
	  };

	  var create = function create(vnode, context) {
	    node = dom.createElement(vnode, rootId, dispatch, context);
	    if (container) container.appendChild(node);
	    oldVnode = vnode;
	    return node;
	  };

	  return function (vnode) {
	    var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    return node !== null ? update(vnode, context) : create(vnode, context);
	  };
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Expose emptyElement
	 */

	module.exports = emptyElement;

	/**
	 * emptyElement
	 */

	function emptyElement(el) {
	  var node;

	  while (node = el.firstChild) {
	    el.removeChild(node);
	  }

	  return el;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	var utils = __webpack_require__(46);
	var EE = __webpack_require__(47);
	var element = __webpack_require__(49);

	var StyleSheet = __webpack_require__(53);
	var merge = __webpack_require__(51);
	var currentOwner = __webpack_require__(50);
	var registry = {};
	var SophieBaseClass = __webpack_require__(61);

	function register(inName, inOptions, ExtendClass) {

	    if (!inOptions) {
	        inOptions = inName;
	        inName = "undefined";
	    }

	    var definition = inOptions || {};
	    definition.name = inName || definition.name;

	    if (!inName) {
	        throw new Error('Name argument must not be empty');
	    }

	    resolveTagName(definition);
	    resolveMixin(definition);

	    ExtendClass = ExtendClass || SophieBaseClass;

	    //只能扩展Sophie类
	    if (ExtendClass == SophieBaseClass || ExtendClass.prototype instanceof SophieBaseClass) {
	        var SohpieConstructor = function SohpieConstructor(props) {
	            ExtendClass.apply(this, [props]);
	        };
	        SohpieConstructor.prototype = Object.create(ExtendClass.prototype);
	        SohpieConstructor.prototype.constructor = SohpieConstructor;
	    } else {
	        var SohpieConstructor = function SohpieConstructor(props) {
	            SophieBaseClass.apply(this, [props]);
	        };
	        SohpieConstructor.prototype = Object.create(SophieBaseClass.prototype);
	        SohpieConstructor.prototype.constructor = SohpieConstructor;
	    }

	    var oldRender = definition.render;
	    var oldComponentDidMount = definition.componentDidMount;
	    var oldComponentWillMount = definition.componentWillMount;
	    var componentDidInsertChild = definition.componentDidInsertChild;

	    var getDefaultChildren = definition.getDefaultChildren;
	    var componentDidSetChildren = definition.componentDidSetChildren;

	    if (getDefaultChildren) {
	        definition.getDefaultChildren = function () {
	            var result = getDefaultChildren.apply(this, arguments);
	            for (var i = 0; i < result.length; i++) {
	                result[i].parent = this;
	            }
	            return result;
	        };
	    }

	    //for decleare
	    // SohpieConstructor.prototype.getDefaultProps = function(){}
	    // SohpieConstructor.prototype.getInitialState = function(){}


	    if (oldRender) {
	        definition.render = function () {
	            currentOwner.target = this;
	            var result = oldRender.apply(this, arguments);
	            currentOwner.target = undefined;
	            return result;
	        };
	    }

	    if (oldComponentDidMount) {
	        definition.componentDidMount = function () {
	            oldComponentDidMount && oldComponentDidMount.apply(this, arguments);
	            EE.trigger("componentDidMount", [this]);
	        };
	    }

	    if (componentDidInsertChild) {
	        definition.componentDidInserted = function () {
	            componentDidInsertChild && componentDidInsertChild.apply(this, arguments);
	            EE.trigger("componentDidInsertChild", [this]);
	        };
	    }

	    if (componentDidSetChildren) {
	        definition.componentDidSetChildren = function () {
	            componentDidSetChildren && componentDidSetChildren.apply(this, arguments);
	            EE.trigger("componentDidSetChildren", [this]);
	        };
	    }

	    if (oldComponentWillMount) {
	        definition.componentWillMount = function () {
	            oldComponentWillMount && oldComponentWillMount.apply(this, arguments);
	            EE.trigger("oldComponentWillMount", [this]);
	        };
	    }

	    merge(SohpieConstructor.prototype, definition);
	    SohpieConstructor.prototype.constructor = SohpieConstructor;

	    SohpieConstructor.createStyleSheet = function (styles, mediaQuery) {
	        StyleSheet.create(styles, mediaQuery, inName);
	    };

	    if (inName !== "undefined") {
	        registerDefinition(inName, SohpieConstructor);
	        document.createElement(inName);
	    }

	    return SohpieConstructor;
	}

	function resolveTagName(inDefinition) {
	    inDefinition.tagName = inDefinition.name;
	    inDefinition.type = inDefinition.name;
	}

	function resolveMixin(inDefinition) {
	    var mixin = inDefinition.mixin || [];
	    for (var i = 0; i < mixin.length; i++) {
	        var pDefinition = mixin[i];
	        for (var p in pDefinition) {
	            if (!inDefinition[p]) {
	                inDefinition[p] = pDefinition[p];
	            }
	        }
	    }
	}

	function registerDefinition(inName, inDefinition) {
	    registry[inName] = inDefinition;
	}

	function isLeaf(inElement) {
	    if (inElement) {
	        var name = inElement.tagName.toLowerCase();
	        return registry[name];
	    }
	}

	var isReady = false;

	module.exports = {
	    registry: registry,
	    isLeaf: isLeaf,
	    register: register
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    ready: function ready(func) {
	        if (window.jQuery) {
	            jQuery(document).ready(func);
	        } else {
	            // Use the handy event callback
	            document.addEventListener("DOMContentLoaded", func, false);
	        }
	    }

	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(48);
	var ee = new EventEmitter();

	module.exports = ee;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * EventEmitter v5.2.2 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */

	;(function (exports) {
	    'use strict';

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */

	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        } else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    function isValidListener(listener) {
	        if (typeof listener === 'function' || listener instanceof RegExp) {
	            return true;
	        } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
	            return isValidListener(listener.listener);
	        } else {
	            return false;
	        }
	    }

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        if (!isValidListener(listener)) {
	            throw new TypeError('listener must be a function');
	        }

	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    } else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        } else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        } else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        } else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listenersMap = this.getListenersAsObject(evt);
	        var listeners;
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listenersMap) {
	            if (listenersMap.hasOwnProperty(key)) {
	                listeners = listenersMap[key].slice(0);

	                for (i = 0; i < listeners.length; i++) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        } else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EventEmitter;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	        module.exports = EventEmitter;
	    } else {
	        exports.EventEmitter = EventEmitter;
	    }
	})(undefined || {});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	var currentOwner = __webpack_require__(50);
	var merge = __webpack_require__(51);

	module.exports = function (type, attributes) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  attributes = attributes || {};
	  var key = typeof attributes.key === 'string' || typeof attributes.key === 'number' ? attributes.key : undefined;
	  //id,自动生成Key
	  if (!key) {
	    key = attributes.key = attributes.id;
	  }

	  //class
	  if (typeof type === 'function') {
	    type = new type(attributes, currentOwner.target);
	    if (type.render) {
	      var oldRender = type.render;
	      type.render = function () {
	        return oldRender.apply(type, []);
	      };
	    }
	  }

	  var args = [type, attributes];
	  if (children && children.length) {
	    var newChildren = [];
	    for (var i = 0; i < children.length; i++) {
	      if (children[i]) {
	        newChildren.push(children[i]);
	      }
	    }
	    args.push(newChildren);
	  }

	  var result = _index.element.apply(null, args);
	  result.creater = result.compontentContext = result.owner = result._owner = currentOwner.target;

	  if (result.type == "thunk" && result.options) {

	    // type: 'thunk',
	    // fn,
	    // children,
	    // props,
	    // options,
	    // key
	    var options = result.options;
	    options.type = result.type;
	    options.fn = result.fn;
	    options.key = options.id = result.key || result.id;
	    options.children = result.children;
	    options.attributes = options.props = merge(options.props, result.props);

	    options.props.children = result.children;
	    options.creater = options.owner = options.compontentContext = options._owner = currentOwner.target;

	    if (!options.props.children || options.props.children.length == 0) {
	      if (options.getDefaultChildren) {
	        options.props.children = options.getDefaultChildren();
	      }
	    }

	    //保持deku的结构
	    options.options = options;
	    result = options;
	  }

	  var children = result.children;
	  for (var i = 0; i < children.length; i++) {
	    if (!children[i]) continue;

	    //创建时的parent
	    if (!children[i].parent) {
	      children[i].parent = result;
	    }
	  }

	  if (attributes && attributes["ref"]) {
	    var refValue = attributes["ref"];
	    if (currentOwner.target) currentOwner.target.refs[refValue] = result;
	  }

	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	var currentOwner = {
	  target: undefined
	};

	module.exports = currentOwner;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function (isNode) {

		/**
	  * Merge one or more objects 
	  * @param bool? clone
	  * @param mixed,... arguments
	  * @return object
	  */

		var Public = function Public(clone) {

			return merge(clone === true, false, arguments);
		},
		    publicName = 'merge';

		/**
	  * Merge two or more objects recursively 
	  * @param bool? clone
	  * @param mixed,... arguments
	  * @return object
	  */

		Public.recursive = function (clone) {

			return merge(clone === true, true, arguments);
		};

		/**
	  * Clone the input removing any reference
	  * @param mixed input
	  * @return mixed
	  */

		Public.clone = function (input) {

			var output = input,
			    type = typeOf(input),
			    index,
			    size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index = 0; index < size; ++index) {

					output[index] = Public.clone(input[index]);
				}
			} else if (type === 'object') {

				output = {};

				for (index in input) {

					output[index] = Public.clone(input[index]);
				}
			}

			return output;
		};

		/**
	  * Merge two objects recursively
	  * @param mixed input
	  * @param mixed extend
	  * @return mixed
	  */

		function merge_recursive(base, extend) {

			if (typeOf(base) !== 'object') return extend;

			for (var key in extend) {

				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

					base[key] = merge_recursive(base[key], extend[key]);
				} else {

					base[key] = extend[key];
				}
			}

			return base;
		}

		/**
	  * Merge two or more objects
	  * @param bool clone
	  * @param bool recursive
	  * @param array argv
	  * @return object
	  */

		function merge(clone, recursive, argv) {

			var result = argv[0],
			    size = argv.length;

			if (clone || typeOf(result) !== 'object') result = {};

			for (var index = 0; index < size; ++index) {

				var item = argv[index],
				    type = typeOf(item);

				if (type !== 'object') continue;

				for (var key in item) {

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);
					} else {

						result[key] = sitem;
					}
				}
			}

			return result;
		}

		/**
	  * Get type of variable
	  * @param mixed input
	  * @return string
	  *
	  * @see http://jsperf.com/typeofvar
	  */

		function typeOf(input) {

			return {}.toString.call(input).slice(8, -1).toLowerCase();
		}

		if (isNode) {

			module.exports = Public;
		} else {

			window[publicName] = Public;
		}
	})(( false ? 'undefined' : _typeof(module)) === 'object' && module && _typeof(module.exports) === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module)))

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var CSSPropertyOperations = __webpack_require__(54);

	var ObjectToCssText = function ObjectToCssText(styles, mediaQuery) {
	  var cssText = "";
	  for (var selector in styles) {
	    cssText += selector + "{" + CSSPropertyOperations.createMarkupForStyles(styles[selector]) + "}";
	  }

	  if (mediaQuery) {
	    cssText = mediaQuery + "{" + cssText + "}";
	  }

	  return cssText;
	};
	var head;

	var StyleSheet = {
	  create: function create(styles, mediaQuery, name) {
	    if (!head) {
	      head = document.getElementsByTagName("head")[0];
	    }

	    var style = document.createElement("style");
	    if (name) {
	      style.setAttribute("data-name", name);
	    }
	    var cssText = ObjectToCssText(styles, mediaQuery);
	    style.innerText = cssText;
	    head.appendChild(style);
	  }
	};

	module.exports = StyleSheet;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(56);

	var camelizeStyleName = __webpack_require__(57);
	var dangerousStyleValue = __webpack_require__(58);
	var hyphenateStyleName = __webpack_require__(60);

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	var warning = console.warn;

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';

	var tempStyle = document.createElement('div').style;
	try {
	  // IE8 throws "Invalid argument." if resetting shorthand style properties.
	  tempStyle.font = '';
	} catch (e) {
	  hasShorthandPropertyBug = true;
	}
	// IE8 only supports accessing cssFloat (standard) as styleFloat
	if (document.documentElement.style.cssFloat === undefined) {
	  styleFloatAccessor = 'styleFloat';
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function createMarkupForStyles(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];

	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function setValueForStyles(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */

	'use strict';

	var CSSProperty = __webpack_require__(56);
	var warning = __webpack_require__(59);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    if (__DEV__) {
	      if (component) {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value);
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;

/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function warning() {};

	if (window.__DEV__) {
	  warning = function warning(condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;

/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	'use strict';

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	/**
	 * parent: 为元素创建时所在vnode结构外层元素
	 * creater：为元素创建时render方法所属于的元素
	 * rootVnode：是组件的每一个根元素，根元素无parent，但有creater
	 * nativeNode:是组件的每一个根元素相对应的dom元素，render方法渲染完成时生成
	 */

	var merge = __webpack_require__(51);

	var _element = __webpack_require__(49);


	var SohpieConstructor = function SohpieConstructor(props, owner) {
	    if (owner) {
	        this.owner = owner;
	    }
	    this.state = {};
	    this.props = props || {};
	    this.children = [];
	    this.refs = {};
	    var defaultProps = this.getDefaultProps && this.getDefaultProps();
	    var newProps = merge(defaultProps || {}, props || {});
	    this.props = newProps;
	    this.attributes = newProps;
	    var defaultState = this.getInitialState && this.getInitialState();
	    var newState = merge({}, defaultState || {});
	    this.state = newState;
	};

	// //重置render方法，生成根元素
	// var oRender = definition.render;
	// SohpieConstructor.prototype.render = function(){
	//   return element(this.name,this.props,oRender.apply(this,arguments));
	// }


	var baseClassPrototype = {
	    forceUpdate: function forceUpdate(updateChildren) {
	        // debugger
	        var oldVnode = this.rootVnode;
	        var newVnode = this.render();

	        var changes = _index.diff.diffNode(oldVnode, newVnode, this.id || '0');
	        var node = changes.reduce(_index.dom.updateElement(function () {}, this), this.nativeNode);

	        this.rootVnode = newVnode;
	        this.nativeNode = node;

	        if (updateChildren && this.props.children && this.props.children.length) {
	            for (var i = 0; i < this.props.children.length; i++) {
	                var child = this.props.children[i];
	                if (child.forceUpdate) {
	                    child.forceUpdate(updateChildren);
	                }
	            }
	        }

	        return node;
	    },
	    setState: function setState(value) {
	        this.state = merge(this.state, value);
	        this._update();
	    },
	    setProps: function setProps(value) {
	        if (this.componentWillSetProps) {
	            this.componentWillSetProps(value);
	        }
	        //设置属性
	        this.props = merge(this.props, value);
	        if (this.componentDidSetProps) {
	            this.componentDidSetProps(value);
	        }
	        this._update();
	    },
	    element: function element() {
	        var vnode = _element.apply(null, arguments);
	        return vnode;
	    },
	    render: function render() {},

	    addChild: function addChild(child) {
	        child.parent = this;
	        var children = this.props.children;
	        children.push(child);
	    },

	    append: function append(child) {
	        child.parent = this;
	        child.owner = child.creater = this.owner;
	        var children = this.props.children;
	        children.push(child);
	        this._update();
	        if (this.componentDidInsertChild) {
	            this.componentDidInsertChild(child);
	        }
	    },

	    setChildren: function setChildren(children) {
	        var result = [];
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            child.parent = this;
	            child.owner = child.creater = this.owner;
	            result.push(child);
	        }
	        this.props.children = this.children = this.attributes.children = result;
	        if (this.componentDidSetChildren) {
	            this.componentDidSetChildren(children);
	        }
	    },

	    remove: function remove(child) {
	        var parent = this;
	        var children = parent.children;
	        for (var i = 0; i < children.length; i++) {
	            if (children[i] == child) {
	                //  children[i].parent = undefined
	                children.splice(i, 1);

	                break;
	            }
	        }
	        this._update();
	        if (child.componentDidRemoveChild) {
	            child.componentDidRemoveChild(child);
	        }
	    },
	    insertBefore: function insertBefore(target, before) {
	        var parent = this;
	        var children = parent.children;
	        for (var i = 0; i < children.length; i++) {
	            if (children[i] == before) {
	                children.splice(i, 0, target);

	                target.parent = parent;
	                break;
	            }
	        }
	        this._update();
	        if (target.componentDidInsert) {
	            target.componentDidInsert();
	        }
	    },
	    insertAfter: function insertAfter(target, after) {
	        var parent = this;
	        var children = parent.children;
	        for (var i = 0; i < children.length; i++) {
	            if (children[i] == after) {
	                children.splice(i + 1, 0, target);
	                target.parent = parent;

	                break;
	            }
	        }
	        this._update();
	        if (target.componentDidInsertChild) {
	            target.componentDidInsertChild();
	        }
	    }
	};

	baseClassPrototype._update = baseClassPrototype.forceUpdate;

	merge(SohpieConstructor.prototype, baseClassPrototype);

	SohpieConstructor.prototype.constructor = SohpieConstructor;

	module.exports = SohpieConstructor;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	function mountAfterElement(mountVnode) {
	  if (_index.vnode.isThunk(mountVnode)) {
	    var component = mountVnode;
	    //保留输出，setState，进行对比
	    var output = component.rootVnode;

	    if (component.componentAfterMount) {
	      component.componentAfterMount();
	    }
	    output.children.forEach(function (node, index) {
	      if (node === null || node === undefined) {
	        return;
	      }
	      var child = mountAfterElement(node);
	    });
	  } else {
	    var children = mountVnode.children;
	    if (children) {
	      children.forEach(function (node, index) {
	        if (node === null || node === undefined) {
	          return;
	        }
	        var child = mountAfterElement(node);
	      });
	    }
	  }
	}
	function mountBeforeElement(mountVnode) {

	  if (_index.vnode.isThunk(mountVnode)) {

	    var component = mountVnode;
	    //保留输出，setState，进行对比
	    var output = component.rootVnode;;
	    output.children.forEach(function (node, index) {
	      if (node === null || node === undefined) {
	        return;
	      }
	      var child = mountBeforeElement(node);
	    });

	    if (component.componentDidMount) {
	      component.componentDidMount();
	    }
	  } else {
	    var children = mountVnode.children;
	    if (children) {
	      children.forEach(function (node, index) {
	        if (node === null || node === undefined) {
	          return;
	        }
	        var child = mountBeforeElement(node);
	      });
	    }
	  }
	}

	function mountElement(mountVnode) {
	  mountBeforeElement(mountVnode);
	  mountAfterElement(mountVnode);
	}

	module.exports = mountElement;

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (url, complete) {
	  if (jQuery) {
	    jQuery.getScript(url, complete);
	  } else {
	    console.error("不存在getScript方法");
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Register = __webpack_require__(45);

	module.exports = function (tagName, prototype, extendClass) {
	  return Register.register(tagName, prototype, extendClass);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(3);

	var utils = __webpack_require__(46); //bootstrap


	var Register = __webpack_require__(45);
	var Element = __webpack_require__(49);
	var EE = __webpack_require__(47);
	var StyleSheet = __webpack_require__(53);
	var mount = __webpack_require__(62);
	var merge = __webpack_require__(51);

	var currentOwner = __webpack_require__(50);

	var head = document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.innerText = "body{opacity:0;filter:alpha(opacity=0)}";

	var isReady = false;
	var callbacks = [];
	var ready = function ready(callback) {
	  if (isReady) {
	    callback && callback();
	  } else {
	    callbacks.push(callback);
	  }
	};

	var fireReady = function fireReady() {
	  if (!isReady) return;
	  for (var i = 0; i < callbacks.length; i++) {
	    callbacks[i] && callbacks[i]();
	  }
	};

	module.exports = {
	  runApp: function runApp(compontent, container, fire) {
	    // utils.ready(function () {

	    var container = container ? container : document.body;
	    var render = (0, _index.createApp)(container);
	    var vnode = Element(compontent, {}, null);
	    Sophie.firstVnode = Sophie.app = vnode;
	    render(vnode);
	    mount(vnode);
	    if (!isReady) {
	      isReady = true;
	      if (fire !== false) {
	        EE.trigger("ready", [vnode]);
	        fireReady();
	      }
	    }

	    // })
	  },

	  ready: ready,
	  renderToJSON: function renderToJSON() {
	    // app
	    var outVnode = Sophie.firstVnode.rootVnode;
	    var walk = function walk(vnode) {

	      var currentData = {};
	      var children;

	      if (vnode.children && vnode.children.length) {
	        children = vnode.children;
	      }
	      if (vnode.attributes && vnode.attributes.children) {
	        children = vnode.attributes.children;
	      }
	      if (vnode.props && vnode.props.children) {
	        children = vnode.props.children;
	      }
	      if (!Array.isArray(children)) {
	        children = [children];
	      }

	      if (Sophie.isThunk(vnode)) {
	        var component = vnode;

	        currentData.type = "thunk";
	        // currentData.state = component.state
	        var attributes = {};

	        for (var p in component.props) {
	          if (p == "children") continue;
	          attributes[p] = component.props[p];
	        }
	        currentData.props = attributes;
	        currentData.name = component.name;
	      } else if (vnode.type == "text") {
	        currentData.type = vnode.type;
	        currentData.nodeValue = vnode.nodeValue;
	      } else if (vnode.type == "html") {
	        currentData.type = vnode.type;
	        currentData.nodeValue = vnode.nodeValue;
	      } else if (vnode.type == "native") {
	        currentData.type = "native";
	        currentData.tagName = vnode.tagName;
	        var attributes = {};
	        for (var p in vnode.props) {
	          if (p == "children") continue;
	          attributes[p] = vnode.props[p];
	        }
	        currentData.props = attributes;
	      }
	      currentData.children = [];
	      if (children && children.length) {
	        for (var i = 0; i < children.length; i++) {
	          if (children[i]) currentData.children.push(walk(children[i]));
	        }
	      }
	      if (!currentData.type) {
	        currentData = undefined;
	      }
	      return currentData;
	    };

	    var data = walk(outVnode);
	    return data;
	  },
	  renderFromJSON: function renderFromJSON(data, container, callback) {
	    var htmlData = data;
	    if (htmlData) {
	      var site = htmlData;
	      var APP = Sophie.createClass("app", {
	        render: function render() {
	          var self = this;
	          var func = function func(children) {
	            var result = [];
	            for (var i = 0; i < children.length; i++) {
	              var c = children[i];
	              if (!c || !c.type) continue;

	              if (c.type == "thunk") {
	                result.push(self.element(Sophie.registry[c.name], c.props, func(c.children)));
	              } else if (c.type == "text") {

	                result.push({
	                  type: 'text',
	                  nodeValue: c.nodeValue
	                });
	              } else if (c.type == "html") {

	                result.push({
	                  type: 'html',
	                  nodeValue: c.nodeValue
	                });
	              } else if (c.type = "native") {
	                result.push(self.element(c.tagName, c.props, func(c.children)));
	              }
	            }

	            return result;
	          };
	          return this.element("app", {}, func(site.children));
	        }

	      });

	      Sophie.runApp(APP, container || $("#dotlinkface").get(0), true);
	    }

	    setTimeout(function () {
	      callback && callback();
	    }, 0);
	  },
	  //第个组件生成元素
	  isBaseVnode: function isBaseVnode(vnode) {
	    return vnode.owner && vnode.owner.name == Sophie.firstVnode.name;
	  },

	  getOwner: function getOwner(vnode) {

	    return vnode.owner || vnode._owner;
	  },
	  getCreater: function getCreater(vnode) {

	    return vnode.owner || vnode._owner;
	  },

	  getParent: function getParent(vnode) {
	    return vnode.parent;
	  },
	  closestBaseParent: function closestBaseParent(vnode) {
	    if (this.isBaseVnode(vnode)) {
	      return vnode;
	    } else {
	      var owner = this.getOwner(vnode);
	      return this.closestBaseParent(owner);
	    }
	  },
	  getBaseParent: function getBaseParent(vnode) {
	    var parent = this.getParent(vnode);
	    if (this.isBaseVnode(parent)) {
	      return parent;
	    } else {
	      var owner = this.getOwner(parent);
	      return this.closestBaseParent(owner);
	    }
	  },

	  cloneVnode: function cloneVnode(vnode) {
	    var name = vnode.name;

	    var newVnode = createVnodeByTagName(name);
	    newVnode.attributes = newVnode.props = vnode.attributes;
	    newVnode.state = vnode.state;
	  },
	  createVnodeByTagName: function createVnodeByTagName(name, attributes, children) {
	    var compontent = Register.registry[name];
	    if (!compontent) throw new Error("name 没有注册");

	    currentOwner.target = Sophie.firstVnode;

	    var vnode = Element(compontent, attributes || {}, children || null);
	    currentOwner.target = undefined;
	    return vnode;
	  },
	  createVnodeByFun: function createVnodeByFun(fun) {
	    currentOwner.target = Sophie.firstVnode;
	    var vnode = fun();
	    currentOwner.target = undefined;
	    return vnode;
	  },

	  createElementByVnode: function createElementByVnode(vnode) {

	    return _index.dom.createElement(vnode, 0);
	  },

	  createElementByTagName: function createElementByTagName(name, attributes, children) {

	    var vnode = this.createVnodeByTagName(name, attributes, children || null);

	    return this.createElementByVnode(vnode);
	  }

	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	(function () {
	    //画新元素
	    var on = jQuery.fn.on;

	    jQuery.fn.on = function (type, selector, data, callback) {
	        var l = arguments.length;
	        var oldCallback = callback;
	        if (typeof selector == "function") {
	            oldCallback = selector;
	        } else if (typeof data == "function") {
	            oldCallback = data;
	        }

	        var newCallback = function newCallback(event) {
	            if (window.onNativeEventFire) {
	                return window.onNativeEventFire.apply(this, [event, oldCallback]);
	            } else {
	                return oldCallback.apply(this, arguments);
	            }
	        };

	        arguments[l - 1] = newCallback;
	        return on.apply(this, arguments);
	    };
	})();

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by zq on 17/6/26.
	 */

	var needUpdateLayout = [];
	var getCoord = function getCoord(el) {
	    var c = {};
	    var offset = el.offset();

	    c.left = offset.left;
	    c.top = offset.top;

	    c.width = el.outerWidth();
	    c.height = el.outerHeight();

	    c.right = c.left + c.width;
	    c.bottom = c.top + c.height;
	    c.fontSize = parseFloat(el.css("fontSize"));
	    return c;
	};

	var getAllCoodByCood = function getAllCoodByCood(coods) {

	    if (coods.length == 0) return;

	    var children = [];
	    var bottoms = [];
	    var rights = [];
	    var tops = [];
	    var lefts = [];
	    var fontSize = coods[0].fontSize;

	    for (var i = 0; i < coods.length; i++) {
	        bottoms.push(coods[i].bottom);
	    }
	    for (var i = 0; i < coods.length; i++) {
	        lefts.push(coods[i].left);
	    }
	    for (var i = 0; i < coods.length; i++) {
	        tops.push(coods[i].top);
	    }
	    for (var i = 0; i < coods.length; i++) {
	        rights.push(coods[i].right);
	    }
	    var bottom = Math.max.apply(Math, bottoms);
	    var top = Math.min.apply(Math, tops);
	    var left = Math.min.apply(Math, lefts);
	    var right = Math.max.apply(Math, rights);
	    return { top: top, left: left, right: right, bottom: bottom, width: right - left, height: bottom - top, fontSize: fontSize };
	};

	var getAllCoord = function getAllCoord(c) {

	    var coods = [];

	    for (var i = 0; i < c.length; i++) {
	        var coord = getCoord($(c[i]));
	        coods.push(coord);
	    }

	    return getAllCoodByCood(coods);
	};

	var UpdateLayout = {
	    update: function update(el) {

	        // todo need change to a right method
	        var layouts = el.parents("p-layout");

	        for (var i = 0; i < layouts.length; i++) {
	            var layout = $(layouts[i]);
	            var parentCoord = getCoord(layout);
	            if (layout.get(0).vnode.props.paddingBottom) {
	                var paddingBottom = parseFloat(layout.get(0).vnode.props.paddingBottom);
	                var paddingTop = parseFloat(layout.get(0).vnode.props.paddingTop);

	                var layoutChildren = layout.children();
	                var childrenCoord = getAllCoord(layoutChildren);
	                var height = childrenCoord.height + paddingTop * parentCoord.fontSize + paddingBottom * parentCoord.fontSize;
	                layout.css("height", height + "px");
	            }
	        }
	    }
	};

	module.exports = UpdateLayout;

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Sophie.createStyleSheet({

	    'html *': {
	        'margin': '0',
	        'padding': '0',

	        '-webkit-box-sizing': 'border-box',
	        '-moz-box-sizing': 'border-box',
	        'box-sizing': 'border-box',
	        'word-wrap': 'break-word'

	    },

	    'body:before,body:after': {

	        'display': 'table',
	        'line-height': '0',
	        'content': '""'
	    },

	    'body * ': {
	        'vertical-align': 'top'
	    },

	    'body': {
	        'font-size': 'inherit!important'

	    },

	    '.p-container-fluid:before,.p-container-fluid:after,.p-container:before,.p-container:after': {
	        'display': 'table',
	        'line-height': '0',
	        'content': '""'
	    },
	    '.p-container-fluid, .p-container': {
	        height: 'auto!important',
	        position: 'relative',
	        margin: "auto!important"
	    },
	    '.p-container-absolute': {
	        zIndex: 10
	    },

	    ".p-container-fluid > *": {
	        width: "100%!important",
	        marginLeft: "auto!important",
	        marginRight: "auto!important"
	    },

	    '#page': {
	        '-webkit-backface-visibility': 'hidden',
	        'backface-visibility': 'hidden',
	        '-webkit-transition': 'right .4s ease-in-out, opacity .4s linear, background .4s ease-in-out',
	        'transition': 'right .4s ease-in-out, opacity .4s linear, background .4s ease-in-out',
	        'position': 'relative',
	        'right': '0'
	    },

	    'body.resizing-y * ': {
	        'cursor': 'ns-resize !important'
	    },

	    'body.resizing-x *': {
	        'cursor': 'ew-resize !important'
	    },

	    '.p-absolute': {
	        'position': 'absolute !important'
	    },

	    'children': {
	        'display': 'block'
	    },

	    'children:before,children:after': {
	        'display': 'table',
	        'line-height': '0',
	        'content': '""',
	        'clear': 'both'
	    },

	    '.wysiwyg-text-align-center': {
	        textAlign: "center"
	    },
	    '.wysiwyg-text-align-left': {
	        textAlign: "left"
	    },
	    '.wysiwyg-text-align-right': {
	        textAlign: "right"
	    }

	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./editCSS.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./editCSS.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(71)();
	// imports


	// module
	exports.push([module.id, "\n[data-moveable]{\n    cursor: move;\n}\n\n[contenteditable=\"true\"]{\n    cursor:text;\n}\n\n\nbody.draw *{\n    cursor: copy!important;\n}\n\np-container{\n    box-shadow:  0 0 0 4px rgba(0, 0, 0, .1),  0 0 0 4px rgba(255, 255, 255, .2), 0 0 0 0px rgba(204, 204, 204, .4);\n\n}\n\n\n/*p-header,p-page,p-footer{\n    box-shadow: inset 0 0 0 4px rgba(0, 0, 0, .1), inset 0 0 0 4px rgba(255, 255, 255, .2), 0 0 0 0px rgba(204, 204, 204, .4);\n}*/\n\np-header{\n  border-bottom: 1px #ccc dashed;\n}\np-footer{\n  border-top: 1px #ccc dashed;\n}\n\n\n\n/*@media (max-width: 767px){*/\n  /*p-grid{*/\n    /*box-shadow: inset 0 0 0 4px rgba(0, 0, 0, .1), inset 0 0 0 4px rgba(255, 255, 255, .2), 0 0 0 0px rgba(204, 204, 204, .4);*/\n  /*}*/\n/*}*/\n", ""]);

	// exports


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Sophie = __webpack_require__(2);
	var Site = __webpack_require__(74);
	var Header = __webpack_require__(82);
	var Body = __webpack_require__(85);
	var Footer = __webpack_require__(84);
	var Page = __webpack_require__(75);

	var APP = Sophie.createClass("app", {
	    render: function render() {
	        return Sophie.element(
	            'app',
	            null,
	            Sophie.element(Site, null)
	        );
	    }
	});

	Sophie.createStyleSheet({
	    app: {
	        display: "block"
	    }
	});

	var _renderData = function _renderData(data, callback) {

	    if (data && data.html) {
	        var links = data.links || "";
	        links = links.split(",");
	        //创建links
	        for (var i = 0; i < links.length; i++) {
	            var hasExit = $('[href="' + $.trim(links[i]) + '"]').length;
	            if (!hasExit && !$.trim(links[i])) {
	                var linkEl = $('<link custom="true" rel="import" href="' + $.trim(links[i]) + '">');
	                $("head").append(linkEl);
	            }
	        }

	        var pageStyle = $("#page-style").get(0);
	        $("#page-style").text("");

	        if (pageStyle.styleSheet) {
	            pageStyle.styleSheet.cssText = data.pagecss;
	        } else {
	            pageStyle.appendChild(document.createTextNode(data.pagecss));
	        }

	        var htmlData = data.html;

	        if (htmlData) {
	            if (typeof htmlData == "string") {
	                htmlData = JSON.parse(htmlData);
	            }

	            Sophie.renderFromJSON(htmlData, null, callback);
	        }
	    } else {

	        Sophie.runApp(APP, document.body, true);
	    }
	};

	module.exports = {
	    App: APP,
	    renderData: function renderData(data) {
	        var currentData = data;

	        _renderData(currentData);
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Page = __webpack_require__(75);
	var Header = __webpack_require__(82);
	var Footer = __webpack_require__(84);
	var Body = __webpack_require__(85);
	var NavPageMask = __webpack_require__(86);
	var NavPageMobile = __webpack_require__(87);
	var Layout = __webpack_require__(89);

	var GridLayout = __webpack_require__(77);

	var PSite = Sophie.createClass("p-site", {
	    mixin: [GridLayout],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            activePageId: "dotlinkface-homepage"
	        };
	    },

	    getDefaultChildren: function getDefaultChildren() {
	        return [Sophie.element(Header, { id: 'page-header', ref: 'header' }), Sophie.element(
	            Body,
	            { id: 'page-body', ref: 'body' },
	            Sophie.element(Page, { id: 'dotlinkface-homepage', title: '首页', active: 'true' })
	        ), Sophie.element(Footer, { id: 'page-footer', ref: 'footer' }), Sophie.element(
	            Layout,
	            { id: 'page-mask' },
	            Sophie.element(NavPageMobile, { id: 'page-nav-mobile' })
	        )];
	    },

	    componentDidMount: function componentDidMount() {
	        var siteTitle = $(this).attr("title");
	        $("title").text(siteTitle);
	        this.active(this.props.activePageId);
	        var self = this;
	        $(window).on("resize", function () {
	            self.forceUpdate(true);
	        });
	    },

	    render: function render() {
	        return Sophie.element(
	            'p-site',
	            { id: 'app' },
	            this.renderVisibleChildren()
	        );
	    },

	    renderChildren: function renderChildren() {
	        var children = [];
	        for (var i = 0; i < this.props.children; i++) {
	            if (this.props.children[i]) {}
	        }
	    },

	    addPage: function addPage(title) {
	        var self = this;

	        var id = play.idPrefix + play.utils.generateID();

	        var pageVnode = Sophie.createVnodeByTagName("p-page", { id: id, title: title });

	        var appVnode = Sophie.firstVnode;

	        appVnode.refs["body"].append(pageVnode);

	        if ($("p-nav-page").get(0)) {
	            var nav = $("p-nav-page").get(0).vnode;
	            if (nav) {

	                nav.addOne(id, title, true);
	            }
	        }

	        if ($("p-nav-page-mobile").get(0)) {
	            var nav = $("p-nav-page-mobile").get(0).vnode;
	            if (nav) {

	                nav.addOne(id, title, true);
	            }
	        }

	        this.active(id);
	    },

	    delPage: function delPage(pageID) {
	        var self = this;
	        var pageNav = $("p-header p-nav-page");
	        var pageNavMobile = $("p-nav-page-mobile");

	        var page = $("#" + pageID).get(0);

	        if (page) {
	            var isActive = $(page).hasClass("active");

	            var appVnode = Sophie.firstVnode;

	            appVnode.refs["body"].remove(page.vnode);
	            if (pageNav.get(0)) {
	                pageNav.get(0).vnode.removeItem(pageID);
	            }
	            if (pageNavMobile.get(0)) {
	                pageNavMobile.get(0).vnode.removeItem(pageID);
	            }

	            if (isActive) {
	                this.activeFist();
	            }
	        }
	    },

	    active: function active(id) {
	        var self = this;
	        //
	        // var nav =   $("p-nav-page",play.iframeDoc);
	        //
	        //
	        // if(nav&&nav.length){
	        //
	        //     nav.get(0).vnode.active(id);
	        // }

	        this.props.activePageId = id;

	        var pages = $("p-body p-page");
	        pages.removeClass("active");
	        $("#" + id).addClass("active");

	        var nav = $("p-nav-page");
	        var pageNavMobile = $("p-nav-page-mobile");

	        if (nav && nav.get(0)) nav.get(0).vnode.active(id);
	        if (pageNavMobile && pageNavMobile.get(0)) pageNavMobile.get(0).vnode.active(id);
	        //
	        // $("#"+id).addClass('animated fadeIn');
	        // $("#"+id).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        //    // $("#"+id,play.iframeDoc).removeClass("animated fadeIn")
	        // });
	    },

	    activeFist: function activeFist() {
	        var self = this;
	        var pages = $("p-body p-page");

	        var id = pages.eq(0).attr("id");
	        this.props.activePageId = id;
	        this.active(id);
	    }
	});

	Sophie.createStyleSheet({
	    'p-site': {
	        minHeight: '10rem',
	        display: 'block',
	        width: '100%!important',
	        position: 'relative'

	    },

	    'p-site:before,p-site:after': {
	        display: 'table',
	        lineHeight: 0,
	        content: '" "',
	        clear: 'both'

	    }
	});

	module.exports = PSite;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sophie = __webpack_require__(2);
	var Children = __webpack_require__(76);

	var GridLayout = __webpack_require__(77);
	var PPage = Sophie.createClass("p-page", {
	  mixin: [GridLayout],
	  getDefaultProps: function getDefaultProps() {},
	  getInitialState: function getInitialState() {
	    return {
	      isActive: this.props.active || false
	    };
	  },

	  render: function render() {
	    var className = "";
	    if (this.state.isActive) {
	      className = "active";
	    }
	    return Sophie.element(
	      "p-page",
	      { "class": className, id: this.props.id, title: this.props.title },
	      this.renderGridChildrenFullWidth()
	    );
	  },

	  setConfig: function setConfig(config) {
	    if (config.title) {
	      this.props.title = config.title;
	    }
	  },

	  componentDidMount: function componentDidMount() {

	    var self = this;
	  },

	  scale: function scale(el, width) {
	    var oldWidth = el.width();
	    var currentFontSize = parseInt(el.css("fontSize"));

	    var fontSize = width / oldWidth * currentFontSize;
	    el.css("fontSize", fontSize + "px");
	  },
	  active: function active() {
	    this.setState({ isActive: true });
	  }

	});

	PPage.createStyleSheet({
	  'p-page': {
	    display: 'none',
	    width: '100%!important',
	    minHeight: '1em',
	    height: '15em',
	    margin: '0!important',
	    padding: '0!important'

	  },

	  'p-page.active': {
	    display: 'block!important'
	  },

	  'p-page > .p-container-fluid, p-page > .p-container': {
	    height: 'auto!important',
	    position: 'relative',
	    margin: "auto!important"
	  },

	  'p-page > .p-container': {
	    height: 'auto!important',
	    position: 'relative',
	    margin: "auto!important"
	  },

	  'p-page:before ,p-page:after': {
	    display: 'table',
	    content: '" "',
	    lineHeight: 0
	  }

	});

	PPage.createStyleSheet({}, "@media (min-width: 768px)");

	module.exports = PPage;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sophie = __webpack_require__(2);

	var Children = Sophie.createClass('children', {

	  componentDidMount: function componentDidMount() {},

	  render: function render() {
	    return this.children;
	  }
	});

	module.exports = Children;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Created by zq on 17/6/27.
	 */
	var Grid = __webpack_require__(78);
	var GridColumn = __webpack_require__(80);
	var GridMix = __webpack_require__(81);
	module.exports = {
	    renderLayout: function renderLayout(layout, isInnerLever) {
	        var result;
	        if (layout.type && layout.type == "row") {
	            var children = layout.children;
	            var newChildren = [];
	            for (var i = 0; i < children.length; i++) {
	                newChildren.push(this.renderLayout(children[i], true));
	            }
	            if (newChildren.length) {
	                result = Sophie.element(
	                    Grid,
	                    null,
	                    newChildren
	                );
	            }
	        } else if (layout.type && layout.type == "column") {
	            var children = layout.children;
	            var newChildren = [];
	            for (var i = 0; i < children.length; i++) {
	                newChildren.push(this.renderLayout(children[i], true));
	            }

	            if (newChildren.length) {
	                if (isInnerLever) {
	                    result = Sophie.element(
	                        GridColumn,
	                        null,
	                        newChildren
	                    );
	                } else {
	                    result = newChildren;
	                }
	            }
	        } else if (layout.type && layout.type == "mix") {
	            var children = layout.children;
	            var newChildren = [];
	            for (var i = 0; i < children.length; i++) {
	                newChildren.push(this.renderLayout(children[i], true));
	            }
	            if (newChildren.length) {
	                result = Sophie.element(
	                    GridMix,
	                    null,
	                    newChildren
	                );
	            }
	        } else {
	            result = this.findChild(layout);
	        }

	        return result;
	    },

	    findChild: function findChild(node) {
	        if (node.id) {
	            var oldChildren = this.props.children || [];
	            for (var i = 0; i < oldChildren.length; i++) {
	                if (oldChildren[i].props.id == node.id || oldChildren[i].props.pid == node.id) {
	                    return oldChildren[i];
	                    break;
	                }
	            }
	        } else if (node.index) {
	            var result;
	            var oldChildren = this.props.children || [];
	            if (oldChildren.length - 1 > node.index) {
	                return oldChildren[node.index];
	            }
	        }
	    },
	    renderChild: function renderChild() {
	        var child = [];

	        if (this.props.children) {
	            for (var i = 0; i < this.props.children.length; i++) {

	                if (this.props.children[i].props.fullWidth) {
	                    child.push(Sophie.element(
	                        "div",
	                        { "class": "p-container-fluid" },
	                        this.props.children[i]
	                    ));
	                } else {
	                    child.push(Sophie.element(
	                        "div",
	                        { "class": "p-container" },
	                        this.props.children[i]
	                    ));
	                }
	            }
	        }

	        return child;
	    },
	    renderVisibleChildren: function renderVisibleChildren(isWrap) {
	        var child = [];
	        var media = window.App.getMediaName();

	        if (!this.props[media]) {
	            this.props[media] = {};
	        }

	        if (this.props.children) {
	            for (var i = 0; i < this.props.children.length; i++) {
	                var thisChild = this.props.children[i];
	                if (thisChild.props[media] && thisChild.props[media]["isHidden"]) {} else {
	                    if (thisChild.props.fullWidth) {
	                        if (isWrap) {
	                            child.push(Sophie.element(
	                                "div",
	                                { "class": "p-container-fluid" },
	                                thisChild
	                            ));
	                        } else {
	                            child.push(thisChild);
	                        }
	                    } else {
	                        if (isWrap) {
	                            child.push(Sophie.element(
	                                "div",
	                                { "class": "p-container" },
	                                thisChild
	                            ));
	                        } else {
	                            child.push(thisChild);
	                        }
	                    }
	                }
	            }
	        }

	        return child;
	    },

	    renderGridChildren: function renderGridChildren() {
	        var media = window.App.getMediaName();

	        if (!this.props[media]) {
	            this.props[media] = {};
	        }
	        var gridLayout = this.props[media].gridLayout;

	        if (gridLayout) {
	            var children = [];

	            var result = this.renderLayout(gridLayout);
	            if (result) {
	                children.push(result);
	            }

	            var absoluteLayout = gridLayout.absoluteLayout;
	            if (absoluteLayout) {
	                var achildren = [];
	                for (var i = 0; i < absoluteLayout.length; i++) {
	                    var child = this.findChild(absoluteLayout[i]);
	                    achildren.push(child);
	                }
	                children.push(achildren);
	            }

	            var hiddenLayout = gridLayout.hiddenLayout;
	            if (hiddenLayout) {
	                var hLayout = [];
	                for (var i = 0; i < hiddenLayout.length; i++) {
	                    var child = this.findChild(hiddenLayout[i]);
	                    hLayout.push(child);
	                }
	                children = children.concat(hLayout);
	            }

	            return Sophie.element(
	                "div",
	                { "class": "p-container" },
	                children
	            );
	        } else {
	            return Sophie.element(
	                "div",
	                { "class": "p-container" },
	                this.props.children
	            );
	        }
	    },
	    renderGridChildrenFullWidth: function renderGridChildrenFullWidth() {
	        var media = window.App.getMediaName();

	        if (!this.props[media]) {
	            this.props[media] = {};
	        }
	        var gridLayout = this.props[media].gridLayout;

	        if (gridLayout) {
	            var children = [];
	            var rows = gridLayout.children || [];

	            var absoluteLayout = gridLayout.absoluteLayout;
	            if (absoluteLayout) {
	                var achildren = [];
	                for (var i = 0; i < absoluteLayout.length; i++) {
	                    var child = this.findChild(absoluteLayout[i]);
	                    achildren.push(child);
	                }
	                children.push(Sophie.element(
	                    "div",
	                    { "class": "p-container p-container-absolute " },
	                    achildren
	                ));
	            }

	            if (gridLayout.type == "row" || gridLayout.type == "mix") {
	                children.push(Sophie.element(
	                    "div",
	                    { "class": "p-container" },
	                    this.renderLayout(gridLayout)
	                ));
	            } else if (gridLayout.type == "column") {
	                for (var i = 0; i < rows.length; i++) {
	                    var row = rows[i];
	                    if (row.type) {
	                        children.push(Sophie.element(
	                            "div",
	                            { "class": "p-container" },
	                            this.renderLayout(row)
	                        ));
	                    } else {
	                        var child = this.findChild(row);
	                        if (child) {
	                            if (child.props.fullWidth) {
	                                children.push(Sophie.element(
	                                    "div",
	                                    { "class": "p-container-fluid" },
	                                    child
	                                ));
	                            } else {
	                                children.push(Sophie.element(
	                                    "div",
	                                    { "class": "p-container" },
	                                    child
	                                ));
	                            }
	                        }
	                    }
	                }
	            }

	            var hiddenLayout = gridLayout.hiddenLayout;
	            if (hiddenLayout) {
	                var hLayout = [];
	                for (var i = 0; i < hiddenLayout.length; i++) {
	                    var child = this.findChild(hiddenLayout[i]);
	                    hLayout.push(child);
	                }
	                children = children.concat(hLayout);
	            }

	            return children;
	        } else {
	            return this.renderChild ? this.renderChild() : this.props.children;
	        }
	    }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(79);
	var Grid = Sophie.createClass("p-grid", {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: "grid-row"
	    };
	  },
	  render: function render() {
	    var className = this.props.className;
	    return Sophie.element(
	      "p-grid",
	      { "class": className },
	      this.props.children
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    //p-grid下的元素的设置fontsize

	    // if(el.parent().is("p-grid")&&el.parent().parent().parent().is("p-page")){
	    //   if(play.mediaName !== "phone"){
	    //     var phoneWidth =  coords.width/coords.fontSize;
	    //     var fontSize =   this.getResponseFontSize(phoneWidth);
	    //      if(!utils.hasMediaCSSRule(el, play.mediaQuery.phone)){
	    //          play.dom._cssMedia(el, "font-size", fontSize+"rem",play.mediaQuery.phone);
	    //           // play.dom._cssMedia(el, "z-index", 100,play.mediaQuery.phone);
	    //           //  utils.createCSSRule(el,"font-size",fontSize+"rem", play.mediaQuery.phone)
	    //           //     utils.createCSSRule(el,"z-index",100, play.mediaQuery.phone)
	    //           //       utils.createCSSRule(el,"z-index",100, "all")
	    //           //         utils.createCSSRule(el,"z-index",100, play.mediaQuery.pc)
	    //      }
	    //
	    //   }
	    // }
	  }

	});

	var getFlexCSS = function getFlexCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexCSS();
	  } else {
	    return {
	      display: "block"
	    };
	  }
	};

	var getFlexItemCSS = function getFlexItemCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexItemCSS();
	  } else {
	    return {
	      'float': 'left'
	    };
	  }
	};

	Sophie.createStyleSheet({
	  "p-grid.grid-row": getFlexCSS(),

	  '.grid-row': {

	    'width': '100%!important',
	    'margin-left': '0!important',
	    'margin-right': '0!important',
	    'height': 'auto!important',
	    'min-height': 'auto!important'
	  },

	  '.p-grid:before,.p-grid:after': {
	    'display': 'table',
	    'line-height': '0',
	    'content': '""'
	  },

	  '.grid-row:after': {
	    'clear': 'both'
	  },

	  '.grid-row:after, .grid-row:before': {
	    'display': 'table',
	    'content': '""'
	  },

	  '.grid-row > * ': getFlexItemCSS(),

	  '.grid-row.grid-row-column > * ': {

	    'display': 'block',
	    'float': 'none',
	    'margin': '10px 0 0 0',
	    'width': '100%'
	  },

	  '.grid-row.grid-row-column:first-child ': {
	    'margin-top': '0'
	  }

	});

	Sophie.createStyleSheet({}, '@media (max-width: 767px)');

	module.exports = Grid;

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  supportFlex: function supportFlex() {
	    var doc = document.body || document.documentElement;
	    var style = doc.style;
	    if (style.webkitFlexWrap == '' || style.msFlexWrap == '' || style.flexWrap == '') {
	      return true;
	    }
	  },
	  getFlexCSS: function getFlexCSS() {
	    var doc = document.body || document.documentElement;
	    var style = doc.style;
	    if (style.flexWrap == '') {
	      return {
	        display: "flex",
	        "align-items": "flex-start",
	        "flex-flow": "row nowrap",
	        "justify-content": "flex-start"
	      };
	    } else if (style.msFlexWrap == '') {
	      return {
	        display: "flex",
	        "align-items": "flex-start",
	        "flex-flow": "row nowrap",
	        "justify-content": "flex-start"
	      };
	    }
	  },
	  getFlexColumnCSS: function getFlexColumnCSS() {
	    var doc = document.body || document.documentElement;
	    var style = doc.style;
	    if (style.flexWrap == '') {
	      return {
	        display: "flex",
	        "align-items": "flex-start",
	        "flex-flow": "column nowrap",
	        "justify-content": "flex-start"
	      };
	    } else if (style.msFlexWrap == '') {
	      return {
	        display: "flex",
	        "align-items": "flex-start",
	        "flex-flow": "column nowrap",
	        "justify-content": "flex-start"
	      };
	    }
	  },
	  getFlexItemCSS: function getFlexItemCSS() {
	    var doc = document.body || document.documentElement;
	    var style = doc.style;
	    if (style.flexWrap == '') {
	      return {
	        //运行时可变为可伸缩
	        flex: "none"
	      };
	    }
	  }

	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(79);
	var Grid = Sophie.createClass("p-grid-column", {

	  render: function render() {
	    return Sophie.element(
	      "p-grid",
	      { "class": "grid-column" },
	      this.children
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    //p-grid下的元素的设置fontsize

	    // if(el.parent().is("p-grid")&&el.parent().parent().parent().is("p-page")){
	    //   if(play.mediaName !== "phone"){
	    //     var phoneWidth =  coords.width/coords.fontSize;
	    //     var fontSize =   this.getResponseFontSize(phoneWidth);
	    //      if(!utils.hasMediaCSSRule(el, play.mediaQuery.phone)){
	    //          play.dom._cssMedia(el, "font-size", fontSize+"rem",play.mediaQuery.phone);
	    //           // play.dom._cssMedia(el, "z-index", 100,play.mediaQuery.phone);
	    //           //  utils.createCSSRule(el,"font-size",fontSize+"rem", play.mediaQuery.phone)
	    //           //     utils.createCSSRule(el,"z-index",100, play.mediaQuery.phone)
	    //           //       utils.createCSSRule(el,"z-index",100, "all")
	    //           //         utils.createCSSRule(el,"z-index",100, play.mediaQuery.pc)
	    //      }
	    //
	    //   }
	    // }
	  }

	});

	var getFlexCSS = function getFlexCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexColumnCSS();
	  } else {
	    return {
	      display: "block"
	    };
	  }
	};

	var getFlexItemCSS = function getFlexItemCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexItemCSS();
	  } else {
	    return {
	      'float': 'left'
	    };
	  }
	};

	Sophie.createStyleSheet({
	  "p-grid.grid-column": getFlexCSS(),

	  'p-grid.grid-column:after': {
	    'clear': 'both'
	  },

	  'p-grid.grid-column:after, p-grid.grid-column:before': {
	    'display': 'table',
	    'content': '""'
	  },

	  '.grid-row > * ': getFlexItemCSS()

	});

	Sophie.createStyleSheet({
	  "p-grid.grid-column": {
	    width: "100%"
	  }

	}, '@media (max-width: 767px)');

	module.exports = Grid;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Sophie$createStyleSh;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var utils = __webpack_require__(79);
	var Grid = Sophie.createClass("p-grid-mix", {

	  render: function render() {
	    return Sophie.element(
	      "p-grid",
	      { "class": "grid-mix" },
	      this.children
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    //p-grid下的元素的设置fontsize

	    // if(el.parent().is("p-grid")&&el.parent().parent().parent().is("p-page")){
	    //   if(play.mediaName !== "phone"){
	    //     var phoneWidth =  coords.width/coords.fontSize;
	    //     var fontSize =   this.getResponseFontSize(phoneWidth);
	    //      if(!utils.hasMediaCSSRule(el, play.mediaQuery.phone)){
	    //          play.dom._cssMedia(el, "font-size", fontSize+"rem",play.mediaQuery.phone);
	    //           // play.dom._cssMedia(el, "z-index", 100,play.mediaQuery.phone);
	    //           //  utils.createCSSRule(el,"font-size",fontSize+"rem", play.mediaQuery.phone)
	    //           //     utils.createCSSRule(el,"z-index",100, play.mediaQuery.phone)
	    //           //       utils.createCSSRule(el,"z-index",100, "all")
	    //           //         utils.createCSSRule(el,"z-index",100, play.mediaQuery.pc)
	    //      }
	    //
	    //   }
	    // }
	  }

	});

	var getFlexCSS = function getFlexCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexColumnCSS();
	  } else {
	    return {
	      display: "block"
	    };
	  }
	};

	var getFlexItemCSS = function getFlexItemCSS() {
	  if (utils.supportFlex) {
	    return utils.getFlexItemCSS();
	  } else {
	    return {};
	  }
	};

	Sophie.createStyleSheet((_Sophie$createStyleSh = {
	  "p-grid.grid-mix": getFlexCSS()
	}, _defineProperty(_Sophie$createStyleSh, "p-grid.grid-mix", {
	  overflow: "hidden"
	}), _defineProperty(_Sophie$createStyleSh, 'p-grid.grid-mix:after', {
	  'clear': 'both'
	}), _defineProperty(_Sophie$createStyleSh, 'p-grid.grid-mix:after, p-grid.grid-mix:before', {
	  'display': 'table',
	  'content': '""'
	}), _Sophie$createStyleSh));

	Sophie.createStyleSheet({}, '@media (max-width: 767px)');

	module.exports = Grid;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// <link rel="import" href="p-container-fluid.html">
	var NavBar = __webpack_require__(83);

	var GridLayout = __webpack_require__(77);
	var Header = Sophie.createClass('p-header', {

	  mixin: [GridLayout],
	  componentDidMount: function componentDidMount() {
	    var siteTitle = $(this).attr("title");
	    this.state.isShow = false;
	    $("title").text(siteTitle);
	    var self = this;
	  },
	  showSidebar: function showSidebar() {
	    $("p-site").addClass("nav-open");
	    $("p-site").removeClass("nav-close");
	  },
	  hideSidebar: function hideSidebar() {
	    $(this.nativeNode).removeClass("nav-open");
	    $(this.nativeNode).addClass("nav-close");
	    this.state.isShow = false;
	  },
	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(NavBar, { id: "page-header-navbar" })];
	  },

	  render: function render() {
	    return Sophie.element(
	      "p-header",
	      null,
	      this.renderGridChildrenFullWidth()
	    );
	  }

	});

	Sophie.createStyleSheet({

	  'p-header': {
	    height: '3em',
	    display: 'block',
	    minHeight: 10,
	    margin: '0!important',
	    padding: '0!important',

	    width: '100%!important',
	    position: "relative",

	    zIndex: "100"

	  },

	  'p-header .p-container-nav': {
	    height: 0,
	    width: 0
	  },

	  'p-header:before,p-header:after': {
	    display: 'table',
	    lineHeight: 0,
	    content: '" "',
	    clear: 'both'
	  }

	});

	Sophie.createStyleSheet({}, '@media (max-width: 767px)');

	module.exports = Header;

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";

	var NavBar = Sophie.createClass("p-nav-bar", {

	    render: function render() {
	        return Sophie.element(
	            "p-nav-bar",
	            null,
	            Sophie.element(
	                "button",
	                { "class": "navbar-toggle", type: "button", "data-toggle": "collapse", "data-target": ".bs-navbar-collapse" },
	                Sophie.element("span", { "class": "icon-bar" }),
	                Sophie.element("span", { "class": "icon-bar" }),
	                Sophie.element("span", { "class": "icon-bar" })
	            )
	        );
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            isStatic: false,
	            pc: {
	                isHidden: true

	            }
	        };
	    },
	    componentDidMount: function componentDidMount() {

	        var self = this;
	        //不能加到document上，重新渲染时无法注销
	        $(self.nativeNode).on("click", function (ev) {
	            self.showSidebar();
	        });
	    },
	    showSidebar: function showSidebar() {

	        $("p-site").addClass("nav-open");
	        $("p-site").removeClass("nav-close");
	    },
	    hideSidebar: function hideSidebar() {

	        $(this.nativeNode).removeClass("nav-open");
	        $(this.nativeNode).addClass("nav-close");
	        this.state.isShow = false;
	    }
	});

	Sophie.createStyleSheet({
	    "p-nav-bar": {
	        display: 'none',
	        width: '44px',
	        height: '34px',
	        overflow: 'hidden',
	        position: 'absolute',
	        right: "10px",
	        top: "50%"

	    },

	    'p-nav-bar .navbar-toggle': {
	        position: 'relative',
	        float: 'none',
	        padding: '9px 10px',
	        marginTop: '8px',
	        marginRight: '15px',
	        marginBottom: '8px',
	        backgroundColor: 'transparent',
	        backgroundImage: 'none',
	        border: '1px solid transparent',
	        borderRadius: '4px',
	        margin: '0'

	    },

	    'p-nav-bar .navbar-toggle .icon-bar': {
	        backgroundColor: 'red'
	    }

	});

	Sophie.createStyleSheet({

	    "p-header p-nav-bar": {
	        display: 'block'
	    }

	}, "@media (max-width: 767px)");

	module.exports = NavBar;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// <link rel="import" href="p-container-fluid.html">

	var GridLayout = __webpack_require__(77);
	var Footer = Sophie.createClass("p-footer", {
	    mixin: [GridLayout],
	    componentDidMount: function componentDidMount() {
	        var siteTitle = $(this).attr("title");
	        $("title").text(siteTitle);
	    },

	    render: function render() {
	        return Sophie.element(
	            "p-footer",
	            null,
	            this.renderGridChildrenFullWidth()
	        );
	    }
	});

	Sophie.createStyleSheet({
	    'p-footer': {
	        height: '4rem',
	        display: 'block',
	        margin: '0!important',
	        padding: '0!important',
	        minHeight: '10px',
	        width: '100%!important',
	        zIndex: "100"

	    },
	    'p-footer:before,p-footer:after': {
	        display: 'table',
	        lineHeight: '0',
	        content: '" "',
	        clear: 'both'
	    },

	    'p-footer > p-container-fluid': {
	        height: '100%'
	    }

	});

	module.exports = Footer;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var PPage = __webpack_require__(75);

	var PBody = Sophie.createClass("p-body", {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      activePageId: "dotlinkface-homepage"
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activePageId: this.props.activePageId
	    };
	  },

	  componentDidMount: function componentDidMount() {},
	  render: function render() {
	    if (this.props.children.length == 1) {
	      this.state.activePageId = this.props.children[0].props.id;
	      this.props.children[0].state.isActive = true;
	    }
	    return Sophie.element(
	      "p-body",
	      null,
	      this.props.children
	    );
	  },

	  renderChildren: function renderChildren() {},

	  activePage: function activePage(id) {
	    this.state.activePageId = id;
	    this._update();
	  }

	});

	Sophie.createStyleSheet({
	  'p-body': {
	    display: 'block',
	    margin: '0!important',
	    padding: '0!important',
	    minHeight: "1em",
	    width: '100%!important',
	    height: 'auto!important'

	  },

	  'p-body:before, p-body:after': {
	    display: 'table',
	    lineHeight: '0',
	    content: '" "',
	    clear: 'both'
	  }

	});

	Sophie.createStyleSheet({
	  'p-body': {
	    display: 'block',
	    margin: '0!important',
	    padding: '0!important',

	    width: '100%!important',
	    height: 'auto!important'
	  },
	  'p-body:before, p-body:after': {
	    display: 'table',
	    lineHeight: 0,
	    content: '" "',
	    clear: 'both'
	  }

	});

	Sophie.createStyleSheet({}, '@media (max-width: 767px)');

	module.exports = PBody;

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	var NavMask = Sophie.createClass("p-nav-page-mask", {

	    render: function render() {
	        return Sophie.element("p-nav-page-mask", null);
	    },

	    componentDidMount: function componentDidMount() {}

	});

	Sophie.createStyleSheet({
	    'p-nav-page-mask ': {
	        display: "none!important"
	    },
	    '#page-mask': {
	        position: 'fixed',
	        left: '0',
	        top: '0',
	        bottom: 0,
	        right: 0,
	        width: "100%",
	        height: "100%",
	        margin: '0!important',
	        display: "none"

	    }

	});

	Sophie.createStyleSheet({

	    '#page-mask': {
	        position: 'fixed',
	        left: '0',
	        top: '0',
	        bottom: 0,
	        right: 0,
	        margin: '0!important',
	        display: "none"

	    },

	    'p-nav-page-mask': {
	        position: 'fixed',
	        left: '0',
	        top: '0',
	        bottom: 0,
	        right: 0,
	        margin: '0!important',
	        display: "none"

	    }

	}, "@media (max-width: 767px)");

	module.exports = NavMask;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Page = __webpack_require__(75);
	var A = __webpack_require__(88);
	var NavBar = __webpack_require__(83);

	var Nav = Sophie.createClass("p-nav-page-mobile", {

	    render: function render() {
	        return Sophie.element(
	            "p-nav-page-mobile",
	            null,
	            Sophie.element(
	                "ul",
	                { "class": "nav navbar-nav" },
	                this.renderChildren()
	            )
	        );
	    },

	    getInitialState: function getInitialState() {
	        return {
	            pageList: []

	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            pc: {
	                isHidden: true
	            }
	        };
	    },
	    renderItem: function renderItem() {
	        var items = [];
	        for (var i = 0; i < this.state.pageList.length; i++) {
	            var data = this.state.pageList[i];
	            var child = Sophie.element(
	                A,
	                { "data-id": data.id },
	                data.title
	            );
	            child.creater = child._owner = this.creater;
	            child.parent = this;
	            items.push(child);
	        }
	        this.props.children = items;
	    },
	    renderChildren: function renderChildren() {
	        this.renderItem();
	        var items = [];
	        for (var i = 0; i < this.props.children.length; i++) {
	            var data = this.props.children[i];
	            items.push(Sophie.element(
	                "li",
	                { "data-id": data.id },
	                data
	            ));
	        }
	        return items;
	    },
	    getDefaultChildren: function getDefaultChildren() {
	        var items = [];
	        for (var i = 0; i < this.state.pageList.length; i++) {
	            var data = this.state.pageList[i];
	            items.push(Sophie.element(
	                "li",
	                { "data-id": data.id },
	                Sophie.element(
	                    A,
	                    { "data-id": data.id },
	                    data.title
	                )
	            ));
	        }
	        return items;
	    },

	    componentDidMount: function componentDidMount() {
	        var self = this;
	        this.state.isShow = false;

	        Sophie.ready(function () {

	            setTimeout(function () {

	                self.initPage();

	                self.activeBind();
	                self.navbarToggle = $("p-header p-nav-bar");

	                //
	                // self.navbarToggle.appendTo("p-header .p-container-fluid");
	                // self.navbarToggle.addClass("navbar-toggle-render")
	                //

	                var mask = $("#page-mask");
	                mask.click(function (ev) {
	                    self.hideSidebar();
	                });

	                $('p-site').addClass("nav-close");

	                self.navbarToggle.click(function () {
	                    // self.showPopup()
	                    self.showSidebar();
	                });

	                // $(document).click(function(ev){
	                //   var target = $(ev.target);
	                //
	                //   if(!target.closest(self.navbarToggle).length&&!target.closest(self.navbar).length){
	                //     self.hideSidebar();
	                //   }
	                //
	                // })
	            }, 0);
	        });
	    },
	    activeBind: function activeBind() {
	        var self = this;

	        for (var i = 0; i < this.state.pageList.length; i++) {
	            if (this.state.pageList[i].isActive) {
	                this.active(this.state.pageList[i].id);
	            }
	        }

	        $(this.nativeNode).delegate("li p-a", "click", function (ev) {
	            var li = $(ev.target).closest("p-a");
	            var id = li.attr("data-id");
	            var site = $("p-site");
	            if (site.length) {
	                site.get(0).vnode.active(id);
	                self.active(id);
	            } else {
	                self.active(id);
	            }
	        });
	    },

	    active: function active(id) {
	        var self = this;
	        var lis = $(".navbar-nav li p-a", self.nativeNode);
	        lis.removeClass("active");
	        lis.each(function (index, el) {
	            if ($(el).attr("data-id") == id) {
	                $(el).addClass("active");
	            }
	        });

	        this.hideSidebar();
	    },

	    removeItem: function removeItem(id) {
	        var children = this.state.pageList;

	        for (var i = 0; i < children.length; i++) {
	            if (children[i]["id"] == id) {
	                this.state.pageList.splice(i, 1);
	                this._update();
	            }
	        }

	        this.autoWidth();
	    },

	    addOne: function addOne(id, title, isActive, autoWidth) {

	        autoWidth = autoWidth ? autoWidth : true;

	        if ($('li[data-id=' + id + ']', this.nativeNode).length) {
	            return;
	        }

	        this.state.pageList.push({
	            id: id,
	            title: title
	        });

	        this._update();
	        if (isActive) {
	            this.active(id);
	        }

	        if (autoWidth) this.autoWidth();
	    },

	    createDefault: function createDefault() {},

	    initPage: function initPage() {
	        var pages = $("p-body").find("p-page");

	        var pageData = [];
	        pages.each(function (index, el) {
	            pageData.push({ id: $(el).attr("id"), title: $(el).attr("title"), isActive: $(el).hasClass("active") });
	        });

	        if (pageData.length) {

	            this.setState({ pageList: pageData });
	        } else {

	            this.createDefault();
	        }

	        this.autoWidth();
	    },

	    autoHeight: function autoHeight() {
	        //使用table-cell解决

	        $(".navbar-nav li", this.nativeNode).css("height", "100%");
	    },
	    autoWidth: function autoWidth() {

	        var li = $(".navbar-nav li", this.nativeNode);
	        var l = li.length;
	        // var allWidth = $(this).width();

	        // var width = (allWidth - 10 * (li.length - 1) ) / li.length / allWidth * 100;
	        // if (width < 20)width = 20;
	        li.css("width", 1 / l * 100 + "%");
	    },

	    showPopup: function showPopup() {
	        var self = this;
	        if ($(".fixed-nav", self).prop("isShow") == true) {
	            $(".fixed-nav", self).hide();
	            $(".fixed-nav", self).prop("isShow", false);

	            $("body").css("overflow", "");
	        } else {
	            $(".fixed-nav", self).show();

	            $(".fixed-nav", self).prop("isShow", true);

	            $("body").css("overflow", "hidden");
	            $(".fixed-nav", self).height($(window).height() - parseInt($(".fixed-nav", self).css("top")));
	        }
	    },
	    showSidebar: function showSidebar() {
	        var self = this;

	        $(this.nativeNode).addClass("nav-open");
	        $(this.nativeNode).removeClass("nav-close");
	    },

	    hideSidebar: function hideSidebar() {

	        $("p-site").removeClass("nav-open");
	        $("p-site").addClass("nav-close");
	    },

	    scale: function scale(el, width) {
	        var oldWidth = el.width();
	        var currentFontSize = parseInt(el.css("fontSize"));

	        var fontSize = width / oldWidth * currentFontSize;
	        el.css("fontSize", fontSize + "px");
	    }

	});

	Sophie.createStyleSheet({});

	Sophie.createStyleSheet({

	    'p-header p-nav-page ': {
	        display: 'none!important'
	    },
	    'p-nav-page-mobile': {
	        position: 'absolute',
	        left: 7 + "em",
	        top: '50px',
	        width: '200px!important',
	        height: "auto",
	        backgroundColor: 'rgba(255, 255, 255, 0.0)',
	        margin: '0!important'

	    },

	    'p-nav-page-mobile .navbar-nav ': {
	        backgroundColor: 'rgba(255, 255, 255, 0.9)'
	    },

	    ' p-nav-page-mobile .navbar-nav': {

	        width: '100%!important',
	        height: '100%!important',
	        left: '0px',
	        top: '0px',
	        backgroundColor: '#fff',
	        margin: '0!important',
	        display: "flex",
	        "flex-direction": "column"

	    },

	    'p-nav-page-mobile .navbar-nav li ': {
	        display: 'block',
	        float: 'none',
	        width: '100%!important',
	        "height": "3em"
	    },

	    'p-nav-page-mobile .navbar-nav li p-a ': {

	        textAlign: 'left',
	        padding: '0 20px',
	        width: "100%",
	        height: "100%"
	    },

	    'p-site.nav-open  p-header p-nav-page-mobile': {
	        display: "block"

	        // transition: "left 0.5s",
	        // left:"-200px"
	    },

	    'p-site.nav-close  p-header p-nav-page-mobile': {
	        display: "none"
	        // transition: "left 0.5s",
	        // left:0
	    },

	    'p-site.nav-open p-nav-page-mask ': {
	        display: "block!important"
	    },

	    'p-site.nav-close p-nav-page-mask ': {
	        display: "none"
	    },

	    '#page-mask': {
	        backgroundColor: 'rgba(0,0,0,0.7)',
	        zIndex: 9999
	    },

	    'p-site.nav-open #page-mask ': {
	        display: "block!important"
	    },

	    'p-site.nav-close #page-mask ': {
	        display: "none"
	    },

	    'p-site.nav-open p-nav-page-mobile ': {
	        display: "block!important"
	    },

	    'p-site.nav-close p-nav-page-mobile': {
	        display: "none"
	    },

	    'p-header': {
	        height: '4em'
	    }

	}, "@media (max-width: 767px)");

	module.exports = Nav;

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	var _pAPTextWrap;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var A = Sophie.createClass('p-a', {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            href: "/"
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        // var text = $("a",this).text();
	        // if(!$.trim(text)){
	        //     $("a",this).text("这是一个连接")
	        // }

	    },
	    render: function render() {
	        return Sophie.element(
	            "p-a",
	            { "data-id": this.props["data-id"] },
	            Sophie.element(
	                "a",
	                { href: this.props.href, "class": "p-text-wrap" },
	                this.children
	            )
	        );
	    },
	    setFontSize: function setFontSize(fontSize) {
	        $('.p-text-wrap', this.nativeNode).css("fontSize", fontSize);
	    },
	    setHref: function setHref(href) {
	        this.attributes.href = href;
	        this._update();
	    }
	});

	Sophie.createStyleSheet({
	    'p-a': {
	        overflow: 'hidden',
	        outline: 'none',

	        minHeight: '1rem',
	        lineHeight: '1rem',

	        width: '5rem',
	        display: 'table',
	        padding: '0 10px',

	        cursor: 'pointer',
	        verticalAlign: 'middle'

	    },

	    'p-a > .p-text-wrap > p-icon': {

	        display: 'inline!important',
	        marginRight: '0.25rem'

	    },

	    'p-a .p-text-wrap': (_pAPTextWrap = {
	        whiteSpace: 'nowrap',
	        textDecoration: 'none',
	        color: 'inherit',
	        fontSize: '14px',
	        fontFamily: 'inherit',
	        fontWeight: 'inherit',
	        fontStyle: 'inherit',
	        textAlign: 'inherit'
	    }, _defineProperty(_pAPTextWrap, "textDecoration", 'inherit'), _defineProperty(_pAPTextWrap, "backgroundColor", 'transparent !important'), _defineProperty(_pAPTextWrap, "height", '100%'), _defineProperty(_pAPTextWrap, "width", '100%'), _defineProperty(_pAPTextWrap, "display", 'table-cell'), _defineProperty(_pAPTextWrap, "verticalAlign", 'middle'), _pAPTextWrap),

	    'p-a .p-text-wrap * ': {
	        /* display: none !important;*/
	    }

	});

	module.exports = A;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(79);
	var GridLayout = __webpack_require__(77);
	var Layout = Sophie.createClass("p-layout", {
	    mixin: [GridLayout],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            style: "",
	            className: ""
	        };
	    },
	    render: function render() {
	        var className = this.props.className;
	        if (this.props.responseLayout) {
	            className += "response-layout";
	        }
	        return Sophie.element(
	            "p-layout",
	            { style: this.props.style, "class": className },
	            this.renderGridChildren()
	        );
	    }
	});

	var getFlexCSS = function getFlexCSS() {
	    if (utils.supportFlex) {
	        return utils.getFlexColumnCSS();
	    } else {
	        return {
	            display: "block"
	        };
	    }
	};

	var getFlexItemCSS = function getFlexItemCSS() {
	    if (utils.supportFlex) {
	        return utils.getFlexItemCSS();
	    } else {
	        return {
	            'float': 'left'
	        };
	    }
	};

	Sophie.createStyleSheet({
	    "p-layout": {
	        display: "block",
	        minHeight: '1em',
	        height: '5em',
	        width: '10em',
	        backgroundColor: "#eee"
	    },

	    "p-layout:before,p-layout:after": {
	        display: 'table',
	        lineHeight: 0,
	        content: '" "'
	    }

	});

	Layout.createStyleSheet({
	    "p-layout.response-layout > div > p-grid.grid-row": getFlexCSS(),
	    "p-layout.response-layout > div > p-grid.grid-row > *": getFlexItemCSS()

	}, "@media (max-width: 767px)");

	module.exports = Layout;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//可以作为容器，但不能被选择
	var utils = __webpack_require__(79);
	var GridLayout = __webpack_require__(77);
	var Layout = Sophie.createClass("p-layout-inner", {
	    mixin: [GridLayout],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            style: "",
	            id: this.props.id || "el-" + Date.now(),
	            className: ""
	        };
	    },
	    render: function render() {
	        var className = this.props.className;
	        if (this.props.responseLayout) {
	            className += "response-layout";
	        }
	        return Sophie.element(
	            "p-layout-inner",
	            { id: this.props.id, style: this.props.style, "class": className },
	            this.renderGridChildren()
	        );
	    }
	});

	var getFlexCSS = function getFlexCSS() {
	    if (utils.supportFlex) {
	        return utils.getFlexColumnCSS();
	    } else {
	        return {
	            display: "block"
	        };
	    }
	};

	var getFlexItemCSS = function getFlexItemCSS() {
	    if (utils.supportFlex) {
	        return utils.getFlexItemCSS();
	    } else {
	        return {
	            'float': 'left'
	        };
	    }
	};

	Sophie.createStyleSheet({
	    "p-layout-inner": {

	        display: 'block',
	        overflow: "visible",
	        minHeight: '1em',
	        height: '5em',

	        width: '10rem'

	    },

	    "p-layout-inner:before, p-layout-inner:after": {
	        display: 'table',
	        lineHeight: 0,
	        content: "''"
	    },

	    "p-layout-inner::after": {
	        clear: "both"
	    }

	});

	Layout.createStyleSheet({
	    "p-layout-inner.response-layout > div > p-grid.grid-row": getFlexCSS(),
	    "p-layout-inner.response-layout > div > p-grid.grid-row > *": getFlexItemCSS()

	}, "@media (max-width: 767px)");

	module.exports = Layout;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var LayoutTow = Sophie.createClass("p-layout-two", {

	  getDefaultProps: function getDefaultProps() {
	    return {
	      firstWidth: "50%",
	      secondWidth: "50%",
	      height: 100
	    };
	  },
	  componentWillMount: function componentWillMount() {},

	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { "class": "c-row-2 p-layout-wrap" })];
	  },

	  componentDidInsert: function componentDidInsert() {
	    var self = this;
	    this.autoContainerHeight();
	    if ($(document).width() <= 767 && this.parent && this.parent.name == "p-page") {
	      //可能已经被删除了

	      if (this.nativeNode.parentNode) {
	        self.mobileRender();
	      }
	    } else {
	      if (self.nativeNode.parentNode) $(self).find("p-layout-wrap").css("fontSize", "");
	      $(self.nativeNode).removeClass("viewport-mobile");
	      self.isMobile = false;
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    var self = this;

	    setTimeout(function () {

	      self.autoContainerHeight();
	      if ($(document).width() <= 767 && self.parent && self.parent.name == "p-page") {
	        //可能已经被删除了


	        if (self.nativeNode.parentNode) {

	          self.mobileRender();
	        }
	      } else {
	        if (self.nativeNode.parentNode) $(self.nativeNode).find("> .p-layout-wrap").css("fontSize", "");
	        $(self.nativeNode).removeClass("viewport-mobile");
	        self.isMobile = false;
	      }

	      $(window).on("resize", function () {

	        setTimeout(function () {
	          if ($(document).width() <= 767 && self.parent && self.parent.name == "p-page") {
	            //可能已经被删除了
	            if (self.nativeNode.parentNode) {
	              self.mobileRender();
	            }
	          } else {
	            if (self.nativeNode.parentNode) $(self.nativeNode).find("> .p-layout-wrap").css("fontSize", "");
	            $(self.nativeNode).removeClass("viewport-mobile");
	            self.isMobile = false;
	          }
	        }, 100);
	      });
	    }, 10);
	  },
	  render: function render() {

	    return Sophie.element(
	      "p-layout-two",
	      null,
	      this.renderItem()
	    );
	  },
	  renderItem: function renderItem() {

	    this.props.children[0].attributes.style = "width:" + this.props.firstWidth;
	    this.props.children[1].attributes.style = "width:" + this.props.secondWidth;
	    return this.props.children;
	  },
	  setItemWidth: function setItemWidth(firstWidth, secondWidth) {
	    this.props.firstWidth = firstWidth, this.props.secondWidth = secondWidth;
	  },
	  setItemHeight: function setItemHeight(height, currentFontSize) {

	    this.props.height = height;
	    this.props.fontSize = currentFontSize;
	    this.setContainerHeight(height, currentFontSize);
	  },
	  mobileRender: function mobileRender() {

	    if (!this.isMobile) {

	      var winWidth = $(document).width();

	      var list1Width = $(this.nativeNode).find("> .c-row-1").width();
	      var list2Width = $(this.nativeNode).find("> .c-row-2").width();

	      var currentFontSize = parseFloat($(this.nativeNode).css("fontSize"));
	      var fontSize1 = winWidth / list1Width * currentFontSize;
	      var fontSize2 = winWidth / list2Width * currentFontSize;
	      console.log(fontSize1, currentFontSize, winWidth, list1Width);
	      $(this.nativeNode).find("> .c-row-1").css("fontSize", fontSize1 + "px");
	      $(this.nativeNode).find("> .c-row-2").css("fontSize", fontSize2 + "px");

	      $(this.nativeNode).addClass("viewport-mobile");
	      this.isMobile = true;
	    }

	    //设置ul的字体
	  },
	  setContainerHeight: function setContainerHeight(height, currentFontSize) {

	    var fontSize1 = parseFloat($(this.nativeNode).find("> .c-row-1").css("fontSize"));
	    var fontSize2 = parseFloat($(this.nativeNode).find("> .c-row-2").css("fontSize"));

	    var height = height || $(this.nativeNode).height();

	    if ($(this.nativeNode).hasClass("viewport-mobile")) {

	      var value = height / (fontSize1 + fontSize2) + "em";
	    } else {
	      var value = play.pxToEm(height, currentFontSize) + "em";
	    }

	    console.log("autoContainerHeight", height, currentFontSize, value);
	    $(this.nativeNode).find("> .p-layout-wrap").css("height", value);
	  },

	  autoContainerHeight: function autoContainerHeight() {
	    var currentFontSize = parseFloat($(this.nativeNode).css("fontSize"));
	    var fontSize1 = parseFloat($(this.nativeNode).find("> .c-row-1").css("fontSize"));
	    var fontSize2 = parseFloat($(this.nativeNode).find("> .c-row-2").css("fontSize"));

	    var height = height || $(this.nativeNode).height();

	    if ($(this.nativeNode).hasClass("viewport-mobile")) {

	      var value = height / (fontSize1 + fontSize2) + "em";
	    } else {
	      var value = play.pxToEm(height, currentFontSize) + "em";
	    }

	    console.log("autoContainerHeight", height, currentFontSize, value);
	    $(this.nativeNode).find("> .p-layout-wrap").css("height", value);
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-two ': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    height: "4em",
	    display: 'table',
	    width: '10em'

	  },

	  'p-layout-two:before,.p-layout-two:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-two  > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell",
	    overflowY: "hidden"

	  }

	});

	Sophie.createStyleSheet({
	  'p-page > .p-container-fluid > p-layout-two': {
	    //  width:'100%!important',
	    //  marginLeft:"0!important",
	    //  marginRight:"0!important",
	  },

	  'p-page > .p-container-fluid > p-layout-two > .p-layout-wrap': {
	    // display:"block!important"
	  },

	  'p-layout-two.viewport-mobile': {
	    display: "block",
	    height: "auto!important",
	    width: '100%!important',
	    marginLeft: "0!important",
	    marginRight: "0!important"
	  },

	  'p-layout-two.viewport-mobile > .p-layout-wrap': {
	    display: "table",
	    float: "none",
	    width: "100%!important"
	  }

	}, "@media (max-width: 767px)");

	module.exports = LayoutTow;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var LayoutTow = Sophie.createClass("p-layout-three", {

	  getDefaultProps: function getDefaultProps() {
	    return {
	      firstWidth: "33.3%",
	      secondWidth: "33.3%",
	      threeWidth: "33.3%",
	      height: 100
	    };
	  },
	  componentDidInsert: function componentDidInsert() {
	    var self = this;

	    if ($(document).width() <= 767 && this.parent && this.parent.name == "p-page") {
	      //可能已经被删除了
	      if (this.nativeNode.parentNode) {
	        self.mobileRender();
	      }
	    } else {
	      if (self.nativeNode.parentNode) $(self).find("p-layout-wrap").css("fontSize", "");
	      $(self.nativeNode).removeClass("viewport-mobile");
	      self.isMobile = false;
	    }
	  },

	  componentDidMount: function componentDidMount() {

	    var self = this;

	    setTimeout(function () {
	      self.autoContainerHeight();
	      if ($(document).width() <= 767 && self.parent && self.parent.name == "p-page") {
	        //可能已经被删除了
	        if (self.nativeNode.parentNode) {
	          self.mobileRender();
	        }
	      } else {
	        if (self.nativeNode.parentNode) $(self.nativeNode).find("> .p-layout-wrap").css("fontSize", "");
	        $(self.nativeNode).removeClass("viewport-mobile");
	        self.isMobile = false;
	      }

	      $(window).on("resize", function () {
	        setTimeout(function () {
	          if ($(document).width() <= 767 && self.parent && self.parent.name == "p-page") {
	            //可能已经被删除了
	            if (self.nativeNode.parentNode) {
	              self.mobileRender();
	            }
	          } else {
	            if (self.nativeNode.parentNode) $(self.nativeNode).find("> .p-layout-wrap").css("fontSize", "");
	            $(self.nativeNode).removeClass("viewport-mobile");
	            self.isMobile = false;
	          }
	        }, 100);
	      });
	    }, 100);
	  },
	  componentWillMount: function componentWillMount() {},
	  render: function render() {
	    return Sophie.element(
	      "p-layout-three",
	      null,
	      this.renderItem()
	    );
	  },

	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { style: "width:" + this.props.firstWidth, "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { style: "width:" + this.props.secondWidth, "class": "c-row-2 p-layout-wrap" }), Sophie.element(Layout, { style: "width:" + this.props.threeWidth, "class": "c-row-3 p-layout-wrap" })];
	  },

	  renderItem: function renderItem() {

	    return this.props.children;
	  },
	  setItemWidth: function setItemWidth(firstWidth, secondWidth, threeWidth) {
	    this.props.firstWidth = firstWidth, this.props.secondWidth = secondWidth;
	    this.props.threeWidth = threeWidth;
	  },
	  setItemHeight: function setItemHeight(height, fontSize) {

	    this.props.height = height;
	    this.autoContainerHeight(height, fontSize);
	  },
	  mobileRender: function mobileRender() {

	    if (!this.isMobile) {

	      var winWidth = $(document).width();

	      var list1Width = $(this.nativeNode).find("> .c-row-1").width();
	      var list2Width = $(this.nativeNode).find("> .c-row-2").width();
	      var list3Width = $(this.nativeNode).find("> .c-row-2").width();

	      var currentFontSize = parseFloat($(this.nativeNode).css("fontSize"));
	      var fontSize1 = winWidth / list1Width * currentFontSize;
	      var fontSize2 = winWidth / list2Width * currentFontSize;
	      var fontSize3 = winWidth / list3Width * currentFontSize;
	      console.log(fontSize1, currentFontSize, winWidth, list1Width);
	      $(this.nativeNode).find("> .c-row-1").css("fontSize", fontSize1 + "px");
	      $(this.nativeNode).find("> .c-row-2").css("fontSize", fontSize2 + "px");
	      $(this.nativeNode).find("> .c-row-3").css("fontSize", fontSize3 + "px");

	      $(this.nativeNode).addClass("viewport-mobile");
	      this.isMobile = true;
	    }

	    //设置ul的字体
	  },
	  setContainerHeight: function setContainerHeight(height, currentFontSize) {

	    var fontSize1 = parseFloat($(this.nativeNode).find("> .c-row-1").css("fontSize"));
	    var fontSize2 = parseFloat($(this.nativeNode).find("> .c-row-2").css("fontSize"));
	    var fontSize3 = parseFloat($(this.nativeNode).find("> .c-row-3").css("fontSize"));

	    var height = height || $(this.nativeNode).height();

	    if ($(this.nativeNode).hasClass("viewport-mobile")) {

	      var value = height / (fontSize1 + fontSize2 + fontSize3) + "em";
	    } else {
	      var value = play.pxToEm(height, currentFontSize) + "em";
	    }

	    console.log("autoContainerHeight", height, currentFontSize, value);
	    $(this.nativeNode).find("> .p-layout-wrap").css("height", value);
	  },

	  autoContainerHeight: function autoContainerHeight() {
	    var currentFontSize = parseFloat($(this.nativeNode).css("fontSize"));
	    var fontSize1 = parseFloat($(this.nativeNode).find("> .c-row-1").css("fontSize"));
	    var fontSize2 = parseFloat($(this.nativeNode).find("> .c-row-2").css("fontSize"));
	    var fontSize3 = parseFloat($(this.nativeNode).find("> .c-row-3").css("fontSize"));

	    var height = height || $(this.nativeNode).height();

	    if ($(this.nativeNode).hasClass("viewport-mobile")) {

	      var value = height / (fontSize1 + fontSize2 + fontSize3) + "em";
	    } else {
	      var value = play.pxToEm(height, currentFontSize) + "em";
	    }

	    $(this.nativeNode).find("> .p-layout-wrap").css("height", value);
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-three ': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    height: '4em',
	    display: 'table',
	    width: '10em'

	  },

	  'p-layout-three:before,.p-layout-three:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-three  > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell"

	  }

	});

	Sophie.createStyleSheet({
	  'p-page > .p-container-fluid > p-layout-three': {
	    //  width:'100%!important',
	    //  marginLeft:"0!important",
	    //  marginRight:"0!important",
	  },

	  'p-page > .p-container-fluid > p-layout-three > .p-layout-wrap': {
	    // display:"block!important"
	  },

	  'p-layout-three.viewport-mobile': {
	    display: "block",
	    height: "auto!important",
	    width: '100%!important',
	    marginLeft: "0!important",
	    marginRight: "0!important"
	  },

	  'p-layout-three.viewport-mobile > .p-layout-wrap': {
	    display: "table",
	    float: "none",
	    width: "100%!important"
	  }

	}, "@media (max-width: 767px)");

	module.exports = LayoutTow;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);

	//响应式元素不能被嵌套
	//@todo 实现这个机制，嵌套了也不会做响应
	var LayoutTow = Sophie.createClass("p-layout-two-response", {

	  getDefaultProps: function getDefaultProps() {
	    return {
	      height: 2, //pc端高度，em，
	      width: 10, //pc端宽度，em
	      // phoneHeight:4,//pc端高度，em，


	      widthPercent1: "50", //第一列宽度,%
	      fontSize1: 1, //第一列字体大小
	      height1: null, //第一列高度，移动端使用

	      widthPercent2: "50", //第二列宽度,%
	      fontSize2: 1, //第二列字体大小
	      height2: null };
	  },
	  componentWillMount: function componentWillMount() {},

	  componentDidMount: function componentDidMount() {
	    var self = this;

	    //销毁后事情不会移除
	    $(window).on("resize", function () {
	      if (!self.nativeNode.ownerDocument) {
	        return;
	      }
	      setTimeout(function () {
	        self._update();
	        setTimeout(function () {
	          self.props.children[0]._update();
	          self.props.children[1]._update();
	        }, 0);
	      }, 0);
	    });
	  },

	  render: function render() {
	    var className = "";

	    if ($(document).width() <= 767) {
	      className = "mobile";
	    }

	    return Sophie.element(
	      "p-layout-two-response",
	      { "class": className },
	      this.renderItem()
	    );
	  },
	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { "class": "c-row-2 p-layout-wrap" })];
	  },

	  renderItem: function renderItem() {

	    if ($(document).width() <= 767) {

	      var fontSize1 = this.getResponseFontSize(this.props.width, this.props.width * this.props.widthPercent1 / 100);
	      var fontSize2 = this.getResponseFontSize(this.props.width, this.props.width * this.props.widthPercent2 / 100);

	      if (!this.props.phoneHeight) {
	        var height = this.props.height;
	      } else {
	        var height = this.props.phoneHeight / (fontSize1 + fontSize2);
	      }

	      this.props.children[0].attributes.style = "width:" + this.props.width * this.props.widthPercent1 / 100 + "em;" + "height:" + height + "em; " + "font-size:" + fontSize1 + "rem";
	      this.props.children[1].attributes.style = "width:" + this.props.width * this.props.widthPercent2 / 100 + "em;" + "height:" + height + "em; " + "font-size:" + fontSize2 + "rem";
	    } else {

	      this.props.children[0].attributes.style = "width:" + this.props.widthPercent1 + "%";
	      this.props.children[1].attributes.style = "width:" + this.props.widthPercent2 + "%";
	    }

	    return this.props.children;
	  },

	  //resize时需要设置宽度
	  setItemWidth: function setItemWidth(firstWidth, secondWidth) {
	    this.props.widthPercent1 = firstWidth, this.props.widthPercent2 = secondWidth;
	  },

	  //resize时需要设置高度
	  setItemHeight: function setItemHeight(height, currentFontSize) {},

	  resize: function resize(coord) {

	    if ($(document).width() <= 767) {
	      if (coord.height) {
	        this.props.phoneHeight = coord.height / coord.fontSize;
	      }
	      if (coord.width) {
	        this.props.phoneWidth = coord.width / coord.fontSize;
	      }

	      this._update();
	      this.props.children[0]._update();
	      this.props.children[1]._update();
	    } else {
	      if (coord.height) {
	        this.props.height = coord.height / coord.fontSize;
	      }
	      if (coord.width) {
	        this.props.width = coord.width / coord.fontSize;
	      }
	    }
	  },

	  //width为em
	  getResponseFontSize: function getResponseFontSize(parentWidth, width) {

	    var parentFontSize = this.fontSize();
	    var phoneWidth = width * parentFontSize;

	    //单位为rem, rem为单元可保障fontSize的大小是可变的
	    var phoneFontSize = parentWidth * parentFontSize / phoneWidth;
	    return phoneFontSize;
	  },

	  fontSize: function fontSize() {
	    return parseFloat($(this.nativeNode).css("fontSize"));
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-two-response': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    height: "2em",
	    display: 'table',
	    width: '10em'

	  },

	  'p-layout-two-response:before,.p-layout-two-response:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-two-response > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell",
	    overflowX: "hidden"

	  }

	});

	Sophie.createStyleSheet({

	  'p-layout-two-response': {
	    display: "block",
	    height: "auto!important"

	  },

	  'p-layout-two-response > .p-layout-wrap': {
	    display: "table",
	    float: "none",
	    width: "100%!important"
	  }

	}, "@media (max-width: 767px)");

	module.exports = LayoutTow;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var LayoutTow = Sophie.createClass("p-layout-two-noresponse", {

	  getDefaultProps: function getDefaultProps() {
	    return {
	      //百分比
	      firstWidth: "50%",
	      secondWidth: "50%"
	    };
	  },
	  componentWillMount: function componentWillMount() {},

	  componentDidInsert: function componentDidInsert() {
	    var self = this;
	  },

	  componentDidMount: function componentDidMount() {
	    var self = this;
	  },
	  render: function render() {
	    return Sophie.element(
	      "p-layout-two-noresponse",
	      null,
	      this.renderItem()
	    );
	  },
	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { style: "width:" + this.props.firstWidth, "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { style: "width:" + this.props.secondWidth, "class": "c-row-2 p-layout-wrap" })];
	  },
	  renderItem: function renderItem() {

	    return this.props.children;
	  },
	  setItemWidth: function setItemWidth(firstWidth, secondWidth) {
	    this.props.firstWidth = firstWidth, this.props.secondWidth = secondWidth;
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-two-noresponse': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    height: "2em",
	    display: 'table',
	    width: '100%'

	  },

	  'p-layout-two-noresponse:before,.p-layout-two-noresponse:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-two-noresponse  > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell",
	    overflowX: "hidden"

	  }

	});

	module.exports = LayoutTow;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var LayoutTow = Sophie.createClass("p-layout-three-response", {

	  getDefaultProps: function getDefaultProps() {
	    return {

	      height: 2, //pc端高度，em，
	      width: 10, //pc端宽度，em


	      widthPercent1: "33.3", //第一列宽度,%
	      fontSize1: 1, //第一列字体大小
	      height1: null, //第一列高度，移动端使用

	      widthPercent2: "33.3", //第二列宽度,%
	      fontSize2: 1, //第二列字体大小
	      height2: null, //第二列高度，移动端使用

	      widthPercent3: "33.3", //第三列宽度,%
	      fontSize3: 1, //第三列字体大小
	      height3: null };
	  },
	  componentWillMount: function componentWillMount() {},

	  componentDidMount: function componentDidMount() {
	    var self = this;

	    //销毁后事情不会移除
	    $(window).on("resize", function () {
	      if (!self.nativeNode.ownerDocument) {
	        return;
	      }
	      setTimeout(function () {
	        self._update();
	        setTimeout(function () {
	          self.props.children[0]._update();
	          self.props.children[1]._update();
	          self.props.children[2]._update();
	        }, 0);
	      }, 0);
	    });
	  },

	  render: function render() {
	    var className = "";

	    if ($(document).width() <= 767) {
	      className = "mobile";
	    }

	    return Sophie.element(
	      "p-layout-three-response",
	      { "class": className },
	      this.renderItem()
	    );
	  },

	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { "class": "c-row-2 p-layout-wrap" }), Sophie.element(Layout, { "class": "c-row-3 p-layout-wrap" })];
	  },

	  renderItem: function renderItem() {

	    if ($(document).width() <= 767) {

	      var fontSize1 = this.getResponseFontSize(this.props.width, this.props.width * this.props.widthPercent1 / 100);
	      var fontSize2 = this.getResponseFontSize(this.props.width, this.props.width * this.props.widthPercent2 / 100);
	      var fontSize3 = this.getResponseFontSize(this.props.width, this.props.width * this.props.widthPercent3 / 100);

	      if (!this.props.phoneHeight) {
	        var height = this.props.height;
	      } else {
	        var height = this.props.phoneHeight / (fontSize1 + fontSize2 + fontSize3);
	      }

	      this.props.children[0].attributes.style = "width:" + this.props.width * this.props.widthPercent1 / 100 + "em;" + "height:" + height + "em; " + "font-size:" + fontSize1 + "rem";
	      this.props.children[1].attributes.style = "width:" + this.props.width * this.props.widthPercent2 / 100 + "em;" + "height:" + height + "em; " + "font-size:" + fontSize2 + "rem";
	      this.props.children[2].attributes.style = "width:" + this.props.width * this.props.widthPercent3 / 100 + "em;" + "height:" + height + "em; " + "font-size:" + fontSize3 + "rem";
	    } else {

	      this.props.children[0].attributes.style = "width:" + this.props.widthPercent1 + "%";
	      this.props.children[1].attributes.style = "width:" + this.props.widthPercent2 + "%";
	      this.props.children[2].attributes.style = "width:" + this.props.widthPercent3 + "%";
	    }

	    return this.props.children;
	  },

	  //resize时需要设置高度
	  setItemHeight: function setItemHeight(height, currentFontSize) {},

	  resize: function resize(coord) {

	    if ($(document).width() <= 767) {
	      if (coord.height) {
	        this.props.phoneHeight = coord.height / coord.fontSize;
	      }
	      if (coord.width) {
	        this.props.phoneWidth = coord.width / coord.fontSize;
	      }

	      this._update();
	      this.props.children[0]._update();
	      this.props.children[1]._update();
	      this.props.children[2]._update();
	    } else {
	      if (coord.height) {
	        this.props.height = coord.height / coord.fontSize;
	      }
	      if (coord.width) {
	        this.props.width = coord.width / coord.fontSize;
	      }
	    }
	  },

	  //width为em
	  getResponseFontSize: function getResponseFontSize(parentWidth, width) {

	    var parentFontSize = this.fontSize();
	    var phoneWidth = width * parentFontSize;

	    //单位为rem, rem为单元可保障fontSize的大小是可变的
	    var phoneFontSize = parentWidth * parentFontSize / phoneWidth;
	    return phoneFontSize;
	  },

	  fontSize: function fontSize() {
	    return parseFloat($(this.nativeNode).css("fontSize"));
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-three-response': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    height: "2em",
	    display: 'table',
	    width: '10em'

	  },

	  'p-layout-three-response:before,.p-layout-three-response:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-three-response > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell",
	    overflowX: "hidden"

	  }

	});

	Sophie.createStyleSheet({

	  'p-layout-three-response': {
	    display: "block",
	    height: "auto!important"

	  },

	  'p-layout-three-response > .p-layout-wrap': {
	    overflowY: "hidden",
	    display: "table",
	    float: "none",
	    width: "100%!important"
	  }

	}, "@media (max-width: 767px)");

	module.exports = LayoutTow;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var LayoutTow = Sophie.createClass("p-layout-three-noresponse", {

	  getDefaultProps: function getDefaultProps() {
	    return {
	      //百分比
	      firstWidth: "33.3%",
	      secondWidth: "33.3%",
	      threeWidth: "33.3%"
	    };
	  },
	  componentWillMount: function componentWillMount() {},

	  componentDidInsert: function componentDidInsert() {
	    var self = this;
	  },

	  componentDidMount: function componentDidMount() {
	    var self = this;
	  },
	  render: function render() {
	    return Sophie.element(
	      "p-layout-three-noresponse",
	      null,
	      this.renderItem()
	    );
	  },
	  getDefaultChildren: function getDefaultChildren() {
	    return [Sophie.element(Layout, { style: "width:" + this.props.firstWidth, "class": "c-row-1 p-layout-wrap" }), Sophie.element(Layout, { style: "width:" + this.props.secondWidth, "class": "c-row-2 p-layout-wrap" }), Sophie.element(Layout, { style: "width:" + this.props.threeWidth, "class": "c-row-3 p-layout-wrap" })];
	  },
	  renderItem: function renderItem() {

	    return this.props.children;
	  },

	  setItemWidth: function setItemWidth(firstWidth, secondWidth, threeWidth) {
	    this.props.firstWidth = firstWidth, this.props.secondWidth = secondWidth;
	    this.props.threeWidth = threeWidth;
	  }

	});

	Sophie.createStyleSheet({
	  'p-layout-three-noresponse': {

	    overflow: 'hidden',
	    minHeight: '10px',
	    //小于导航的高度，方便注入
	    height: "2em",
	    display: 'table',
	    width: '10em'

	  },

	  'p-layout-three-noresponse:before,.p-layout-three-noresponse:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-layout-three-noresponse  > .p-layout-wrap  ': {

	    width: '50%',
	    minHeight: '10px',
	    height: "100%",
	    display: "table-cell",
	    overflowX: "hidden"

	  }

	});

	module.exports = LayoutTow;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _pPicA, _pPicCircleA, _pImgA;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Layout = __webpack_require__(90);
	var GridLayout = __webpack_require__(77);

	var PIC = Sophie.createClass("p-pic", {
	    mixin: [GridLayout],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            defaultSrc: "http://dotlinkface.oss-cn-shanghai.aliyuncs.com/default.jpg",
	            defaultHref: "#"
	        };
	    },
	    componentDidMount: function componentDidMount() {

	        // var src = $(this.node).attr("src")||"http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg"
	        // var href = $(this.node).attr("href")||"/editor/img/3.jpg"
	        // this.setHref(href);
	        // this.setSrc(src)
	    },

	    render: function render() {

	        var src = this.props.src || this.props.defaultSrc;
	        var href = this.props.href || "#";

	        var background = "background-image:url(" + src + ")";
	        return Sophie.element(
	            "p-pic",
	            null,
	            Sophie.element("a", { href: href, style: background }),
	            Sophie.element(
	                "div",
	                { "class": "p-layout-inner" },
	                this.renderGridChildren()
	            )
	        );
	    },
	    setHref: function setHref(href) {
	        // $(this.node).attr("href",href);
	        // var a = $(this.node).find("a");
	        // a.attr("href", href)
	        this.attributes.href = href;
	        this._update();
	    },

	    setSrc: function setSrc(src) {
	        $(this.node).attr("src", src);
	        var a = $(this.node).find("a");
	        if (src) {
	            a.css("background-image", "url(" + src + ")");
	        }

	        this.attributes.src = src;
	        this._update();
	    }
	});

	PIC.createStyleSheet({
	    'p-pic': {
	        display: 'block',
	        width: '5em',
	        height: '5em',
	        overflow: 'visible',
	        position: 'relative'
	    },

	    'p-pic > div': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%'

	    },

	    'p-pic  > a': (_pPicA = {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%',
	        backgroundSize: 'cover',
	        backgroundRepeat: 'no-repeat!important',
	        backgroundPosition: 'center center',
	        backgroundImage: 'url(http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg)'
	    }, _defineProperty(_pPicA, "position", 'relative'), _defineProperty(_pPicA, "borderRadius", 'inherit'), _pPicA),

	    'p-pic > .children,p-pic > .p-layout-inner': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%'
	    },

	    'p-pic  a img': {
	        width: '100%'
	    }

	});

	PIC.createStyleSheet({
	    "p-pic": {}
	}, "@media (max-width: 767px)");

	Sophie.createClass("p-pic-circle", {
	    mixin: [GridLayout],
	    componentDidMount: function componentDidMount() {

	        var src = $(this.node).attr("src") || "http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg";
	        var href = $(this.node).attr("href") || "/editor/img/3.jpg";
	        this.setHref(href);
	        this.setSrc(src);
	    },

	    render: function render() {
	        return Sophie.element(
	            "p-pic-circle",
	            null,
	            Sophie.element("a", { href: "/editor/img/4.jpg" }),
	            Sophie.element(
	                "div",
	                { "class": "p-layout-inner" },
	                this.renderGridChildren()
	            )
	        );
	    },

	    setHref: function setHref(href) {
	        $(this.node).attr("href", href);
	        var a = $(this.node).find("a");
	        a.attr("href", href);
	    },

	    setSrc: function setSrc(src) {
	        $(this.node).attr("src", src);
	        var a = $(this.node).find("a");
	        if (src) {
	            a.css("background-image", "url(" + src + ")");
	        }
	    }
	});

	Sophie.createStyleSheet({
	    'p-pic-circle': {
	        display: 'block',
	        width: '5em',
	        height: '5em',
	        border: 0,
	        overflow: 'hidden',
	        position: 'relative',
	        borderRadius: '50%'
	    },

	    'p-pic-circle > div': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%'

	    },

	    'p-pic-circle  > a': (_pPicCircleA = {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%',
	        backgroundSize: 'cover',
	        backgroundRepeat: 'no-repeat!important',
	        backgroundPosition: 'center center',
	        backgroundImage: 'url(http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg)'
	    }, _defineProperty(_pPicCircleA, "position", 'relative'), _defineProperty(_pPicCircleA, "borderRadius", 'inherit'), _pPicCircleA),

	    'p-pic-circle > .p-layout-inner': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%'
	    },

	    'p-pic-circle  a img': {
	        width: '100%'
	    }

	});

	Sophie.createClass("p-img", {

	    componentDidMount: function componentDidMount() {
	        var src = $(this.node).attr("src") || "/editor/img/3.jpg";
	        var href = $(this.node).attr("href") || "/editor/img/3.jpg";
	        this.setHref(href);
	        this.setSrc(src);
	    },

	    setHref: function setHref(href) {
	        $(this.node).attr("href", href);
	        var a = $(this.node).find("a");
	        a.attr("href", href);
	    },

	    setSrc: function setSrc(src) {
	        $(this.node).attr("src", src);
	        var a = $(this.node).find("a");
	        var img = $(this.node).find("a img");
	        if (src) {
	            img.prop("src", src);
	        }
	    },
	    rener: function rener() {
	        return Sophie.element(
	            "div",
	            null,
	            Sophie.element("a", { href: "/editor/img/4.jpg" }),
	            Sophie.element("children", null)
	        );
	    }
	});

	Sophie.createStyleSheet({
	    'p-img': {
	        display: 'block',
	        width: '4em',
	        height: 'auto!important',

	        border: 0,
	        overflow: 'hidden',
	        position: 'relative'
	    },

	    'p-img > a': (_pImgA = {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,

	        width: '100%',
	        backgroundSize: 'cover',
	        backgroundRepeat: 'no-repeat!important',
	        backgroundPosition: 'center center',
	        backgroundImage: 'url(http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg)'
	    }, _defineProperty(_pImgA, "position", 'relative'), _defineProperty(_pImgA, "borderRadius", 'inherit'), _pImgA),

	    'p-img > children': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        display: 'block',
	        border: 0,
	        width: '100%'
	    },

	    'p-img > a > img': {
	        width: '100%'
	    }

	});

	module.exports = PIC;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(90);
	var GridLayout = __webpack_require__(77);

	var PIC = Sophie.createClass("p-bg", {
	    mixin: [GridLayout],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            src: "http://dotlinkface.oss-cn-shanghai.aliyuncs.com/default.jpg",
	            fullWidth: true
	        };
	    },
	    componentDidMount: function componentDidMount() {

	        // var src = $(this.node).attr("src")||"http://img.tuku.cn/file_big/201502/ad45f0968eba4b92ba549cc7abf0e70a.jpg"
	        // var href = $(this.node).attr("href")||"/editor/img/3.jpg"
	        // this.setHref(href);
	        // this.setSrc(src)
	    },

	    render: function render() {

	        var background = "background-image:url(" + this.props.src + ")";
	        return Sophie.element(
	            "p-bg",
	            null,
	            Sophie.element(
	                "div",
	                { "class": "p-bg-wrap" },
	                Sophie.element("div", { "class": "p-bg-content", style: background })
	            ),
	            Sophie.element(
	                "div",
	                { "class": "p-layout-inner" },
	                this.renderGridChildren()
	            )
	        );
	    },

	    setSrc: function setSrc(src) {
	        this.props.src = src;
	        this._update();
	    }
	});

	PIC.createStyleSheet({
	    'p-bg': {
	        display: 'block',
	        width: '100%!important',
	        height: '10em',
	        overflow: 'visible',
	        position: 'relative'
	    },

	    'p-bg  .p-bg-wrap, p-bg .p-bg-content': {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',

	        display: 'block',
	        border: 0,
	        width: '100%'

	    },

	    'p-bg > .children,p-bg > .p-layout-inner': {}

	});

	PIC.createStyleSheet({
	    "p-pic": {}
	}, "@media (max-width: 767px)");

	module.exports = PIC;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var masonry = __webpack_require__(100);

	var Pic = __webpack_require__(97);

	var NavBar = Sophie.createClass("p-masonry", {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            initWidth: 600,
	            initHeight: 500,
	            columnNum: 2,
	            gutter: 10
	        };
	    },

	    getDefaultChildren: function getDefaultChildren() {
	        return [Sophie.element(Pic, null), Sophie.element(Pic, null), Sophie.element(Pic, null), Sophie.element(Pic, null)];
	    },

	    renderChildren: function renderChildren() {
	        var width = this.props.initWidth;
	        var oNum = this.props.columnNum;
	        var columnWith = width - this.props.gutter * (oNum - 1);
	        var children = [];
	        var style = "width:" + columnWith / oNum + "px;height:200px;margin-bottom:" + this.props.gutter + "px";
	        for (var i = 0; i < this.props.children.length; i++) {
	            children.push(Sophie.element(
	                "div",
	                { "class": "grid-item" },
	                Sophie.element(
	                    "div",
	                    { "class": "grid-item-content", style: style },
	                    Sophie.element(
	                        "div",
	                        { "class": "grid-ceil" },
	                        this.props.children[i]
	                    )
	                )
	            ));
	        }
	        return children;
	    },

	    render: function render() {

	        return Sophie.element(
	            "p-masonry",
	            null,
	            Sophie.element(
	                "div",
	                { "class": "grid" },
	                this.renderChildren()
	            )
	        );
	    },

	    componentDidMount: function componentDidMount() {
	        var self = this;

	        self.initRowColumn();
	        var width = this.props.initWidth;
	        var oNum = this.props.columnNum;
	        var columnWidth = (width - this.props.gutter * (oNum - 1)) / oNum;

	        console.log(columnWidth);

	        var grid = new masonry($(".grid", this.nativeNode).get(0), {
	            // columnWidth: '.grid-sizer',

	            gutter: self.props.gutter,
	            columnWidth: columnWidth,
	            horizontalOrder: true,

	            itemSelector: '.grid-item',
	            percentPosition: true,
	            resize: false,
	            containerStyle: { width: width + "px" }

	        });

	        self.grid = grid;

	        // grid.imagesLoaded().progress( function() {
	        //     grid.masonry('layout');
	        // });


	        // grid.layout();

	    },

	    initRowColumn: function initRowColumn() {
	        this.setAllColumnWidth();
	    },

	    showOrHideCeil: function showOrHideCeil() {},

	    addOne: function addOne(el) {

	        el = el || $('<div class="grid-item"><div class="grid-ceil"> <img  src="/editor/img/4.jpg"></div></grid-item>');

	        // debugger;
	        this.setColumnWidth(el);
	        this.grid.masonry().append(el).masonry('appended', el)
	        // layout
	        .masonry();

	        // this.setAllColumnWidth()


	        return el;
	    },

	    setColumn: function setColumn(columm) {
	        this.props.columnNum = column;
	        this.setAllColumnWidth();
	        this.grid.layout();
	        this.showOrHideCeil();
	    },

	    setRow: function setRow(row) {
	        $(this).attr("data-r-num", row);
	    },

	    setAllColumnWidth: function setAllColumnWidth(width) {
	        var width = width || $(this.nativeNode).width();
	        var oNum = this.props.columnNum;
	        var columnWith = 1 / oNum;

	        $(".grid-sizer", this.nativeNode).css("width", columnWith * 100 + "%");
	        // $(".grid-item", this).each(function (index, el) {
	        //     $(el).css("width", columnWith * 100 + "%");
	        // })
	    },

	    setColumnWidth: function setColumnWidth(column) {
	        var width = width || $(this.nativeNode).width();
	        var oNum = this.props.columnNum;
	        var columnWith = 1 / oNum;
	        $(".grid-sizer", this.nativeNode).css("width", columnWith * 100 + "%");
	        this.grid.layout();
	    },

	    setAllRowHeight: function setAllRowHeight(height) {},

	    setRowHeight: function setRowHeight(row) {}
	});

	Sophie.createStyleSheet({
	    'p-masonry': {
	        width: '580px',
	        'height': '10em',
	        display: 'block',
	        "position": "relative"
	    },
	    'p-masonry .grid': {
	        height: '100%',
	        width: '100%'
	    },

	    'p-masonry .grid-item': {

	        overflow: 'hidden'
	    },

	    'p-masonry .grid-ceil': {
	        width: '100%',
	        height: '100%'
	    },

	    'p-masonry .grid-sizer': {
	        width: '50%'
	    },

	    'p-masonry .gutter-sizer': {
	        width: '0em'
	    },

	    'p-masonry .grid-item p-pic ': {
	        width: '100%',
	        height: '100%'
	    }

	});

	Sophie.createStyleSheet({}, "@media (max-width: 767px)");

	module.exports = NavBar;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * Masonry v4.2.0
	 * Cascading grid layout library
	 * http://masonry.desandro.com
	 * MIT License
	 * by David DeSandro
	 */

	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(101), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(require('outlayer'), require('get-size'));
	  } else {
	    // browser global
	    window.Masonry = factory(window.Outlayer, window.getSize);
	  }
	})(window, function factory(Outlayer, getSize) {

	  'use strict';

	  // -------------------------- masonryDefinition -------------------------- //

	  // create an Outlayer layout class

	  var Masonry = Outlayer.create('masonry');
	  // isFitWidth -> fitWidth
	  Masonry.compatOptions.fitWidth = 'isFitWidth';

	  var proto = Masonry.prototype;

	  proto._resetLayout = function () {
	    this.getSize();
	    this._getMeasurement('columnWidth', 'outerWidth');
	    this._getMeasurement('gutter', 'outerWidth');
	    this.measureColumns();

	    // reset column Y
	    this.colYs = [];
	    for (var i = 0; i < this.cols; i++) {
	      this.colYs.push(0);
	    }

	    this.maxY = 0;
	    this.horizontalColIndex = 0;
	  };

	  proto.measureColumns = function () {
	    this.getContainerWidth();
	    // if columnWidth is 0, default to outerWidth of first item
	    if (!this.columnWidth) {
	      var firstItem = this.items[0];
	      var firstItemElem = firstItem && firstItem.element;
	      // columnWidth fall back to item of first element
	      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
	      // if first elem has no width, default to size of container
	      this.containerWidth;
	    }

	    var columnWidth = this.columnWidth += this.gutter;

	    // calculate columns
	    var containerWidth = this.containerWidth + this.gutter;
	    var cols = containerWidth / columnWidth;
	    // fix rounding errors, typically with gutters
	    var excess = columnWidth - containerWidth % columnWidth;
	    // if overshoot is less than a pixel, round up, otherwise floor it
	    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
	    cols = Math[mathMethod](cols);
	    this.cols = Math.max(cols, 1);
	  };

	  proto.getContainerWidth = function () {
	    // container is parent if fit width
	    var isFitWidth = this._getOption('fitWidth');
	    var container = isFitWidth ? this.element.parentNode : this.element;
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var size = getSize(container);
	    this.containerWidth = size && size.innerWidth;
	  };

	  proto._getItemLayoutPosition = function (item) {
	    item.getSize();
	    // how many columns does this brick span
	    var remainder = item.size.outerWidth % this.columnWidth;
	    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
	    // round if off by 1 pixel, otherwise use ceil
	    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
	    colSpan = Math.min(colSpan, this.cols);
	    // use horizontal or top column position
	    var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
	    var colPosition = this[colPosMethod](colSpan, item);
	    // position the brick
	    var position = {
	      x: this.columnWidth * colPosition.col,
	      y: colPosition.y
	    };
	    // apply setHeight to necessary columns
	    var setHeight = colPosition.y + item.size.outerHeight;
	    var setMax = colSpan + colPosition.col;
	    for (var i = colPosition.col; i < setMax; i++) {
	      this.colYs[i] = setHeight;
	    }

	    return position;
	  };

	  proto._getTopColPosition = function (colSpan) {
	    var colGroup = this._getTopColGroup(colSpan);
	    // get the minimum Y value from the columns
	    var minimumY = Math.min.apply(Math, colGroup);

	    return {
	      col: colGroup.indexOf(minimumY),
	      y: minimumY
	    };
	  };

	  /**
	   * @param {Number} colSpan - number of columns the element spans
	   * @returns {Array} colGroup
	   */
	  proto._getTopColGroup = function (colSpan) {
	    if (colSpan < 2) {
	      // if brick spans only one column, use all the column Ys
	      return this.colYs;
	    }

	    var colGroup = [];
	    // how many different places could this brick fit horizontally
	    var groupCount = this.cols + 1 - colSpan;
	    // for each group potential horizontal position
	    for (var i = 0; i < groupCount; i++) {
	      colGroup[i] = this._getColGroupY(i, colSpan);
	    }
	    return colGroup;
	  };

	  proto._getColGroupY = function (col, colSpan) {
	    if (colSpan < 2) {
	      return this.colYs[col];
	    }
	    // make an array of colY values for that one group
	    var groupColYs = this.colYs.slice(col, col + colSpan);
	    // and get the max value of the array
	    return Math.max.apply(Math, groupColYs);
	  };

	  // get column position based on horizontal index. #873
	  proto._getHorizontalColPosition = function (colSpan, item) {
	    var col = this.horizontalColIndex % this.cols;
	    var isOver = colSpan > 1 && col + colSpan > this.cols;
	    // shift to next row if item can't fit on current row
	    col = isOver ? 0 : col;
	    // don't let zero-size items take up space
	    var hasSize = item.size.outerWidth && item.size.outerHeight;
	    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

	    return {
	      col: col,
	      y: this._getColGroupY(col, colSpan)
	    };
	  };

	  proto._manageStamp = function (stamp) {
	    var stampSize = getSize(stamp);
	    var offset = this._getElementOffset(stamp);
	    // get the columns that this stamp affects
	    var isOriginLeft = this._getOption('originLeft');
	    var firstX = isOriginLeft ? offset.left : offset.right;
	    var lastX = firstX + stampSize.outerWidth;
	    var firstCol = Math.floor(firstX / this.columnWidth);
	    firstCol = Math.max(0, firstCol);
	    var lastCol = Math.floor(lastX / this.columnWidth);
	    // lastCol should not go over if multiple of columnWidth #425
	    lastCol -= lastX % this.columnWidth ? 0 : 1;
	    lastCol = Math.min(this.cols - 1, lastCol);
	    // set colYs to bottom of the stamp

	    var isOriginTop = this._getOption('originTop');
	    var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
	    for (var i = firstCol; i <= lastCol; i++) {
	      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
	    }
	  };

	  proto._getContainerSize = function () {
	    this.maxY = Math.max.apply(Math, this.colYs);
	    var size = {
	      height: this.maxY
	    };

	    if (this._getOption('fitWidth')) {
	      size.width = this._getContainerFitWidth();
	    }

	    return size;
	  };

	  proto._getContainerFitWidth = function () {
	    var unusedCols = 0;
	    // count unused columns
	    var i = this.cols;
	    while (--i) {
	      if (this.colYs[i] !== 0) {
	        break;
	      }
	      unusedCols++;
	    }
	    // fit container to columns that have been used
	    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
	  };

	  proto.needsResizeLayout = function () {
	    var previousWidth = this.containerWidth;
	    this.getContainerWidth();
	    return previousWidth != this.containerWidth;
	  };

	  return Masonry;
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * Outlayer v2.1.1
	 * the brains and guts of a layout library
	 * MIT license
	 */

	(function (window, factory) {
	  'use strict';
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */

	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(102), __webpack_require__(103), __webpack_require__(104), __webpack_require__(106)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter, getSize, utils, Item) {
	      return factory(window, EvEmitter, getSize, utils, Item);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
	  } else {
	    // browser global
	    window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
	  }
	})(window, function factory(window, EvEmitter, getSize, utils, Item) {
	  'use strict';

	  // ----- vars ----- //

	  var console = window.console;
	  var jQuery = window.jQuery;
	  var noop = function noop() {};

	  // -------------------------- Outlayer -------------------------- //

	  // globally unique identifiers
	  var GUID = 0;
	  // internal store of all Outlayer intances
	  var instances = {};

	  /**
	   * @param {Element, String} element
	   * @param {Object} options
	   * @constructor
	   */
	  function Outlayer(element, options) {
	    var queryElement = utils.getQueryElement(element);
	    if (!queryElement) {
	      if (console) {
	        console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
	      }
	      return;
	    }
	    this.element = queryElement;
	    // add jQuery
	    if (jQuery) {
	      this.$element = jQuery(this.element);
	    }

	    // options
	    this.options = utils.extend({}, this.constructor.defaults);
	    this.option(options);

	    // add id for Outlayer.getFromElement
	    var id = ++GUID;
	    this.element.outlayerGUID = id; // expando
	    instances[id] = this; // associate via id

	    // kick it off
	    this._create();

	    var isInitLayout = this._getOption('initLayout');
	    if (isInitLayout) {
	      this.layout();
	    }
	  }

	  // settings are for internal use only
	  Outlayer.namespace = 'outlayer';
	  Outlayer.Item = Item;

	  // default options
	  Outlayer.defaults = {
	    containerStyle: {
	      position: 'relative'
	    },
	    initLayout: true,
	    originLeft: true,
	    originTop: true,
	    resize: true,
	    resizeContainer: true,
	    // item options
	    transitionDuration: '0.4s',
	    hiddenStyle: {
	      opacity: 0,
	      transform: 'scale(0.001)'
	    },
	    visibleStyle: {
	      opacity: 1,
	      transform: 'scale(1)'
	    }
	  };

	  var proto = Outlayer.prototype;
	  // inherit EvEmitter
	  utils.extend(proto, EvEmitter.prototype);

	  /**
	   * set options
	   * @param {Object} opts
	   */
	  proto.option = function (opts) {
	    utils.extend(this.options, opts);
	  };

	  /**
	   * get backwards compatible option value, check old name
	   */
	  proto._getOption = function (option) {
	    var oldOption = this.constructor.compatOptions[option];
	    return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
	  };

	  Outlayer.compatOptions = {
	    // currentName: oldName
	    initLayout: 'isInitLayout',
	    horizontal: 'isHorizontal',
	    layoutInstant: 'isLayoutInstant',
	    originLeft: 'isOriginLeft',
	    originTop: 'isOriginTop',
	    resize: 'isResizeBound',
	    resizeContainer: 'isResizingContainer'
	  };

	  proto._create = function () {
	    // get items from children
	    this.reloadItems();
	    // elements that affect layout, but are not laid out
	    this.stamps = [];
	    this.stamp(this.options.stamp);
	    // set container style
	    utils.extend(this.element.style, this.options.containerStyle);

	    // bind resize method
	    var canBindResize = this._getOption('resize');
	    if (canBindResize) {
	      this.bindResize();
	    }
	  };

	  // goes through all children again and gets bricks in proper order
	  proto.reloadItems = function () {
	    // collection of item elements
	    this.items = this._itemize(this.element.children);
	  };

	  /**
	   * turn elements into Outlayer.Items to be used in layout
	   * @param {Array or NodeList or HTMLElement} elems
	   * @returns {Array} items - collection of new Outlayer Items
	   */
	  proto._itemize = function (elems) {

	    var itemElems = this._filterFindItemElements(elems);
	    var Item = this.constructor.Item;

	    // create new Outlayer Items for collection
	    var items = [];
	    for (var i = 0; i < itemElems.length; i++) {
	      var elem = itemElems[i];
	      var item = new Item(elem, this);
	      items.push(item);
	    }

	    return items;
	  };

	  /**
	   * get item elements to be used in layout
	   * @param {Array or NodeList or HTMLElement} elems
	   * @returns {Array} items - item elements
	   */
	  proto._filterFindItemElements = function (elems) {
	    return utils.filterFindElements(elems, this.options.itemSelector);
	  };

	  /**
	   * getter method for getting item elements
	   * @returns {Array} elems - collection of item elements
	   */
	  proto.getItemElements = function () {
	    return this.items.map(function (item) {
	      return item.element;
	    });
	  };

	  // ----- init & layout ----- //

	  /**
	   * lays out all items
	   */
	  proto.layout = function () {
	    this._resetLayout();
	    this._manageStamps();

	    // don't animate first layout
	    var layoutInstant = this._getOption('layoutInstant');
	    var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
	    this.layoutItems(this.items, isInstant);

	    // flag for initalized
	    this._isLayoutInited = true;
	  };

	  // _init is alias for layout
	  proto._init = proto.layout;

	  /**
	   * logic before any new layout
	   */
	  proto._resetLayout = function () {
	    this.getSize();
	  };

	  proto.getSize = function () {
	    this.size = getSize(this.element);
	  };

	  /**
	   * get measurement from option, for columnWidth, rowHeight, gutter
	   * if option is String -> get element from selector string, & get size of element
	   * if option is Element -> get size of element
	   * else use option as a number
	   *
	   * @param {String} measurement
	   * @param {String} size - width or height
	   * @private
	   */
	  proto._getMeasurement = function (measurement, size) {
	    var option = this.options[measurement];
	    var elem;
	    if (!option) {
	      // default to 0
	      this[measurement] = 0;
	    } else {
	      // use option as an element
	      if (typeof option == 'string') {
	        elem = this.element.querySelector(option);
	      } else if (option instanceof HTMLElement) {
	        elem = option;
	      }
	      // use size of element, if element
	      this[measurement] = elem ? getSize(elem)[size] : option;
	    }
	  };

	  /**
	   * layout a collection of item elements
	   * @api public
	   */
	  proto.layoutItems = function (items, isInstant) {
	    items = this._getItemsForLayout(items);

	    this._layoutItems(items, isInstant);

	    this._postLayout();
	  };

	  /**
	   * get the items to be laid out
	   * you may want to skip over some items
	   * @param {Array} items
	   * @returns {Array} items
	   */
	  proto._getItemsForLayout = function (items) {
	    return items.filter(function (item) {
	      return !item.isIgnored;
	    });
	  };

	  /**
	   * layout items
	   * @param {Array} items
	   * @param {Boolean} isInstant
	   */
	  proto._layoutItems = function (items, isInstant) {
	    this._emitCompleteOnItems('layout', items);

	    if (!items || !items.length) {
	      // no items, emit event with empty array
	      return;
	    }

	    var queue = [];

	    items.forEach(function (item) {
	      // get x/y object from method
	      var position = this._getItemLayoutPosition(item);
	      // enqueue
	      position.item = item;
	      position.isInstant = isInstant || item.isLayoutInstant;
	      queue.push(position);
	    }, this);

	    this._processLayoutQueue(queue);
	  };

	  /**
	   * get item layout position
	   * @param {Outlayer.Item} item
	   * @returns {Object} x and y position
	   */
	  proto._getItemLayoutPosition = function () /* item */{
	    return {
	      x: 0,
	      y: 0
	    };
	  };

	  /**
	   * iterate over array and position each item
	   * Reason being - separating this logic prevents 'layout invalidation'
	   * thx @paul_irish
	   * @param {Array} queue
	   */
	  proto._processLayoutQueue = function (queue) {
	    this.updateStagger();
	    queue.forEach(function (obj, i) {
	      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
	    }, this);
	  };

	  // set stagger from option in milliseconds number
	  proto.updateStagger = function () {
	    var stagger = this.options.stagger;
	    if (stagger === null || stagger === undefined) {
	      this.stagger = 0;
	      return;
	    }
	    this.stagger = getMilliseconds(stagger);
	    return this.stagger;
	  };

	  /**
	   * Sets position of item in DOM
	   * @param {Outlayer.Item} item
	   * @param {Number} x - horizontal position
	   * @param {Number} y - vertical position
	   * @param {Boolean} isInstant - disables transitions
	   */
	  proto._positionItem = function (item, x, y, isInstant, i) {
	    if (isInstant) {
	      // if not transition, just set CSS
	      item.goTo(x, y);
	    } else {
	      item.stagger(i * this.stagger);
	      item.moveTo(x, y);
	    }
	  };

	  /**
	   * Any logic you want to do after each layout,
	   * i.e. size the container
	   */
	  proto._postLayout = function () {
	    this.resizeContainer();
	  };

	  proto.resizeContainer = function () {
	    var isResizingContainer = this._getOption('resizeContainer');
	    if (!isResizingContainer) {
	      return;
	    }
	    var size = this._getContainerSize();
	    if (size) {
	      this._setContainerMeasure(size.width, true);
	      this._setContainerMeasure(size.height, false);
	    }
	  };

	  /**
	   * Sets width or height of container if returned
	   * @returns {Object} size
	   *   @param {Number} width
	   *   @param {Number} height
	   */
	  proto._getContainerSize = noop;

	  /**
	   * @param {Number} measure - size of width or height
	   * @param {Boolean} isWidth
	   */
	  proto._setContainerMeasure = function (measure, isWidth) {
	    if (measure === undefined) {
	      return;
	    }

	    var elemSize = this.size;
	    // add padding and border width if border box
	    if (elemSize.isBorderBox) {
	      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
	    }

	    measure = Math.max(measure, 0);
	    this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
	  };

	  /**
	   * emit eventComplete on a collection of items events
	   * @param {String} eventName
	   * @param {Array} items - Outlayer.Items
	   */
	  proto._emitCompleteOnItems = function (eventName, items) {
	    var _this = this;
	    function onComplete() {
	      _this.dispatchEvent(eventName + 'Complete', null, [items]);
	    }

	    var count = items.length;
	    if (!items || !count) {
	      onComplete();
	      return;
	    }

	    var doneCount = 0;
	    function tick() {
	      doneCount++;
	      if (doneCount == count) {
	        onComplete();
	      }
	    }

	    // bind callback
	    items.forEach(function (item) {
	      item.once(eventName, tick);
	    });
	  };

	  /**
	   * emits events via EvEmitter and jQuery events
	   * @param {String} type - name of event
	   * @param {Event} event - original event
	   * @param {Array} args - extra arguments
	   */
	  proto.dispatchEvent = function (type, event, args) {
	    // add original event to arguments
	    var emitArgs = event ? [event].concat(args) : args;
	    this.emitEvent(type, emitArgs);

	    if (jQuery) {
	      // set this.$element
	      this.$element = this.$element || jQuery(this.element);
	      if (event) {
	        // create jQuery event
	        var $event = jQuery.Event(event);
	        $event.type = type;
	        this.$element.trigger($event, args);
	      } else {
	        // just trigger with type if no event available
	        this.$element.trigger(type, args);
	      }
	    }
	  };

	  // -------------------------- ignore & stamps -------------------------- //


	  /**
	   * keep item in collection, but do not lay it out
	   * ignored items do not get skipped in layout
	   * @param {Element} elem
	   */
	  proto.ignore = function (elem) {
	    var item = this.getItem(elem);
	    if (item) {
	      item.isIgnored = true;
	    }
	  };

	  /**
	   * return item to layout collection
	   * @param {Element} elem
	   */
	  proto.unignore = function (elem) {
	    var item = this.getItem(elem);
	    if (item) {
	      delete item.isIgnored;
	    }
	  };

	  /**
	   * adds elements to stamps
	   * @param {NodeList, Array, Element, or String} elems
	   */
	  proto.stamp = function (elems) {
	    elems = this._find(elems);
	    if (!elems) {
	      return;
	    }

	    this.stamps = this.stamps.concat(elems);
	    // ignore
	    elems.forEach(this.ignore, this);
	  };

	  /**
	   * removes elements to stamps
	   * @param {NodeList, Array, or Element} elems
	   */
	  proto.unstamp = function (elems) {
	    elems = this._find(elems);
	    if (!elems) {
	      return;
	    }

	    elems.forEach(function (elem) {
	      // filter out removed stamp elements
	      utils.removeFrom(this.stamps, elem);
	      this.unignore(elem);
	    }, this);
	  };

	  /**
	   * finds child elements
	   * @param {NodeList, Array, Element, or String} elems
	   * @returns {Array} elems
	   */
	  proto._find = function (elems) {
	    if (!elems) {
	      return;
	    }
	    // if string, use argument as selector string
	    if (typeof elems == 'string') {
	      elems = this.element.querySelectorAll(elems);
	    }
	    elems = utils.makeArray(elems);
	    return elems;
	  };

	  proto._manageStamps = function () {
	    if (!this.stamps || !this.stamps.length) {
	      return;
	    }

	    this._getBoundingRect();

	    this.stamps.forEach(this._manageStamp, this);
	  };

	  // update boundingLeft / Top
	  proto._getBoundingRect = function () {
	    // get bounding rect for container element
	    var boundingRect = this.element.getBoundingClientRect();
	    var size = this.size;
	    this._boundingRect = {
	      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
	      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
	    };
	  };

	  /**
	   * @param {Element} stamp
	  **/
	  proto._manageStamp = noop;

	  /**
	   * get x/y position of element relative to container element
	   * @param {Element} elem
	   * @returns {Object} offset - has left, top, right, bottom
	   */
	  proto._getElementOffset = function (elem) {
	    var boundingRect = elem.getBoundingClientRect();
	    var thisRect = this._boundingRect;
	    var size = getSize(elem);
	    var offset = {
	      left: boundingRect.left - thisRect.left - size.marginLeft,
	      top: boundingRect.top - thisRect.top - size.marginTop,
	      right: thisRect.right - boundingRect.right - size.marginRight,
	      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	    };
	    return offset;
	  };

	  // -------------------------- resize -------------------------- //

	  // enable event handlers for listeners
	  // i.e. resize -> onresize
	  proto.handleEvent = utils.handleEvent;

	  /**
	   * Bind layout to window resizing
	   */
	  proto.bindResize = function () {
	    window.addEventListener('resize', this);
	    this.isResizeBound = true;
	  };

	  /**
	   * Unbind layout to window resizing
	   */
	  proto.unbindResize = function () {
	    window.removeEventListener('resize', this);
	    this.isResizeBound = false;
	  };

	  proto.onresize = function () {
	    this.resize();
	  };

	  utils.debounceMethod(Outlayer, 'onresize', 100);

	  proto.resize = function () {
	    // don't trigger if size did not change
	    // or if resize was unbound. See #9
	    if (!this.isResizeBound || !this.needsResizeLayout()) {
	      return;
	    }

	    this.layout();
	  };

	  /**
	   * check if layout is needed post layout
	   * @returns Boolean
	   */
	  proto.needsResizeLayout = function () {
	    var size = getSize(this.element);
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var hasSizes = this.size && size;
	    return hasSizes && size.innerWidth !== this.size.innerWidth;
	  };

	  // -------------------------- methods -------------------------- //

	  /**
	   * add items to Outlayer instance
	   * @param {Array or NodeList or Element} elems
	   * @returns {Array} items - Outlayer.Items
	  **/
	  proto.addItems = function (elems) {
	    var items = this._itemize(elems);
	    // add items to collection
	    if (items.length) {
	      this.items = this.items.concat(items);
	    }
	    return items;
	  };

	  /**
	   * Layout newly-appended item elements
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.appended = function (elems) {
	    var items = this.addItems(elems);
	    if (!items.length) {
	      return;
	    }
	    // layout and reveal just the new items
	    this.layoutItems(items, true);
	    this.reveal(items);
	  };

	  /**
	   * Layout prepended elements
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.prepended = function (elems) {
	    var items = this._itemize(elems);
	    if (!items.length) {
	      return;
	    }
	    // add items to beginning of collection
	    var previousItems = this.items.slice(0);
	    this.items = items.concat(previousItems);
	    // start new layout
	    this._resetLayout();
	    this._manageStamps();
	    // layout new stuff without transition
	    this.layoutItems(items, true);
	    this.reveal(items);
	    // layout previous items
	    this.layoutItems(previousItems);
	  };

	  /**
	   * reveal a collection of items
	   * @param {Array of Outlayer.Items} items
	   */
	  proto.reveal = function (items) {
	    this._emitCompleteOnItems('reveal', items);
	    if (!items || !items.length) {
	      return;
	    }
	    var stagger = this.updateStagger();
	    items.forEach(function (item, i) {
	      item.stagger(i * stagger);
	      item.reveal();
	    });
	  };

	  /**
	   * hide a collection of items
	   * @param {Array of Outlayer.Items} items
	   */
	  proto.hide = function (items) {
	    this._emitCompleteOnItems('hide', items);
	    if (!items || !items.length) {
	      return;
	    }
	    var stagger = this.updateStagger();
	    items.forEach(function (item, i) {
	      item.stagger(i * stagger);
	      item.hide();
	    });
	  };

	  /**
	   * reveal item elements
	   * @param {Array}, {Element}, {NodeList} items
	   */
	  proto.revealItemElements = function (elems) {
	    var items = this.getItems(elems);
	    this.reveal(items);
	  };

	  /**
	   * hide item elements
	   * @param {Array}, {Element}, {NodeList} items
	   */
	  proto.hideItemElements = function (elems) {
	    var items = this.getItems(elems);
	    this.hide(items);
	  };

	  /**
	   * get Outlayer.Item, given an Element
	   * @param {Element} elem
	   * @param {Function} callback
	   * @returns {Outlayer.Item} item
	   */
	  proto.getItem = function (elem) {
	    // loop through items to get the one that matches
	    for (var i = 0; i < this.items.length; i++) {
	      var item = this.items[i];
	      if (item.element == elem) {
	        // return item
	        return item;
	      }
	    }
	  };

	  /**
	   * get collection of Outlayer.Items, given Elements
	   * @param {Array} elems
	   * @returns {Array} items - Outlayer.Items
	   */
	  proto.getItems = function (elems) {
	    elems = utils.makeArray(elems);
	    var items = [];
	    elems.forEach(function (elem) {
	      var item = this.getItem(elem);
	      if (item) {
	        items.push(item);
	      }
	    }, this);

	    return items;
	  };

	  /**
	   * remove element(s) from instance and DOM
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.remove = function (elems) {
	    var removeItems = this.getItems(elems);

	    this._emitCompleteOnItems('remove', removeItems);

	    // bail if no items to remove
	    if (!removeItems || !removeItems.length) {
	      return;
	    }

	    removeItems.forEach(function (item) {
	      item.remove();
	      // remove item from collection
	      utils.removeFrom(this.items, item);
	    }, this);
	  };

	  // ----- destroy ----- //

	  // remove and disable Outlayer instance
	  proto.destroy = function () {
	    // clean up dynamic styles
	    var style = this.element.style;
	    style.height = '';
	    style.position = '';
	    style.width = '';
	    // destroy items
	    this.items.forEach(function (item) {
	      item.destroy();
	    });

	    this.unbindResize();

	    var id = this.element.outlayerGUID;
	    delete instances[id]; // remove reference to instance by id
	    delete this.element.outlayerGUID;
	    // remove data for jQuery
	    if (jQuery) {
	      jQuery.removeData(this.element, this.constructor.namespace);
	    }
	  };

	  // -------------------------- data -------------------------- //

	  /**
	   * get Outlayer instance from element
	   * @param {Element} elem
	   * @returns {Outlayer}
	   */
	  Outlayer.data = function (elem) {
	    elem = utils.getQueryElement(elem);
	    var id = elem && elem.outlayerGUID;
	    return id && instances[id];
	  };

	  // -------------------------- create Outlayer class -------------------------- //

	  /**
	   * create a layout class
	   * @param {String} namespace
	   */
	  Outlayer.create = function (namespace, options) {
	    // sub-class Outlayer
	    var Layout = subclass(Outlayer);
	    // apply new options and compatOptions
	    Layout.defaults = utils.extend({}, Outlayer.defaults);
	    utils.extend(Layout.defaults, options);
	    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

	    Layout.namespace = namespace;

	    Layout.data = Outlayer.data;

	    // sub-class Item
	    Layout.Item = subclass(Item);

	    // -------------------------- declarative -------------------------- //

	    utils.htmlInit(Layout, namespace);

	    // -------------------------- jQuery bridge -------------------------- //

	    // make into jQuery plugin
	    if (jQuery && jQuery.bridget) {
	      jQuery.bridget(namespace, Layout);
	    }

	    return Layout;
	  };

	  function subclass(Parent) {
	    function SubClass() {
	      Parent.apply(this, arguments);
	    }

	    SubClass.prototype = Object.create(Parent.prototype);
	    SubClass.prototype.constructor = SubClass;

	    return SubClass;
	  }

	  // ----- helpers ----- //

	  // how many milliseconds are in each unit
	  var msUnits = {
	    ms: 1,
	    s: 1000
	  };

	  // munge time-like parameter into millisecond number
	  // '0.4s' -> 40
	  function getMilliseconds(time) {
	    if (typeof time == 'number') {
	      return time;
	    }
	    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
	    var num = matches && matches[1];
	    var unit = matches && matches[2];
	    if (!num.length) {
	      return 0;
	    }
	    num = parseFloat(num);
	    var mult = msUnits[unit] || 1;
	    return num * mult;
	  }

	  // ----- fin ----- //

	  // back in global
	  Outlayer.Item = Item;

	  return Outlayer;
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * EvEmitter v1.1.0
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	(function (global, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	})(typeof window != 'undefined' ? window : undefined, function () {

	  "use strict";

	  function EvEmitter() {}

	  var proto = EvEmitter.prototype;

	  proto.on = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // set events hash
	    var events = this._events = this._events || {};
	    // set listeners array
	    var listeners = events[eventName] = events[eventName] || [];
	    // only add once
	    if (listeners.indexOf(listener) == -1) {
	      listeners.push(listener);
	    }

	    return this;
	  };

	  proto.once = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // add event
	    this.on(eventName, listener);
	    // set once flag
	    // set onceEvents hash
	    var onceEvents = this._onceEvents = this._onceEvents || {};
	    // set onceListeners object
	    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
	    // set flag
	    onceListeners[listener] = true;

	    return this;
	  };

	  proto.off = function (eventName, listener) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var index = listeners.indexOf(listener);
	    if (index != -1) {
	      listeners.splice(index, 1);
	    }

	    return this;
	  };

	  proto.emitEvent = function (eventName, args) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    // copy over to avoid interference if .off() in listener
	    listeners = listeners.slice(0);
	    args = args || [];
	    // once stuff
	    var onceListeners = this._onceEvents && this._onceEvents[eventName];

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      var isOnce = onceListeners && onceListeners[listener];
	      if (isOnce) {
	        // remove listener
	        // remove before trigger to prevent recursion
	        this.off(eventName, listener);
	        // unset once flag
	        delete onceListeners[listener];
	      }
	      // trigger listener
	      listener.apply(this, args);
	    }

	    return this;
	  };

	  proto.allOff = function () {
	    delete this._events;
	    delete this._onceEvents;
	  };

	  return EvEmitter;
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */

	(function (window, factory) {
	  'use strict';

	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	})(window, function factory() {
	  'use strict';

	  // -------------------------- helpers -------------------------- //

	  // get a number from a string, not a percentage

	  function getStyleSize(value) {
	    var num = parseFloat(value);
	    // not a percent like '100%', and a number
	    var isValid = value.indexOf('%') == -1 && !isNaN(num);
	    return isValid && num;
	  }

	  function noop() {}

	  var logError = typeof console == 'undefined' ? noop : function (message) {
	    console.error(message);
	  };

	  // -------------------------- measurements -------------------------- //

	  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

	  var measurementsLength = measurements.length;

	  function getZeroSize() {
	    var size = {
	      width: 0,
	      height: 0,
	      innerWidth: 0,
	      innerHeight: 0,
	      outerWidth: 0,
	      outerHeight: 0
	    };
	    for (var i = 0; i < measurementsLength; i++) {
	      var measurement = measurements[i];
	      size[measurement] = 0;
	    }
	    return size;
	  }

	  // -------------------------- getStyle -------------------------- //

	  /**
	   * getStyle, get style of element, check for Firefox bug
	   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	   */
	  function getStyle(elem) {
	    var style = getComputedStyle(elem);
	    if (!style) {
	      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1');
	    }
	    return style;
	  }

	  // -------------------------- setup -------------------------- //

	  var isSetup = false;

	  var isBoxSizeOuter;

	  /**
	   * setup
	   * check isBoxSizerOuter
	   * do on first getSize() rather than on page load for Firefox bug
	   */
	  function setup() {
	    // setup once
	    if (isSetup) {
	      return;
	    }
	    isSetup = true;

	    // -------------------------- box sizing -------------------------- //

	    /**
	     * WebKit measures the outer-width on style.width on border-box elems
	     * IE & Firefox<29 measures the inner-width
	     */
	    var div = document.createElement('div');
	    div.style.width = '200px';
	    div.style.padding = '1px 2px 3px 4px';
	    div.style.borderStyle = 'solid';
	    div.style.borderWidth = '1px 2px 3px 4px';
	    div.style.boxSizing = 'border-box';

	    var body = document.body || document.documentElement;
	    body.appendChild(div);
	    var style = getStyle(div);

	    getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
	    body.removeChild(div);
	  }

	  // -------------------------- getSize -------------------------- //

	  function getSize(elem) {
	    setup();

	    // use querySeletor if elem is string
	    if (typeof elem == 'string') {
	      elem = document.querySelector(elem);
	    }

	    // do not proceed on non-objects
	    if (!elem || (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) != 'object' || !elem.nodeType) {
	      return;
	    }

	    var style = getStyle(elem);

	    // if hidden, everything is 0
	    if (style.display == 'none') {
	      return getZeroSize();
	    }

	    var size = {};
	    size.width = elem.offsetWidth;
	    size.height = elem.offsetHeight;

	    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

	    // get all measurements
	    for (var i = 0; i < measurementsLength; i++) {
	      var measurement = measurements[i];
	      var value = style[measurement];
	      var num = parseFloat(value);
	      // any 'auto', 'medium' value will be 0
	      size[measurement] = !isNaN(num) ? num : 0;
	    }

	    var paddingWidth = size.paddingLeft + size.paddingRight;
	    var paddingHeight = size.paddingTop + size.paddingBottom;
	    var marginWidth = size.marginLeft + size.marginRight;
	    var marginHeight = size.marginTop + size.marginBottom;
	    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	    var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	    // overwrite width and height if we can get it from style
	    var styleWidth = getStyleSize(style.width);
	    if (styleWidth !== false) {
	      size.width = styleWidth + (
	      // add padding and border unless it's already including it
	      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
	    }

	    var styleHeight = getStyleSize(style.height);
	    if (styleHeight !== false) {
	      size.height = styleHeight + (
	      // add padding and border unless it's already including it
	      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
	    }

	    size.innerWidth = size.width - (paddingWidth + borderWidth);
	    size.innerHeight = size.height - (paddingHeight + borderHeight);

	    size.outerWidth = size.width + marginWidth;
	    size.outerHeight = size.height + marginHeight;

	    return size;
	  }

	  return getSize;
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Fizzy UI utils v2.0.5
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true, strict: true */

	(function (window, factory) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */

	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(105)], __WEBPACK_AMD_DEFINE_RESULT__ = function (matchesSelector) {
	      return factory(window, matchesSelector);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(window, require('desandro-matches-selector'));
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(window, window.matchesSelector);
	  }
	})(window, function factory(window, matchesSelector) {

	  'use strict';

	  var utils = {};

	  // ----- extend ----- //

	  // extends objects
	  utils.extend = function (a, b) {
	    for (var prop in b) {
	      a[prop] = b[prop];
	    }
	    return a;
	  };

	  // ----- modulo ----- //

	  utils.modulo = function (num, div) {
	    return (num % div + div) % div;
	  };

	  // ----- makeArray ----- //

	  // turn element or nodeList into an array
	  utils.makeArray = function (obj) {
	    var ary = [];
	    if (Array.isArray(obj)) {
	      // use object if already an array
	      ary = obj;
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && typeof obj.length == 'number') {
	      // convert nodeList to array
	      for (var i = 0; i < obj.length; i++) {
	        ary.push(obj[i]);
	      }
	    } else {
	      // array of single index
	      ary.push(obj);
	    }
	    return ary;
	  };

	  // ----- removeFrom ----- //

	  utils.removeFrom = function (ary, obj) {
	    var index = ary.indexOf(obj);
	    if (index != -1) {
	      ary.splice(index, 1);
	    }
	  };

	  // ----- getParent ----- //

	  utils.getParent = function (elem, selector) {
	    while (elem.parentNode && elem != document.body) {
	      elem = elem.parentNode;
	      if (matchesSelector(elem, selector)) {
	        return elem;
	      }
	    }
	  };

	  // ----- getQueryElement ----- //

	  // use element as selector string
	  utils.getQueryElement = function (elem) {
	    if (typeof elem == 'string') {
	      return document.querySelector(elem);
	    }
	    return elem;
	  };

	  // ----- handleEvent ----- //

	  // enable .ontype to trigger from .addEventListener( elem, 'type' )
	  utils.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };

	  // ----- filterFindElements ----- //

	  utils.filterFindElements = function (elems, selector) {
	    // make array of elems
	    elems = utils.makeArray(elems);
	    var ffElems = [];

	    elems.forEach(function (elem) {
	      // check that elem is an actual element
	      if (!(elem instanceof HTMLElement)) {
	        return;
	      }
	      // add elem if no selector
	      if (!selector) {
	        ffElems.push(elem);
	        return;
	      }
	      // filter & find items if we have a selector
	      // filter
	      if (matchesSelector(elem, selector)) {
	        ffElems.push(elem);
	      }
	      // find children
	      var childElems = elem.querySelectorAll(selector);
	      // concat childElems to filterFound array
	      for (var i = 0; i < childElems.length; i++) {
	        ffElems.push(childElems[i]);
	      }
	    });

	    return ffElems;
	  };

	  // ----- debounceMethod ----- //

	  utils.debounceMethod = function (_class, methodName, threshold) {
	    // original method
	    var method = _class.prototype[methodName];
	    var timeoutName = methodName + 'Timeout';

	    _class.prototype[methodName] = function () {
	      var timeout = this[timeoutName];
	      if (timeout) {
	        clearTimeout(timeout);
	      }
	      var args = arguments;

	      var _this = this;
	      this[timeoutName] = setTimeout(function () {
	        method.apply(_this, args);
	        delete _this[timeoutName];
	      }, threshold || 100);
	    };
	  };

	  // ----- docReady ----- //

	  utils.docReady = function (callback) {
	    var readyState = document.readyState;
	    if (readyState == 'complete' || readyState == 'interactive') {
	      // do async to allow for other scripts to run. metafizzy/flickity#441
	      setTimeout(callback);
	    } else {
	      document.addEventListener('DOMContentLoaded', callback);
	    }
	  };

	  // ----- htmlInit ----- //

	  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	  utils.toDashed = function (str) {
	    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
	      return $1 + '-' + $2;
	    }).toLowerCase();
	  };

	  var console = window.console;
	  /**
	   * allow user to initialize classes via [data-namespace] or .js-namespace class
	   * htmlInit( Widget, 'widgetName' )
	   * options are parsed from data-namespace-options
	   */
	  utils.htmlInit = function (WidgetClass, namespace) {
	    utils.docReady(function () {
	      var dashedNamespace = utils.toDashed(namespace);
	      var dataAttr = 'data-' + dashedNamespace;
	      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
	      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
	      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
	      var dataOptionsAttr = dataAttr + '-options';
	      var jQuery = window.jQuery;

	      elems.forEach(function (elem) {
	        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
	        var options;
	        try {
	          options = attr && JSON.parse(attr);
	        } catch (error) {
	          // log error, do not initialize
	          if (console) {
	            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
	          }
	          return;
	        }
	        // initialize
	        var instance = new WidgetClass(elem, options);
	        // make available via $().data('namespace')
	        if (jQuery) {
	          jQuery.data(elem, namespace, instance);
	        }
	      });
	    });
	  };

	  // -----  ----- //

	  return utils;
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * matchesSelector v2.0.2
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */

	(function (window, factory) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition

	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	})(window, function factory() {
	  'use strict';

	  var matchesMethod = function () {
	    var ElemProto = window.Element.prototype;
	    // check for the standard method name first
	    if (ElemProto.matches) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if (ElemProto.matchesSelector) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = ['webkit', 'moz', 'ms', 'o'];

	    for (var i = 0; i < prefixes.length; i++) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if (ElemProto[method]) {
	        return method;
	      }
	    }
	  }();

	  return function matchesSelector(elem, selector) {
	    return elem[matchesMethod](selector);
	  };
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Outlayer Item
	 */

	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(102), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(require('ev-emitter'), require('get-size'));
	  } else {
	    // browser global
	    window.Outlayer = {};
	    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
	  }
	})(window, function factory(EvEmitter, getSize) {
	  'use strict';

	  // ----- helpers ----- //

	  function isEmptyObj(obj) {
	    for (var prop in obj) {
	      return false;
	    }
	    prop = null;
	    return true;
	  }

	  // -------------------------- CSS3 support -------------------------- //


	  var docElemStyle = document.documentElement.style;

	  var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
	  var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

	  var transitionEndEvent = {
	    WebkitTransition: 'webkitTransitionEnd',
	    transition: 'transitionend'
	  }[transitionProperty];

	  // cache all vendor properties that could have vendor prefix
	  var vendorProperties = {
	    transform: transformProperty,
	    transition: transitionProperty,
	    transitionDuration: transitionProperty + 'Duration',
	    transitionProperty: transitionProperty + 'Property',
	    transitionDelay: transitionProperty + 'Delay'
	  };

	  // -------------------------- Item -------------------------- //

	  function Item(element, layout) {
	    if (!element) {
	      return;
	    }

	    this.element = element;
	    // parent layout class, i.e. Masonry, Isotope, or Packery
	    this.layout = layout;
	    this.position = {
	      x: 0,
	      y: 0
	    };

	    this._create();
	  }

	  // inherit EvEmitter
	  var proto = Item.prototype = Object.create(EvEmitter.prototype);
	  proto.constructor = Item;

	  proto._create = function () {
	    // transition objects
	    this._transn = {
	      ingProperties: {},
	      clean: {},
	      onEnd: {}
	    };

	    this.css({
	      position: 'absolute'
	    });
	  };

	  // trigger specified handler for event type
	  proto.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };

	  proto.getSize = function () {
	    this.size = getSize(this.element);
	  };

	  /**
	   * apply CSS styles to element
	   * @param {Object} style
	   */
	  proto.css = function (style) {
	    var elemStyle = this.element.style;

	    for (var prop in style) {
	      // use vendor property if available
	      var supportedProp = vendorProperties[prop] || prop;
	      elemStyle[supportedProp] = style[prop];
	    }
	  };

	  // measure position, and sets it
	  proto.getPosition = function () {
	    var style = getComputedStyle(this.element);
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');
	    var xValue = style[isOriginLeft ? 'left' : 'right'];
	    var yValue = style[isOriginTop ? 'top' : 'bottom'];
	    var x = parseFloat(xValue);
	    var y = parseFloat(yValue);
	    // convert percent to pixels
	    var layoutSize = this.layout.size;
	    if (xValue.indexOf('%') != -1) {
	      x = x / 100 * layoutSize.width;
	    }
	    if (yValue.indexOf('%') != -1) {
	      y = y / 100 * layoutSize.height;
	    }
	    // clean up 'auto' or other non-integer values
	    x = isNaN(x) ? 0 : x;
	    y = isNaN(y) ? 0 : y;
	    // remove padding from measurement
	    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

	    this.position.x = x;
	    this.position.y = y;
	  };

	  // set settled position, apply padding
	  proto.layoutPosition = function () {
	    var layoutSize = this.layout.size;
	    var style = {};
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');

	    // x
	    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
	    var xProperty = isOriginLeft ? 'left' : 'right';
	    var xResetProperty = isOriginLeft ? 'right' : 'left';

	    var x = this.position.x + layoutSize[xPadding];
	    // set in percentage or pixels
	    style[xProperty] = this.getXValue(x);
	    // reset other property
	    style[xResetProperty] = '';

	    // y
	    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
	    var yProperty = isOriginTop ? 'top' : 'bottom';
	    var yResetProperty = isOriginTop ? 'bottom' : 'top';

	    var y = this.position.y + layoutSize[yPadding];
	    // set in percentage or pixels
	    style[yProperty] = this.getYValue(y);
	    // reset other property
	    style[yResetProperty] = '';

	    this.css(style);
	    this.emitEvent('layout', [this]);
	  };

	  proto.getXValue = function (x) {
	    var isHorizontal = this.layout._getOption('horizontal');
	    return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + '%' : x + 'px';
	  };

	  proto.getYValue = function (y) {
	    var isHorizontal = this.layout._getOption('horizontal');
	    return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + '%' : y + 'px';
	  };

	  proto._transitionTo = function (x, y) {
	    this.getPosition();
	    // get current x & y from top/left
	    var curX = this.position.x;
	    var curY = this.position.y;

	    var didNotMove = x == this.position.x && y == this.position.y;

	    // save end position
	    this.setPosition(x, y);

	    // if did not move and not transitioning, just go to layout
	    if (didNotMove && !this.isTransitioning) {
	      this.layoutPosition();
	      return;
	    }

	    var transX = x - curX;
	    var transY = y - curY;
	    var transitionStyle = {};
	    transitionStyle.transform = this.getTranslate(transX, transY);

	    this.transition({
	      to: transitionStyle,
	      onTransitionEnd: {
	        transform: this.layoutPosition
	      },
	      isCleaning: true
	    });
	  };

	  proto.getTranslate = function (x, y) {
	    // flip cooridinates if origin on right or bottom
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');
	    x = isOriginLeft ? x : -x;
	    y = isOriginTop ? y : -y;
	    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	  };

	  // non transition + transform support
	  proto.goTo = function (x, y) {
	    this.setPosition(x, y);
	    this.layoutPosition();
	  };

	  proto.moveTo = proto._transitionTo;

	  proto.setPosition = function (x, y) {
	    this.position.x = parseFloat(x);
	    this.position.y = parseFloat(y);
	  };

	  // ----- transition ----- //

	  /**
	   * @param {Object} style - CSS
	   * @param {Function} onTransitionEnd
	   */

	  // non transition, just trigger callback
	  proto._nonTransition = function (args) {
	    this.css(args.to);
	    if (args.isCleaning) {
	      this._removeStyles(args.to);
	    }
	    for (var prop in args.onTransitionEnd) {
	      args.onTransitionEnd[prop].call(this);
	    }
	  };

	  /**
	   * proper transition
	   * @param {Object} args - arguments
	   *   @param {Object} to - style to transition to
	   *   @param {Object} from - style to start transition from
	   *   @param {Boolean} isCleaning - removes transition styles after transition
	   *   @param {Function} onTransitionEnd - callback
	   */
	  proto.transition = function (args) {
	    // redirect to nonTransition if no transition duration
	    if (!parseFloat(this.layout.options.transitionDuration)) {
	      this._nonTransition(args);
	      return;
	    }

	    var _transition = this._transn;
	    // keep track of onTransitionEnd callback by css property
	    for (var prop in args.onTransitionEnd) {
	      _transition.onEnd[prop] = args.onTransitionEnd[prop];
	    }
	    // keep track of properties that are transitioning
	    for (prop in args.to) {
	      _transition.ingProperties[prop] = true;
	      // keep track of properties to clean up when transition is done
	      if (args.isCleaning) {
	        _transition.clean[prop] = true;
	      }
	    }

	    // set from styles
	    if (args.from) {
	      this.css(args.from);
	      // force redraw. http://blog.alexmaccaw.com/css-transitions
	      var h = this.element.offsetHeight;
	      // hack for JSHint to hush about unused var
	      h = null;
	    }
	    // enable transition
	    this.enableTransition(args.to);
	    // set styles that are transitioning
	    this.css(args.to);

	    this.isTransitioning = true;
	  };

	  // dash before all cap letters, including first for
	  // WebkitTransform => -webkit-transform
	  function toDashedAll(str) {
	    return str.replace(/([A-Z])/g, function ($1) {
	      return '-' + $1.toLowerCase();
	    });
	  }

	  var transitionProps = 'opacity,' + toDashedAll(transformProperty);

	  proto.enableTransition = function () /* style */{
	    // HACK changing transitionProperty during a transition
	    // will cause transition to jump
	    if (this.isTransitioning) {
	      return;
	    }

	    // make `transition: foo, bar, baz` from style object
	    // HACK un-comment this when enableTransition can work
	    // while a transition is happening
	    // var transitionValues = [];
	    // for ( var prop in style ) {
	    //   // dash-ify camelCased properties like WebkitTransition
	    //   prop = vendorProperties[ prop ] || prop;
	    //   transitionValues.push( toDashedAll( prop ) );
	    // }
	    // munge number to millisecond, to match stagger
	    var duration = this.layout.options.transitionDuration;
	    duration = typeof duration == 'number' ? duration + 'ms' : duration;
	    // enable transition styles
	    this.css({
	      transitionProperty: transitionProps,
	      transitionDuration: duration,
	      transitionDelay: this.staggerDelay || 0
	    });
	    // listen for transition end event
	    this.element.addEventListener(transitionEndEvent, this, false);
	  };

	  // ----- events ----- //

	  proto.onwebkitTransitionEnd = function (event) {
	    this.ontransitionend(event);
	  };

	  proto.onotransitionend = function (event) {
	    this.ontransitionend(event);
	  };

	  // properties that I munge to make my life easier
	  var dashedVendorProperties = {
	    '-webkit-transform': 'transform'
	  };

	  proto.ontransitionend = function (event) {
	    // disregard bubbled events from children
	    if (event.target !== this.element) {
	      return;
	    }
	    var _transition = this._transn;
	    // get property name of transitioned property, convert to prefix-free
	    var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

	    // remove property that has completed transitioning
	    delete _transition.ingProperties[propertyName];
	    // check if any properties are still transitioning
	    if (isEmptyObj(_transition.ingProperties)) {
	      // all properties have completed transitioning
	      this.disableTransition();
	    }
	    // clean style
	    if (propertyName in _transition.clean) {
	      // clean up style
	      this.element.style[event.propertyName] = '';
	      delete _transition.clean[propertyName];
	    }
	    // trigger onTransitionEnd callback
	    if (propertyName in _transition.onEnd) {
	      var onTransitionEnd = _transition.onEnd[propertyName];
	      onTransitionEnd.call(this);
	      delete _transition.onEnd[propertyName];
	    }

	    this.emitEvent('transitionEnd', [this]);
	  };

	  proto.disableTransition = function () {
	    this.removeTransitionStyles();
	    this.element.removeEventListener(transitionEndEvent, this, false);
	    this.isTransitioning = false;
	  };

	  /**
	   * removes style property from element
	   * @param {Object} style
	  **/
	  proto._removeStyles = function (style) {
	    // clean up transition styles
	    var cleanStyle = {};
	    for (var prop in style) {
	      cleanStyle[prop] = '';
	    }
	    this.css(cleanStyle);
	  };

	  var cleanTransitionStyle = {
	    transitionProperty: '',
	    transitionDuration: '',
	    transitionDelay: ''
	  };

	  proto.removeTransitionStyles = function () {
	    // remove transition
	    this.css(cleanTransitionStyle);
	  };

	  // ----- stagger ----- //

	  proto.stagger = function (delay) {
	    delay = isNaN(delay) ? 0 : delay;
	    this.staggerDelay = delay + 'ms';
	  };

	  // ----- show/hide/remove ----- //

	  // remove element from DOM
	  proto.removeElem = function () {
	    this.element.parentNode.removeChild(this.element);
	    // remove display: none
	    this.css({ display: '' });
	    this.emitEvent('remove', [this]);
	  };

	  proto.remove = function () {
	    // just remove element if no transition support or no transition
	    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
	      this.removeElem();
	      return;
	    }

	    // start transition
	    this.once('transitionEnd', function () {
	      this.removeElem();
	    });
	    this.hide();
	  };

	  proto.reveal = function () {
	    delete this.isHidden;
	    // remove display: none
	    this.css({ display: '' });

	    var options = this.layout.options;

	    var onTransitionEnd = {};
	    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
	    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

	    this.transition({
	      from: options.hiddenStyle,
	      to: options.visibleStyle,
	      isCleaning: true,
	      onTransitionEnd: onTransitionEnd
	    });
	  };

	  proto.onRevealTransitionEnd = function () {
	    // check if still visible
	    // during transition, item may have been hidden
	    if (!this.isHidden) {
	      this.emitEvent('reveal');
	    }
	  };

	  /**
	   * get style property use for hide/reveal transition end
	   * @param {String} styleProperty - hiddenStyle/visibleStyle
	   * @returns {String}
	   */
	  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
	    var optionStyle = this.layout.options[styleProperty];
	    // use opacity
	    if (optionStyle.opacity) {
	      return 'opacity';
	    }
	    // get first property
	    for (var prop in optionStyle) {
	      return prop;
	    }
	  };

	  proto.hide = function () {
	    // set flag
	    this.isHidden = true;
	    // remove display: none
	    this.css({ display: '' });

	    var options = this.layout.options;

	    var onTransitionEnd = {};
	    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
	    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

	    this.transition({
	      from: options.visibleStyle,
	      to: options.hiddenStyle,
	      // keep hidden stuff hidden
	      isCleaning: true,
	      onTransitionEnd: onTransitionEnd
	    });
	  };

	  proto.onHideTransitionEnd = function () {
	    // check if still hidden
	    // during transition, item may have been un-hidden
	    if (this.isHidden) {
	      this.css({ display: 'none' });
	      this.emitEvent('hide');
	    }
	  };

	  proto.destroy = function () {
	    this.css({
	      position: '',
	      left: '',
	      right: '',
	      top: '',
	      bottom: '',
	      transition: '',
	      transform: ''
	    });
	  };

	  return Item;
	});

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	var Logo = Sophie.createClass("p-logo", {
	  render: function render() {
	    return Sophie.element(
	      "p-logo",
	      null,
	      Sophie.element("a", { href: "/" })
	    );
	  }

	});

	Sophie.createStyleSheet({
	  "p-logo": {

	    display: 'block',
	    width: '2em',

	    height: '1em',
	    minHeight: '4px',

	    border: 0,
	    overflow: 'hidden',
	    backgroundSize: 'contain',
	    backgroundRepeat: 'no-repeat !important',
	    backgroundPosition: 'center center',
	    backgroundImage: 'url(https://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png_145x145.jpg)'

	  },

	  "p-logo a": {
	    display: 'block',
	    border: 0,
	    width: '100%',
	    height: '100%'
	  }

	});

	Sophie.createStyleSheet({

	  "p-logo": {}

	}, "@media (max-width: 767px)");

	module.exports = Logo;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(79);
	var Grid = __webpack_require__(78);
	var GridColumn = __webpack_require__(80);
	var GridMix = __webpack_require__(81);

	var GridLayout = __webpack_require__(77);

	var Group = Sophie.createClass("p-group", {
	    mixin: [GridLayout],
	    render: function render() {
	        return Sophie.element(
	            "p-group",
	            null,
	            this.renderGridChildren()
	        );
	    },

	    componentDidMount: function componentDidMount() {}

	});

	Sophie.createStyleSheet({
	    "p-group": {
	        "display": "block",
	        "overflow": "hidden"
	    }

	});

	Sophie.createStyleSheet({}, '@media (max-width: 767px)');

	module.exports = Group;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Page = __webpack_require__(75);
	var A = __webpack_require__(88);
	var NavBar = __webpack_require__(83);

	var Nav = Sophie.createClass("p-nav-page", {

	    render: function render() {

	        return Sophie.element(
	            "p-nav-page",
	            null,
	            Sophie.element(
	                "ul",
	                { "class": "nav navbar-nav" },
	                this.renderChildren()
	            )
	        );
	    },
	    renderItem: function renderItem() {
	        var items = [];
	        for (var i = 0; i < this.state.pageList.length; i++) {
	            var data = this.state.pageList[i];
	            var child = Sophie.element(
	                A,
	                { "data-id": data.id },
	                data.title
	            );
	            child.creater = child._owner = this.creater;
	            child.parent = this;
	            items.push(child);
	        }
	        this.props.children = items;
	    },
	    renderChildren: function renderChildren() {
	        this.renderItem();
	        var items = [];
	        for (var i = 0; i < this.props.children.length; i++) {
	            var data = this.props.children[i];

	            items.push(Sophie.element(
	                "li",
	                { "data-id": data.id },
	                data
	            ));
	        }
	        return items;
	    },
	    getDefaultChildren: function getDefaultChildren() {
	        var items = [];
	        for (var i = 0; i < this.state.pageList.length; i++) {
	            var data = this.state.pageList[i];
	            items.push(Sophie.element(
	                "li",
	                { "data-id": data.id },
	                Sophie.element(
	                    A,
	                    { "data-id": data.id },
	                    data.title
	                )
	            ));
	        }
	        return items;
	    },
	    getInitialState: function getInitialState() {
	        return {
	            pageList: []
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        var self = this;

	        self.activeBind();
	        Sophie.ready(function () {

	            self.initPage();

	            // $(".navbar-toggle-render","p-header").remove();
	            self.navbarToggle = $("p-nav-bar", self.nativeNode);
	            self.navbar = $(".navbar-nav", self.nativeNode);

	            $('p-site').addClass("nav-close");

	            // self.navbarToggle.click(function () {
	            //     // self.showPopup()
	            //     self.showSidebar();
	            // })
	            //
	            // $(document).click(function(ev){
	            //   var target = $(ev.target);
	            //
	            //   if(!target.closest(self.navbarToggle).length&&!target.closest(self.navbar).length){
	            //     self.hideSidebar();
	            //   }
	            //
	            // })

	        });
	    },
	    activeBind: function activeBind() {
	        var self = this;

	        for (var i = 0; i < this.state.pageList.length; i++) {
	            if (this.state.pageList[i].isActive) {
	                this.active(this.state.pageList[i].id);
	            }
	        }

	        $(this.nativeNode).delegate("li p-a", "click", function (ev) {
	            var li = $(ev.target).closest("p-a");
	            var id = li.attr("data-id");
	            var site = $("p-site");
	            if (site.length) {
	                site.get(0).vnode.active(id);
	                self.active(id);
	            } else {
	                self.active(id);
	            }
	        });
	    },

	    active: function active(id) {
	        var self = this;
	        var lis = $(".navbar-nav li p-a", self.nativeNode);
	        lis.removeClass("active");
	        lis.each(function (index, el) {
	            if ($(el).attr("data-id") == id) {
	                $(el).addClass("active");
	            }
	        });
	    },

	    removeItem: function removeItem(id) {
	        var children = this.state.pageList;

	        for (var i = 0; i < children.length; i++) {
	            if (children[i]["id"] == id) {
	                this.state.pageList.splice(i, 1);
	                this._update();
	            }
	        }

	        this.autoWidth();
	    },

	    addOne: function addOne(id, title, isActive, autoWidth) {

	        autoWidth = autoWidth ? autoWidth : true;

	        if ($('li[data-id=' + id + ']', this.nativeNode).length) {
	            return;
	        }

	        this.state.pageList.push({
	            id: id,
	            title: title
	        });

	        this._update();
	        if (isActive) {
	            this.active(id);
	        }

	        if (autoWidth) this.autoWidth();
	    },

	    createDefault: function createDefault() {},

	    initPage: function initPage() {
	        var pages = $("p-body").find("p-page");

	        var pageData = [];
	        pages.each(function (index, el) {
	            pageData.push({ id: $(el).attr("id"), title: $(el).attr("title"), isActive: $(el).hasClass("active") });
	        });

	        if (pageData.length) {

	            this.setState({ pageList: pageData });
	        } else {

	            this.createDefault();
	        }

	        this.autoWidth();
	    },

	    autoHeight: function autoHeight() {
	        //使用table-cell解决

	        $(".navbar-nav li", this.nativeNode).css("height", "100%");
	    },
	    autoWidth: function autoWidth() {

	        var li = $(".navbar-nav li", this.nativeNode);
	        var l = li.length;
	        // var allWidth = $(this).width();

	        // var width = (allWidth - 10 * (li.length - 1) ) / li.length / allWidth * 100;
	        // if (width < 20)width = 20;
	        li.css("width", 1 / l * 100 + "%");
	    },

	    showPopup: function showPopup() {
	        var self = this;
	        if ($(".fixed-nav", self).prop("isShow") == true) {
	            $(".fixed-nav", self).hide();
	            $(".fixed-nav", self).prop("isShow", false);

	            $("body").css("overflow", "");
	        } else {
	            $(".fixed-nav", self).show();

	            $(".fixed-nav", self).prop("isShow", true);

	            $("body").css("overflow", "hidden");
	            $(".fixed-nav", self).height($(window).height() - parseInt($(".fixed-nav", self).css("top")));
	        }
	    },

	    showSidebar: function showSidebar() {
	        var self = this;
	        if (this.isShow == true) {

	            $(this.nativeNode).removeClass("nav-open");
	            $(this.nativeNode).addClass("nav-close");
	            this.isShow = false;
	        } else {
	            $(this.nativeNode).addClass("nav-open");
	            $(this.nativeNode).removeClass("nav-close");

	            this.isShow = true;
	        }
	    },
	    hideSidebar: function hideSidebar() {
	        var self = this;
	        if (this.isShow == true) {

	            $(this.nativeNode).removeClass("nav-open");
	            $(this.nativeNode).addClass("nav-close");
	            this.isShow = false;
	        }
	    },

	    scale: function scale(el, width) {
	        var oldWidth = el.width();
	        var currentFontSize = parseInt(el.css("fontSize"));

	        var fontSize = width / oldWidth * currentFontSize;
	        el.css("fontSize", fontSize + "px");
	    },

	    mobileRender: function mobileRender() {
	        var winWidth = $('body').width();
	        var self = this;

	        if (winWidth <= play.mediaQueryValue.phone) {
	            var children = $(self.nativeNode).find("li");
	            children.each(function (index, el) {
	                el = $(el);
	                // self.scale(el, 200)
	            });
	        } else {
	            $("p-site").removeClass("nav-open");
	            var children = $(self.nativeNode).find("li");
	            children.each(function (index, el) {
	                el = $(el);
	                el.css("fontSize", "");
	            });
	        }
	    }

	});

	Sophie.createStyleSheet({
	    'p-nav-page ': {
	        color: '#777777',
	        height: '1rem',
	        display: 'block',
	        width: '10rem',
	        position: 'absolute',
	        margin: 'auto!important'
	    },

	    'p-nav-page .navbar-nav ': {
	        margin: '0 !important',
	        padding: '0 !important',
	        height: '100%',
	        width: '100%',
	        overflowX: 'hidden',
	        float: 'none!important'
	    },

	    'p-nav-page .navbar-nav li ': {
	        width: '25%',
	        overflow: 'hidden',
	        float: 'left',
	        height: '100%'
	    },

	    'p-nav-page p-a ': {

	        width: '100%',
	        height: '100%',
	        textAlign: 'center'
	    },

	    'p-nav-page p-a  .p-text-wrap': {
	        fontSize: '0.3em'
	    },

	    'p-nav-page ul li p-a.active,p-nav-page ul li p-a.hover ': {
	        color: '#fff',
	        backgroundColor: 'red'
	    },

	    'p-nav-page .navbar-nav li:last-child ': {
	        marginRight: '0'

	    },

	    'p-nav-page > p-nav-bar': {
	        display: 'none',
	        position: 'absolute'

	    }

	});

	Sophie.createStyleSheet({

	    'p-nav-page': {
	        position: 'absolute',
	        left: 7 + "em",
	        top: '50px',
	        width: '200px!important',
	        height: "auto",
	        backgroundColor: 'rgba(255, 255, 255, 0.0)',
	        margin: '0!important',
	        "display": "none"

	    },

	    'p-nav-page .navbar-nav ': {
	        backgroundColor: 'rgba(255, 255, 255, 0.9)'
	    },

	    ' p-nav-page .navbar-nav': {

	        width: '100%!important',
	        height: '100%!important',
	        left: '0px',
	        top: '0px',
	        backgroundColor: '#fff',
	        margin: '0!important',
	        display: "flex",
	        "flex-direction": "column"

	    },

	    'p-nav-page .navbar-nav li ': {
	        display: 'block',
	        float: 'none',
	        width: '100%!important',
	        "height": "1.5em"
	    },

	    'p-nav-page .navbar-nav li a ': {
	        textAlign: 'left',
	        padding: '0 20px'
	    },

	    'p-site.nav-open  p-header p-nav-page': {
	        display: "none"

	        // transition: "left 0.5s",
	        // left:"-200px"
	    },

	    'p-site.nav-close  p-header p-nav-page': {
	        display: "none"
	        // transition: "left 0.5s",
	        // left:0
	    },

	    'p-site.nav-open p-nav-page-mask ': {
	        display: "block!important"
	    },

	    'p-site.nav-close p-nav-page-mask ': {
	        display: "none"
	    },

	    'p-site.nav-open p-nav-page ': {
	        display: "none!important"
	    },

	    'p-site.nav-close p-nav-page ': {
	        display: "none"
	    },

	    'p-header': {
	        height: '4em'
	    }

	}, "@media (max-width: 767px)");

	module.exports = Nav;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Sophie$createStyleSh;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var PageNav = __webpack_require__(109);
	var LayoutGrid = __webpack_require__(94);
	var Layout = __webpack_require__(89);
	var Logo = __webpack_require__(107);
	var Pic = __webpack_require__(97);

	var Nav = Sophie.createClass("p-nav-page-inline", {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      //百分比
	      firstWidth: "10%",
	      secondWidth: "5%",
	      threeWidth: "85%"
	    };
	  },
	  render: function render() {
	    return Sophie.element(
	      "p-nav-page-inline",
	      { "class": "p-layout-grid-line" },
	      Sophie.element(
	        "div",
	        { "class": "c-row-1 p-layout-wrap", style: "width:" + this.props.firstWidth },
	        Sophie.element(Logo, { src: "https://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png_145x145.jpg" })
	      ),
	      Sophie.element("div", { "class": "c-row-2 p-layout-wrap", style: "width:" + this.props.secondWidth }),
	      Sophie.element(
	        "div",
	        { "class": "c-row-3 p-layout-wrap", style: "width:" + this.props.threeWidth },
	        Sophie.element(PageNav, null)
	      )
	    );
	  },

	  setItemWidth: function setItemWidth(firstWidth, secondWidth, threeWidth) {
	    this.props.firstWidth = firstWidth, this.props.secondWidth = secondWidth;
	    this.props.threeWidth = threeWidth;
	  }
	});

	Sophie.createStyleSheet((_Sophie$createStyleSh = {
	  'p-nav-page-inline': {
	    display: "block",
	    height: '2em',
	    width: '4em',
	    position: 'absolute'
	  }

	}, _defineProperty(_Sophie$createStyleSh, "p-nav-page-inline", {

	  overflow: 'hidden',
	  minHeight: '10px',
	  height: "1.5em",
	  display: 'table',
	  width: '15em'

	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline:before,p-nav-page-inline:after ', {
	  display: 'table',
	  lineHeight: '0',
	  content: '""',
	  clear: 'both'
	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline  > .p-layout-wrap  ', {

	  width: '50%',
	  minHeight: '10px',
	  height: "100%",
	  display: "table-cell",
	  overflowX: "hidden"

	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline p-pic', {
	  width: "100%",
	  height: "100%"
	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline p-logo', {
	  width: "100%",
	  height: "100%",
	  position: 'static'
	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline .holder', {
	  width: "100px"

	}), _defineProperty(_Sophie$createStyleSh, 'p-nav-page-inline p-nav-page', {
	  width: "100%",
	  height: "100%",
	  position: 'static'
	}), _Sophie$createStyleSh));

	Nav.createStyleSheet({

	  'p-nav-page-inline': {
	    display: "table",
	    height: '2em',
	    width: '20em',
	    left: 10,
	    top: 10,
	    margin: '0',
	    position: 'absolute',
	    overflow: 'visible'

	  },

	  'p-nav-page-inline  p-nav-page': {

	    position: 'absolute',
	    top: "2em",
	    left: '6em',
	    width: 200,
	    height: 100

	  }

	}, "@media (max-width: 767px)");

	module.exports = Nav;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var PageNav = __webpack_require__(109);
	var LayoutGrid = __webpack_require__(94);
	var Layout = __webpack_require__(89);
	var Logo = __webpack_require__(107);
	var Pic = __webpack_require__(97);
	var NavBar = __webpack_require__(83);

	var Nav = Sophie.createClass("p-nav-page-absolute", {
	  getDefaultProps: function getDefaultProps() {
	    return {};
	  },
	  render: function render() {

	    return Sophie.element(
	      "p-nav-page-absolute",
	      null,
	      Sophie.element(Logo, { src: "https://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png_145x145.jpg" }),
	      Sophie.element(NavBar, null),
	      Sophie.element(PageNav, null)
	    );
	  },

	  componentDidMount: function componentDidMount() {

	    var self = this;
	    setTimeout(function () {

	      // $(".navbar-toggle-render","p-header").remove();
	      self.navbarToggle = $("p-nav-bar", self.nativeNode);
	      self.navbar = $(".navbar-nav", self.nativeNode);
	      //
	      // self.navbarToggle.appendTo("p-header .p-container-fluid");
	      // self.navbarToggle.addClass("navbar-toggle-render")
	      //


	      self.navbarToggle.click(function () {
	        // self.showPopup()
	        self.showSidebar();
	      });

	      $(document).click(function (ev) {
	        var target = $(ev.target);

	        if (!target.closest(self.navbarToggle).length && !target.closest(self.navbar).length) {
	          self.hideSidebar();
	        }
	      });
	    }, 0);
	  },
	  showSidebar: function showSidebar() {
	    var self = this;
	    if (this.props.isShow == true) {

	      $(this.nativeNode).removeClass("nav-open");
	      $(this.nativeNode).addClass("nav-close");
	      this.props.isShow = false;
	    } else {
	      $(this.nativeNode).addClass("nav-open");
	      $(this.nativeNode).removeClass("nav-close");

	      this.props.isShow = true;
	    }
	  },
	  hideSidebar: function hideSidebar() {
	    var self = this;
	    if (this.isShow == true) {

	      $(this.nativeNode).removeClass("nav-open");
	      $(this.nativeNode).addClass("nav-close");
	      this.isShow = false;
	    }
	  }

	});

	Sophie.createStyleSheet({
	  'p-nav-page-absolute': {
	    display: "block",
	    height: '1.5em',
	    width: '15em',
	    position: 'relative'
	  },

	  'p-nav-page-absolute:before,p-nav-page-absolute:after ': {
	    display: 'table',
	    lineHeight: '0',
	    content: '""',
	    clear: 'both'
	  },

	  'p-nav-page-absolute > *': {
	    position: "absolute",
	    top: 0,
	    left: 0
	  },

	  'p-nav-page-absolute > p-logo': {
	    top: "10px",
	    left: "1em"
	  },

	  'p-nav-page-absolute > p-nav-page': {
	    left: "5em",
	    top: "10px"
	  },
	  'p-nav-page-absolute > p-nav-bar': {
	    display: 'none'
	  }

	});

	Nav.createStyleSheet({

	  'p-nav-page-absolute': {
	    height: '2em',
	    width: '20em',
	    marginLeft: 10,

	    marginTop: '0px',
	    position: 'relative',
	    overflow: 'visible'
	  },

	  'p-nav-page-absolute > p-nav-bar': {
	    position: 'absolute',
	    top: "0.0em",
	    left: '17.5em',
	    display: 'block'

	  },

	  'p-nav-page-absolute > p-nav-page': {
	    position: 'absolute',
	    top: "2em",
	    left: '7em',
	    width: 200,
	    height: 100,
	    display: "none"
	  },

	  'p-nav-page-absolute.nav-open > p-nav-page': {
	    display: "block!important"
	  },

	  'p-nav-page-absolute.nav-close > p-nav-page': {

	    display: "none!important"

	  }

	}, "@media (max-width: 767px)");

	module.exports = Nav;

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	var _pTextPTextWrap, _pHPTextWrap;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var placeholder = "双击输入内容...";
	var Text = Sophie.createClass("p-text", {
	    componentDidMount: function componentDidMount() {
	        //粘贴
	        var self = this;
	        var target = $(".p-text-wrap", this.nativeNode);
	        var el = $(this.nativeNode);
	        if (this.props.children.length == 0) {
	            this.prepareChildren();
	        }

	        //元素删除之后事件会丢失, 所以加在#page，其它事件加在html上
	        target.on("mousedown mouseup dbclick click keyup keydown", function (ev) {
	            var target = $(ev.target);
	            if (self.state.editing) {
	                ev.stopPropagation();
	            } else {
	                ev.preventDefault();
	            }
	        });

	        //元素删除之后事件会丢失, 所以加在#page，其它事件加在html上
	        el.on("mousedown mouseup dbclick click keyup keydown", function (ev) {
	            var target = $(ev.target);
	            if (self.state.editing) {
	                ev.stopPropagation();
	            } else {
	                ev.preventDefault();
	            }
	        });

	        target.on("paste", function (ev) {
	            var target = $(ev.target);
	            if (!self.state.editing) return;

	            if (ev.originalEvent.clipboardData) {
	                var text = ev.originalEvent.clipboardData.getData("text/plain");
	                ev.preventDefault();
	                target.html(text);
	                target.focus();
	                self.prepareChildren();
	                // document.execCommand("insertHTML", false, text);
	            }
	        });

	        target.on('keydown', function (ev) {
	            var target = $(ev.target);
	            if (target.closest("p-a").length || target.closest("p-h").length) {
	                //阻止换行
	                var keycode = ev.charCode || ev.keyCode;
	                if (keycode == 13) {
	                    ev.preventDefault(); //for firefox
	                    return false;
	                }
	            }
	        });

	        target.on('keyup', function (ev) {
	            self.prepareChildren();
	            $(document).trigger("textInput");
	        });

	        //ie 可能不支持

	        target.on('change input', function (ev) {
	            self.prepareChildren();
	            $(document).trigger("textInput");
	        });

	        target.on('textChange', function () {
	            self.prepareChildren();
	            $(document).trigger("textInput");
	        });
	    },
	    getInitialState: function getInitialState() {
	        return {
	            editing: false
	        };
	    },
	    render: function render() {
	        var contenteditable = this.state.editing;
	        return Sophie.element(
	            "p-text",
	            { "class": this.props.class || "" },
	            Sophie.element(
	                "div",
	                { "class": "p-text-wrap", contenteditable: contenteditable },
	                this.props.children
	            )
	        );
	    },

	    setFontSize: function setFontSize(fontSize) {
	        $('.p-text-wrap', this.nativeNode).css("fontSize", fontSize);
	    },
	    prepareChildren: function prepareChildren() {
	        var target = $(".p-text-wrap", this.nativeNode);
	        var value = target.html();

	        this.props.children = [{ type: "html", nodeValue: value }];
	    },

	    toEdit: function toEdit(el) {
	        var self = this;

	        this.state.editing = true;
	        var target = $('.p-text-wrap', this.nativeNode);
	        target.attr("contenteditable", true);
	        if ($.trim(target.text()) === placeholder) {
	            target.html("");
	        }
	        $(target).focus();
	    },

	    cancelEdit: function cancelEdit(el) {
	        var self = this;
	        this.state.editing = false;
	        var el = $('.p-text-wrap', this.nativeNode);
	        el.attr("contenteditable", false);
	        el.blur();
	        el.removeClass("wysihtml-sandbox");
	        el.removeClass("wysihtml-editor");
	        if ($.trim(el.text()) === "") el.text(placeholder);
	    }

	});

	var Header = Sophie.createClass("p-h", {
	    render: function render() {
	        var contenteditable = this.state.editing;
	        return Sophie.element(
	            "p-h",
	            { "class": this.props.class || "" },
	            Sophie.element(
	                "div",
	                { "class": "p-text-wrap", contenteditable: contenteditable },
	                this.props.children
	            )
	        );
	    }
	}, Text);

	Sophie.createStyleSheet({

	    'p-text': {
	        overflow: 'hidden',
	        outline: 'none',
	        display: 'table',
	        padding: '10px',
	        width: '5em',
	        height: 'auto!important'
	    },

	    'p-text .p-text-wrap': (_pTextPTextWrap = {

	        textDecoration: 'none',
	        color: 'inherit',

	        fontFamily: 'inherit',
	        fontWeight: 'inherit',
	        fontStyle: 'inherit',
	        textAlign: 'inherit'
	    }, _defineProperty(_pTextPTextWrap, "textDecoration", 'inherit'), _defineProperty(_pTextPTextWrap, "fontSize", "0.3em"), _defineProperty(_pTextPTextWrap, "backgroundColor", 'transparent !important'), _defineProperty(_pTextPTextWrap, "height", '100%'), _defineProperty(_pTextPTextWrap, "width", '100%'), _defineProperty(_pTextPTextWrap, "wordWrap", 'break-word'), _defineProperty(_pTextPTextWrap, "wordBreak", 'break-all'), _defineProperty(_pTextPTextWrap, "wordWrap", 'break-word'), _defineProperty(_pTextPTextWrap, "display", 'table-cell'), _defineProperty(_pTextPTextWrap, "verticalAlign", 'middle'), _defineProperty(_pTextPTextWrap, "pointerEvents", 'none'), _pTextPTextWrap),

	    'p-text > .p-text-wrap > p-icon': {
	        display: 'inline!important',
	        marginRght: '10px!important'

	    },

	    'p-h ': {
	        overflow: 'hidden',
	        outline: 'none',

	        display: 'table',
	        width: '5em',
	        height: '2em',
	        padding: '0 10px ',
	        fontWeight: 'bold',

	        verticalAlign: 'middle',

	        MozUserSelect: 'none', /*火狐*/
	        WebkitUserSelect: 'none!important', /*webkit浏览器*/
	        MsUserSelect: 'none', /*IE10*/
	        KhtmlUserSelect: 'none', /*早期浏览器*/
	        userSelect: 'none!important'
	    },

	    'p-h[contenteditable="true"]': {
	        MozUserSelect: 'none', /*火狐*/
	        WebkitUserSelect: 'none!important', /*webkit浏览器*/
	        MsUserSelect: 'none', /*IE10*/
	        KhtmlUserSelect: 'none', /*早期浏览器*/
	        userSelect: 'none!important'
	    },

	    'p-h > .p-text-wrap > p-icon': {

	        display: 'inline!important',
	        marginRight: '10px!important'

	    },

	    'p-h .p-text-wrap ': (_pHPTextWrap = {
	        whiteSpace: 'nowrap',
	        textDecoration: 'none',
	        color: 'inherit',

	        fontFamily: 'inherit',
	        fontWeight: 'inherit',
	        fontStyle: 'inherit',
	        textAlign: 'inherit'
	    }, _defineProperty(_pHPTextWrap, "textDecoration", 'inherit'), _defineProperty(_pHPTextWrap, "fontSize", "0.5em"), _defineProperty(_pHPTextWrap, "backgroundColor", 'transparent !important'), _defineProperty(_pHPTextWrap, "height", '100%'), _defineProperty(_pHPTextWrap, "width", '100%'), _defineProperty(_pHPTextWrap, "textOverflow", 'clip'), _defineProperty(_pHPTextWrap, "display", 'table-cell'), _defineProperty(_pHPTextWrap, "verticalAlign", 'middle'), _pHPTextWrap)

	});

	module.exports = Text;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Layout = __webpack_require__(89);
	var RootTag = __webpack_require__(114);
	var TagName = __webpack_require__(115);

	var List = Sophie.createClass("p-list", {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            class: "",
	            defaultInnerVnodeName: "",
	            "data-c-num": 2,
	            "data-r-num": 2,
	            spacing: 0,

	            template: "",
	            padding: 8,
	            props: []
	        };
	    },

	    render: function render() {
	        var self = this;
	        var style = "";
	        if ($(document).width() <= 768 && self.parent.name == "p-page") {
	            //可能已经被删除了
	            if (self.nativeNode.parentNode) {
	                style = "fontSize:" + this.props["data-c-num"] + "rem";
	                self.isMobile = true;
	            }
	        } else {
	            style = "";
	            self.isMobile = false;
	        }

	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        var children = this.props.children;

	        return Sophie.element(
	            "p-list",
	            { "class": this.props.class, "data-c-num": this.props["data-c-num"], "data-r-num": this.props["data-r-num"] },
	            Sophie.element(
	                "div",
	                { style: style, "class": "ul" },
	                this.renderChildren()
	            )
	        );
	    },

	    getDefaultChildren: function getDefaultChildren() {
	        var result = [];

	        var l = this.props["data-c-num"] * this.props["data-r-num"];

	        for (var i = 0; i < l; i++) {
	            result.push(this.getTemplate());
	        }
	        return result;
	    },
	    componentDidSetProps: function componentDidSetProps(value) {
	        if (value["padding"]) {
	            this.setAllColumnWidth(undefined, false);
	        } else if (value["padding-left"]) {}
	    },

	    getTemplate: function getTemplate() {
	        return Sophie.element(Layout, null);
	    },
	    clearPlaceholdChilren: function clearPlaceholdChilren() {
	        var l = this.props["data-c-num"] * this.props["data-r-num"];

	        var children = this.props.children;

	        if (l < children.length) {
	            var newChildren = [];
	            for (var i = 0; i < children.length; i++) {
	                if (i < l) {
	                    newChildren.push(children[i]);
	                } else {
	                    if (children[i].props.children.length || children[i].props.src) {
	                        newChildren.push(children[i]);
	                    }
	                }
	            }
	            this.props.children = newChildren;
	        }
	    },

	    renderChildren: function renderChildren() {

	        var result = [];
	        this.clearPlaceholdChilren();

	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        var padding = this.props.padding - 0.5;

	        var children = this.props.children;
	        for (var i = 0; i < l; i++) {
	            if (children[i]) {
	                var index = i + 1;

	                var cellStyle = "height:" + this.props.cellHeight + "em" + ";width:" + this.props.cellWidth + "%";
	                var c = index % this.props["data-c-num"];

	                if (c !== 0) {
	                    console.log(c);
	                    cellStyle += ";margin-right:" + padding + "px";
	                }
	                if (index > this.props["data-c-num"]) {
	                    cellStyle += ";margin-top:" + padding + "px";
	                }
	                var r = Sophie.element(
	                    "div",
	                    { "class": "c-list", style: cellStyle },
	                    Sophie.element(
	                        "div",
	                        { "class": "c-ceil" },
	                        children[i]
	                    )
	                );
	                result.push(r);
	            }
	        }

	        return result;
	    },

	    componentWillMount: function componentWillMount() {},

	    componentDidMount: function componentDidMount() {
	        this.$ = $(this.nativeNode);
	        var self = this;

	        if (!this.props.cellWidth) {
	            self.initRowColumn();
	            self.forceUpdate();
	        }

	        $(window).on("resize", function () {
	            setTimeout(function () {
	                self.forceUpdate();
	            }, 10);
	        });
	    },

	    initRowColumn: function initRowColumn() {
	        this.setAllColumnWidth(undefined, false);
	        this.setAllRowHeight(undefined, false);
	    },

	    resize: function resize() {
	        setTimeout(function () {
	            this.setAllColumnWidth();
	            this.setAllRowHeight();
	        }, 0);
	    },

	    setColumn: function setColumn(columm) {
	        this.props["data-c-num"] = columm;
	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        var cl = this.props.children.length;

	        if (cl < l) {
	            for (var i = 0; i < l - cl; i++) {
	                this.append(this.getTemplate());
	            }
	        }

	        this.setAllColumnWidth();
	    },

	    setRow: function setRow(row) {
	        this.props["data-r-num"] = row;
	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        var cl = this.props.children.length;

	        if (cl < l) {
	            for (var i = 0; i < l - cl; i++) {
	                this.append(this.getTemplate());
	            }
	            this.forceUpdate();
	            this.autoContainerHeight();
	        } else {
	            this.forceUpdate();
	            this.autoContainerHeight();
	        }
	    },
	    computerHeight: function computerHeight() {
	        var r = this.props["data-r-num"];
	        var height = this.props.cellHeight;
	        var currentFontSize = parseFloat($(this.$).css("fontSize"));

	        var allHeight = height * currentFontSize * r + (r - 1) * this.props.padding;
	        return allHeight;
	    },

	    autoContainerHeight: function autoContainerHeight() {

	        var allHeight = this.computerHeight();
	        $(this.$).height(allHeight);
	    },

	    showOrHideCeil: function showOrHideCeil() {

	        var cnum = this.props["data-c-num"];
	        var rnum = this.props["data-r-num"];
	        var allNum = cnum * rnum;
	        var realNum = $(this.$).find(".c-list").length;

	        if (allNum <= realNum) {
	            for (var i = 0; i < realNum; i++) {
	                if (i < allNum) {
	                    $(this.$).find(".c-list").eq(i).show();
	                } else {
	                    $(this.$).find(".c-list").eq(i).hide();
	                }
	            }
	        } else {
	            $(this.$).find(".c-list").show();
	        }
	    },

	    addOne: function addOne(el) {
	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        this.append(el.vnode);
	    },

	    addOneVnode: function addOneVnode(elVnode) {
	        var l = this.props["data-c-num"] * this.props["data-r-num"];
	        this.append(elVnode);
	        this._update();
	        var children = this.props.children;

	        if (children.length > l && children.length < l + this.props["data-c-num"]) {
	            this.props["data-r-num"] += 1;
	            this._update();
	            this.autoContainerHeight();
	        }
	    },
	    removeOne: function removeOne(elVnode) {},

	    addOneEmpty: function addOneEmpty() {
	        this.addOneVnode(this.getTemplate());
	    },

	    setAllColumnWidth: function setAllColumnWidth(width, updateForce) {
	        var updateForce = updateForce === undefined ? true : updateForce;

	        var width = width || $(this.$).width();

	        var padding = this.props.padding;
	        var oNum = this.props["data-c-num"];
	        var columnWith = (width - padding * (oNum - 1)) / oNum;
	        var self = this;

	        var currentFontSize = parseFloat($(this.$).css("fontSize"));

	        var cellWidth = play.pxToPercent(columnWith, { width: width });

	        this.props.cellWidth = cellWidth;

	        if (updateForce) {
	            this.forceUpdate();
	        }
	    },

	    setAllRowHeight: function setAllRowHeight(height, updateForce) {
	        var updateForce = updateForce === undefined ? true : updateForce;
	        var height = height || $(this.$).height();
	        var rowNum = this.props["data-r-num"];
	        var padding = this.props.padding;
	        var rowHeight = (height - (rowNum - 1) * padding) / rowNum;

	        var currentFontSize = parseFloat($(this.$).css("fontSize"));

	        var value = play.pxToEm(rowHeight, currentFontSize);

	        this.props.cellHeight = value;
	        if (updateForce) {
	            this.forceUpdate();
	        }
	    }

	});

	Sophie.createStyleSheet({

	    'p-list': {
	        display: 'block',
	        overflow: 'hidden',
	        width: '10rem',
	        height: '10rem',
	        clear: 'both'
	    },

	    'p-list:before,  p-list:after': {
	        display: 'table',
	        lineHeight: '0',
	        content: ''
	    },

	    'p-list > .ul': {
	        display: 'block',
	        width: "100%"
	    },

	    'p-list > .ul .c-list': {
	        float: 'left',
	        listStyle: 'none',
	        minHeight: '10px',
	        overflow: 'hidden',
	        boxSizing: 'border-box'
	    },

	    'p-list > .ul .c-list .c-ceil': {
	        height: '100%',
	        minHeight: '10px',
	        display: 'block',
	        width: '100%',
	        overflow: 'hidden'
	    },

	    'p-list  .c-ceil > p-layout': {
	        height: '100%',
	        minHeight: '0px',
	        display: 'block',
	        width: '100%',
	        overflow: 'hidden'

	    },

	    'p-list > ul .c-list .c-ceil .placeholder': {
	        display: 'none!important',
	        position: 'absolute'
	    }

	});

	Sophie.createStyleSheet({}, "@media (max-width: 767px)");

	module.exports = List;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sophie = __webpack_require__(2);
	var TagName = __webpack_require__(115);

	var Children = Sophie.createClass('p-tagname', {

	  componentWillMount: function componentWillMount() {
	    this.props.tagName = this.owner.name;
	  }

	}, TagName);

	module.exports = Children;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sophie = __webpack_require__(2);

	var Children = Sophie.createClass('p-tagname', {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: "div"
	    };
	  },

	  componentWillMount: function componentWillMount() {},

	  getAllClassName: function getAllClassName() {
	    var className = [];
	    var fun = function fun(c) {

	      if (c.tagName) {
	        className.push(c.tagName);
	      }
	    };
	  },

	  render: function render() {
	    var tagName = this.props.tagName;
	    // var className = this.props.class || "";
	    //
	    // this.props.class = tagName + className;
	    return Sophie.element(tagName, this.props, this.props.children);
	  }
	});

	module.exports = Children;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var List = __webpack_require__(113);
	var Pic = __webpack_require__(97);

	var ListImg = Sophie.createClass("p-list-img", {
	    getTemplate: function getTemplate() {
	        return Sophie.element(Pic, null);
	    }

	}, List);

	Sophie.createStyleSheet({
	    "p-list .c-ceil >  p-pic": {
	        height: "100%",
	        display: "block",
	        width: "100%",
	        overflow: "hidden"

	    }

	});

	module.exports = ListImg;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Text = __webpack_require__(112);
	var Pic = __webpack_require__(97);

	var Slide = Sophie.createClass("p-slide", {

	    getDefaultChildren: function getDefaultChildren() {
	        return [Sophie.element(
	            Pic,
	            null,
	            Sophie.element(
	                Text,
	                { 'class': 'carousel-caption' },
	                '图片1'
	            )
	        ), Sophie.element(
	            Pic,
	            null,
	            Sophie.element(
	                Text,
	                { 'class': 'carousel-caption' },
	                '图片2'
	            )
	        ), Sophie.element(
	            Pic,
	            null,
	            Sophie.element(
	                Text,
	                { 'class': 'carousel-caption' },
	                '图片3'
	            )
	        )];
	    },

	    renderChildren: function renderChildren() {
	        var children = [];

	        for (var i = 0; i < this.props.children.length; i++) {
	            var className = i == 0 ? "item active" : "item";
	            children.push(Sophie.element(
	                'div',
	                { 'class': className },
	                this.props.children[i]
	            ));
	        }
	        return children;
	    },
	    render: function render() {
	        return Sophie.element(
	            'p-slide',
	            null,
	            Sophie.element(
	                'div',
	                { 'class': 'carousel slide' },
	                Sophie.element(
	                    'div',
	                    { 'class': 'carousel-inner' },
	                    this.renderChildren()
	                ),
	                Sophie.element(
	                    'ol',
	                    { 'class': 'carousel-indicators' },
	                    this.renderItemBar()
	                ),
	                Sophie.element(
	                    'a',
	                    { 'class': 'left carousel-control', href: '.carousel', 'data-slide': 'prev' },
	                    Sophie.element('span', { 'class': 'icon-prev' })
	                ),
	                Sophie.element(
	                    'a',
	                    { 'class': 'right carousel-control', href: '.carousel', 'data-slide': 'next' },
	                    Sophie.element('span', { 'class': 'icon-next' })
	                )
	            )
	        );
	    },
	    renderItemBar: function renderItemBar() {
	        var result = [];
	        var l = this.props.children;
	        var active = "";
	        for (var i = 0; i < l; i++) {

	            if (i == 0) active = "active";
	            result.push(Sophie.element('li', { 'data-target': '#carousel-example-generic', 'data-slide-to': i, 'class': active }));
	        }
	        return result;
	    },

	    componentDidMount: function componentDidMount() {

	        if (!$(".carousel", this.nativeNode).attr("id")) {
	            var id = "carousel-" + new Date().getTime();

	            $(".carousel", this.nativeNode).attr("id", id);
	            $(".left", this.nativeNode).attr("href", "#" + id);
	            $(".right", this.nativeNode).attr("href", "#" + id);

	            //  $('p-slide .carousel').carousel();
	        }
	    },

	    addOne: function addOne(picSrc, text) {
	        var newChildren = Sophie.element(
	            Pic,
	            null,
	            Sophie.element(
	                Text,
	                { 'class': 'carousel-caption' },
	                '图片'
	            )
	        );
	        this.append(newChildren);
	    }

	});

	Sophie.createStyleSheet({

	    'p-slide': {
	        display: 'block',
	        overflow: 'hidden',

	        width: '20rem',
	        height: '5rem'
	    },
	    'p-slide .carousel-inner': {},

	    'p-slide .carousel-indicators': {
	        bottom: 0,
	        height: '40px',
	        zIndex: 10

	    },

	    'p-slide .carousel, p-slide .carousel-inner, p-slide .carousel-inner .item': {
	        height: '100%',
	        overflow: 'hidden'
	    },

	    'p-slide .carousel-caption': {
	        left: '20%',
	        width: 'auto',
	        top: '3.5rem',
	        display: 'block',
	        textAlign: 'center'
	    },

	    'p-slide .carousel-caption .p-text-wrap': {
	        textAlign: 'center',
	        width: '100%',
	        display: 'block'
	    },

	    'p-slide img, p-slide p-pic': {
	        width: '100%',
	        height: '100%'
	    }

	});

	module.exports = Slide;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Sophie = __webpack_require__(2);
	(function (select) {

	    // 在编辑状态下，更新编辑属性
	    if (parent.play && parent.play.dom) {
	        //重置模板元素的属性
	        Sophie.on("onBeforeUpgrade", function (el) {
	            el = $(el);
	            parent.play.resetTemplateEditProp(el);
	        });

	        //设计当前元素的属性
	        Sophie.on("componentDidMount", function (el) {
	            el = $(el);
	            parent.play.initEditProp($(el));
	            //  $(parent.document).trigger("editableInit", [$(el)])
	        });
	    }

	    //支持vm单位 data-unit-vm = true
	    Sophie.on("onUpgrade", function (el) {
	        return;
	        el = $(el);
	        if (el.attr("data-unit-vm")) {
	            if (el.attr("data-p")) {
	                resetHeight(el);
	            }
	        }
	    });

	    var resetHeight = function resetHeight(el) {
	        var p = el.attr("data-p");
	        if (p) {
	            var v = parseFloat(p);
	            el.css("min-height", el.width() * v + "px");
	        }
	        if (parent.play) {
	            parent.play.select.reflow();
	        }
	    };

	    var resetHeightAll = function resetHeightAll(el) {
	        var all = $("[data-p]");
	        all.each(function (index, el) {
	            resetHeight($(el));
	        });
	        if (parent.play) {
	            parent.play.select.reflow();
	        }
	    };

	    //支持hover
	    $(document).one("mouseover", function (ev) {
	        if (window.isEditing) return;
	        var target = $(ev.target);
	        if (target.attr("data-hover")) {
	            target.addClass("hover");
	        }
	    });

	    $(document).one("mouseout", function (ev) {
	        if (window.isEditing) return;

	        var target = $(ev.target);

	        if (target.attr("data-hover")) {
	            target.removeClass("hover");
	        }
	    });

	    window.play = {
	        mediaQueryValue: {
	            'phone': 767,
	            'pad': [768, 991],
	            pc: 992
	        },
	        idPrefix: "p",
	        unit: "em",
	        pxToPercent: function pxToPercent(value, parentCoord) {
	            return value / parentCoord.width * 100;
	        },
	        pxToEm: function pxToEm(value, fontSize) {
	            return value / fontSize;
	        }
	    };

	    window.play.utils = {
	        generateID: function generateID() {
	            var selectorNum = parseInt($("body").attr("data-selector-num")) || 0;
	            selectorNum++;
	            $("body").attr("data-selector-num", selectorNum);
	            return selectorNum;
	        },
	        getID: function getID() {
	            var selectorNum = parseInt($("body").attr("data-selector-num"));
	            if (!selectorNum) {
	                selectorNum = 0;
	                $("body").attr("data-selector-num", 0);
	            }
	            return selectorNum;
	        }
	    };

	    //jquery extend
	    var binds = [];
	    $.fn.extend({
	        bindWidthDesc: function bindWidthDesc(desc, type, func) {
	            var self = this;
	            if (parent.play && parent.play) {
	                play.bindWidthDesc(desc, type, func, self);
	            } else {
	                this.on(type, func);
	            }
	        }

	    });

	    //支持rem

	    (function () {
	        //设置rem
	        // w:1280px  f:40px
	        // w: 640px  f:20px
	        var basefontSize = 60;

	        //TODO FOR TEST
	        var maxWidth = App.getMaxWidth();

	        Sophie.createStyleSheet({
	            '.p-container': {
	                maxWidth: maxWidth + "px!important"
	            }

	        });
	        var initBaseRem = function initBaseRem() {
	            var documentWidth = $("html").width();

	            if (documentWidth > maxWidth) documentWidth = maxWidth;

	            basefontSize = documentWidth / 1280 * 60;
	            $(document.documentElement).css("font-size", basefontSize + "px");
	            if (documentWidth < 768) {
	                $(document.documentElement).attr("id", "media-phone");
	            } else {
	                $(document.documentElement).attr("id", "media-pc");
	            }

	            play.baseFontSize = basefontSize;
	        };

	        initBaseRem();

	        $(window).on("resize", function () {
	            initBaseRem();
	        });

	        if (parent.play) {
	            parent.play.pxToRem = function (px) {
	                return px / basefontSize;
	            };
	        }
	    })();
	})();

	//覆盖 Sophie.createStyleSheet

	var createStyleSheet = Sophie.StyleSheet.create;

	Sophie.createStyleSheet = Sophie.StyleSheet.create = function (styles, mediaQuery, name) {

	    if (mediaQuery === "@media (max-width: 767px)") {
	        var newStyle = {};
	        for (var p in styles) {
	            newStyle["#media-phone #dotlinkface " + p] = styles[p];
	        }

	        createStyleSheet(newStyle, mediaQuery, name);
	    } else if (!mediaQuery) {
	        var newStyle = {};
	        for (var p in styles) {
	            newStyle["#media-pc #dotlinkface " + p] = styles[p];
	        }

	        // createStyleSheet(newStyle,mediaQuery,name)
	        createStyleSheet(styles, mediaQuery, name);
	    }
	};

	//通知父页面加载
	Sophie.on("ready", function () {
	    if (parent.play && parent.play.dom) {
	        var jQuery = parent.$;
	        jQuery(parent).trigger("iframeComplete", [window]);
	    }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var List = __webpack_require__(116);
	var Pic = __webpack_require__(97);
	var creater = {
	  listImg: function listImg() {
	    return Sophie.element(List, null);
	  }
	};

	Sophie.createStyleSheet({});

	module.exports = creater;

/***/ }
/******/ ]);