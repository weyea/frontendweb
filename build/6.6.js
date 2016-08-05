webpackJsonp([6,9],{

/***/ 263:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = React.createClass({
	  displayName: "CreateTemplate",

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
	    $.post("/template", { name: 123 }, function () {
	      alert("创建成功");
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "create-template" },
	      React.createElement(
	        "form",
	        null,
	        React.createElement(
	          "div",
	          { className: "form-group" },
	          React.createElement(
	            "label",
	            { htmlFor: "exampleInputEmail1" },
	            "模板名称"
	          ),
	          React.createElement("input", { type: "text", className: "form-control", id: "exampleInputEmail1", placeholder: "" })
	        ),
	        React.createElement(
	          "button",
	          { onClick: this.createTemplate, className: "btn btn-default" },
	          "Submit"
	        )
	      )
	    );
	  }
	});

/***/ }

});