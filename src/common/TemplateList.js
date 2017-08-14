
require('./TemplateList.css');

module.exports = React.createClass({
    getInitialState:function(){
      return {
          type:"all",
          siteList:[{title:123, id:1}]
      };
    },
    componentDidMount: function (){

    },
    componentDidUpdate:function(){
        if(this.state.type!==this.props.type){
            this.flush();
        }


    },
    flush: function (tab){
        var self = this;
        var tab = this.props.type
        if(tab == "all" || tab == "new" || tab == "host") {
            $.get("/json/template/"+tab+"?page=0", function (data){
                if (data.needLogin){
                    location.href = "/user/login"
                    return;
                }
                if(typeof data !=="string"){
                    self.setState({siteList:data, type: this.props.type})
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
                    self.setState({siteList:data, type: this.props.type})
                }

            })
        }

    },


    componentWillReceiveProps:function(){


    },

    render:function(){
      return (
          <div className="body">
              {this.renderItem()}
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
