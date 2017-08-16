
import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
var TemplateList = require("./TemplateList")
require('./app.css')
module.exports =  React.createClass({
    getInitialState: function() {
        return {};
    },

    render: function() {

        return (
            <div className = "my">
                <Header active="my"></Header>
                <TemplateList></TemplateList>
                <Footer></Footer>
            </div>


        );
    },


});
