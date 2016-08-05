
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
      <div className="container">
        <form className="form-signin" id="" role="form" action="/user/login" method="POST">
            <h2 className="form-signin-heading">登录</h2>
            <input name="username" type="text" className="form-control" placeholder="用户名" required autofocus />
            <input type="password" name="password" className="form-control" placeholder="密码" required />
            <input type="hidden" name="redirect" value="<%= locals.redirect %>" className="form-control" placeholder="Password" required />
            <label className="checkbox">
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
            <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
        </form>
      </div>
    );
  }
});
