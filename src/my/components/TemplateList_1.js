

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

    changeTitle:function(id, title){
        $.post("/json/template/"+id,{title: title}, function(result){
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
                        <a href={"/my/template/"+site.id}><img src={site.logo||window.rootPath+"img/template_bg.png"}/></a>
                    </div>
                    <div className="des">
                        <h3><input   data-siteid = {site.id} data-oldvalue = {site.title}   className="edit-title" type ="text"  placeholder ={site.title}   /> <span className="status">已发布</span></h3>
                        {this.renderAction(site)}
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
