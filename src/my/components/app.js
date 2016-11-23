import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
import './app.css'

import '../../utils/upload'

module.exports = React.createClass({
    getInitialState: function () {
        return {site:{id:this.props.params.id,title:"站点"}};
    },

    componentDidMount: function (){
        this.getData();
        this.uploadImg();

    },

    uploadImg: function(){


        // Change this to the location of your server-side upload handler:
        var url = "/json/app/"+this.props.params.id+"/bg";
        var $input = $("#fileupload").html5_upload({
            url: url,
            sendBoundary: window.FormData || $.browser.mozilla,
            onStart: function(event, total) {
                return true;
                return confirm("You are trying to upload " + total + " files. Are you sure?");
            },
            fieldName:"file",
            onProgress: function(event, progress, name, number, total) {
                console.log(progress, number);
            },
            setName: function(text) {
                $("#progress_report_name").text(text);
            },
            setStatus: function(text) {
                $("#progress_report_status").text(text);
            },
            setProgress: function(val) {
                $("#progress_report_bar").css('width', Math.ceil(val*100)+"%");
            },
            onFinishOne: function(event, response, name, number, total) {
                //alert(response);
            },
            onError: function(event, name, error) {
                alert('error while uploading file ' + name);
            }
        });

    },

    getData: function(){
        var id = this.props.params.id;
        $.get("/json/app/"+id, (site) => {
            if(debug){

            }
            else{
                this.setState({site:site})
            }

        })
    },

    render: function () {

        var site = window.serverData || {};
        return (
            <div>
                <Header active="my"></Header>
                <div id="app-detail">
                    {this.renderItem()}
                </div>

                <Footer></Footer>
            </div>


        );
    },

    renderItem:function(){
        if(this.state.site||debug){
            var site = this.state.site;
            return (
                <div  className="container">
                    <div className="templ">
                        <div className="bd">
                            <a href={"/my/app/"+site.id}><img src={site.logo||window.rootPath+"img/01.jpg"}/></a>
                        </div>
                        <div className="des">
                            <h3><a href={"/app/"+site.id}>{site.title}</a></h3>
                            <div>
                                <p className="action">
                                    <input id="fileupload" type="file" name="file" />
                                    <a className="" href={"/designer/app/"+site.id}>设计</a>
                                    <span>  |  </span>
                                    <a className="del-site" href={"/app/json/"+site.id}>删除 </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" role="tab" data-toggle="tab">数据</a>
                        </li>
                        <li role="presentation"><a href="#profile" role="tab" data-toggle="tab"></a></li>
                    </ul>


                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">

                            <div></div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="profile">...</div>

                    </div>

                </div>
            )
        }
        else{
            return (<div className="loading">加载中...</div>)
        }
    }

});
