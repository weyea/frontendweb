var TemplateList= require('../../common/TemplateList');
require('./index.css');
module.exports =  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);

  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <div id="banner">
          <div  className="container">
              <div id="cta-text" className="row">
                      <h1 className="title1">零代码/一站式服务</h1>
                      <h1 className="title2">无障碍自由建站/乐在其中！</h1>
                      <a  className="create" href="/template" >免费创建</a>
              </div>
          </div>

        </div>
        <div className="features">
          <div className="container">
        <div className="row">

          <div className="col-md-4">
          <div className="card more-template">
            <div className="img" >

            </div>
            <h3>海量模板</h3>
            <p>适用于各个行业的时尚大气模板，<br></br>免费注册，一键试用！</p>
          </div>
          </div>
          <div className="col-md-4">
          <div className="card response">
            <div className="img" >

            </div>
            <h3>多终端展示</h3>
            <p>PC端、移动端同步展示，<br></br>一次编辑，轻松实现多终端响应</p>
          </div>
          </div>
          <div className="col-md-4">
          <div className="card ocode">
            <div className="img" >

            </div>
            <h3>0代码编辑</h3>
            <p>简单而高度个性化的编辑器，<br></br>无需代码知识，简单拖拽完成您的网站！</p>
          </div>

          </div>
        </div>
        </div>



        </div>


        <div id="top-template">
          <div className="container">
            <h1>每日精选</h1>
            <div className="slide">
              <a href="#">
                <img src="./img/template.png"/>

              </a>
            </div>
          </div>
        </div>

        <div id="template-list" >
          <div className="container">
          <h3>选择模板</h3>



            <TemplateList></TemplateList>

          </div>
          </div>


      </div>


    );
  }
});
