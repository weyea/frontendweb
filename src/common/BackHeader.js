import {  Link } from 'react-router';
var login = require("./login")
require("./BackHeader.css")

export default  React.createClass({
    componentDidMount: function() {

    },

    renderLoginInfo:function(){

        if(login.isLogin()){
            var user = login.getUser();
            return (
                <p className="navbar-text navbar-right login-status">
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
            "my":<Link className="home" to="/my">我的站点</Link>,
            "favarite":<Link className="market" to="/my/favarite">我的收藏</Link>,
            "account":<Link className="my" to="/my/account">账号中心</Link>,
        }
        var active = this.props.active ||"home"
        var i = 0;
        for(var p in items){
            if(p == active){
                result.push(<li key={i++} className="active">{items[p]}</li>)
            }
            else{
                result.push(<li key = {i++} >{items[p]}</li>)
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
