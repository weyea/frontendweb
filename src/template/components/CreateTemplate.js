import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =   React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0,
        category:[]
    };
  },


  componentDidMount: function() {

      this.getCate();

  },

  componentWillUnmount: function() {


  },

  createTemplate:function(){

    var ids = $("#template-cate").val();

    $.post("/json/template",{title:$("#tempalte-name").val(),category:ids,categories:[ids]}, function(result){
      if(result.needLogin){
        location.href = "/user/login"
        return;
      }
      else{
        alert("创建成功")
      }

    })
  },
    getCate:function(){
      var self = this;
        $.get("/json/category", function(result){
            if(result.needLogin){
                location.href = "/user/login"
                return;
            }
            else{
              var data = []
                for(var i = 0;i<result.length;i++){
                  data.push({
                      id:result[i].id,
                      title:result[i].title,
                  })
                }
                self.setState({category:data})

            }

        })
    },
    renderCate:function () {
      var children = [];
      for(var i = 0;i<this.state.category.length;i++){
        children.push(<option value={this.state.category[i].id}>{this.state.category[i].title}</option>)
      }
      return children;
    },
  render: function() {
    return (
      <div className ="create-template">

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">模板名称</label>
              <input type="text" className="form-control" id="tempalte-name" placeholder=""/>
              <select  id="template-cate" name="cateId">
                  {this.renderCate()}
              </select>
            </div>
            <a  href="#" onClick={this.createTemplate} className="btn btn-default">Submit</a>


      </div>
    );
  }
});
