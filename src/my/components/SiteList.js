
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
                        <a className="btn btn-green add-site-button" href="/template/market/all">创建新站点</a>
                    </div>
                </div>

                <div className="container">
                    <div id="my-site-list">
                        {this.renderItem()}
                    </div>
                </div>
        </div>)
    },

    renderUrl:function(site){
        if(site.isPublish){
            <p className="url"><a href={"//"+site.subdomain.name+".dotlinkface.com"}>{"/app/"+site.id}</a></p>
        }
        else{
            <p className="url">没有发布暂无地址</p>
        }
    },
    renderAction:function(site){
        var result = [];
        if(site.isPublish){
           result.push( <a data-id = {site.id} onClick={this.unPublish} className="unpublish btn btn-green ">下线</a>)
        }
        else{
            // result.push( <a  data-id = {site.id} onClick = {this.publish} className="publish btn btn-green ">发布</a>)
        }
    },

    publish:function(e){
        var target = $(e.target);
        var id = target.attr("data-id");
        $.post("/json/app/"+id+"/publish",function(result){
            if(result.success){
                alert("发布成功")
            }
            else{
                alert("发布失败")
            }
        })
    },

    unPublish: function(){
        $.post("/json/app/"+id+"/unpublish",function(result){
            if(result.success){
                alert("发布成功")
            }
            else{
                alert("发布失败")
            }
        })
    },

  renderItem:function(){
    var result = []
    for(var i=0;i<this.state.siteList.length;i++){
      var site = this.state.siteList[i];
      var item =(
        <div className="templ">
            <div className="bd">
                <a  href={"/my/app/"+site.id}><img src={site.logo||window.rootPath+"img/template_bg.png"}/></a>
            </div>

            <div className="des">
                <h3><input   data-siteid = {site.id} data-oldvalue = {site.title}   className="edit-title" type ="text"  placeholder ={site.title}   /> <span className="status">已发布</span></h3>
                {this.renderUrl()}
                <p className="visitors">过去7天的访问量: <span class="num"> {site.pv.num} </span></p>
                <div className="action">
                    <a className="edit btn btn-green ">设计</a>
                    {this.renderAction(site)}
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
