var TemplateList= require('../../common/TemplateList');
require('./index.css');
import Header from '../../common/Header'
import Footer from '../../common/Footer'
module.exports =  React.createClass({
    getInitialState: function() {
        return {template:[{id:123}]};
    },

    getData: function(){

        $.get('/json/template/top', function(result){
            this.setState({template:result})
        })
    },

    render: function() {
        var site = this.state.template[0]
        return (
            <div id="top-template">
                <div className="container">
                    <h1>每日精选</h1>
                    <div className="slide">
                            <a href={"/template/preview/"+site.id}><img src={site.logo||window.rootPath+"img/template.jpg"}/></a>
                    </div>
                </div>
            </div>
        );
    }
});
