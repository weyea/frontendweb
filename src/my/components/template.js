import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
import './app.css'

import '../../utils/upload'


var DetailPage =require("./detailPage")
module.exports = React.createClass({


    render: function () {


        return (

            <DetailPage id={this.props.params.id} type ="template"></DetailPage>
        );
    },



});
