
export default  React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);

  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (

      <footer>
    <div className="btt" ></div>
    <section className="new_footer">
        <div >
            
            <nav className="footer_nav">
                <h3>产品</h3>
                <ul>

                    <li><a target="_blank" href="/template/create">创建新模板</a></li>
                    <li><a target="_blank" href="/template/market">市场</a></li>
                    <li><a target="_blank" href="/user/login">登录</a></li>
                    <li><a target="_blank" href="/user/signup">注册</a></li>
                    <li><a target="_blank" href="/my">我的站点</a></li>

                </ul>
            </nav>
            <nav className="footer_nav">
                <h3>公司</h3>
                <ul>
                    <li><a target="_blank" href="/about/us">关于我们</a></li>
                    <li><a target="_blank" href="/jobs/main">招聘</a></li>
                    <li><a target="_blank" href="/about/privacy">协议</a></li>
                    <li><a target="_blank" href="/about/contact-us">联系我们</a></li>
                </ul>
            </nav>

            <nav className="footer_nav">
                <h3>帮助</h3>
                <ul>
                    <li><a target="_blank" href="/support/html5/">文档</a></li>
                    <li><a target="_blank" href="/user/Wix">视频</a></li>
                </ul>
            </nav>
            <nav className="footer_nav">
                <h3>社区</h3>
                <ul>
                    <li><a target="_blank" href="/blog">微博</a></li>
                    <li><a target="_blank" href="/stories">微信</a></li>

                </ul>
            </nav>

        </div>
    </section>

</footer>


    );
  }
});
