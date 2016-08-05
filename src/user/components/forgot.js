
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
        <div class="row">
          <div class="col-sm-6">
            <div class="page-header"><h1>Forgot Your Password?</h1></div>
            <div id="forgot">
              <form>
                <div class="alerts"></div>
                <div class="form-group ">
                  <label>Enter Your Email:</label>
                  <input type="text" name="email" value="" class="form-control"/>
                  <span class="help-block"></span>
                </div>
                <div class="form-group">
                  <button type="button" class="btn btn-primary btn-forgot">Send Reset</button>
                  &nbsp;<a href="/login/" class="btn btn-link">Back to Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
