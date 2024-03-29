
import  "./TopTen.css"

import Ajax from "../../utils/ajax"

export default  React.createClass({
    getInitialState: function() {
        return {
            siteList: [
                {title:"我的化妆工作室", id:1,logo:window.rootPath+"img/01.png"},
                {title:"我的化妆工作室", id:2,logo:window.rootPath+"img/template_bg_1.png"},
                {title:"我的化妆工作室", id:3,logo:window.rootPath+"img/template_bg_2.png"},
                {title:"我的化妆工作室", id:4,logo:window.rootPath+"img/template_bg_3.png"},
                {title:"我的化妆工作室", id:5,logo:window.rootPath+"img/template_bg_4.png"},
                {title:"我的化妆工作室", id:6,logo:window.rootPath+"img/template_bg_5.png"}
            ]
        };
    },

    getData: function(){

        /*Ajax.get('/json/template/top', (result) => {
            if(result){
                this.setState({template:result})
            }

        })*/
    },

    componentDidMount: function (){
        //var self = this;
        //self.getData();
    },
    render: function() {
        var l = this.state.siteList.length
        return (
            <div id="top-template">
                    <h3 className="header">一次设计，多端适配</h3>
                    <p className="header-desc"><span>一次编辑，轻松实现PC端、移动端同步展示，<br/> 市面上不同的显示器、手机屏幕均能无缝兼容</span></p>
                    <div className="slide">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {this.renderIndicators()}
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                {this.renderItem()}

                            </div>

                            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
            </div>
        );
    },

    renderIndicators: function(){
        var sites = this.state.siteList.length;
        var result = [];
        for(var i=0;i<sites.length;i++){
            var temp =  (
                <li data-target="#carousel-example-generic" key = {i} data-slide-to={i}></li>
            )
            result.push(temp)
        }
        return result
    },

    renderItem: function(){
        var sites = this.state.siteList;
        var result = [];

        for(var i=0;i<sites.length;i++){
            var site = sites[i]
            var src =  site.logo||(window.rootPath+"img/template_bg_0.png")
            console.log(src)
            var style = {

                backgroundImage:"url('"+src+"')"
            }
            var className = i==0? "item active":"item"

            var temp =  (
                <div className={className} key = {site.id}>
                    <div className="container">
                        <a href={"/template/preview/"+site.id}><div className="img" style={style}></div></a>
                    </div>
                </div>
            )
            result.push(temp)
        }
        return result
    }
});
