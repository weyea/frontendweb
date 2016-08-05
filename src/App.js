require('./common/base.css');
// var Header = require('./common/Header');
// var Footer = require('./common/Footer');
import Header from './common/Header'
import Footer from './common/Footer'
module.exports =  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div className="app">
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
});
