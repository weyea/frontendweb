import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
import './app.css'

import '../../utils/upload'


var DetailPage =require("./detailPage")

module.exports = React.createClass({




    render: function () {
        console.log(DetailPage)

        return (

            <DetailPage id={this.props.params.id} type ="app"></DetailPage>
        );
    },



});
