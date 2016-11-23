webpackJsonp([13,19],{

/***/ 68:
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

/***/ 69:
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

/***/ 264:
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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRouter = __webpack_require__(100);

	var login = __webpack_require__(263);
	__webpack_require__(290);

	exports.default = React.createClass({
	    displayName: "BackHeader",

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
	                    React.createElement("i", { className: "fa fa-user-md" }),
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
	        var user = login.getUser();
	        var items = {
	            "my": React.createElement(
	                _reactRouter.Link,
	                { className: "home", to: "/my" },
	                "我的站点"
	            ),
	            "favarite": React.createElement(
	                _reactRouter.Link,
	                { className: "market", to: "/my/favarite" },
	                "我的收藏"
	            ),
	            "template": React.createElement(
	                _reactRouter.Link,
	                { className: "my", to: "/my/template" },
	                "我的模板"
	            ),
	            "account": React.createElement(
	                _reactRouter.Link,
	                { className: "my", to: "/my/account" },
	                "账号中心"
	            )

	        };
	        var active = this.props.active || "home";
	        var i = 0;
	        for (var p in items) {
	            // if(p == "template"&&(!user||user.email !== "114165396@qq.com")&&(!debug)){
	            //     continue;
	            // }
	            if (p == active) {
	                result.push(React.createElement(
	                    "li",
	                    { key: i++, className: "active" },
	                    items[p]
	                ));
	            } else {
	                result.push(React.createElement(
	                    "li",
	                    { key: i++ },
	                    items[p]
	                ));
	            }
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
	                        { className: "nav navbar-nav navbar-right main-back " },
	                        this.renderItem()
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(291);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./BackHeader.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./BackHeader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports


	// module
	exports.push([module.id, "#nav .main-back {\n    margin-top: 7px;\n}", ""]);

	// exports


/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(293);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports


	// module
	exports.push([module.id, "\n#my-container {\n    display: block;\n    position: relative;\n}\n\n\n.add-site {\n\n    border-bottom:1px solid #eaeaea;\n    padding: 0 20px 20px 0;\n\n}\n\n.add-site-button {\n\n}\n\n.blank-tips{\n    text-align: center;\n    padding: 200px;\n}\n\n\n#app-detail .templ{\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 30px;\n}\n\n#app-detail .templ .bd{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .bd img{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .des{\n    flex: 1;\n    margin-left: 30px;\n}", ""]);

	// exports


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _BackHeader = __webpack_require__(289);

	var _BackHeader2 = _interopRequireDefault(_BackHeader);

	var _Footer = __webpack_require__(264);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SiteList = __webpack_require__(299);
	__webpack_require__(292);
	__webpack_require__(300);
	module.exports = React.createClass({
	    displayName: 'exports',

	    getInitialState: function getInitialState() {
	        return { siteList: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        var self = this;
	        self.flush();
	    },
	    flush: function flush() {
	        var self = this;
	        if (debug) {
	            self.setState({ siteList: [{ id: 123, title: "我的新站点" }] });
	        } else {
	            $.get("/json/template/my", function (data) {
	                if (data.needLogin) {
	                    location.href = "/user/login";
	                    return;
	                }

	                if (typeof data !== "string") {
	                    self.setState({ siteList: data });
	                }
	            });
	        }
	    },

	    rendBody: function rendBody() {
	        if (this.state.siteList.length == 0) {
	            return this.renderBlank();
	        } else {
	            return this.renderList();
	        }
	    },

	    renderBlank: function renderBlank() {
	        return React.createElement(
	            'div',
	            { className: 'container blank-tips' },
	            React.createElement(
	                'div',
	                { className: 'tips' },
	                '您还没有创建m模板，快去一个吧！'
	            ),
	            React.createElement(
	                'a',
	                { className: 'btn btn-green-line ', href: '/template/create' },
	                '创建模板'
	            )
	        );
	    },

	    renderList: function renderList() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'add-site' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'a',
	                        { className: 'btn btn-green add-site-button', href: '/template/create' },
	                        '创建模板'
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'container', id: 'my-container' },
	                this.renderItem()
	            )
	        );
	    },

	    renderItem: function renderItem() {
	        var result = [];
	        for (var i = 0; i < this.state.siteList.length; i++) {
	            var site = this.state.siteList[i];
	            var item = React.createElement(
	                'div',
	                { className: 'templ' },
	                React.createElement(
	                    'div',
	                    { className: 'bd' },
	                    React.createElement(
	                        'a',
	                        { href: "/my/template/" + site.id },
	                        React.createElement('img', { src: site.logo || window.rootPath + "img/template_bg.png" })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'des' },
	                    React.createElement(
	                        'h3',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: "/template/" + site.id },
	                            site.title
	                        )
	                    )
	                )
	            );

	            result.push(item);
	        }
	        return result;
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'my' },
	            React.createElement(_BackHeader2.default, { active: 'my' }),
	            React.createElement(
	                'div',
	                { className: 'site-list' },
	                this.rendBody()
	            ),
	            React.createElement(_Footer2.default, null)
	        );
	    }
	});

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(300);
	module.exports = React.createClass({
	    displayName: "exports",

	    getInitialState: function getInitialState() {
	        return { siteList: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        var self = this;
	        self.flush();
	    },
	    flush: function flush() {
	        var self = this;
	        if (debug) {
	            self.setState({ siteList: [{ id: 123, title: "我的新站点" }] });
	        } else {
	            $.get("/json/my/app", function (data) {
	                if (data.needLogin) {
	                    location.href = "/user/login";
	                    return;
	                }

	                if (typeof data !== "string") {
	                    self.setState({ siteList: data });
	                }
	            });
	        }
	    },

	    rendBody: function rendBody() {
	        if (this.state.siteList.length == 0) {
	            return this.renderBlank();
	        } else {
	            return this.renderList();
	        }
	    },

	    renderBlank: function renderBlank() {
	        return React.createElement(
	            "div",
	            { className: "container blank-tips" },
	            React.createElement(
	                "div",
	                { className: "tips" },
	                "您还没有创建网站，去模板市场挑选一个吧！"
	            ),
	            React.createElement(
	                "a",
	                { className: "btn btn-green-line ", href: "/template/market" },
	                "挑选免费模板"
	            ),
	            React.createElement(
	                "a",
	                { className: "btn btn-green-line", href: "/template/market" },
	                "新建空白站点"
	            )
	        );
	    },

	    renderList: function renderList() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                { className: "add-site" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement(
	                        "a",
	                        { className: "btn btn-green add-site-button", href: "/template/market" },
	                        "创建新站点"
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "container", id: "my-container" },
	                this.renderItem()
	            )
	        );
	    },

	    renderItem: function renderItem() {
	        var result = [];
	        for (var i = 0; i < this.state.siteList.length; i++) {
	            var site = this.state.siteList[i];
	            var item = React.createElement(
	                "div",
	                { className: "templ" },
	                React.createElement(
	                    "div",
	                    { className: "bd" },
	                    React.createElement(
	                        "a",
	                        { href: "/my/app/" + site.id },
	                        React.createElement("img", { src: site.logo || window.rootPath + "img/template_bg.png" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "des" },
	                    React.createElement(
	                        "h3",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "/app/" + site.id },
	                            site.title
	                        )
	                    )
	                )
	            );

	            result.push(item);
	        }
	        return result;
	    },

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "site-list" },
	            this.rendBody()
	        );
	    }
	});

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(69)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./SiteList.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./SiteList.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports


	// module
	exports.push([module.id, "    .site-list {\n        overflow: hidden;\n        display: block;\n        margin: 50px 0 16px 0px;\n    }\n    .site-list .templ {\n        background:#ffffff;\n\n        width:198px;\n\n        margin-top: 20px;\n        margin-right: 30px;\n        display: flex;\n        flex-direction: row;\n    }\n    .site-list .templ .bd {\n        background: url(\"/imgbrowser.png\") 0 0 no-repeat;\n        background:#ffffff;\n\n        width:198px;\n        height:198px;\n    }\n\n\n    .site-list .templ h3  {\n        family:MicrosoftYaHei;\n        font-size:12px;\n        color:#666666;\n        letter-spacing:0.99px;\n        text-align: center;\n    }\n\n    .site-list .templ h3  a {\n        family:MicrosoftYaHei;\n        font-size:12px;\n        color:#666666;\n        letter-spacing:0.99px;\n        text-align: center;\n    }\n    .site-list .templ img {\n        width: 100%;\n    }\n\n    .blank-tips .tips{\n        font-family:MicrosoftYaHei;\n        font-size:20px;\n        color:#cccccc;\n        letter-spacing:1.66px;\n        margin-bottom: 30px;\n    }\n\n    .blank-tips .btn{\n        margin-right: 30px;\n    }\n\n", ""]);

	// exports


/***/ }

});