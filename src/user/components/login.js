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
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
      <Header></Header>
      <div className="container login-page">
        <div className="login">
          <form className="form-signin" id="" role="form" action="/user/login" method="POST">
              <h2 className="form-signin-heading">登录</h2>
              <input name="username" type="text" className="form-control" placeholder="用户名" required  />
              <input type="password" name="password" className="form-control" placeholder="密码" required />
              <input type="hidden" name="redirect" value="<%= locals.redirect %>" className="form-control" placeholder="Password" required />

              <div className="forgot"><a href="/user/forgot">忘记密码</a></div>

              <button className="btn" type="submit">登录</button>
              <div className="signup"><a href="/user/signup">没有账号，创建一个</a></div>

          </form>
      </div>
      </div>

      <Footer></Footer>
      </div>
    );
  }
});
