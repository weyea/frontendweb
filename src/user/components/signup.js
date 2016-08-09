import Header from '../../common/Header'
import Footer from '../../common/Footer'
 require('./signup.css');
module.exports =   React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div>
      <Header active="my"></Header>
        <div className="container signup-page">

            <div className="signup">
              <div className="form-signin-heading">注册</div>
                <form action="/user/signup" method="POST">

                    <div className="type">用第三方账号注册</div>
                    <div className="third-logo">
                        <a href="#" className="weibo"></a>
                        <a href="#" className="qq"></a>
                        <a href="#" className="renren"></a>
                        <a href="#" className="tudou"></a>
                    </div>


                    <div className="form-group ">
                      <input type="text" name="username" value="" placeholder="请输入邮箱/手机号码快速注册" className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="form-group ">
                      <input type="password" name="password" placeholder="输入密码"  value="" className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="form-group ">
                      <input type="password" name="password" placeholder="再次输入密码"  value="" className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="alerts"></div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-signup">注册</button>
                    </div>
                      <div className="login"><a href="/user/login">已有账号，直接登录</a></div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
  }
});
