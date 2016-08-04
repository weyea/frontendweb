var APP =require("app");


export default  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  componentDidMount: function() {
    APP.render(window.serverData);
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div></div>
    );
  }
});
