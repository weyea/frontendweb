webpackJsonp([5,9],{

/***/ 261:
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

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
	      "div",
	      { className: "container" },
	      React.createElement(
	        "form",
	        { className: "form-signin", id: "", role: "form", action: "/user/login", method: "POST" },
	        React.createElement(
	          "h2",
	          { className: "form-signin-heading" },
	          "登录"
	        ),
	        React.createElement("input", { name: "username", type: "text", className: "form-control", placeholder: "用户名", required: true, autofocus: true }),
	        React.createElement("input", { type: "password", name: "password", className: "form-control", placeholder: "密码", required: true }),
	        React.createElement("input", { type: "hidden", name: "redirect", value: "<%= locals.redirect %>", className: "form-control", placeholder: "Password", required: true }),
	        React.createElement(
	          "label",
	          { className: "checkbox" },
	          React.createElement("input", { type: "checkbox", value: "remember-me" }),
	          " Remember me"
	        ),
	        React.createElement(
	          "button",
	          { className: "btn btn-lg btn-primary btn-block", type: "submit" },
	          "登录"
	        )
	      )
	    );
	  }
	});

/***/ }

});