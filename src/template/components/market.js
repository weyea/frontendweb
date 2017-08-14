var TemplateList= require('../../common/TemplateList');

import {  Link } from 'react-router';

import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =  React.createClass({
  getInitialState: function() {
    return {};
  },
  renderTab: function() {
      var type = this.props.params.type
    var result = [];
    var types = [
      {name:"all","title":"全部"},
      {name:"new","title":"最新模板"},
      {name:"hot","title":"热门模板"},
      {name:"company","title":"企业精选"},
      {name:"sale","title":"营销模板"}
    ];

    for(var i=0;i<types.length;i++){
      var className = types[i].name == type ?"active":"";
      var tab = (<Link  activeClassName="active" className={className}  data-type = {types[i].name} to={"/template/market/"+types[i].name}>{types[i].title}</Link>)
      result.push(tab);
    }
    return result;

  },


  render: function() {
    var type = this.props.params.type
    return (
      <div>
        <Header active="market"></Header>
        <div id="template-market">
          <div className="container">
            <div className="template-list">
                    <div ref="tabbar" className="list" >
                      {this.renderTab()}
                    </div>
                <TemplateList type={type}></TemplateList>
            </div>

          </div>
          </div>

          <Footer></Footer>
      </div>


    );
  }
});
