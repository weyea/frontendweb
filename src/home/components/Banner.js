
import  "./Banner.css"

export default  React.createClass({
    getInitialState: function() {
        return {template:[{id:123}]};
    },



    componentDidMount: function (){

        $('#carousel-banner-generic').carousel({
            interval: 6000,
            pause:null
        })

    },
    render: function() {
        var l = this.state.template.length
        return (
            <div id="banner">

                <div id="carousel-banner-generic" className="carousel slide" >
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-banner-generic" className="active"  data-slide-to="1"></li>
                        <li data-target="#carousel-banner-generic"  data-slide-to="2"></li>
                        <li data-target="#carousel-banner-generic"  data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="banner banner-1">
                                <div  className="container">
                                    <div className="cta-text row">
                                        <h1 className="title1">零代码/一站式服务</h1>
                                        <h1 className="title2">无障碍自由建站/乐在其中！</h1>
                                        <a  className="create" href="/template/market">免费创建</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="item">
                            <div className="banner banner-2">
                                <div  className="container">
                                    <div className="cta-text row">
                                        <h1 className="title1">众多设计师为您提供</h1>
                                        <h1 className="title2">专业定制化服务</h1>
                                        <a  className="create" href="/template/market">免费创建</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="banner banner-3">
                                <div  className="container">
                                    <div className="cta-text row">
                                        <h1 className="title1">写给设计师：</h1>
                                        <h1 className="title2">强大的编辑器让你发挥无限灵感</h1>
                                        <a  className="create" href="/template/market">免费创建</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <a className="left carousel-control" href="#carousel-banner-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-banner-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>

        );
    },


});
