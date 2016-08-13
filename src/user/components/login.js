import Header from '../../common/Header'
import Footer from '../../common/Footer'
require("./login.css")
module.exports =  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
      $("#submit-login").click(function(){
         var email = $("")
      })
  },
  submitLogin:function(e){
      var self = this;
      var emailValue = $(this.refs["email"]).val();
      var password = $(this.refs["password"]).val();
      $.post("/user/login",{email:emailValue,password:password}, (result) =>{
          if(result.success){
            if(result.defaultReturnUrl){
              location.href = result.defaultReturnUrl;
            }
          }
          else {
            $(this.refs["errors"]).text(result.errors)
          }
      })
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div>
      <Header active="my"></Header>
      <div className="container login-page">
        <div className="login">
          <div className="form-signin">
              <h2 className="form-signin-heading">登录</h2>
              <div ref="errors"></div>
              <input name="email" type="text" ref="email" className="form-control email" placeholder="邮箱/电话" required  />
              <input type="password" name="password" ref="password" className="form-control password" placeholder="密码" required />
              <input type="hidden" name="redirect" value="<%= locals.redirect %>" className="form-control" placeholder="Password" required />

              <div className="forgot"><a href="/user/forgot">忘记密码</a></div>

              <button className="btn" onClick={this.submitLogin} >登录</button>
              <div className="signup"><a href="/user/signup">没有账号，创建一个</a></div>

          </div>
      </div>
      </div>

      <Footer></Footer>
      </div>
    );
  }
});
