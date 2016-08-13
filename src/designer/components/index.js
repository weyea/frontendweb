
var designer = require("designer");




module.exports =   React.createClass({
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
    designer.configs.saveUrl = "/json/designer/"+this.props.params.type+"/"+this.props.params.appId;
    designer.configs.captureUrl = "/json/designer/capture/"+this.props.params.type+"/"+this.props.params.appId;
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
