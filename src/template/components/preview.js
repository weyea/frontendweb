
require("./preview.css")
var Header =require("../../common/HeaderTemplate.js")

module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {

    var id =  this.props.params.id;


          $(document).delegate(".cmd-create-site", "click", function (ev) {
                ev.preventDefault();
                $.post("/app/json?templateid=" + id, {name: $("#create-site-name").val()}, function (data) {
                    if (data.needLogin) {
                        location.href = data.loginURL;
                        return;
                    }
                    var url = "http://" + location.host + "/app/" + data.id
                    $("#new-url").attr("href", url);
                    $("#new-url").html(url);
                    $("#site-manager").attr("href", "/my");
                    $("#create-site").modal("hide");
                    $("#create-site-success").modal("show")
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
      <div>
        <Header></Header>
        <div id="container-iframe">
          <iframe src={"/designer/source/template/"+id}></iframe>

      </div>
      </div>


    );
  }
});
