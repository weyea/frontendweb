
require('./TemplateList.css');

module.exports = React.createClass({
    getInitialState:function(){
      return {
          tab:"all",
          siteList:[{title:123, id:1}]
      };
    },
    componentDidMount: function (){
        var self = this;
        this.tabbar = $(this.refs["tabbar"])
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
    flush: function (tab){
        var self = this;
        var tab = this.props.type || "all"
        if(tab == "all" || tab == "hot" || tab =="new") {
            $.get("/json/template/"+tab+"?page=0", function (data){
                if (data.needLogin){
                    location.href = "/user/login"
                    return;
                }
                if(typeof data !=="string"){
                    self.setState({siteList:data})
                }



            })
        }

        else {
            $.get("/json/template/bycategory?page=0&&category="+tab, function (data){
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

    showTab:function(e){
        var target = $(e.target)

        this.setState({tab:target.attr("data-type")})

        this.flush(target.attr("data-type"));
    },

    render:function(){
      return (
          <div className="body">
              {this.renderItem()}
          </div>
      )
    },
    renderTab: function() {
        var result = [];
        var types = [
            {name:"all","title":"全部"},
            {name:"new","title":"最新模板"},
            {name:"hot","title":"热门模板"},
            {name:"company","title":"企业精选"},
            {name:"sale","title":"营销模板"}
            ];

        for(var i=0;i<types.length;i++){
            var className = types[i].name == this.state.tab ?"active":"";
            var tab = (<a className={className}  data-type = {types[i].name} href="#">{types[i].title}</a>)
            result.push(tab);
        }
        return result;
    },
    renderItem:function(){
      var result = []
      for(var i=0;i<this.state.siteList.length;i++){
        var site = this.state.siteList[i];
        var item =(
          <div className="templ">

              <div className="bd">
                  <a href={"/template/preview/"+site.id}><img src={site.logo||window.rootPath+"img/01.jpg"}/></a>
              </div>
              <div className="mobile">
                <a  target="_blank" href={"http://localhost:3000/app/"+site.id}>
                  <img src ={"/template_img/"+site.id+"-480x320.png"}/>
                  </a>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="action" >

              <a className="btn btn-default create" href={"/preview/template/"+site.id} data-id={site.id}
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
