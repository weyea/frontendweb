var TemplateList = require('../../common/TemplateList');

import {Link} from 'react-router';

import Header from '../../common/Header'
import Footer from '../../common/Footer'

module.exports = React.createClass({
    getInitialState: function () {
        return {
            category: []
        };
    },
    componentDidMount: function () {
        this.getCate();

    },

    componentWillUnmount: function () {


    },
    getCate: function () {
        var self = this;
        if (!this.state.category.length) {
            $.get("/json/category", function (result) {

                var data = []
                for (var i = 0; i < result.length; i++) {
                    data.push({
                        id: result[i].id,
                        title: result[i].title,
                    })
                }
                self.setState({category: data})
                

            })
        }

    },
    renderTab: function () {
        var type = this.props.params.type
        var result = [];
        var types = [
            {name: "all", "title": "全部"},
            {name: "new", "title": "最新模板"},
            {name: "hot", "title": "热门模板"},
        ];

        for (var i = 0; i < types.length; i++) {
            var className = types[i].name == type ? "active" : "";

            var tab = (<Link activeClassName="active" className={className} data-type={types[i].name}
                             to={"/template/market/" + types[i].name}>{types[i].title}</Link>)
            result.push(tab);


        }

        for (var i = 0; i < this.state.category.length; i++) {
            var category = this.state.category[i];
            if (category.id) {
                var className = category.id == type ? "active" : "";
                var tab = (<Link activeClassName="active" className={className} data-type={category.id}
                                 to={"/template/market/" + category.id}>{category.title}</Link>)
                result.push(tab);
            }

        }
        return result;

    },
    showTab: function (e) {
        var target = $(e.target)

        this.setState({tab: target.attr("data-type")})

        this.flush(target.attr("data-type"));
    },


    render: function () {
        var type = this.props.params.type

        return (
            <div>
                <Header active="market"></Header>
                <div id="template-market">
                    <div className="container">
                        <div className="template-list">
                            <div ref="tabbar" className="list">
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
