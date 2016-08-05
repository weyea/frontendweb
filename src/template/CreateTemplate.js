
export default  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);

  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  createTemplate:function(){
    $.post("/template",{name:123}, function(){
      alert("创建成功")
    })
  },
  render: function() {
    return (
      <div className ="create-template">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">模板名称</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder=""/>
            </div>
            <button  onClick={this.createTemplate} className="btn btn-default">Submit</button>
        </form>

      </div>
    );
  }
});
