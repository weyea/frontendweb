
var  Popover = require("./popover");
module.exports =  React.createClass({

    getDefaultProps:function(){
        return {
            toggleSelector:"popover",
            url:""
        }
    },

    getInitialState: function() {
        return {}
    },

    componentDidMount:function(){

    },

    hide:function(){
      this.refs["pop"].hide();
    },

    render: function() {
        return (
            <Popover ref="pop" toggleSelector = {this.props.toggleSelector} >
                <a onClick={this.showShareWeixin} className="weixin">微信</a><a href={"http://service.weibo.com/share/share.php?title=我的新网站上线了&url="+this.props.url+"&source=bookmark#_loginLayer_1502947558461"} className="weibo">微博</a>
            </Popover>
        );
    },
    showShareWeixin:function(){
        console.log("gi")
        if(window.sharePop){
            window.sharePop.show(this.props.url)
        }
    },
    showWeixinShare:function(){
        return (

            <div  className="modal fade modal-weinxin-share" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <div id = "qr"></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
});
