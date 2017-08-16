

import Header from '../../common/BackHeader'
import Footer from '../../common/Footer'
var SiteList = require("./SiteList")
require('./app.css')
require("./SiteList.css")

class TemplateList extends SiteList {
    getDefaultProps() {
        return {
            type:"template"
        }
    }
}

module.exports = TemplateList
