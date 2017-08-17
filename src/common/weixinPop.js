
require("./weixinPop.css")
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
        window.sharePop = this;

    },

    hide:function(){

    },

    show:function(url){
        $("#qr").html("")
        $("#qr").qrcode({width: 200,height: 200,text: url});
        $(".modal-weinxin-share").modal("show")
    },


    showWeixin:function(url){

    },

    render:function(){
        return (

            <div  className="modal fade modal-weinxin-share" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">微信分享</h4>
                        </div>
                        <div className="modal-body">
                            <div className = "share-body">
                                <div id = "qr"></div>
                                <div>打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈。</div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    },


});
