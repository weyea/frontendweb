import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
import './app.css'

import '../../utils/upload'

var App = require("./app")

 class  Template  extends App {
    getDefaultProps() {
        return {
            type:"template"
        }
    }
}

module.exports = Template;

