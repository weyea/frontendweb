
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
      $.get("/my/json/app", function (data){
          if (data.needLogin){
              location.href = "/user/login"
              return;
          }

            if(typeof data !=="string"){
          self.setState({siteList:data})
        }
      })
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
              {this.renderItem()}
      </div>


    );
  }
});
