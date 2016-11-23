
require("./SiteList.css")
module.exports =  React.createClass({
  getInitialState:function(){
    return {siteList:[]};
  },
  componentDidMount: function (){
      var self = this;
      self.flush();

  },
  flush: function (){
      var self = this;
      $.get("/json/my/app", function (data){
          if (data.needLogin){
              location.href = "/user/login"
              return;
          }

            if(typeof data !=="string"){
          self.setState({siteList:data})
        }
      })
  },

    rendBody: function() {
        if(this.state.siteList.length){
            return this.renderBlank()
        }
        else{
            return this.renderList()
        }

    },

    renderBlank: function() {
        return <div className = "container">
            <div className = "tips">您还没有创建网站，去模板市场挑选一个吧！</div>
            <a  className = "btn btn-green-line " href="/template">挑选免费模板</a><a  className = "btn btn-green-line" href="/">新建空白站点</a>
        </div>
    },

    renderList: function() {
        return <div>
            <div className="add-site">
                <div className="container">
                    <a className="btn btn-green add-site-button" href="/template/market">创建新站点</a>
                </div>
            </div>

            <div className="container" id="my-container">
                {this.renderItem()}
            </div>
        </div>
    },

  renderItem:function(){
    var result = []
    for(var i=0;i<this.state.siteList.length;i++){
      var site = this.state.siteList[i];
      var item =(
        <div className="templ">
            <p className="bd">
                <a href={"/my/app/"+site.id}><img src={site.logo||window.rootPath+"img/01.jpg"}/></a>
            </p>
            <div className="mobile">
              <a  target="_blank" href={"/my/app/"+site.id}>
                <img src ={"/template_img/"+site.id+"-480x320.png"}/>
              </a>
            </div>
            <div className="des">
                <h3><a href={"/app/"+site.id}>{site.title}</a></h3>
                <div>


                <p className="action"><a className="" href={"/designer/app/"+site.id}>设计</a></p>

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

      </div>


    );
  }
});