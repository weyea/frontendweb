
import Header from '../../common/Header'
import Footer from '../../common/Footer'
var SiteList = require("./SiteList")
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <Header active="my"></Header>
        <div className="container" id="my-container">
            <a className="btn btn-primary add-site" href="/template/market">创建新站点</a>

            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#home" role="tab" data-toggle="tab">我的站点</a></li>
                {/*<li role="presentation"><a href="#profile" role="tab" data-toggle="tab">我的模板</a></li>*/}
            </ul>


            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="home">
                    <SiteList></SiteList>
                </div>
                <div role="tabpanel" className="tab-pane" id="profile">...</div>

            </div>
        </div>

        <Footer></Footer>
      </div>


    );
  }
});
