
var designer = require("designer");




export default  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  componentDidMount: function() {
    var url;
    if(location.host == "localhost:8484"){
      url = "/app.html";
    }
    else {
      url = "/designer/source/"+this.props.params.type+"/"+this.props.params.appId;
    }

    designer.configs.templateUrl = url;
    designer.configs.saveUrl = "designer/json/"+this.props.params.type+"/"+this.props.params.appId;
    designer.run();

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div></div>
    );
  }
});
