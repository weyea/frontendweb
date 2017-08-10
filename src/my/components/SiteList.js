
require("./SiteList.css")
module.exports =  React.createClass({
  getInitialState:function(){
    return {siteList:[]};
  },
  componentDidMount: function (){
      var self = this;
      self.flush();


      $(document).delegate(".edit-title","change", function(ev){
          var target = $(ev.target);
          var id = target.attr("data-siteid")
          var newValue = target.val();
          var value = target.attr("data-oldvalue");
          if(value !== newValue){
              self.changeTitle(id, newValue)
          }
          
      })



  },

    changeTitle:function(id, title){
        $.post("/json/app/"+id,{title: title}, function(result){
            if(result.success){

            }
            else{
                alert("更新失败")
            }
        })
    },
  flush: function (){
      var self = this;
      if(debug){
          self.setState({siteList:[{id:123,title:"我的新站点"}]})
      }
      else {
          $.get("/json/my/app", function (data){
              if (data.needLogin){
                  location.href = "/user/login"
                  return;
              }

              if(typeof data !=="string"){
                  self.setState({siteList:data})
              }
          })
      }

  },

    rendBody: function() {
        if(this.state.siteList.length == 0){
            return this.renderBlank()
        }
        else{
            return this.renderList()
        }

    },

    renderBlank: function() {
        return <div className = "container blank-tips">
            <div className = "tips">您还没有创建网站，去模板市场挑选一个吧！</div>
            <a  className = "btn btn-green-line " href="/template/market">挑选免费模板</a><a  className = "btn btn-green-line" href="/template/market">新建空白站点</a>
        </div>
    },

    renderList: function() {
        return (<div className="site-list-wrap">
                <div className="add-site">
                    <div className="container">
                        <a className="btn btn-green add-site-button" href="/template/market">创建新站点</a>
                    </div>
                </div>

                <div className="container">
                    <div id="my-site-list">
                        {this.renderItem()}
                    </div>
                </div>
        </div>)
    },

  renderItem:function(){
    var result = []
    for(var i=0;i<this.state.siteList.length;i++){
      var site = this.state.siteList[i];
      var item =(
        <div className="templ">

            <div className="bd">
                <a  href={"/my/app/"+site.id}><img src={site.logo||window.rootPath+"img/template_bg.png"}/></a>
            </div

            <div className="des">
                <h3><input  data-siteid = {site.id} data-oldvalue = {site.title} className="edit-title" type ="text"  placeholder ={site.title}   /> <span className="status">已发布</span></h3>
                <p className="url"><a href={"/app/"+site.id}>{"/app/"+site.id}</a></p>
                <p className="visitors">过去7天的访问量: <span class="num"> 100</span></p>
                <div className="action">
                    <a className="edit btn btn-green ">设计</a>
                    <a className="data icon">数据</a>
                    <a className="share icon">分享</a>
                </div>
            </div>

        </div>
      );


      result.push(item);
    }
    return result;
  },

  render: function() {
    return (
      <div className = "site-list">
          {this.rendBody()}
      </div>


    );
  }
});
