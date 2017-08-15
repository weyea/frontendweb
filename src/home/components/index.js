var TemplateList= require('../../common/TemplateList');
require('./index.css');
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import TopTen from './TopTen'
import StunningSite from './StunningSite'
import Banner from './Banner'
import Tester from './Tester'
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <Header type="home" active="home"></Header>
         <Banner></Banner>
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




          <TopTen></TopTen>


          <StunningSite></StunningSite>
        <Tester></Tester>

          <Footer></Footer>

      </div>


    );
  }
});
