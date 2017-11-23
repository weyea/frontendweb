var TemplateList= require('../../common/TemplateList');
require('./index.css');
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Advantage from './Advantage'
import TopTen from './TopTen'
import StunningSite from './StunningSite'
import Features from './Features'
import Banner from './Banner'
import Tester from './Tester'
import Service from './Service'
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <Header type="home" active="home"></Header>
         <Banner></Banner>
        <div className="ocode">
          <h3 className="header">零代码，动手即会</h3>
          <p className="header-desc">简洁易用的设置，将建站能力大众化<br/>真正实现零代码</p>
        </div>

        <Advantage></Advantage>
        <TopTen></TopTen>
        <Features></Features>



        <StunningSite></StunningSite>
        <Tester></Tester>
        <Service></Service>

        <Footer></Footer>

      </div>


    );
  }
});
