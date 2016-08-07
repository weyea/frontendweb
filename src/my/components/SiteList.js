

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
      $.get("/my/app", function (data){
          if (data.needLogin){
              location.href = "/user/login"
              return;
          }


          self.setState({siteList:data})
      })
  },

  renderItem:function(){
    var result = []
    for(var i=0;i<this.state.siteList.length;i++){
      var site = this.state.siteList[i];
      var item =(
        <div className="templ">

            <p className="bd">
                <a href={"/my/app/"+site.id}><img src={window.rootPath+"img/01.jpg"}/></a>
            </p>
            <div className="mobile">
              <a  target="_blank" href={"/my/app/"+site.id}>
                <img src ={"/template_img/"+site.id+"-480x320.png"}/>
                </a>
            </div>
            <div className="des">
                <h3 className="title">{site.title}</h3>
                <div>
                <h3><a href={"/app/"+site.id}>{site.title}</a></h3>

                <p className="action"><a className="" href={"/design/app/"+site.id}>设计</a></p>

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
