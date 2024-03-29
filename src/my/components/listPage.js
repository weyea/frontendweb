require("./SiteList.css")
var EditableSpan = require("../../common/EditableSpan")
var SharePopover = require("../../common/sharePopover")
var WeixinPop = require("../../common/weixinPop")
module.exports = React.createClass({
    getInitialState: function () {
        return {siteList: []};
    },
    getDefaultProps: function () {
        return {
            type: "app"
        }
    },
    componentDidMount: function () {
        var self = this;
        self.flush();

        $(document).delegate(".edit-title", "change", function (ev) {
            var target = $(ev.target);
            var id = target.attr("data-siteid")
            var newValue = target.val();
            var value = target.attr("data-oldvalue");
            if (value !== newValue) {
                self.changeTitle(id, newValue, value, target)
            }
        })

    },

    del: function (id) {
        window.confirm("确定删除这个站点嘛？")
        var self = this;
        var url = "/json/" + this.props.type + "/" + id
        $.ajax({
            url: url,
            type: "DELETE",
            success: function () {
                self.flush();
            }
        })
    },

    changeTitle: function (id, title, oldValue, callback) {
        var urls = "/json/app/"
        if (this.props.type == "app") {

        }
        else {
            urls = "/json/template/"
        }

        $.post(urls + id, {title: title}, function (result) {
            if (result.success) {

            }
            else {
                alert("更新失败")
                //target.val(oldValue)
            }
            callback && callback(result.success)
        })
    },

    flush: function () {
        var self = this;
        if (debug) {
            self.setState({siteList: [{id: 123, title: "我的新站点", subdomain: {name: 123}}]})
        }
        else {
            $.get("/json/my/" + this.props.type, function (data) {
                if (data.needLogin) {
                    location.href = "/user/login"
                    return;
                }

                if (typeof data !== "string") {
                    self.setState({siteList: data})
                    // var siteList = data;
                    // // for (var i = 0; i < siteList.length; i++) {
                    // //     var app = siteList[i];
                    // //     (function (a) {
                    // //         $.get("/json/app/" + a.id + "/pv/count", function (result) {
                    // //             a.pv = {num: result}
                    // //             self.setState({siteList: siteList})
                    // //         })
                    // //
                    // //     })(app);
                    // // }

                }
            })
        }

    },

    rendBody: function () {
        if (this.state.siteList.length == 0) {
            return this.renderBlank()
        }
        else {
            return this.renderList()
        }

    },

    renderBlank: function () {
        if (this.props.type == "app") {
            return <div className="container blank-tips">
                <div className="tips">您还没有创建网站，去模板市场挑选一个吧！</div>
                <a className="btn btn-green-line " href="/template/market/all">挑选免费模板</a><a
                className="btn btn-green-line" href="/template/market">新建空白站点</a>
            </div>
        }
        else {
            return <div className="container blank-tips">
                <div className="tips">您还没有模板，去创建一个新的吧！</div>
                <a className="btn btn-green-line" href="/template/create">新建模板</a>
            </div>
        }

    },

    showCreateLink: function () {
        if (this.props.type == "template") {
            return <a className="btn btn-green add-site-button large" href="/template/create">创建新模板</a>
        }
        else {
            return <a className="btn btn-green add-site-button large" href="/template/market/all">创建新站点</a>
        }
    },

    renderList: function () {
        return (<div className="site-list-wrap">
            <div className="add-site">
                <div className="container">
                    {this.showCreateLink()}
                </div>
            </div>

            <div className="container">
                <div id="my-site-list">
                    {this.renderItem()}
                </div>
            </div>
        </div>)
    },

    getDomain: function (subdomain) {
        var host = location.host
        if (/^www/.test(host)) {
            host = host.replace(/^www\./,subdomain + ".")
        }

        return host

    },

    renderUrl: function (site) {
        var result;
        if (this.props.type == "app") {
            if (site.isPublish) {
                var url = "//" +this.getDomain(site.subdomain.name)
                result = <p className="url"><a href={url}>{"http:" + url}</a></p>
            }
            else {
                result = <p className="url">没有发布暂无地址</p>
            }
        }
        return result;

    },
    renderAction: function (site) {
        var result = [];
        var self = this;
        if (site.isPublish) {
            var fun = (function (id) {
                return function () {
                    self.unPublish(id)
                }

            })(site.id);
            result.push(<a data-id={site.id} onClick={fun} className="unpublish btn btn-green-border ">下线</a>)
        }
        else {
            // result.push( <a  data-id = {site.id} onClick = {this.publish} className="publish btn btn-green ">发布</a>)
        }
        return result;
    },

    publish: function (e) {
        var target = $(e.target);
        var id = target.attr("data-id");
        $.post("/json/" + this.props.type + "/" + id + "/publish", function (result) {
            if (result.success) {
                alert("发布成功")
            }
            else {
                alert("发布失败")
            }
        })
    },

    unPublish: function (id) {
        var self = this;
        $.post("/json/" + this.props.type + "/" + id + "/unpublish", function (result) {
            if (result.success) {
                alert("下线成功")
                self.flush();
            }
            else {
                alert("下线失败")
            }
        })
    },

    renderBg: function () {

    },
    renderVisitor: function (site) {
        if (this.props.type == "app") {
            return <p className="visitors">过去7天的访问量: <span class="num"> {site.pv && site.pv.num} </span></p>;
        }
    },

    showTips: function (ev) {
        var target = $(ev.target);
        var next = target.next();
        next.show();
    },

    renderItem: function () {
        var self = this;
        var result = []
        for (var i = 0; i < this.state.siteList.length; i++) {
            var site = this.state.siteList[i];
            var fun = (function (id, value) {
                return function (newValue, callback) {
                    self.changeTitle(id, newValue, value, callback)
                }
            })(site.id, site.value);

            var del = (function (id) {
                return function () {
                    self.del(id)
                }
            })(site.id);

            if (this.props.type == "app") {
                if (site.subdomain && site.subdomain.name) {
                    var url = "http://" + site.subdomain.name + ".dotlinkface.com"
                }
                else {
                    var url = "http://dotlinkface.com/app/" + site.id
                }

            }
            else {
                var url = "http://www.dotlinkface.com/preview/template/" + site.id
            }

            var item = (
                <div className="templ">
                    <div className="bd">
                        <a href={url}><img
                            src={site.logo || window.rootPath + "img/template_bg.png"}/></a>
                    </div>
                    <div className="des">
                        <h3 className="title"><EditableSpan ref="edit-title" onChange={fun}
                                                            value={site.title}></EditableSpan>
                            {/*<span  contentEditable="true"  data-siteid = {site.id} data-oldvalue = {site.title}   className="edit-title" type ="text"  placeholder ={site.title}   >{site.title} </span> */}
                            <span className="status">{site.isPublish ? "已发布" : "未发布"}</span></h3>
                        {this.renderUrl(site)}
                        {this.renderVisitor(site)}
                        <div className="action">
                            <a target="_blank" className="edit btn btn-green "
                               href={"/designer/" + this.props.type + "/" + site.id}>编辑</a>
                            {this.renderAction(site)}
                            {/*<a className="data icon">数据</a>*/}
                            <a className={"share-" + site.id + " icon"}>分享</a>
                            <SharePopover url={url} type={this.props.type}
                                          toggleSelector={".share-" + site.id}></SharePopover>
                        </div>
                    </div>
                    <span onClick={del} className="del-icon fa fa-remove"></span>
                </div>
            );


            result.push(item);
        }
        return result;
    },

    render: function () {

        return (
            <div className="site-list">
                {this.rendBody()}
                <WeixinPop></WeixinPop>
            </div>



        );
    }

});
