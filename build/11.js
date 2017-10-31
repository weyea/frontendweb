webpackJsonp([11],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

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
                            "\u4EA7\u54C1"
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
                                    "\u521B\u5EFA\u65B0\u6A21\u677F"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/template/market" },
                                    "\u5E02\u573A"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/user/login" },
                                    "\u767B\u5F55"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/user/signup" },
                                    "\u6CE8\u518C"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/my" },
                                    "\u6211\u7684\u7AD9\u70B9"
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
                            "\u516C\u53F8"
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
                                    "\u5173\u4E8E\u6211\u4EEC"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/jobs/main" },
                                    "\u62DB\u8058"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/about/privacy" },
                                    "\u534F\u8BAE"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/about/contact-us" },
                                    "\u8054\u7CFB\u6211\u4EEC"
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
                            "\u5E2E\u52A9"
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
                                    "\u6587\u6863"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/user/Wix" },
                                    "\u89C6\u9891"
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
                            "\u793E\u533A"
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
                                    "\u5FAE\u535A"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "/stories" },
                                    "\u5FAE\u4FE1"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(137);

var login = __webpack_require__(353);
exports.default = React.createClass({
  displayName: "Header",


  componentDidMount: function componentDidMount() {},
  logout: function logout(target, t, ev) {
    ev.preventDefault();
    var logout = $(this.refs["logout"]);
    var self = this;
    $.get(logout.attr("href"), function (result) {
      if (result.success) {
        login.logout();
        self.forceUpdate();
      } else {
        alert("登出失败");
      }
    });
  },

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
            { ref: "logout", onClick: this.logout, href: "/json/user/logout", className: "" },
            React.createElement(
              "span",
              { className: "oi oi-account-logout" },
              "\u767B\u51FA"
            )
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
            "\u767B\u5F55"
          ),
          " ",
          React.createElement(
            "a",
            { href: "/user/signup", className: "navbar-Link" },
            "\u6CE8\u518C"
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
        { activeClassName: "active", className: "home", to: "/home" },
        "\u9996\u9875"
      ),
      "market": React.createElement(
        _reactRouter.Link,
        { activeClassName: "active", className: "market", to: "/template/market/all" },
        "\u6A21\u677F\u5E02\u573A"
      ),
      "my": React.createElement(
        _reactRouter.Link,
        { activeClassName: "active", className: "my", to: "/my" },
        "\u6211\u7684\u7AD9\u70B9"
      ),
      "tru": React.createElement(
        _reactRouter.Link,
        { activeClassName: "active", className: "tru", to: "/template/tru" },
        "\u65B0\u624B\u6307\u5357"
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

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

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
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Header = __webpack_require__(354);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(347);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(859);
module.exports = React.createClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return { secondsElapsed: 0 };
    },
    tick: function tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    },
    componentDidMount: function componentDidMount() {
        $("#submit-login").click(function () {
            var email = $("");
        });
    },
    submitLogin: function submitLogin(e) {
        var _this = this;

        var self = this;
        var emailValue = $(this.refs["email"]).val();
        var password = $(this.refs["password"]).val();
        $.post("/json/user/login", { email: emailValue, password: password }, function (result) {
            if (result.success) {
                if (sessionStorage && sessionStorage.getItem("redirect")) {
                    var redirect = sessionStorage.getItem("redirect");
                    sessionStorage.removeItem("redirect");
                    location.href = redirect;
                } else if (result.defaultReturnUrl) {
                    location.href = result.defaultReturnUrl;
                } else {
                    location.href = "/";
                }
            } else {
                if (result.errors.length) {
                    $(_this.refs["errors"]).text(result.errors);
                } else if (Object.keys(workflow.outcome.errfor).length !== 0) {
                    $(_this.refs["errors"]).text(result.errfor);
                }
            }
        });
    },
    componentWillUnmount: function componentWillUnmount() {},
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(_Header2.default, { active: 'my' }),
            React.createElement(
                'div',
                { className: 'container login-page' },
                React.createElement(
                    'div',
                    { className: 'login' },
                    React.createElement(
                        'div',
                        { className: 'form-signin' },
                        React.createElement(
                            'h2',
                            { className: 'form-signin-heading' },
                            '\u767B\u5F55'
                        ),
                        React.createElement('div', { ref: 'errors' }),
                        React.createElement('input', { name: 'email', type: 'text', ref: 'email', className: 'form-control email', placeholder: '\u7535\u8BDD', required: true }),
                        React.createElement('input', { type: 'password', name: 'password', ref: 'password', className: 'form-control password', placeholder: '\u5BC6\u7801', required: true }),
                        React.createElement('input', { type: 'hidden', name: 'redirect', value: '<%= locals.redirect %>', className: 'form-control', placeholder: 'Password', required: true }),
                        React.createElement(
                            'div',
                            { className: 'forgot' },
                            React.createElement(
                                'a',
                                { href: '/user/forgot' },
                                '\u5FD8\u8BB0\u5BC6\u7801'
                            )
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn', onClick: this.submitLogin },
                            '\u767B\u5F55'
                        ),
                        React.createElement(
                            'div',
                            { className: 'signup' },
                            React.createElement(
                                'a',
                                { href: '/user/signup' },
                                '\u6CA1\u6709\u8D26\u53F7\uFF0C\u521B\u5EFA\u4E00\u4E2A'
                            )
                        )
                    )
                )
            ),
            React.createElement(_Footer2.default, null)
        );
    }
});

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(860);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./login.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./login.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".login-page .login{\n  margin:100px auto 200px auto;\n}\n.login{\n  background:#f0f0f0;\n  border-radius:3px;\n  width:520px;\n  height:332px;\n  padding: 20px 60px 0 60px;\n\n\n}\n\n.login .form-signin-heading{\n  font-family:MicrosoftYaHei;\nfont-size:30px;\ncolor:#00c4d8;\ntext-align: center;\n\nmargin-bottom: 30px;\nmargin-top: 0;\n\n}\n\n\n\n.login input{\n  background:#ffffff;\nborder:1px solid #dddddd;\nwidth:398px;\nheight:38px;\nmargin-top: 20px;\n\n}\n\n.login .forgot a{\n\nfont-size:12px;\ncolor:#999999;\n}\n\n.login .signup{\n  text-align: center;\n    margin-top: 13px;\n}\n.login .signup a{\n  font-size:12px;\n  color:#999999;\n\n  text-align:center;\n}\n.login .btn{\n  text-align: center;\n  line-height: 34px;\n  padding: 0;\n  border:1px solid #00c4d8;\nborder-radius:4px;\nwidth:118px;\nheight:34px;\n\nfont-size:14px;\ncolor:#00c4d8;\nbackground-color: transparent;\ndisplay: block;\nmargin:auto;\nmargin-top: 22px;\n}\n", ""]);

// exports


/***/ })

});