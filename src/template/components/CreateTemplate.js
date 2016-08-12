import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =   React.createClass({
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
    $.post("/template/json",{title:$("#tempalte-name").val()}, function(){
      alert("创建成功")
    })
  },
  render: function() {
    return (
      <div className ="create-template">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">模板名称</label>
              <input type="text" className="form-control" id="tempalte-name" placeholder=""/>
            </div>
            <a  href="#" onClick={this.createTemplate} className="btn btn-default">Submit</a>
        </form>

      </div>
    );
  }
});
