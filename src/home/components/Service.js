
import  "./Service.css"


export default  React.createClass({
    getInitialState: function() {
        return {template:[{id:123}]};
    },

    componentDidMount: function (){
        //var self = this;
        //self.getData();
    },
    render: function() {
        return (
            <div id="service-list">
                <div className="container">
                    <h3 className="header">我们的能力</h3>
                    <p className="desc"><span>点线面平台功能点陈述</span></p>
                    <div className="body">
                        <div className="row serv-cont">
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe63d;</span></div>
                                <dl>
                                <dt>智能布局</dt>
                                <dd>默认划分好页头、页尾及大背景区域,默认页面宽度设置为1200/全屏,也可设置任意值</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe638;</span></div>
                                <dl>
                                <dt>智能对齐</dt>
                                <dd>智能参考线帮助您使组件在页面中快速对齐,同时也帮助组件与组件之间快速对齐</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe639;</span></div>
                                <dl>
                                <dt>拖拽</dt>
                                <dd>灵活拖拽,无需设置任何参数,既可将选中的元素轻松定位到理想的位置</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe63a;</span></div>
                                <dl>
                                <dt>缩放</dt>
                                <dd>选中组件退拽边框即可自由的缩放大小,不受</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe634;</span></div>
                                <dl>
                                <dt>即时编辑</dt>
                                <dd>80%功能可在画布中实时编辑完成,无需移到特定的弹框浮层中进行扣操作</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe63b;</span></div>
                                <dl>
                                <dt>自动保存</dt>
                                <dd>每过5分钟一次自动保存,出现任何意外都不会丢失已编辑好的内容</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe636;</span></div>
                                <dl>
                                <dt>历史版本</dt>
                                <dd>每一次手动保存生成一次历史版本,所有的版本可以随意切换</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe633;</span></div>
                                <dl>
                                <dt>多端适配</dt>
                                <dd>每一次手动保存都生成一次历史版本,所有的版本可以随意切换</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe632;</span></div>
                                <dl>
                                <dt>开源图标库</dt>
                                <dd>保持更新的开源图标库,适应多个场景下对图标的需求,SVG格式,支持任意尺寸展示</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe637;</span></div>
                                <dl>
                                <dt>开源图片库</dt>
                                <dd>点线面为您整理了一套适用于互联网商用项目的图片库,如果没有合适的原创素材,可以使用图片库</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe635;</span></div>
                                <dl>
                                <dt>开源字库</dt>
                                <dd>除了系统默认带版权的字体,点线面还为您整理了免费商用的中英字库,不建议您使用无版权的字体</dd>
                                </dl>
                            </div>
                            <div className="col-md-3 serv-cont-list">
                                <div className="serv-icon"><span className="serv-iconfont">&#xe63c;</span></div>
                                <dl>
                                <dt>主题色换肤</dt>
                                <dd>基于全站的主题色换肤,自由选择或手动定制统一调性的主题色</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
