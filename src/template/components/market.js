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
        <Header></Header>





        <div id="template-list" >
          <div className="container">
          <h3 class="header">选择模板</h3>



            <TemplateList></TemplateList>

          </div>
          </div>

          <Footer></Footer>
      </div>


    );
  }
});
