
module.exports =  React.createClass({

  componentDidMount: function() {


  },

  render: function() {
    return (

      <div id="nav" className="navbar" role="navigation">
          <div className="container-fluid">

              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                          data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">点线面</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">



                  <form className="navbar-form navbar-right" role="search">

                      <a data-toggle="modal" data-target="#create-site" href="#" className="btn btn-default  to-create-site">创建站点</a>
                  </form>


                  <ul className="nav navbar-nav ">

                      <li><a href="#" className="viewport-pic"><span className="oi oi-monitor"></span></a></li>
                      <li><a href="#" className="viewport-pad"><span className="oi oi-tablet"></span></a></li>
                      <li><a href="#" className="viewport-mobile"><span className="oi oi-phone"></span></a></li>
                      <li><a href="#" className="viewport-all">100%</a></li>


                  </ul>



                  <div className="modal fade" id="create-site" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                       aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                  <h4 className="modal-title" id="">创建新站点</h4>
                              </div>
                              <div className="modal-body">
                                  <input type="text" className="form-control" id="create-site-name" placeholder="请输入站点名称" />
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                  <button type="button" data-id="<%= id %>" className="cmd-create-site btn btn-primary">创建
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>



                  <div className="modal fade" id="create-site-success" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                       aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                  <h4 className="modal-title" id="">创建成功</h4>
                              </div>
                              <div className="modal-body">
                                  恭喜，您的站点已经创建成功。<a href="#" id="new-url"></a>

                                  <div><a id="site-manager" href="#">管理站点</a></div>

                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>

                              </div>
                          </div>
                      </div>
                  </div>




              </div>

          </div>

      </div>

    );
  }
});
