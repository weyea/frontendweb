
import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
var SiteList = require("./SiteList")
require('./app.css')
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className = "my">
        <Header active="my"></Header>
            <SiteList></SiteList>
        <Footer></Footer>
      </div>


    );
  },


});
