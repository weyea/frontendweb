webpackJsonp([6],{

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

/***/ 358:
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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouter = __webpack_require__(139);

var login = __webpack_require__(365);
__webpack_require__(406);

exports.default = React.createClass({
    displayName: "BackHeader",

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
                    React.createElement("i", { className: "fa fa-user-md" }),
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
        var user = login.getUser();
        var items = {
            "my": React.createElement(
                _reactRouter.Link,
                { activeClassName: "active", className: "my", to: "/my/app" },
                "\u6211\u7684\u7AD9\u70B9"
            ),
            // "favarite":<Link activeClassName="active" className="favarite" to="/my/favarite">我的收藏</Link>,
            "template": React.createElement(
                _reactRouter.Link,
                { activeClassName: "active", className: "template", to: "/my/template" },
                "\u6211\u7684\u6A21\u677F"
            ),
            "account": React.createElement(
                _reactRouter.Link,
                { activeClassName: "active", className: "account", to: "/my/account" },
                "\u8D26\u53F7\u4E2D\u5FC3"
            )

        };
        var active = this.props.active || "home";
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
                        { className: "nav navbar-nav navbar-right main-back " },
                        this.renderItem()
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
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

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#nav .main-back {\n    margin-top: 7px;\n}", ""]);

// exports


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n#my-container {\n    display: block;\n    position: relative;\n}\n\n\n\n\n.blank-tips{\n    text-align: center;\n    padding: 200px;\n}\n\n\n#app-detail .templ{\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 30px;\n}\n\n#app-detail .templ .bd{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .bd img{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .des{\n    flex: 1;\n    margin-left: 30px;\n}", ""]);

// exports


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(471);
var EditableSpan = __webpack_require__(473);
var SharePopover = __webpack_require__(474);
var WeixinPop = __webpack_require__(476);
console.log(SharePopover);
module.exports = React.createClass({
    displayName: "exports",

    getInitialState: function getInitialState() {
        return { siteList: [] };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            type: "app"
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        self.flush();

        $(document).delegate(".edit-title", "change", function (ev) {
            var target = $(ev.target);
            var id = target.attr("data-siteid");
            var newValue = target.val();
            var value = target.attr("data-oldvalue");
            if (value !== newValue) {
                self.changeTitle(id, newValue, value, target);
            }
        });
    },

    del: function del(id) {
        window.confirm("确定删除这个站点嘛？");
        var self = this;
        var url = "/json/" + this.props.type + "/" + id;
        $.ajax({
            url: url,
            type: "DELETE",
            success: function success() {
                self.flush();
            }
        });
    },

    changeTitle: function changeTitle(id, title, oldValue, callback) {
        var urls = "/json/app/";
        if (this.props.type == "app") {} else {
            urls = "/json/template/";
        }

        $.post(urls + id, { title: title }, function (result) {
            if (result.success) {} else {
                alert("更新失败");
                //target.val(oldValue)
            }
            callback && callback(result.success);
        });
    },

    flush: function flush() {
        var self = this;
        if (debug) {
            self.setState({ siteList: [{ id: 123, title: "我的新站点", subdomain: { name: 123 } }] });
        } else {
            $.get("/json/my/" + this.props.type, function (data) {
                if (data.needLogin) {
                    location.href = "/user/login";
                    return;
                }

                if (typeof data !== "string") {
                    self.setState({ siteList: data });
                    var siteList = data;
                    for (var i = 0; i < siteList.length; i++) {
                        var app = siteList[i];
                        (function (a) {
                            $.get("/json/app/" + a.id + "/pv/count", function (result) {
                                a.pv = { num: result };
                                self.setState({ siteList: siteList });
                            });
                        })(app);
                    }
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
        if (this.props.type == "app") {
            return React.createElement(
                "div",
                { className: "container blank-tips" },
                React.createElement(
                    "div",
                    { className: "tips" },
                    "\u60A8\u8FD8\u6CA1\u6709\u521B\u5EFA\u7F51\u7AD9\uFF0C\u53BB\u6A21\u677F\u5E02\u573A\u6311\u9009\u4E00\u4E2A\u5427\uFF01"
                ),
                React.createElement(
                    "a",
                    { className: "btn btn-green-line ", href: "/template/market/all" },
                    "\u6311\u9009\u514D\u8D39\u6A21\u677F"
                ),
                React.createElement(
                    "a",
                    {
                        className: "btn btn-green-line", href: "/template/market" },
                    "\u65B0\u5EFA\u7A7A\u767D\u7AD9\u70B9"
                )
            );
        } else {
            return React.createElement(
                "div",
                { className: "container blank-tips" },
                React.createElement(
                    "div",
                    { className: "tips" },
                    "\u60A8\u8FD8\u6CA1\u6709\u6A21\u677F\uFF0C\u53BB\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5427\uFF01"
                ),
                React.createElement(
                    "a",
                    { className: "btn btn-green-line", href: "/template/create" },
                    "\u65B0\u5EFA\u6A21\u677F"
                )
            );
        }
    },

    showCreateLink: function showCreateLink() {
        if (this.props.type == "template") {
            return React.createElement(
                "a",
                { className: "btn btn-green add-site-button large", href: "/template/create" },
                "\u521B\u5EFA\u65B0\u6A21\u677F"
            );
        } else {
            return React.createElement(
                "a",
                { className: "btn btn-green add-site-button large", href: "/template/market/all" },
                "\u521B\u5EFA\u65B0\u7AD9\u70B9"
            );
        }
    },

    renderList: function renderList() {
        return React.createElement(
            "div",
            { className: "site-list-wrap" },
            React.createElement(
                "div",
                { className: "add-site" },
                React.createElement(
                    "div",
                    { className: "container" },
                    this.showCreateLink()
                )
            ),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { id: "my-site-list" },
                    this.renderItem()
                )
            )
        );
    },

    renderUrl: function renderUrl(site) {
        var result;
        if (this.props.type == "app") {
            if (site.isPublish) {
                var url = "//" + site.subdomain.name + ".dotlinkface.com";
                result = React.createElement(
                    "p",
                    { className: "url" },
                    React.createElement(
                        "a",
                        { href: url },
                        "http:" + url
                    )
                );
            } else {
                result = React.createElement(
                    "p",
                    { className: "url" },
                    "\u6CA1\u6709\u53D1\u5E03\u6682\u65E0\u5730\u5740"
                );
            }
        }
        return result;
    },
    renderAction: function renderAction(site) {
        var result = [];
        var self = this;
        if (site.isPublish) {
            var fun = function (id) {
                return function () {
                    self.unPublish(id);
                };
            }(site.id);
            result.push(React.createElement(
                "a",
                { "data-id": site.id, onClick: fun, className: "unpublish btn btn-green-border " },
                "\u4E0B\u7EBF"
            ));
        } else {
            // result.push( <a  data-id = {site.id} onClick = {this.publish} className="publish btn btn-green ">发布</a>)
        }
        return result;
    },

    publish: function publish(e) {
        var target = $(e.target);
        var id = target.attr("data-id");
        $.post("/json/" + this.props.type + "/" + id + "/publish", function (result) {
            if (result.success) {
                alert("发布成功");
            } else {
                alert("发布失败");
            }
        });
    },

    unPublish: function unPublish(id) {
        var self = this;
        $.post("/json/" + this.props.type + "/" + id + "/unpublish", function (result) {
            if (result.success) {
                alert("下线成功");
                self.flush();
            } else {
                alert("下线失败");
            }
        });
    },

    renderBg: function renderBg() {},
    renderVisitor: function renderVisitor(site) {
        if (this.props.type == "app") {
            return React.createElement(
                "p",
                { className: "visitors" },
                "\u8FC7\u53BB7\u5929\u7684\u8BBF\u95EE\u91CF: ",
                React.createElement(
                    "span",
                    { "class": "num" },
                    " ",
                    site.pv && site.pv.num,
                    " "
                )
            );
        }
    },

    showTips: function showTips(ev) {
        var target = $(ev.target);
        var next = target.next();
        next.show();
    },

    renderItem: function renderItem() {
        var self = this;
        var result = [];
        for (var i = 0; i < this.state.siteList.length; i++) {
            var site = this.state.siteList[i];
            var fun = function (id, value) {
                return function (newValue, callback) {
                    self.changeTitle(id, newValue, value, callback);
                };
            }(site.id, site.value);

            var del = function (id) {
                return function () {
                    self.del(id);
                };
            }(site.id);

            if (this.props.type == "app") {
                var url = "http://" + site.subdomain && site.subdomain.name + ".dotlinkface.com";
            } else {
                var url = "http://www.dotlinkface.com/preview/template/" + site.id;
            }

            var item = React.createElement(
                "div",
                { className: "templ" },
                React.createElement(
                    "div",
                    { className: "bd" },
                    React.createElement(
                        "a",
                        { href: url },
                        React.createElement("img", {
                            src: site.logo || window.rootPath + "img/template_bg.png" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "des" },
                    React.createElement(
                        "h3",
                        { className: "title" },
                        React.createElement(EditableSpan, { ref: "edit-title", onChange: fun,
                            value: site.title }),
                        React.createElement(
                            "span",
                            { className: "status" },
                            site.isPublish ? "已发布" : "未发布"
                        )
                    ),
                    this.renderUrl(site),
                    this.renderVisitor(site),
                    React.createElement(
                        "div",
                        { className: "action" },
                        React.createElement(
                            "a",
                            { target: "_blank", className: "edit btn btn-green ",
                                href: "/designer/" + this.props.type + "/" + site.id },
                            "\u7F16\u8F91"
                        ),
                        this.renderAction(site),
                        React.createElement(
                            "a",
                            { className: "share-" + site.id + " icon" },
                            "\u5206\u4EAB"
                        ),
                        React.createElement(SharePopover, { url: url, type: this.props.type,
                            toggleSelector: ".share-" + site.id })
                    )
                ),
                React.createElement("span", { onClick: del, className: "del-icon fa fa-remove" })
            );

            result.push(item);
        }
        return result;
    },

    render: function render() {

        return React.createElement(
            "div",
            { className: "site-list" },
            this.rendBody(),
            React.createElement(WeixinPop, null)
        );
    }

});

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(472);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
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

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "    .add-site {\n\n        border-bottom:1px solid #eaeaea;\n        padding: 0 0px 20px 0;\n\n    }\n\n    .add-site-button {\n\n    }\n\n    .site-list {\n        overflow: hidden;\n        display: block;\n        margin: 50px 0 16px 0px;\n        display: flex;\n        flex-direction: row;\n    }\n\n    #my-site-list {\n\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        padding-bottom: 100px;\n    }\n\n\n    .site-list-wrap{\n        width: 100%;\n    }\n    .site-list .templ {\n        background:#ffffff;\n\n        width:540px;\n        margin-top: 20px;\n        margin-right: 30px;\n        height:206px;\n        display: flex;\n        flex-direction: row;\n        box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.16);\n        position: relative;\n\n\n\n\n    }\n    .site-list .templ .bd {\n        background: url(\"/imgbrowser.png\") 0 0 no-repeat;\n        background:#ffffff;\n\n        width:236px;\n        height:206px;\n    }\n\n    .site-list .templ .des {\n        padding:15px 15px 15px 20px;\n        position: relative;\n        color: #666666;\n    }\n\n\n    .site-list .templ h3.title  {\n        family:MicrosoftYaHei;\n        font-size:12px;\n        color:#666666;\n        letter-spacing:0.99px;\n        text-align: center;\n        margin: 0;\n        display: inline-block;\n\n    }\n    .site-list .templ .status  {\n        padding: 1px 2px;\n        color: #fff;\n        border-radius: 2px;\n        background-color: #84C634;\n        font-size: 11px;\n        margin-left: 10px;\n\n    }\n\n    .site-list .templ h3  .edit-title  {\n        family:MicrosoftYaHei;\n\n        color:#666666;\n        letter-spacing:0.99px;\n        text-align: left;\n        font-size: 20px;\n    }\n\n\n    .site-list .templ  .url {\n        margin-top: 15px;\n\n    }\n\n    .site-list .templ  .url  a{\n        color: #00C4D8;\n    }\n\n    .site-list .templ  .action{\n        position: absolute;\n        bottom:20px;\n        left:20px;\n        width:300px;\n    }\n\n    .site-list .templ  .action a{\n        margin-right: 10px;\n    }\n\n    .site-list .templ  .visitors span{\n        color: #00C4D8;\n        font-size: 18px;\n        margin-left: 10px;\n\n    }\n\n    .site-list  .edit-title{\n        border: none;\n\n    }\n    .site-list  .edit-title:hover,.site-list  .edit-title:focus{\n        border:solid 1px #ccc;\n    }\n\n\n\n    .site-list .templ img {\n        width: 100%;\n    }\n\n    .site-list .templ .del-icon {\n        position: absolute;\n        top:10px;\n        right:10px;\n    }\n\n\n\n    .blank-tips .tips{\n        font-family:MicrosoftYaHei;\n        font-size:20px;\n        color:#cccccc;\n        letter-spacing:1.66px;\n        margin-bottom: 30px;\n    }\n\n    .blank-tips .btn{\n        margin-right: 30px;\n    }\n\n    .share-popover{\n        top:20px;\n        left:23px\n    }\n\n", ""]);

// exports


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = React.createClass({
    displayName: "exports",

    getDefaultProps: function getDefaultProps() {
        return {
            value: "",
            className: "",
            placeHolder: "设置标题"
        };
    },
    getInitialState: function getInitialState() {
        return {
            contentEditable: false
        };
    },
    compontentDidMount: function compontentDidMount() {
        $(document).delegate(".edit-title", "change", function (ev) {
            var target = $(ev.target);
            var id = target.attr("data-siteid");
            var newValue = target.val();
            var value = target.attr("data-oldvalue");
            if (value !== newValue) {
                self.changeTitle(id, newValue, value, target);
            }
        });
    },
    toEditor: function toEditor() {
        this.setState({ contentEditable: true });
    },

    noEditor: function noEditor() {
        this.setState({ contentEditable: false });
    },

    change: function change() {
        var self = this;
        this.noEditor();
        if (this.props.onChange) {
            var value = $(this.refs["target"]).text();
            if (value !== this.props.value && value !== this.props.placeHolder) {
                this.props.onChange(value, this.props.value, function (success) {
                    if (!success) {
                        self.setValue({ value: this.props.value });
                    } else {
                        self.setValue({ value: value });
                    }
                });
            }
        }
    },

    render: function render() {

        return React.createElement(
            "span",
            { ref: "target", onMouseEnter: this.toEditor, onBlur: this.change, onClick: this.toEditor, contentEditable: this.state.contentEditable, className: this.props.className + " edit-title", type: "text" },
            this.props.value || this.props.placeHolder
        );
    }
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Popover = __webpack_require__(475);
module.exports = React.createClass({
    displayName: "exports",


    getDefaultProps: function getDefaultProps() {
        return {
            toggleSelector: "popover",
            url: ""
        };
    },

    getInitialState: function getInitialState() {
        return {};
    },

    componentDidMount: function componentDidMount() {},

    hide: function hide() {
        this.refs["pop"].hide();
    },

    render: function render() {
        return React.createElement(
            Popover,
            { ref: "pop", toggleSelector: this.props.toggleSelector },
            React.createElement(
                "a",
                { onClick: this.showShareWeixin, className: "weixin" },
                "\u5FAE\u4FE1"
            ),
            React.createElement(
                "a",
                { href: "http://service.weibo.com/share/share.php?title=我的新网站上线了&url=" + this.props.url + "&source=bookmark#_loginLayer_1502947558461", className: "weibo" },
                "\u5FAE\u535A"
            )
        );
    },
    showShareWeixin: function showShareWeixin() {
        console.log("gi");
        if (window.sharePop) {
            window.sharePop.show(this.props.url);
        }
    },
    showWeixinShare: function showWeixinShare() {
        return React.createElement(
            "div",
            { className: "modal fade modal-weinxin-share", tabindex: "-1", role: "dialog" },
            React.createElement(
                "div",
                { className: "modal-dialog", role: "document" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                            React.createElement(
                                "span",
                                { "aria-hidden": "true" },
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            "Modal title"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        React.createElement("div", { id: "qr" })
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                            "Close"
                        ),
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-primary" },
                            "Save changes"
                        )
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = React.createClass({
    displayName: "exports",


    getDefaultProps: function getDefaultProps() {
        return {
            toggleSelector: "popover"

        };
    },

    getInitialState: function getInitialState() {
        return {
            show: false
        };
    },

    componentDidMount: function componentDidMount() {
        var self = this;

        $(document).on("click", function (ev) {

            var target = $(ev.target);

            if (!target.closest(self.props.toggleSelector).length && !target.closest(".popover").length) {
                self.setState({ show: false });
            }
        });

        $(document).delegate(this.props.toggleSelector, "click", function (ev) {

            self.setState({ show: true });
        });
    },
    hide: function hide() {
        self.setState({ show: false });
    },

    render: function render() {
        return React.createElement(
            "div",
            { style: { display: this.state.show ? "block" : "none" }, className: "popover bottom share-popover" },
            React.createElement("div", { className: "arrow" }),
            React.createElement(
                "h3",
                { className: "popover-title" },
                "\u5206\u4EAB"
            ),
            React.createElement(
                "div",
                { className: "popover-content" },
                this.props.children
            )
        );
    }
});

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(477);
module.exports = React.createClass({
    displayName: "exports",


    getDefaultProps: function getDefaultProps() {
        return {
            toggleSelector: "popover",
            url: ""
        };
    },

    getInitialState: function getInitialState() {
        return {};
    },

    componentDidMount: function componentDidMount() {
        window.sharePop = this;
    },

    hide: function hide() {},

    show: function show(url) {
        $("#qr").html("");
        $("#qr").qrcode({ width: 200, height: 200, text: url });
        $(".modal-weinxin-share").modal("show");
    },

    showWeixin: function showWeixin(url) {},

    render: function render() {
        return React.createElement(
            "div",
            { className: "modal fade modal-weinxin-share", tabindex: "-1", role: "dialog" },
            React.createElement(
                "div",
                { className: "modal-dialog", role: "document" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                            React.createElement(
                                "span",
                                { "aria-hidden": "true" },
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            "\u5FAE\u4FE1\u5206\u4EAB"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        React.createElement(
                            "div",
                            { className: "share-body" },
                            React.createElement("div", { id: "qr" }),
                            React.createElement(
                                "div",
                                null,
                                "\u6253\u5F00\u5FAE\u4FE1\uFF0C\u70B9\u51FB\u5E95\u90E8\u7684\u201C\u53D1\u73B0\u201D\uFF0C\u4F7F\u7528 \u201C\u626B\u4E00\u626B\u201D \u5373\u53EF\u5C06\u7F51\u9875\u5206\u4EAB\u5230\u6211\u7684\u670B\u53CB\u5708\u3002"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                            "\u5173\u95ED"
                        )
                    )
                )
            )
        );
    }

});

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(478);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./weixinPop.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./weixinPop.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".share-body{\n    display: flex;\n    flex-direction: row;\n\n}\n\n.share-body #qr{\n    margin-right: 20px;\n}\n\n\n.modal-weinxin-share{\n    z-index: 9999;\n}", ""]);

// exports


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BackHeader = __webpack_require__(387);

var _BackHeader2 = _interopRequireDefault(_BackHeader);

var _Footer = __webpack_require__(358);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteList = __webpack_require__(926);
__webpack_require__(388);
module.exports = React.createClass({
  displayName: 'exports',


  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'my' },
      React.createElement(_BackHeader2.default, { active: 'my' }),
      React.createElement(SiteList, null),
      React.createElement(_Footer2.default, null)
    );
  }

});

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListPage = __webpack_require__(470);
module.exports = React.createClass({
    displayName: "exports",


    render: function render() {
        return React.createElement(ListPage, { type: "app" });
    }

});

/***/ })

});