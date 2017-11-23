
import  "./Advantage.css"


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
            <div id="advantage">
                <div className="container">
                    <h3 className="header">流畅体验,润物无声</h3>
                    <p className="header-desc"><span>极简的背后是我们致力为您所思所想<br/>极简的面前是自然如水的操作体验</span></p>
                    <div className="body">
                        <div className="row adv-cont">
                            <div className="col-md-4 adv-cont-list">
                                <dl>
                                <dt>智能操控</dt>
                                <dd>智能布局</dd>
                                <dd>智能对齐</dd>
                                </dl>
                            </div>
                            <div className="col-md-4 adv-cont-list">
                                <dl>
                                <dt>自然交互</dt>
                                <dd>任意拖拽</dd>
                                <dd>自由缩放</dd>
                                <dd>即时编辑</dd>
                                <dd>所见即所得</dd>
                                </dl>
                            </div>
                            <div className="col-md-4 adv-cont-list">
                                <dl>
                                <dt>历史记录</dt>
                                <dd>自动保存</dd>
                                <dd>版本恢复</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
