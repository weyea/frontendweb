
require("./index.css")
import Header from '../../common/Header'

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
        <Header active=""></Header>
        <div id="nofound-container">
          <span>抱歉！页面无法访问……</span>
        </div>
      </div>


    );
  }
});
