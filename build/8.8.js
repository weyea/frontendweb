webpackJsonp([8,19],{

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(100);

	var login = __webpack_require__(264);
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
	        { activeClassName: "active", className: "tru", to: "/template/market" },
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

/***/ 265:
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

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Header = __webpack_require__(263);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(265);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = React.createClass({
	  displayName: 'exports',

	  getInitialState: function getInitialState() {
	    return { secondsElapsed: 0 };
	  },

	  componentDidMount: function componentDidMount() {
	    this.interval = setInterval(this.tick, 1000);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	  },
	  createTemplate: function createTemplate() {
	    $.post("/json/template", { title: $("#tempalte-name").val() }, function (result) {
	      if (result.needLogin) {
	        location.href = "/user/login";
	        return;
	      } else {
	        alert("创建成功");
	      }
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'create-template' },
	      React.createElement(
	        'form',
	        null,
	        React.createElement(
	          'div',
	          { className: 'form-group' },
	          React.createElement(
	            'label',
	            { htmlFor: 'exampleInputEmail1' },
	            '模板名称'
	          ),
	          React.createElement('input', { type: 'text', className: 'form-control', id: 'tempalte-name', placeholder: '' })
	        ),
	        React.createElement(
	          'a',
	          { href: '#', onClick: this.createTemplate, className: 'btn btn-default' },
	          'Submit'
	        )
	      )
	    );
	  }
	});

/***/ }

});