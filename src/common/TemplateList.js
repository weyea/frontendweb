
require('./TemplateList.css');

module.exports = React.createClass({
    getInitialState:function(){
      return {siteList:[]};
    },
    componentDidMount: function (){
        var self = this;
        self.flush();
        $(this).delegate(".create", "click", function (ev){
            return;
            ev.preventDefault();
            $.post("/json/site?template=" + $(ev.target).attr("data-id"),{name: $(ev.target).attr("data-name") + new Date().getTime() }, function (data){
                if (data.needLogin){
                    location.href = data.loginURL + "?redirect=" + encodeURIComponent(location.href)
                    return;
                }
                self.flush();
            })
        })
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
        var site = this.state.stateList[i];
        var item =(
          <div class="templ">
              <h3 class="title">{site.name}</h3>
              <p class="bd">
                  <a href={"/template/detail/?id="+id}><img src={"/template_img/"+site.id+"-1024x768.png"}/></a>
              </p>
              <div class="mobile"><a  target="_blank" href={"http://localhost:3000/app/"+site.name}> <img src ={"/template_img/"+site.id+"-480x320.png"}/></a></div>
              <p class="action">
                  价格：<span>免费</span>
                  <a class="btn btn-default create" href={"/template/detail/?id="+id} data-id={site.id}
                     data-name={site.name}>查看</a>

              </p>
          </div>
        );


        result.push(item);
      }
      return result;
    }
})
