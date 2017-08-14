var TemplateList= require('../../common/TemplateList');

import {  Link } from 'react-router';

import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =  React.createClass({
    getInitialState: function() {
      return {
          category:[]
      };
    },
    componentDidMount: function() {
        this.getCate();
    },

    componentWillUnmount: function() {


    },
    getCate:function(){
        var self = this;
        $.get("/json/category", function(result){
            if(result.needLogin){
                location.href = "/user/login"
                return;
            }
            else{
                var data = []
                for(var i = 0;i<result.length;i++){
                    data.push({
                        id:result[i].id,
                        title:result[i].title,
                    })
                }
                self.setState({category:data})
            }

        })
    },
  renderTab: function() {
      var type = this.props.params.type
    var result = [];
    var types = [
      {name:"all","title":"全部"},
      {name:"new","title":"最新模板"},
      {name:"hot","title":"热门模板"},
    ];

    for(var i=0;i<types.length;i++){
      var className = types[i].name == type ?"active":"";
      if(type == "all"||type == "new"||type=="hot"){
          var tab = (<Link  activeClassName="active" className={className}  data-type = {types[i].name} to={"/template/market/"+types[i].name}>{types[i].title}</Link>)
          result.push(tab);
      }

    }

    for(var i = 0;i< this.state.category.length;i++){
      var category = this.state.category[i];
        var className = category.id == type ?"active":"";
        if(type == "all"||type == "new"||type=="hot"){
            var tab = (<Link  activeClassName="active" className={className}  data-type = {category.title} to={"/template/market/"+category.id}>{category.title}</Link>)
            result.push(tab);
        }
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
