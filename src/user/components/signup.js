
export default  React.createClass({
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
        <div class="container">
            <div class="page-header"><h1>注册</h1></div>
            <div id="signup">
                <form action="/user/signup" method="POST">
                    <div class="alerts"></div>
                    <div class="form-group ">
                      <label>Pick a Username:</label>
                      <input type="text" name="username" value=""  class="form-control"/>
                      <span class="help-block"></span>
                    </div>
                    <div class="form-group ">
                      <label>Enter Your Email:</label>
                      <input type="text" name="email" value="" class="form-control"/>
                      <span class="help-block"></span>
                    </div>
                    <div class="form-group ">
                      <label>Create a Password:</label>
                      <input type="password" name="password" value="" class="form-control"/>
                      <span class="help-block"></span>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-signup">Create My Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
});
