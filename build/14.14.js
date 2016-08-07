webpackJsonp([14,15],{

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

/***/ 262:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = React.createClass({
	  displayName: "Header",


	  componentDidMount: function componentDidMount() {},

	  renderLoginInfo: function renderLoginInfo() {

	    if (window.serverData && window.serverData.user) {
	      var user = window.serverData.user;
	      return React.createElement(
	        "span",
	        null,
	        React.createElement("i", { className: "fa fa-user-md" }),
	        " 您好！",
	        React.createElement(
	          "a",
	          { href: "#", className: "navbar-link" },
	          user.username
	        ),
	        React.createElement(
	          "a",
	          { href: "/user/logout", className: "" },
	          React.createElement("span", { className: "oi oi-account-logout" })
	        )
	      );
	    } else {
	      return React.createElement(
	        "a",
	        { href: "/user/login", className: "navbar-link" },
	        "登录 ",
	        React.createElement("span", { className: "oi oi-account-login" })
	      );
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: "nav", className: "navbar", role: "navigation" },
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
	            "点线面"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "collapse navbar-collapse ", id: "bs-example-navbar-collapse-1" },
	          React.createElement(
	            "p",
	            { className: "navbar-text navbar-right" },
	            this.renderLoginInfo()
	          ),
	          React.createElement(
	            "ul",
	            { className: "nav navbar-nav navbar-right " },
	            React.createElement(
	              "li",
	              null,
	              React.createElement(
	                "a",
	                { href: "/" },
	                "首页"
	              )
	            ),
	            React.createElement(
	              "li",
	              null,
	              React.createElement(
	                "a",
	                { href: "/my" },
	                "我的站点"
	              )
	            ),
	            React.createElement(
	              "li",
	              null,
	              React.createElement(
	                "a",
	                { href: "/template" },
	                "模板市场"
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 263:
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
	                        "div",
	                        { className: "left_summery" },
	                        React.createElement("div", { className: "footer_logo" }),
	                        React.createElement(
	                            "nav",
	                            null,
	                            React.createElement(
	                                "ul",
	                                null,
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "https://www.facebook.com/wix" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/fb.png", alt: "Wix on Facebook" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "https://twitter.com/wix" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/twitter.png", alt: "Wix on Twitter" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "https://plus.google.com/+Wix/posts" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/google.png", alt: "Wix on Google Plus" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "http://www.youtube.com/user/Wix" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/youtube.png", alt: "Wix on Youtube" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "http://www.pinterest.com/wixcom/" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/pinterest.png", alt: "Wix on Pinterest" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "http://instagram.com/wix" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/instagram.png", alt: "Wix on Instagram" })
	                                    )
	                                ),
	                                React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { target: "_blank", href: "http://www.linkedin.com/company/wix.com" },
	                                        React.createElement("img", { src: "http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/linkedin.png", alt: "Wix on Linkedin" })
	                                    )
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
	                            "PRODUCT"
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
	                                    { target: "_blank", href: "http://localhost:3000/btemplate/list" },
	                                    "基本模板"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/features" },
	                                    "Features"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    null,
	                                    "My Sites"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/upgrade/website" },
	                                    "Premium Plans"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/ecommerce/website" },
	                                    "Online Store"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/app-market/main" },
	                                    "App Market"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/domain/names" },
	                                    "Domains"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/website/templates/flash/all/1" },
	                                    "Flash Templates"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/facebook/templates/html/facebook/facebook-welcomer/1" },
	                                    "Facebook Templates"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://dev.wix.com" },
	                                    "Developers"
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
	                            "COMPANY"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/us" },
	                                    "About Wix"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://investors.wix.com" },
	                                    "Investor Relations"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/jobs/main" },
	                                    "Jobs"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/design-assets" },
	                                    "Design Assets"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/terms-of-use" },
	                                    "Terms of use"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/privacy" },
	                                    "Privacy"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/upgrade/abuse" },
	                                    "Abuse"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/resellers" },
	                                    "Resellers"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/affiliates" },
	                                    "Affiliates"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/about/contact-us" },
	                                    "Contact Us"
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
	                            "COMMUNITY"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/blog" },
	                                    "Wix Blog"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/stories" },
	                                    "Wix Stories"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://arena.wix.com/" },
	                                    "Wix Arena"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/lounge/main" },
	                                    "Wix Lounge"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.facebook.com/wix" },
	                                    "Facebook"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "https://twitter.com/Wix" },
	                                    "Twitter"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "https://plus.google.com/+Wix/posts" },
	                                    "Google+"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://pinterest.com/wixcom" },
	                                    "Pinterest"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "https://www.youtube.com/user/Wix" },
	                                    "YouTube"
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
	                            "SUPPORT"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "http://www.wix.com/support/html5/" },
	                                    "Support Center"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { target: "_blank", href: "https://www.youtube.com/user/Wix" },
	                                    "Training Videos"
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

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Header = __webpack_require__(262);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(263);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(292);
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

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports


	// module
	exports.push([module.id, "body{\n  font-family:MicrosoftYaHei;\n\n}\n\n\n\n#cta-text {\n    color: #fff;\n}\n\n#button-row a {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.05);\n    font-family: 'Helvetica65';\n    border-radius: 5px;\n    border: solid 2px #fff;\n    cursor: pointer;\n    outline: none;\n    font-weight: normal;\n    padding: 0px;\n    display: inline-block;\n    text-align: center;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    width: 146px;\n    height: 36px;\n    font-size: 20px;\n    border-radius: 4px;\n    margin: 24px 0px;\n    line-height: 36px;\n\n}\n\n#button-row a:hover {\n\n    background-color: rgba(255, 255, 255, 0.15);\n}\n\n#nav a {\n    color: #555555;\n}\n\n#nav a:hover {\n    color: #0f0f0f;\n}\n\n#nav {\n    box-shadow: 0px 1px 2px #888888;\n    border-radius: 0;\n}\n\n/*页尾*/\n/* NEW FOOTER */\n\nli {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\nul {\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n}\n\nfooter {\n    background-color: #666666;\n    position: relative;\n}\n\nfooter .btt {\n    position: absolute;\n    background-color: #f5f5f5;\n    background-repeat: no-repeat;\n    background-position: center top;\n    border-radius: 0px 0px 4px 4px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.new_footer {\n    background-color: #666666;\n    border-spacing: 0px px;\n    margin: auto;\n    display: table;\n}\n\n.new_footer div[row] {\n    display: table-row;\n}\n\n.new_footer .footer_nav, .new_footer .left_summery {\n    display: table-cell;\n    text-align: left;\n    vertical-align: top;\n}\n\n.new_footer .left_summery p {\n    font-family: 'Helvetica45';\n    margin: 0px;\n    color: White;\n}\n\n.new_footer .left_summery .footer_logo {\n    background-repeat: no-repeat;\n}\n\n.new_footer .left_summery nav a {\n    font-size: 0px;\n    display: block;\n    border: none;\n    opacity: 0.5;\n    transition: opacity 0.2s ease;\n}\n\n.new_footer .left_summery nav a:hover {\n    opacity: 1;\n}\n\n.new_footer .left_summery li {\n    float: left;\n}\n\n.new_footer .left_summery li:last-child {\n    margin-right: 0px;\n}\n\n.new_footer h3 {\n    color: White;\n    font-family: 'Helvetica75';\n    font-weight: normal;\n}\n\n.new_footer .footer_nav a, .new_footer .footer_nav span {\n    font-family: 'Helvetica55';\n    text-decoration: none;\n    color: #BCBCBC;\n    white-space: pre;\n    cursor: pointer;\n}\n\n.new_footer .footer_nav a:hover, .new_footer .footer_nav span:hover {\n    color: #fff;\n}\n\nfooter section:last-child {\n    text-align: center;\n}\n\nfooter section:last-child p {\n    display: block;\n    color: #bcbcbc;\n    font-family: 'Helvetica45';\n    margin: 0px auto 0px auto;\n}\n\n/* FOOTER */\nfooter .btt {\n    width: 50px;\n    height: 21px;\n    top: 0px;\n    right: 40px;\n    background-image: url(http://static.parastorage.com/services/html-landing/hp/brazil/images/1600/footer-new/btt.png);\n}\n\n.new_footer {\n}\n\n.new_footer .footer_nav, .new_footer .left_summery {\n    padding-right: 44px;\n}\n\n.new_footer .left_summery {\n    padding-top: 58px;\n}\n\n.new_footer .left_summery .footer_logo {\n    width: 66px;\n    height: 16px;\n    background-image: url(http://static.parastorage.com/services/html-landing/hp/brazil/images/1280/footer-new/logo.png);\n}\n\n.new_footer .footer_nav:last-child {\n    padding-right: 0px;\n    width: 10px;\n}\n\n.new_footer .left_summery p {\n    font-size: 10px;\n    line-height: 14px;\n    margin-top: 7px;\n}\n\n.new_footer .left_summery nav {\n    margin-top: 18px;\n}\n\n.new_footer .left_summery li {\n    margin-right: 14px;\n}\n\n.new_footer .left_summery nav a img {\n    height: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(1) a img {\n    width: 9px;\n}\n\n.new_footer .left_summery ul li:nth-child(2) a img {\n    width: 21px;\n}\n\n.new_footer .left_summery ul li:nth-child(3) a img {\n    width: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(4) a img {\n    width: 15px;\n}\n\n.new_footer .left_summery ul li:nth-child(5) a img {\n    width: 13px;\n}\n\n.new_footer .left_summery ul li:nth-child(6) a img {\n    width: 17px;\n}\n\n.new_footer .left_summery ul li:nth-child(7) a img {\n    width: 18px;\n}\n\n.new_footer h3 {\n    font-size: 11px;\n    padding: 63px 0px 12px 0px;\n}\n\n.new_footer .footer_nav li {\n    margin-bottom: 5px;\n}\n\n.new_footer .footer_nav a, .new_footer .footer_nav span {\n    font-size: 11px;\n    line-height: 13px;\n}\n\nfooter section:last-child {\n    padding-bottom: 48px;\n    padding-top: 20px;\n}\n\nfooter section:last-child p {\n    font-size: 11px;\n}\n\n.skin-box-bd {\n    background: #7F5E5E;\n}\n\n.all-cats {\n    background: #7F5E5E;\n}\n\n.all-cats .link {\n    background: #7F5E5E;\n    border:none ;\n\n}\n\n.all-cats .link .title{\n    color: #FFF;\n}\n\n.skin-box-bd .menu-list .menu{\n    border:none ;\n}\n.menu-list {\n    background: #7F5E5E;\n}\n\n\n.menu-list .link {\n    background: #7F5E5E;\n    color: #FFF;\n    border:none ;\n}\n.menu-list .link .title{\n\n    color: #FFF;\n}\n\n\n.menu-list .menu-hover .link {\n    background: #7F5E5E;\n\n}\n.menu-list .menu-hover .link .title{\n    color: #FFF;\n}\n", ""]);

	// exports


/***/ }

});