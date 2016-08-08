
require('./TemplateList.css');

module.exports = React.createClass({
    getInitialState:function(){
      return {siteList:[{title:123}]};
    },
    componentDidMount: function (){
        var self = this;
        self.flush();
        // $(this).delegate(".create", "click", function (ev){
        //     return;
        //     ev.preventDefault();
        //     $.post("/json/site?template=" + $(ev.target).attr("data-id"),{name: $(ev.target).attr("data-name") + new Date().getTime() }, function (data){
        //         if (data.needLogin){
        //             location.href = data.loginURL + "?redirect=" + encodeURIComponent(location.href)
        //             return;
        //         }
        //         self.flush();
        //     })
        // })
    },
    flush: function (){
        var self = this;
        $.get("/template/json/?page=0", function (data){
            if (data.needLogin){
                location.href = "/user/login"
                return;
            }


            self.setState({siteList:data})
        })
    },
    render:function(){
      return (
        <div className="template-list">
            <div className="list">
              <a className="active" href="#">全部</a>
              <a className="" href="#">最新模板</a>
              <a className="" href="#">热门模板</a>
              <a className="" href="#">企业精选</a>
              <a className="" href="#">单页模板</a>
              <a className="" href="#">营销模板</a>

            </div>
            <div className="body">
              {this.renderItem()}
            </div>

        </div>
      )
    },
    renderItem:function(){
      var result = []
      for(var i=0;i<this.state.siteList.length;i++){
        var site = this.state.siteList[i];
        var item =(
          <div className="templ">

              <div className="bd">
                  <a href={"/template/preview/"+site.id}><img src={window.rootPath+"img/01.jpg"}/></a>
              </div>
              <div className="mobile">
                <a  target="_blank" href={"http://localhost:3000/app/"+site.id}>
                  <img src ={"/template_img/"+site.id+"-480x320.png"}/>
                  </a>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="action" >

              <a className="btn btn-default create" href={"/template/preview/"+site.id} data-id={site.id}
                 data-name={site.title}>预览</a>
                  {/*价格：<span>免费</span>*/}


              <div className="more-action">
                  <a href="#" className="icon"></a>
                  <a href="#" className="icon"></a>
                  <a href="#" className="icon"></a>
                  <a href="#" className="icon"></a>
              </div>


              </div>
          </div>
        );


        result.push(item);
      }
      return result;
    }
})
