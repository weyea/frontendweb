webpackJsonp([10],{

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

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(881);
var Header = __webpack_require__(883);

module.exports = React.createClass({
    displayName: "exports",

    getInitialState: function getInitialState() {
        return {};
    },

    componentDidMount: function componentDidMount() {

        var id = this.props.params.id;

        $(document).delegate("#create-new-site", "click", function (ev) {
            ev.preventDefault();

            $.post("/json/app?templateid=" + id, { name: "mysite" }, function (data) {
                if (data.needLogin) {
                    location.href = data.loginURL;
                    return;
                }
                var url = "/designer/app/" + data.id;
                location.href = url;
            });
        });
        (function () {
            var self = this;
            $(document).delegate(".viewport-pic", "click", function () {
                $("#container-iframe").width(1280);
            });

            $(document).delegate(".viewport-mobile", "click", function () {
                $("#container-iframe").width(480);
            });
        })();
    },
    componentWillUnmount: function componentWillUnmount() {},
    render: function render() {
        var id = this.props.params.id;
        return React.createElement(
            "div",
            { id: "preview" },
            React.createElement(Header, { type: "home", active: "market" }),
            React.createElement(
                "div",
                { id: "container-iframe" },
                React.createElement("iframe", { src: "/designer/source/template/" + id })
            )
        );
    }
});

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(882);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "html, body {\n        height: 100%;\n        overflow: hidden;\n    }\n\n#root,.app,#preview{\n  height:100%;\n}\n\n    #container-iframe {\n        width: 100%;\n        margin: auto;\n        height: 100%;\n    }\n    iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n    }\n", ""]);

// exports


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(884);
module.exports = React.createClass({
    displayName: "exports",


    componentDidMount: function componentDidMount() {},

    render: function render() {
        return React.createElement(
            "div",
            { id: "nav", className: "navbar", role: "navigation" },
            React.createElement(
                "div",
                { className: "container-fluid" },
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
                    { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                    React.createElement(
                        "form",
                        { className: "navbar-form navbar-right", role: "search" },
                        React.createElement(
                            "a",
                            { id: "create-new-site", href: "#", className: "btn btn-default  to-create-site" },
                            "\u521B\u5EFA\u7AD9\u70B9"
                        )
                    ),
                    React.createElement(
                        "ul",
                        { className: "nav navbar-nav " },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#", className: "viewport-pic" },
                                React.createElement("span", { className: "oi oi-monitor" })
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#", className: "viewport-pad" },
                                React.createElement("span", { className: "oi oi-tablet" })
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#", className: "viewport-mobile" },
                                React.createElement("span", { className: "oi oi-phone" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal fade", id: "create-site", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel",
                            "aria-hidden": "true" },
                        React.createElement(
                            "div",
                            { className: "modal-dialog" },
                            React.createElement(
                                "div",
                                { className: "modal-content" },
                                React.createElement(
                                    "div",
                                    { className: "modal-header" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
                                        "\xD7"
                                    ),
                                    React.createElement(
                                        "h4",
                                        { className: "modal-title" },
                                        "\u521B\u5EFA\u65B0\u7AD9\u70B9"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "modal-body" },
                                    React.createElement("input", { type: "text", className: "form-control", id: "create-site-name", placeholder: "\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "modal-footer" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                                        "\u5173\u95ED"
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", "data-id": "<%= id %>", className: "cmd-create-site btn btn-primary" },
                                        "\u521B\u5EFA"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal fade", id: "create-site-success", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel",
                            "aria-hidden": "true" },
                        React.createElement(
                            "div",
                            { className: "modal-dialog" },
                            React.createElement(
                                "div",
                                { className: "modal-content" },
                                React.createElement(
                                    "div",
                                    { className: "modal-header" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
                                        "\xD7"
                                    ),
                                    React.createElement(
                                        "h4",
                                        { className: "modal-title", id: "" },
                                        "\u521B\u5EFA\u6210\u529F"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "modal-body" },
                                    "\u606D\u559C\uFF0C\u60A8\u7684\u7AD9\u70B9\u5DF2\u7ECF\u521B\u5EFA\u6210\u529F\u3002",
                                    React.createElement("a", { href: "#", id: "new-url" }),
                                    React.createElement(
                                        "div",
                                        null,
                                        React.createElement(
                                            "a",
                                            { id: "site-manager", href: "#" },
                                            "\u7BA1\u7406\u7AD9\u70B9"
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
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(885);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./HeaderTemplate.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./HeaderTemplate.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n#nav {\n    margin-bottom: 0;\n}\n\n#nav .to-create-site{\n  background:#444444;\nborder-radius:3px;\nwidth:114px;\nheight:34px;\nmargin-top: 2px;\nfont-size:14px;\ncolor:#ffffff;\n}\n", ""]);

// exports


/***/ })

});