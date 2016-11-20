import Header from '../../common/Header'
import Footer from '../../common/Footer'
 require('./signup.css');
module.exports =   React.createClass({

  componentDidMount: function() {

      var email = $(this.refs["email"]);
      var username = $(this.refs["username"]);
      var password = $(this.refs["password"])
      var repeatPassword = $(this.refs["repeatPassword"]);
      this._hasErrors = 0;
      var self = this;



      username.on("blur",function(){
          if(this.validity.valid){
              $(this.nextElementSibling).addClass('show_pass');
              this.nextElementSibling.innerHTML='用户名格式正确';
              self._hasErrors--;
          }
          else if(this.validity.valueMissing) {
              $(this.nextElementSibling).addClass("show_warn");
              this.nextElementSibling.innerHTML = '用户名不能为空';
              self._hasErrors++;
          }else if(this.validity.patternMismatch){
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='用户名格式非法,用户名由2-12数字或字母组成';
              self._hasErrors++;
          }
      })


        password.on("blur",function(){
            if(this.validity.valid){
              $(this.nextElementSibling).addClass('pc show_pass');
              this.nextElementSibling.innerHTML='密码格式正确';
                self._hasErrors--;
            }else if(this.validity.valueMissing){
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='用户密码不能为空';
                self._hasErrors++;
            }else if(this.validity.patternMismatch){
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='密码格式非法，密码由不少于8位数字/字母/英文符号组成';
                self._hasErrors++;
            }
        })

      repeatPassword.on("blur",function(){
          if(repeatPassword.val() == repeatPassword.val()&&repeatPassword.val()!==""){
              this.nextElementSibling.innerHTML='输入正确';
              self._hasErrors--;
          }else{
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='两次输入的密码不相等，请重新输入';
              self._hasErrors++;
          }
      })



      email.on("blur",function(){
          if(this.validity.valid) {
              $(this.nextElementSibling).addClass('pc show_pass');
              this.nextElementSibling.innerHTML = '邮箱格式正确';
              self._hasErrors--;
          }else if(this.validity.valueMissing){
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='邮箱不能为空';
              self._hasErrors++;
          }else if(this.validity.typeMismatch){
              $(this.nextElementSibling).addClass('pc show_warn');
              this.nextElementSibling.innerHTML='邮箱格式有误';
              self._hasErrors++;
          }
      })




  },
    valid:function(){
        var email = $(this.refs["email"]);
        var username = $(this.refs["username"]);
        var password = $(this.refs["password"])
        var repeatPassword = $(this.refs["repeatPassword"]);
        if(email.validity.valid&&username.validity.valid&&password.validity.valid&&repeatPassword.validity.valid){
            return true
        }
    },
    submitLogin:function(e){
        var self = this;
        var emailValue = $(this.refs["email"]).val();
        var username = $(this.refs["username"]).val();
        var password = $(this.refs["password"]).val();
        var repeatPassword = $(this.refs["repeatPassword"]).val();

        if(!this.valid()){
            alert("请先处理错误")
            return;
        }

        if(password!==repeatPassword){
            password.val("")
            repeatPassword.val("")
            alert("两次输入的密码不相等，请重新输入")
            return;
        }
        $.post("/json/user/signup",{username:username,email:emailValue,password:password}, (result) =>{
            if(result.success){
                if(sessionStorage&&  sessionStorage.getItem("redirect")){
                    var redirect = sessionStorage.getItem("redirect")
                    sessionStorage.removeItem("redirect");
                    location.href = redirect;
                }else  if(result.defaultReturnUrl){
                    location.href = result.defaultReturnUrl;
                }
            }
            else {
                if(result.errors.length){
                    $(this.refs["errors"]).text(result.errors)
                }
                else if(Object.keys(workflow.outcome.errfor).length !== 0){
                    $(this.refs["errors"]).text(result.errfor)
                }

            }
        })
    },

  render: function() {
    return (
      <div>
      <Header active="my"></Header>
        <div className="container signup-page">

            <div className="signup">
              <div className="form-signin-heading">注册</div>
                <form action="/json/user/signup" method="POST">

                    <div className="type">用第三方账号注册</div>
                    <div className="third-logo">
                        <a href="#" className="weibo"></a>
                        <a href="#" className="qq"></a>
                        <a href="#" className="renren"></a>
                        <a href="#" className="tudou"></a>
                    </div>


                    <div className="form-group ">
                      <input ref = "username" type="text" required pattern="^[0-9a-zA-Z]{2,12}$" name="username" placeholder="您希望我们怎么称呼您？" className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="form-group ">
                      <input ref = "email" type="text" required name="email" placeholder="请输入邮箱" className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="form-group ">
                      <input ref="password" type="password" required pattern="^\w{8,100}$" name="password" placeholder="输入密码"   className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div className="form-group ">
                      <input ref="repeatPassword" type="password" name="repassword" placeholder="再次输入密码"   className="form-control"/>
                      <span className="help-block"></span>
                    </div>
                    <div ref="errors" className="alerts"></div>
                    <div className="form-group">
                        <button ref="submit" onClick={this.submitLogin}  className="btn btn-primary btn-signup">注册</button>
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
