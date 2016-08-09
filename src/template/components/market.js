var TemplateList= require('../../common/TemplateList');
import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <Header active="market"></Header>





        <div id="template-list" >
          <div className="container">
            <TemplateList></TemplateList>

          </div>
          </div>

          <Footer></Footer>
      </div>


    );
  }
});
