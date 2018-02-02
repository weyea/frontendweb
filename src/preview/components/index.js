
require("./index.css")
var Header =require("../../common/HeaderTemplate.js")

module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {

    var id =  this.props.params.id;


      $(document).delegate("#create-new-site", "click", function (ev) {
          ev.preventDefault();

          $.post("/json/app?templateid=" + id, {name: "mysite"}, function (data) {
              if (data.needLogin) {
                  location.href = data.loginURL;
                  return;
              }
              return;
              var url = "/designer/app/" + data.id
              location.href = url;

          })
      });
          (function () {
              var self = this;
              $(document).delegate(".viewport-pic", "click", function () {
                  $("#container-iframe").width(1280);
              })

              $(document).delegate(".viewport-mobile", "click", function () {
                  $("#container-iframe").width(480)
              })

          })()



  },
  componentWillUnmount: function() {

  },
  render: function() {
    var id =  this.props.params.id
    return (
      <div id="preview">
        <Header type="home" active="market"></Header>
        <div id="container-iframe">
          <iframe src={"/designer/source/template/"+id}></iframe>

      </div>
      </div>


    );
  }
});
