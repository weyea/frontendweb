

import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
var SiteList = require("./SiteList")
require('./app.css')
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
        if(debug){
            self.setState({siteList:[{id:123,title:"我的新站点"}]})
        }
        else {
            $.get("/json/template/my", function (data){
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
            <div className = "tips">您还没有创建m模板，快去一个吧！</div>
            <a  className = "btn btn-green-line " href="/template/create">创建模板</a>
        </div>
    },

    renderList: function() {
        return <div className="site-list-wrap">
            <div className="add-site">
                <div className="container">
                    <a className="btn btn-green add-site-button" href="/template/create">创建模板</a>
                </div>
            </div>

            <div className="container">
                <div id="my-site-list">
                    {this.renderItem()}
                </div>
            </div>
        </div>
    },

    renderItem:function(){
        var result = []
        for(var i=0;i<this.state.siteList.length;i++){
            var site = this.state.siteList[i];
            var item =(
                <div className="templ">
                    <div className="bd">
                        <a href={"/my/template/"+site.id}><img src={site.logo||window.rootPath+"img/template_bg.png"}/></a>
                    </div>
                    <div className="des">
                        <h3><a href={"/template/"+site.id}>{site.title}</a></h3>
                    </div>
                </div>
            );


            result.push(item);
        }
        return result;
    },

    render: function() {
        return (
        <div className = "my">
            <Header active="my"></Header>
            <div className = "site-list">
                {this.rendBody()}
            </div>
            <Footer></Footer>
        </div>
        );
    }
});
