webpackJsonp([18,19],{

/***/ 71:
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

/***/ 72:
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

/***/ 223:
/***/ function(module, exports) {

	"use strict";

	var login = {
		isLogin: function isLogin() {
			if (window.debug) {
				return true;
			}
			return $.cookie("islogin");
		},
		getUser: function getUser() {
			var username = $.cookie("username");
			var email = $.cookie("email");
			return {
				username: username,
				email: email
			};
		},
		checkLoginRouter: function checkLoginRouter(nextState, replace, callback) {
			if (!login.isLogin()) {
				if (sessionStorage) {
					console.log(nextState);
					sessionStorage.setItem("redirect", nextState.location.pathname || "/");
				}
				replace("/user/login");
			}
			callback();
		}
	};

	(function ($) {

		var pluses = /\+/g;

		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}

		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}

		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}

		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}

			try {
				// Replace server-side written pluses with spaces.
				// If we can't decode the cookie, ignore it, it's unusable.
				// If we can't parse the cookie, ignore it, it's unusable.
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch (e) {}
		}

		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}

		var config = $.cookie = function (key, value, options) {

			// Write

			if (arguments.length > 1 && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);

				if (typeof options.expires === 'number') {
					var days = options.expires,
					    t = options.expires = new Date();
					t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
				}

				return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
			}

			// Read

			var result = key ? undefined : {},

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			    i = 0,
			    l = cookies.length;

			for (; i < l; i++) {
				var parts = cookies[i].split('='),
				    name = decode(parts.shift()),
				    cookie = parts.join('=');

				if (key === name) {
					// If second argument (value) is a function it's a converter...
					result = read(cookie, value);
					break;
				}

				// Prevent storing a cookie that we couldn't decode.
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}

			return result;
		};

		config.defaults = {};

		$.removeCookie = function (key, options) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};
	})(jQuery);

	module.exports = login;

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(120);

	var login = __webpack_require__(223);
	exports.default = React.createClass({
	  displayName: "Header",


	  componentDidMount: function componentDidMount() {},

	  renderLoginInfo: function renderLoginInfo() {

	    if (login.isLogin()) {
	      var user = login.getUser();
	      return React.createElement(
	        "p",
	        { className: "navbar-text navbar-right login-status" },
	        React.createElement(
	          "span",
	          null,
	          React.createElement(
	            "a",
	            { className: "ava" },
	            React.createElement("i", { className: "fa fa-user-md" })
	          ),
	          React.createElement(
	            "a",
	            { href: "#", className: "navbar-Link" },
	            user.username
	          ),
	          React.createElement(
	            "a",
	            { href: "/user/logout", className: "" },
	            React.createElement("span", { className: "oi oi-account-logout" })
	          )
	        )
	      );
	    } else {
	      return React.createElement(
	        "p",
	        { className: "navbar-text navbar-right signup" },
	        React.createElement(
	          "span",
	          { className: "" },
	          React.createElement(
	            "a",
	            { href: "/user/login", className: "navbar-Link" },
	            "登录"
	          ),
	          " ",
	          React.createElement(
	            "a",
	            { href: "/user/signup", className: "navbar-Link" },
	            "注册"
	          )
	        )
	      );
	    }
	  },

	  renderItem: function renderItem() {
	    var result = [];
	    var items = {
	      "home": React.createElement(
	        _reactRouter.Link,
	        { activeClassName: "active", className: "home", to: "/" },
	        "首页"
	      ),
	      "market": React.createElement(
	        _reactRouter.Link,
	        { activeClassName: "active", className: "market", to: "/template/market" },
	        "模板市场"
	      ),
	      "my": React.createElement(
	        _reactRouter.Link,
	        { activeClassName: "active", className: "my", to: "/my" },
	        "我的站点"
	      ),
	      "tru": React.createElement(
	        _reactRouter.Link,
	        { activeClassName: "active", className: "tru", to: "/template/tru" },
	        "新手指南"
	      )
	    };

	    var i = 0;
	    for (var p in items) {

	      result.push(React.createElement(
	        "li",
	        { key: i++ },
	        items[p]
	      ));
	    }
	    return result;
	  },
	  render: function render() {

	    var active = this.props.active || "home";
	    var className = "navbar";
	    if (this.props.type == "home") {
	      className = "navbar home";
	    }

	    return React.createElement(
	      "div",
	      { id: "nav", className: className, role: "navigation" },
	      React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(
	          "div",
	          { className: "navbar-header" },
	          React.createElement(
	            "button",
	            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse",
	              "data-target": "#bs-example-navbar-collapse-1" },
	            React.createElement(
	              "span",
	              { className: "sr-only" },
	              "Toggle navigation"
	            ),
	            React.createElement("span", { className: "icon-bar" }),
	            React.createElement("span", { className: "icon-bar" }),
	            React.createElement("span", { className: "icon-bar" })
	          ),
	          React.createElement(
	            "a",
	            { className: "navbar-brand", href: "/" },
	            React.createElement("img", { src: window.rootPath + "img/logo1x.png" })
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "collapse navbar-collapse ", id: "bs-example-navbar-collapse-1" },
	          this.renderLoginInfo(),
	          React.createElement(
	            "ul",
	            { className: "nav navbar-nav navbar-right main " },
	            this.renderItem()
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 608:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = React.createClass({
	    displayName: "Footer",

	    getInitialState: function getInitialState() {
	        return { secondsElapsed: 0 };
	    },
	    tick: function tick() {
	        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	    },
	    componentDidMount: function componentDidMount() {
	        this.interval = setInterval(this.tick, 1000);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        clearInterval(this.interval);
	    },

	    render: function render() {
	        return React.createElement(
	            "footer",
	            null,
	            React.createElement("div", { className: "btt" }),
	            React.createElement(
	                "section",
	                { className: "new_footer" },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "nav",
	                        { className: "footer_nav" },
	                        React.createElement(
	                            "h3",
	                            null,
	                            "产品"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/template/create" },
	                                    "创建新模板"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/template/market" },
	                                    "市场"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/user/login" },
	                                    "登录"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/user/signup" },
	                                    "注册"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/my" },
	                                    "我的站点"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "nav",
	                        { className: "footer_nav" },
	                        React.createElement(
	                            "h3",
	                            null,
	                            "公司"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/about/us" },
	                                    "关于我们"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/jobs/main" },
	                                    "招聘"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/about/privacy" },
	                                    "协议"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/about/contact-us" },
	                                    "联系我们"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "nav",
	                        { className: "footer_nav" },
	                        React.createElement(
	                            "h3",
	                            null,
	                            "帮助"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/support/html5/" },
	                                    "文档"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/user/Wix" },
	                                    "视频"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "nav",
	                        { className: "footer_nav" },
	                        React.createElement(
	                            "h3",
	                            null,
	                            "社区"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/blog" },
	                                    "微博"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "/stories" },
	                                    "微信"
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Header = __webpack_require__(607);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(608);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(676);
	// var Header = require('./common/Header');
	// var Footer = require('./common/Footer');

	module.exports = React.createClass({
	  displayName: 'exports',

	  getInitialState: function getInitialState() {
	    return { secondsElapsed: 0 };
	  },
	  tick: function tick() {},
	  componentDidMount: function componentDidMount() {},
	  componentWillUnmount: function componentWillUnmount() {},
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'app' },
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(677);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./base.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(71)();
	// imports


	// module
	exports.push([module.id, "body{\n  font-family:MicrosoftYaHei;\n\n}\n\n.carousel-indicators li {\n    width:6px;\n    height:6px;\n    margin: 0;\n    margin-right: 10px;\n\n}\n.carousel-indicators li.active {\n    width:6px;\n    height:6px;\n    margin: 0;\n    margin-right: 10px;\n    background-color: #00c4d8;\n    border-color: #00c4d8;\n}\n\n\n\n\n\n\n#button-row a {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.05);\n    font-family: 'Helvetica65';\n    border-radius: 5px;\n    border: solid 2px #fff;\n    cursor: pointer;\n    outline: none;\n    font-weight: normal;\n    padding: 0px;\n    display: inline-block;\n    text-align: center;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    width: 146px;\n    height: 36px;\n    font-size: 20px;\n    border-radius: 4px;\n    margin: 24px 0px;\n    line-height: 36px;\n\n}\n\n#button-row a:hover {\n\n    background-color: rgba(255, 255, 255, 0.15);\n}\n\n#nav {\n  background:#333333;\nheight:60px;\n\nborder-radius: 0;\n}\n\n#nav a {\n    color:#cccccc;\n\n}\n\n#nav a:hover {\n    color: #0f0f0f;\n}\n\n\n\n#nav .nav>li>a{\n   padding: 10px 25px;\n}\n\n#nav .main{\n   margin-right: 90px;\n   margin-top: 7px;\n}\n#nav .navbar-text.login-status{\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\n\n#nav .navbar-text.signup{\n  margin-top: 18px;\n  margin-bottom: 0px;\n}\n\n#nav .navbar-text a{\n  font-size:12px;\n  margin-right: 15px;\n}\n\n#nav a {\n    color:#cccccc;\n\n}\n\n#nav .navbar-brand img{\n\n    margin-top:-12px;\n    height:50px;\n}\n\n#nav.home .navbar-brand img{\n\n    margin-top:-25px;\n    height:50px;\n}\n\n#nav a:hover,#nav a.active {\n\ncolor:#00c2d6;\nbackground-color:transparent;\n}\n\n#nav li.active a {\n\ncolor:#00c2d6;\nbackground-color:transparent;\n}\n\n\n#nav .login-status .fa-user-md{\n\n  background:#ffffff;\nwidth:40px;\nheight:40px;\nborder-radius:100%;\nline-height: 40px;\n    text-align: center;\n    color: #000;\n    margin-right: 10px;\n}\n\n\n\n/*页尾*/\n/* NEW FOOTER */\n\nli {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\nul {\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n}\n\nfooter {\n    background-color: #666666;\n    position: relative;\n}\n\nfooter .btt {\n    position: absolute;\n    background-color: #f5f5f5;\n    background-repeat: no-repeat;\n    background-position: center top;\n    border-radius: 0px 0px 4px 4px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.new_footer {\n    background-color: #666666;\n    border-spacing: 0px px;\n    margin: auto;\n    display: table;\n}\n\n.new_footer div[row] {\n    display: table-row;\n}\n\n.new_footer .footer_nav, .new_footer .left_summery {\n    display: table-cell;\n    text-align: left;\n    vertical-align: top;\n}\n\n.new_footer .left_summery p {\n    font-family: 'Helvetica45';\n    margin: 0px;\n    color: White;\n}\n\n.new_footer .left_summery .footer_logo {\n    background-repeat: no-repeat;\n}\n\n.new_footer .left_summery nav a {\n    font-size: 0px;\n    display: block;\n    border: none;\n    opacity: 0.5;\n    transition: opacity 0.2s ease;\n}\n\n.new_footer .left_summery nav a:hover {\n    opacity: 1;\n}\n\n.new_footer .left_summery li {\n    float: left;\n}\n\n.new_footer .left_summery li:last-child {\n    margin-right: 0px;\n}\n\n.new_footer h3 {\n    color: White;\n    font-family: 'Helvetica75';\n    font-weight: normal;\n}\n\n.new_footer .footer_nav a, .new_footer .footer_nav span {\n    font-family: 'Helvetica55';\n    text-decoration: none;\n    color: #BCBCBC;\n    white-space: pre;\n    cursor: pointer;\n}\n\n.new_footer .footer_nav a:hover, .new_footer .footer_nav span:hover {\n    color: #fff;\n}\n\nfooter section:last-child {\n    text-align: center;\n}\n\nfooter section:last-child p {\n    display: block;\n    color: #bcbcbc;\n    font-family: 'Helvetica45';\n    margin: 0px auto 0px auto;\n}\n\n/* FOOTER */\nfooter .btt {\n    width: 50px;\n    height: 21px;\n    top: 0px;\n    right: 40px;\n    background-image: url(http://static.parastorage.com/services/html-landing/hp/brazil/images/1600/footer-new/btt.png);\n}\n\n.new_footer {\n}\n\n.new_footer .footer_nav, .new_footer .left_summery {\n    padding-right: 44px;\n}\n\n.new_footer .left_summery {\n    padding-top: 58px;\n}\n\n.new_footer .left_summery .footer_logo {\n    width: 66px;\n    height: 16px;\n    background-image: url(http://static.parastorage.com/services/html-landing/hp/brazil/images/1280/footer-new/logo.png);\n}\n\n.new_footer .footer_nav:last-child {\n    padding-right: 0px;\n    width: 10px;\n}\n\n.new_footer .left_summery p {\n    font-size: 10px;\n    line-height: 14px;\n    margin-top: 7px;\n}\n\n.new_footer .left_summery nav {\n    margin-top: 18px;\n}\n\n.new_footer .left_summery li {\n    margin-right: 14px;\n}\n\n.new_footer .left_summery nav a img {\n    height: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(1) a img {\n    width: 9px;\n}\n\n.new_footer .left_summery ul li:nth-child(2) a img {\n    width: 21px;\n}\n\n.new_footer .left_summery ul li:nth-child(3) a img {\n    width: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(4) a img {\n    width: 15px;\n}\n\n.new_footer .left_summery ul li:nth-child(5) a img {\n    width: 13px;\n}\n\n.new_footer .left_summery ul li:nth-child(6) a img {\n    width: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(7) a img {\n    width: 18px;\n}\n\n.new_footer h3 {\n    font-size: 11px;\n    padding: 63px 0px 12px 0px;\n}\n\n.new_footer .footer_nav li {\n    margin-bottom: 5px;\n}\n\n.new_footer .footer_nav a, .new_footer .footer_nav span {\n    font-size: 11px;\n    line-height: 13px;\n}\n\nfooter section:last-child {\n    padding-bottom: 48px;\n    padding-top: 20px;\n}\n\nfooter section:last-child p {\n    font-size: 11px;\n}\n\n.skin-box-bd {\n    background: #7F5E5E;\n}\n\n.all-cats {\n    background: #7F5E5E;\n}\n\n.all-cats .link {\n    background: #7F5E5E;\n    border:none ;\n\n}\n\n.all-cats .link .title{\n    color: #FFF;\n}\n\n.skin-box-bd .menu-list .menu{\n    border:none ;\n}\n.menu-list {\n    background: #7F5E5E;\n}\n\n\n.menu-list .link {\n    background: #7F5E5E;\n    color: #FFF;\n    border:none ;\n}\n.menu-list .link .title{\n\n    color: #FFF;\n}\n\n\n.menu-list .menu-hover .link {\n    background: #7F5E5E;\n\n}\n.menu-list .menu-hover .link .title{\n    color: #FFF;\n}\n\n\n.btn-green,.btn-green:hover{\n    background:#00c4d8;\n    border-radius:2px;\n    color:#fff;\n}\n\n.btn-green-s,.btn-green-s:hover{\n    background:#00c4d8;\n    border-radius:2px;\n    color:#fff;\n    display: inline-block;\n    padding: 8px 20px;\n\n}\n\n.btn-green-s{\n    background:#00c4d8;\n    border-radius:2px;\n    color:#fff;\n    display: inline-block;\n    padding: 8px 20px;\n}\n\n.icon{\n    color:#666;\n    font-size: 12px;\n}\n\n.btn-green-line{\n    border: 1px solid #00c4d8;\n    border-radius: 2px;\n    color: #00d9ef;\n    font-size: 12px;\n}", ""]);

	// exports


/***/ }

});