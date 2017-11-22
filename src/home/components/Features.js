
import  "./Features.css"


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
            <div id="features">
                <div className="container">
                    <h3 className="header">丰富的组件，精美的模板</h3>
                    <p className="desc"><span>海量的组件和模板，就像乐高积木<br/>千变万化的创意，随你搭建！</span></p>
                    <div className="body">
                        <div className="row feat-cont">
                            <div className="col-md-4 feat-cont-list">
                                <div className="feat-data"><span className="num">8</span></div>
                                <dl>
                                <dt>基础组件</dt>
                                <dd>基础组件的精简有助于敏捷操作<br/>文字、图形、图片、音视频...<br/>简简单单的元素,便足以将一个<br/>空白页面搭建的非常丰富和精美</dd>
                                </dl>
                            </div>
                            <div className="col-md-4 feat-cont-list">
                                <div className="feat-data"><span className="num">100</span></div>
                                <dl>
                                <dt>区块模板</dt>
                                <dd>导航、图片、幻灯、列表...<br/>丰富精美的模块<br/>您只需要轻松拖拽几下<br/>属于自己的网站即刻诞生</dd>
                                </dl>
                            </div>
                            <div className="col-md-4 feat-cont-list">
                                <div className="feat-data"><span className="num">10</span></div>
                                <dl>
                                <dt>精品全站模板</dt>
                                <dd>精品打造的全站模板,一键启用<br/>整洁大气，兼具行业特色<br/>引用真实案例做展示<br/>一分钟创建属于您的站点！</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
