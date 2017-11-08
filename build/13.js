webpackJsonp([13],{

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

var _reactRouter = __webpack_require__(138);

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

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Header = __webpack_require__(354);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(347);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = React.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      secondsElapsed: 0,
      category: []
    };
  },

  componentDidMount: function componentDidMount() {

    this.getCate();
  },

  componentWillUnmount: function componentWillUnmount() {},

  createTemplate: function createTemplate() {

    var ids = $("#template-cate").val();

    $.post("/json/template", { title: $("#tempalte-name").val(), category: ids, categories: [ids] }, function (result) {
      if (result.needLogin) {
        location.href = "/user/login";
        return;
      } else {
        alert("创建成功");
      }
    });
  },
  getCate: function getCate() {
    var self = this;
    $.get("/json/category", function (result) {
      if (result.needLogin) {
        location.href = "/user/login";
        return;
      } else {
        var data = [];
        for (var i = 0; i < result.length; i++) {
          data.push({
            id: result[i].id,
            title: result[i].title
          });
        }
        self.setState({ category: data });
      }
    });
  },
  renderCate: function renderCate() {
    var children = [];
    for (var i = 0; i < this.state.category.length; i++) {
      children.push(React.createElement(
        'option',
        { value: this.state.category[i].id },
        this.state.category[i].title
      ));
    }
    return children;
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'create-template' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { htmlFor: 'exampleInputEmail1' },
          '\u6A21\u677F\u540D\u79F0'
        ),
        React.createElement('input', { type: 'text', className: 'form-control', id: 'tempalte-name', placeholder: '' }),
        React.createElement(
          'select',
          { id: 'template-cate', name: 'cateId' },
          this.renderCate()
        )
      ),
      React.createElement(
        'a',
        { href: '#', onClick: this.createTemplate, className: 'btn btn-default' },
        'Submit'
      )
    );
  }
});

/***/ })

});