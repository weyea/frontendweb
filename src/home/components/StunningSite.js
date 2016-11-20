
import  "./StunningSite.css"

export default  React.createClass({
    getInitialState:function(){
        return {siteList:[
            {title:"我的化妆工作室", logo:window.rootPath+"img/01.png"},
            {title:"我的化妆工作室", logo:window.rootPath+"img/template_bg_1.png"},
            {title:"我的化妆工作室", logo:window.rootPath+"img/template_bg_2.png"},
            {title:"我的化妆工作室", logo:window.rootPath+"img/template_bg_3.png"},
            {title:"我的化妆工作室", logo:window.rootPath+"img/template_bg_4.png"},
            {title:"我的化妆工作室", logo:window.rootPath+"img/template_bg_5.png"},

            ]};
    },
    componentDidMount: function (){
        var self = this;
        self.flush();
    },
    flush: function (){
        var self = this;
        $.get("/json/app/top?page=0", function (data){
            if (data.needLogin){
                location.href = "/user/login"
                return;
            }
            if(typeof data !=="string"){
                self.setState({siteList:data})
            }
        })
    },
    render:function(){
        return (
            <div id="stunning-site-list">
                <div className="container">
                <h3 className="header">用点线面创建的优秀站点</h3>
                <div className="body">
                    {this.renderItem()}
                </div>
                    </div>

            </div>
        )
    },
    renderItem:function(){
        var result = []
        for(var i=0;i<this.state.siteList.length;i++){
            var site = this.state.siteList[i];
            var item =(
                <div className="list">

                    <div className="bd">
                        <a href={"/app/"+i}><img src={site.logo||window.rootPath+"img/01.png"}/></a>
                    </div>

                    <div className="action" >
                        <h3 className="title">{site.title}</h3>
                        <a className="btn" href={"/app/"+i} data-id={site.id}
                           data-name={site.title}>查看</a>

                    </div>
                </div>
            );


            result.push(item);
        }
        return result;
    }
});
