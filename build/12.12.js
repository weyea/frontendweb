webpackJsonp([12,19],{

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

/***/ 640:
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

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRouter = __webpack_require__(120);

	var login = __webpack_require__(223);
	__webpack_require__(666);

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
	                { activeClassName: "active", className: "my", to: "/my" },
	                "我的站点"
	            ),
	            "favarite": React.createElement(
	                _reactRouter.Link,
	                { activeClassName: "active", className: "favarite", to: "/my/favarite" },
	                "我的收藏"
	            ),
	            "template": React.createElement(
	                _reactRouter.Link,
	                { activeClassName: "active", className: "template", to: "/my/template" },
	                "我的模板"
	            ),
	            "account": React.createElement(
	                _reactRouter.Link,
	                { activeClassName: "active", className: "account", to: "/my/account" },
	                "账号中心"
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

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(667);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(71)();
	// imports


	// module
	exports.push([module.id, "#nav .main-back {\n    margin-top: 7px;\n}", ""]);

	// exports


/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(669);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(71)();
	// imports


	// module
	exports.push([module.id, "\n#my-container {\n    display: block;\n    position: relative;\n}\n\n\n\n\n.blank-tips{\n    text-align: center;\n    padding: 200px;\n}\n\n\n#app-detail .templ{\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 30px;\n}\n\n#app-detail .templ .bd{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .bd img{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .des{\n    flex: 1;\n    margin-left: 30px;\n}", ""]);

	// exports


/***/ },

/***/ 670:
/***/ function(module, exports) {

	'use strict';

	(function ($) {
	    $.fn.html5_upload = function (options) {

	        function get_file_name(file) {
	            return file.name || file.fileName;
	        }
	        function get_file_size(file) {
	            return file.size || file.fileSize;
	        }
	        var available_events = ['onStart', 'onStartOne', 'onProgress', 'onFinishOne', 'onFinish', 'onError'];
	        var options = $.extend({
	            onStart: function onStart(event, total) {
	                return true;
	            },
	            onStartOne: function onStartOne(event, name, number, total) {
	                return true;
	            },
	            onProgress: function onProgress(event, progress, name, number, total) {},
	            onFinishOne: function onFinishOne(event, response, name, number, total) {},
	            onFinish: function onFinish(event, total) {},
	            onError: function onError(event, name, error) {},
	            onBrowserIncompatible: function onBrowserIncompatible() {
	                alert("Sorry, but your browser is incompatible with uploading files using HTML5 (at least, with current preferences.\n Please install the latest version of Firefox, Safari or Chrome");
	            },
	            autostart: true,
	            autoclear: true,
	            stopOnFirstError: false,
	            sendBoundary: false,
	            fieldName: 'user_file[]', //ignore if sendBoundary is false
	            extraFields: {}, // extra fields to send with file upload request (HTML5 only)
	            method: 'post',

	            STATUSES: {
	                'STARTED': 'Started',
	                'PROGRESS': 'Progress',
	                'LOADED': 'Loaded',
	                'FINISHED': 'Finished'
	            },
	            headers: {
	                "Cache-Control": "no-cache",
	                "X-Requested-With": "XMLHttpRequest",
	                "X-File-Name": function XFileName(file) {
	                    return encodeURIComponent(get_file_name(file));
	                },
	                "X-File-Size": function XFileSize(file) {
	                    return get_file_size(file);
	                },
	                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
	                "Content-Type": function ContentType(file) {
	                    if (!options.sendBoundary) return 'multipart/form-data';
	                    return false;
	                }
	            },

	            setName: function setName(text) {},
	            setStatus: function setStatus(text) {},
	            setProgress: function setProgress(value) {},

	            genName: function genName(file, number, total) {
	                return file + "(" + (number + 1) + " of " + total + ")";
	            },
	            genStatus: function genStatus(progress, finished) {
	                if (finished) {
	                    return options.STATUSES['FINISHED'];
	                }
	                if (progress == 0) {
	                    return options.STATUSES['STARTED'];
	                } else if (progress == 1) {
	                    return options.STATUSES['LOADED'];
	                } else {
	                    return options.STATUSES['PROGRESS'];
	                }
	            },
	            genProgress: function genProgress(loaded, total) {
	                return loaded / total;
	            }
	        }, options);

	        function upload(files) {
	            var total = files.length;
	            var $this = $(this);
	            if (!$this.triggerHandler('html5_upload.onStart', [total])) {
	                return false;
	            }
	            this.disabled = true;
	            var uploaded = 0;
	            var xhr = this.html5_upload['xhr'];
	            this.html5_upload['continue_after_abort'] = true;
	            function upload_file(number) {
	                if (number == total) {
	                    $this.triggerHandler('html5_upload.onFinish', [total]);
	                    options.setStatus(options.genStatus(1, true));
	                    $this.attr("disabled", false);
	                    if (options.autoclear) {
	                        $this.val("");
	                    }
	                    return;
	                }
	                var file = files[number];
	                if (!$this.triggerHandler('html5_upload.onStartOne', [get_file_name(file), number, total])) {
	                    return upload_file(number + 1);
	                }
	                options.setStatus(options.genStatus(0));
	                options.setName(options.genName(get_file_name(file), number, total));
	                options.setProgress(options.genProgress(0, get_file_size(file)));
	                xhr.upload['onprogress'] = function (rpe) {
	                    $this.triggerHandler('html5_upload.onProgress', [rpe.loaded / rpe.total, get_file_name(file), number, total]);
	                    options.setStatus(options.genStatus(rpe.loaded / rpe.total));
	                    options.setProgress(options.genProgress(rpe.loaded, rpe.total));
	                };
	                xhr.onload = function (load) {
	                    if (xhr.status >= 205 || xhr.status < 200) {
	                        $this.triggerHandler('html5_upload.onError', [get_file_name(file), load]);
	                        if (!options.stopOnFirstError) {
	                            upload_file(number + 1);
	                        }
	                    } else {
	                        $this.triggerHandler('html5_upload.onFinishOne', [xhr.responseText, get_file_name(file), number, total]);
	                        options.setStatus(options.genStatus(1, true));
	                        options.setProgress(options.genProgress(get_file_size(file), get_file_size(file)));
	                        upload_file(number + 1);
	                    }
	                };
	                xhr.onabort = function () {
	                    if ($this[0].html5_upload['continue_after_abort']) {
	                        upload_file(number + 1);
	                    } else {
	                        $this.attr("disabled", false);
	                        if (options.autoclear) {
	                            $this.val("");
	                        }
	                    }
	                };
	                xhr.onerror = function (e) {
	                    $this.triggerHandler('html5_upload.onError', [get_file_name(file), e]);
	                    if (!options.stopOnFirstError) {
	                        upload_file(number + 1);
	                    }
	                };
	                xhr.open(options.method, typeof options.url == "function" ? options.url(number) : options.url, true);
	                $.each(options.headers, function (key, val) {
	                    val = typeof val == "function" ? val(file) : encodeURIComponent(val); // resolve value
	                    if (val === false) return true; // if resolved value is boolean false, do not send this header
	                    xhr.setRequestHeader(key, val);
	                });

	                if (!options.sendBoundary) {
	                    xhr.send(file);
	                } else {
	                    if (window.FormData) {
	                        //Many thanks to scottt.tw
	                        var f = new FormData();
	                        f.append(typeof options.fieldName == "function" ? options.fieldName() : options.fieldName, file);
	                        options.extraFields = typeof options.extraFields == "function" ? options.extraFields() : options.extraFields;
	                        $.each(options.extraFields, function (key, val) {
	                            f.append(key, val);
	                        });
	                        xhr.send(f);
	                    } else if (file.getAsBinary) {
	                        //Thanks to jm.schelcher
	                        var boundary = '------multipartformboundary' + new Date().getTime();
	                        var dashdash = '--';
	                        var crlf = '\r\n';

	                        /* Build RFC2388 string. */
	                        var builder = '';

	                        builder += dashdash;
	                        builder += boundary;
	                        builder += crlf;

	                        builder += 'Content-Disposition: form-data; name="' + (typeof options.fieldName == "function" ? options.fieldName() : options.fieldName) + '"';

	                        //thanks to oyejo...@gmail.com for this fix
	                        fileName = unescape(encodeURIComponent(get_file_name(file))); //encode_utf8

	                        builder += '; filename="' + fileName + '"';
	                        builder += crlf;

	                        builder += 'Content-Type: ' + file.type;
	                        builder += crlf;
	                        builder += crlf;

	                        /* Append binary data. */
	                        builder += file.getAsBinary();
	                        builder += crlf;

	                        /* Write boundary. */
	                        builder += dashdash;
	                        builder += boundary;
	                        builder += dashdash;
	                        builder += crlf;

	                        xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' + boundary);
	                        xhr.sendAsBinary(builder);
	                    } else {
	                        options.onBrowserIncompatible();
	                    }
	                }
	            }
	            upload_file(0);
	            return true;
	        }

	        try {
	            return this.each(function () {
	                var file_input = this;
	                this.html5_upload = {
	                    xhr: new XMLHttpRequest(),
	                    continue_after_abort: true
	                };
	                if (options.autostart) {
	                    $(this).bind('change', function (e) {
	                        upload.call(e.target, this.files);
	                    });
	                }
	                var self = this;
	                $.each(available_events, function (event) {
	                    if (options[available_events[event]]) {
	                        $(self).bind("html5_upload." + available_events[event], options[available_events[event]]);
	                    }
	                });
	                $(this).bind('html5_upload.startFromDrop', function (e, dropEvent) {
	                    if (dropEvent.dataTransfer && dropEvent.dataTransfer.files.length) {
	                        upload.call(file_input, dropEvent.dataTransfer.files);
	                    }
	                }).bind('html5_upload.start', upload).bind('html5_upload.cancelOne', function () {
	                    this.html5_upload['xhr'].abort();
	                }).bind('html5_upload.cancelAll', function () {
	                    this.html5_upload['continue_after_abort'] = false;
	                    this.html5_upload['xhr'].abort();
	                }).bind('html5_upload.destroy', function () {
	                    this.html5_upload['continue_after_abort'] = false;
	                    this.xhr.abort();
	                    delete this.html5_upload;
	                    $(this).unbind('html5_upload.*').unbind('change', upload);
	                });
	            });
	        } catch (ex) {
	            options.onBrowserIncompatible();
	            return false;
	        }
	    };
	})(jQuery);

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _BackHeader = __webpack_require__(665);

	var _BackHeader2 = _interopRequireDefault(_BackHeader);

	var _Footer = __webpack_require__(640);

	var _Footer2 = _interopRequireDefault(_Footer);

	__webpack_require__(668);

	__webpack_require__(670);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = React.createClass({
	    displayName: 'exports',

	    getInitialState: function getInitialState() {
	        return { site: { id: this.props.params.id, title: "站点" } };
	    },

	    componentDidMount: function componentDidMount() {
	        this.getData();
	        this.uploadImg();
	        this.bindEvent();
	    },

	    uploadImg: function uploadImg() {

	        // Change this to the location of your server-side upload handler:
	        var url = "/json/template/" + this.props.params.id + "/bg";
	        var $input = $("#fileupload").html5_upload({
	            url: url,
	            sendBoundary: window.FormData || $.browser.mozilla,
	            onStart: function onStart(event, total) {
	                return true;
	                return confirm("You are trying to upload " + total + " files. Are you sure?");
	            },
	            fieldName: "file",
	            onProgress: function onProgress(event, progress, name, number, total) {
	                console.log(progress, number);
	            },
	            setName: function setName(text) {
	                $("#progress_report_name").text(text);
	            },
	            setStatus: function setStatus(text) {
	                $("#progress_report_status").text(text);
	            },
	            setProgress: function setProgress(val) {
	                $("#progress_report_bar").css('width', Math.ceil(val * 100) + "%");
	            },
	            onFinishOne: function onFinishOne(event, response, name, number, total) {
	                //alert(response);
	            },
	            onError: function onError(event, name, error) {
	                alert('error while uploading file ' + name);
	            }
	        });
	    },

	    getData: function getData() {
	        var _this = this;

	        var id = this.props.params.id;
	        $.get("/json/template/" + id, function (site) {
	            if (debug) {} else {
	                _this.setState({ site: site });
	            }
	        });
	    },

	    render: function render() {

	        var site = window.serverData || {};
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(_BackHeader2.default, { active: 'my' }),
	            React.createElement(
	                'div',
	                { id: 'app-detail' },
	                this.renderItem()
	            ),
	            React.createElement(_Footer2.default, null)
	        );
	    },

	    renderItem: function renderItem() {
	        if (this.state.site || debug) {
	            var site = this.state.site;
	            return React.createElement(
	                'div',
	                { className: 'container' },
	                React.createElement(
	                    'div',
	                    { className: 'templ' },
	                    React.createElement(
	                        'div',
	                        { className: 'bd' },
	                        React.createElement(
	                            'a',
	                            { href: "/my/preview/template/" + site.id },
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
	                                { href: "/app/" + site.id },
	                                site.title
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement(
	                                'p',
	                                { className: 'action' },
	                                React.createElement('input', { id: 'fileupload', type: 'file', name: 'file' }),
	                                React.createElement(
	                                    'a',
	                                    { className: '', href: "/designer/template/" + site.id },
	                                    '设计'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    null,
	                                    '  |  '
	                                ),
	                                React.createElement(
	                                    'a',
	                                    { className: 'del-site', href: "/json/template/" + site.id },
	                                    '删除 '
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    'ul',
	                    { className: 'nav nav-tabs', role: 'tablist' },
	                    React.createElement(
	                        'li',
	                        { role: 'presentation', className: 'active' },
	                        React.createElement(
	                            'a',
	                            { href: '#home', role: 'tab', 'data-toggle': 'tab' },
	                            '数据'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        React.createElement('a', { href: '#profile', role: 'tab', 'data-toggle': 'tab' })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'tab-content' },
	                    React.createElement(
	                        'div',
	                        { role: 'tabpanel', className: 'tab-pane active', id: 'home' },
	                        React.createElement('div', null)
	                    ),
	                    React.createElement(
	                        'div',
	                        { role: 'tabpanel', className: 'tab-pane', id: 'profile' },
	                        '...'
	                    )
	                )
	            );
	        } else {
	            return React.createElement(
	                'div',
	                { className: 'loading' },
	                '加载中...'
	            );
	        }
	    },
	    bindEvent: function bindEvent() {
	        var delEl = $(".del-site", this.nativeNode);
	        delEl.on("click", function (ev) {
	            ev.preventDefault();
	            window.confirm("确定删除这个站点嘛？");

	            var url = $(ev.target).attr("href");
	            $.ajax({
	                url: url,
	                type: "DELETE",
	                success: function success() {
	                    location.href = "/my";
	                }
	            });
	        });
	    }

	});

/***/ }

});