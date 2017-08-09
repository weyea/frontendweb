import Header from '../../common/Header'
import Footer from '../../common/Footer'
require('./signup.css');
module.exports =   React.createClass({
    getInitialState:function(){
      return {
          codeActive:false,
          phoneError:"",
          passwordError:"",
          repasswordError:"",
          sendState:0,
          stateTime: 30
      }
    },

    checkoutPhone: function(){
        var email = $(this.refs["email"]);

        if(!email.val().trim()){
            this.setState({phoneError:"手机号码不能为空"})
        }
        else if(!/^1[0-9]{10}$/.test(email.val())){
            this.setState({phoneError:"手机号码格式不正确"})
        }
        else{
            this.setState({phoneError:""})
            return true;
        }

    },

    checkoutPassword: function(){
        var password = $(this.refs["password"])

        if(!password.val().trim()){
            this.setState({passwordError:"密码不能为空"})
        }
        else if(!/^\w{8,16}$/.test(password.val())){
            this.setState({passwordError:"密码格式不正确，密码由8-16位的数字/字母/英文符号组成"})
        }
        else{
            this.setState({passwordError:""})
            return true;
        }

    },
    checkoutRepassword: function(){
        var repeatPassword = $(this.refs["repeatPassword"]);
        var password = $(this.refs["password"])

        if(password.val() !== repeatPassword.val()){
            this.setState({repasswordError:"两次输入的密码不相等，请重新输入"})
        }
        else{
            this.setState({repasswordError:""})
            return true;
        }

    },

    checkoutCode: function(){
        var code = $(this.refs["code"]);
        var email = $(this.refs["email"]);
        var value  = this.checkoutPhone();
        if(!value)return

        if(!code.val().trim()){
            this.setState({phoneError:"验证码不能为空"})
        }
        else{

            $.post("/json/user/verfycode/"+email.val().trim(), {code:code}, function(result){
                if(result.success){

                }
                else{
                    this.setState({phoneError:result.message})
                }
            })






        }

    },

  componentDidMount: function() {

      var email = $(this.refs["email"]);
      var username = $(this.refs["username"]);
      var password = $(this.refs["password"])
      var code = $(this.refs["code"])
      var repeatPassword = $(this.refs["repeatPassword"]);
      this._hasErrors = 0;
      var self = this;




      email.on("blur",function(){
         self.checkoutPhone()
      })
      code.on("blur",function(){
          self.checkoutCode()
      })


        password.on("blur",function(){
            self.checkoutPassword()
        })


      repeatPassword.on("blur",function(){
          self.checkoutRepassword()
      })



      email.on("focus",()=>{
          this.setState({codeActive:true})

      })



  },
    valid:function(){
      var self = this;
        self.checkoutPhone()
        self.checkoutPassword()
        self.checkoutRepassword()
        if(self.state.phoneError == "" && self.state.passwordError == "" && self.state.repasswordError == ""){
            return true
        }
    },
    sendCodeBind:function(){
        var code =$(this.refs["code"])


    },
    sendCode:function(target, t, ev){

        ev.preventDefault();
        var self = this;
        var valid = this.checkoutPhone();
        var email = $(this.refs["email"]);
        if(!valid)return;
        $.post("/json/user/sendcode/"+email.val().trim(), function(result){
            if(result.success){
                self.setState({"sendState":1})
                this.state.stateTime = 30
                var time = setInterval(function(){
                    var nowNum = this.state.stateTime;
                    if(nowNum == 0 ){
                        clearInterval(time);
                        self.setState({"sendState":2})
                    }
                    else{
                        self.setState({"sendState":nowNum -1})
                    }

                },1000)
            }
        })

    },
    submitLogin:function(e){
        var self = this;
        var emailValue = $(this.refs["email"]).val();
        var username = $(this.refs["username"]).val();
        var password = $(this.refs["password"]).val();
        var repeatPassword = $(this.refs["repeatPassword"]).val();
        var code = $(this.refs["code"]).val();

        if(!this.valid()){

            return;
        }

        if(password!==repeatPassword){
            password.val("")
            repeatPassword.val("")
            alert("两次输入的密码不相等，请重新输入")
            return;
        }
        $.post("/json/user/signup",{username:username,email:emailValue,password:password, code:code}, (result) =>{
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
                else if(Object.keys(result.errfor).length !== 0){
                    $(this.refs["errors"]).text(result.errfor)
                }

            }
        })
    },

    renderCodeButton:function(){
      if(this.state.sendState == 0){
        return <button className ="code-button">发送验证码</button>
      }
      else if(this.state.sendState == 1){

          return <button className ="code-button">{"验证码已发送 " + this.state.stateTime}</button>
      }
      else if(this.state.sendState == 2){
          return <button className ="code-button active">重新发送</button>
      }

    },

  render: function() {

        var codeActive = this.state.codeActive
      var displayStyle = {display:codeActive?"inline-block":"none"}
    return (
      <div>
         <Header active="my"></Header>
        <div className="container signup-page">

            <div className="signup">
              <div className="form-signin-heading"><img style={{width:"130px"}} src="/img/logo_1.png"/></div>
                <form method="POST">
                    <div className="type">用第三方账号注册</div>
                    <div className="third-logo">
                        <a href="#" className="weibo"></a>
                        <a href="#" className="qq"></a>
                        <a href="#" className="renren"></a>
                        <a href="#" className="tudou"></a>
                    </div>



                    <div className="form-group">
                      <div className="phone-box">
                          <input ref = "email" type="text" pattern = "^1[0-9]{10}$" required className="phone-input" name="email" placeholder="请输入手机号码快速注册"/>
                          <span style={displayStyle} className = "code-active">
                                <input className = "code-input"  ref = "code" type="text" required name="code" placeholder="请输入验证码" />
                                <a  onClick={this.sendCode} className ="code-button">发送验证码</a>
                         </span>
                     </div>
                      <span style={{display:this.state.phoneError?"block":"none"}} className="help-block">{this.state.phoneError}</span>
                    </div>


                    <div className="form-group">
                      <input ref="password" type="password" required pattern="^\w{8,100}$" name="password" placeholder="输入密码(6-16位字母、数字和符号)"   className="form-control"/>
                      <span style={{display:this.state.passwordError?"block":"none"}} className="help-block">{this.state.passwordError}</span>
                    </div>


                    <div className="form-group ">
                      <input ref="repeatPassword" type="password" name="repassword" placeholder="再次输入密码"   className="form-control"/>
                      <span style={{display:this.state.repasswordError?"block":"none"}} className="help-block">{this.state.repasswordError}</span>
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
