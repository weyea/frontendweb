
require("./index.css")
var Header =require("../../common/Header.js")

module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {



  },
  componentWillUnmount: function() {

  },
  render: function() {

    return (
      <div id="preview">
        <Header type="home" active="market"></Header>
        <div id="nofound-container">
          <span>nofound</span>
        </div>
      </div>


    );
  }
});
