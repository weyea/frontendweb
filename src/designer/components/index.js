var designer = require("designer");


module.exports = React.createClass({
    getInitialState: function () {
        return {secondsElapsed: 0};
    },

    componentDidMount: function () {
        var url;
        if (location.host.indexOf("localhost:8082") !== -1) {
            url = "/app.html";
        }
        else {
            url = "/designer/source/" + this.props.params.type + "/" + this.props.params.appId;
        }

        $.get("/json/" + this.props.params.type + "/" + this.props.params.appId, (result) => {
            designer.configs.templateUrl = url;
            designer.configs.serverData = result;
            designer.configs.id = this.props.params.appId
            designer.configs.type = this.props.params.type
            designer.configs.saveUrl = "/json/designer/" + this.props.params.type + "/" + this.props.params.appId;
            designer.configs.publishUrl = "/json/" + this.props.params.type + "/" + this.props.params.appId + "/publish";
            designer.configs.captureUrl = "/json/designer/capture/" + this.props.params.type + "/" + this.props.params.appId;
            designer.configs.uploadMaterial = "/json/material";
            designer.configs.getMaterial = "/json/material"
            designer.run();
        })


    },
    componentWillUnmount: function () {

    },
    render: function () {
        return (
            <div></div>
        );
    }
});
