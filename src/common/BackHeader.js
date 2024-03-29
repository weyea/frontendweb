import {  Link } from 'react-router';
var login = require("./login")
require("./BackHeader.css")

export default  React.createClass({
    componentDidMount: function() {

    },
    logout:function(target, t, ev){
        ev.preventDefault();
        var logout = $(this.refs["logout"]);
        var self = this;
        $.get(logout.attr("href"), function(result){
            if(result.success){
                login.logout();
                self.forceUpdate();
            }
            else{
                alert("登出失败")
            }
        })
    },


    renderLoginInfo:function(){

        if(login.isLogin()){
            var user = login.getUser();
            return (
                <p className="navbar-text navbar-right login-status">
                    <span >
                      <i className="fa fa-user-md"></i><a href="#" className="navbar-Link">{user.username}</a>
            <a ref="logout" onClick = {this.logout} href="/json/user/logout" className=""><span className="oi oi-account-logout">登出</span></a>
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
        var user = login.getUser();
        var items = {
            "my":<Link activeClassName="active" className="my" to="/my/app">我的站点</Link>,
            // "favarite":<Link activeClassName="active" className="favarite" to="/my/favarite">我的收藏</Link>,
            "template":<Link activeClassName="active" className="template" to="/my/template">我的模板</Link>,
            "account":<Link activeClassName="active" className="account" to="/my/account">账号中心</Link>,

        }
        var active = this.props.active ||"home"
        var i = 0;
        for(var p in items){
            result.push(<li key = {i++} >{items[p]}</li>)
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
                        <a className="navbar-brand" href="/"><img src={window.rootPath +"img/logo1x.png"}/></a>
                    </div>


                    <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                        {this.renderLoginInfo()}
                        <ul className={"nav navbar-nav navbar-right main-back "}>
                            {this.renderItem()}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
});
