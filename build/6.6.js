webpackJsonp([6,9],{

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
	            "weiye"
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

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Header = __webpack_require__(262);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(263);

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
	    $.post("/template/json", { title: 123 }, function () {
	      alert("创建成功");
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
	          React.createElement('input', { type: 'text', className: 'form-control', id: 'exampleInputEmail1', placeholder: '' })
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