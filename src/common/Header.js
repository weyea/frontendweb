
export default  React.createClass({

  componentDidMount: function() {


  },

  renderLoginInfo:function(){

    if(window.serverData&&window.serverData.user){
      var user = window.serverData.user;
    return (
      <span>
        <i className="fa fa-user-md"></i> 您好！
        <a href="#" className="navbar-link">{user.username}</a>
        <a href="/user/logout" className=""><span className="oi oi-account-logout"></span></a>
      </span>
    )

    }
    else {
      return  <a href="/user/login" className="navbar-link">登录 <span className="oi oi-account-login"></span></a>
    }
  },
  render: function() {
    return (

      <div id="nav" className="navbar" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                          data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">weiye</a>
              </div>


              <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">

                <p className="navbar-text navbar-right">
                  {this.renderLoginInfo()}
                </p>
                  <ul className="nav navbar-nav navbar-right ">
                    <li><a href="/">首页</a></li>
                      <li><a href="/my">我的站点</a></li>
                      <li><a href="/template">模板市场</a></li>
                  </ul>
              </div>
          </div>
      </div>


    );
  }
});
