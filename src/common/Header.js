import {  Link } from 'react-router';
export default  React.createClass({

  componentDidMount: function() {


  },

  renderLoginInfo:function(){


    if(window.serverData&&window.serverData.user){
      var user = window.serverData.user;
    return (
      <p className="navbar-text navbar-right login">
        <span >
          <i className="fa fa-user-md"></i><a href="#" className="navbar-Link">{user.username}</a>
          <a href="/user/logout" className=""><span className="oi oi-account-logout"></span></a>
        </span>
    </p>
    )

    }
    else {
      return  <p className="navbar-text navbar-right signup"><span className=""><a href="/user/login" className="navbar-Link">登录</a> <a href="/user/signup" className="navbar-Link">注册</a></span></p>
    }
  },

  renderItem:function(){
    var result = [];
    var items = {
      "home":<Link className="home" to="/">首页</Link>,
      "market":<Link className="market" to="/template/market">模板市场</Link>,
      "my":<Link className="my" to="/my">我的站点</Link>,
      "tru":<Link className="tru" to="/template/market">新手指南</Link>
    }
      var active = this.props.active ||"home"
      for(var p in items){
        if(p == active){
            result.push(<li className="active">{items[p]}</li>)
        }
        else{
          result.push(<li >{items[p]}</li>)
        }
      }
      return result;
  },
  render: function() {

    var active = this.props.active ||"home"
      var className = "navbar"
    if(this.props.type == "home"){
      className = "navbar home"
    }


    return (



      <div id="nav" className={className} role="navigation">
          <div className="container">
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


              <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">


                  {this.renderLoginInfo()}

                  <ul className={"nav navbar-nav navbar-right main "}>
                        {this.renderItem()}
                  </ul>
              </div>
          </div>
      </div>


    );
  }
});
