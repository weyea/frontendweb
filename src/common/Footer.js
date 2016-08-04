
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
            <div className="left_summery">
                <div className="footer_logo"></div>

                <nav>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/wix"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/fb.png" alt="Wix on Facebook" /></a></li>
                        <li><a target="_blank" href="https://twitter.com/wix"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/twitter.png" alt="Wix on Twitter"/></a></li>
                        <li><a target="_blank" href="https://plus.google.com/+Wix/posts"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/google.png" alt="Wix on Google Plus"/></a></li>
                        <li><a target="_blank" href="http://www.youtube.com/user/Wix"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/youtube.png" alt="Wix on Youtube"/></a></li>
                        <li><a target="_blank" href="http://www.pinterest.com/wixcom/"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/pinterest.png" alt="Wix on Pinterest"/></a></li>
                        <li><a target="_blank" href="http://instagram.com/wix"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/instagram.png" alt="Wix on Instagram"/></a></li>
                        <li><a target="_blank" href="http://www.linkedin.com/company/wix.com"><img src="http://static.parastorage.com/services/html-landing/hp/brazil/images/1920/footer-new/linkedin.png" alt="Wix on Linkedin"/></a></li>
                    </ul>
                </nav>
            </div>
            <nav className="footer_nav">
                <h3>PRODUCT</h3>
                <ul>

                    <li><a target="_blank" href="/template/create">创建新模板</a></li>
                    <li><a target="_blank" href="http://localhost:3000/btemplate/list">基本模板</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/features">Features</a></li>
                    <li><span >My Sites</span></li>
                    <li><a target="_blank" href="http://www.wix.com/upgrade/website">Premium Plans</a></li>
                    <li><a target="_blank" href="http://www.wix.com/ecommerce/website">Online Store</a></li>
                    <li><a target="_blank" href="http://www.wix.com/app-market/main">App Market</a></li>
                    <li><a target="_blank" href="http://www.wix.com/domain/names">Domains</a></li>
                    <li><a target="_blank" href="http://www.wix.com/website/templates/flash/all/1">Flash Templates</a></li>
                    <li><a target="_blank" href="http://www.wix.com/facebook/templates/html/facebook/facebook-welcomer/1">Facebook Templates</a></li>
                    <li><a target="_blank" href="http://dev.wix.com">Developers</a></li>
                </ul>
            </nav>
            <nav className="footer_nav">
                <h3>COMPANY</h3>
                <ul>
                    <li><a target="_blank" href="http://www.wix.com/about/us">About Wix</a></li>
                    <li><a target="_blank" href="http://investors.wix.com">Investor Relations</a></li>
                    <li><a target="_blank" href="http://www.wix.com/jobs/main">Jobs</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/design-assets">Design Assets</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/terms-of-use">Terms of use</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/privacy">Privacy</a></li>
                    <li><a target="_blank" href="http://www.wix.com/upgrade/abuse">Abuse</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/resellers">Resellers</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/affiliates">Affiliates</a></li>
                    <li><a target="_blank" href="http://www.wix.com/about/contact-us">Contact Us</a></li>
                </ul>
            </nav>
            <nav className="footer_nav">
                <h3>COMMUNITY</h3>
                <ul>
                    <li><a target="_blank" href="http://www.wix.com/blog">Wix Blog</a></li>
                    <li><a target="_blank" href="http://www.wix.com/stories">Wix Stories</a></li>
                    <li><a target="_blank" href="http://arena.wix.com/">Wix Arena</a></li>
                    <li><a target="_blank" href="http://www.wix.com/lounge/main">Wix Lounge</a></li>

                    <li><a target="_blank" href="http://www.facebook.com/wix">Facebook</a></li>
                    <li><a target="_blank" href="https://twitter.com/Wix">Twitter</a></li>
                    <li><a target="_blank" href="https://plus.google.com/+Wix/posts">Google+</a></li>
                    <li><a target="_blank" href="http://pinterest.com/wixcom">Pinterest</a></li>
                    <li><a target="_blank" href="https://www.youtube.com/user/Wix">YouTube</a></li>
                </ul>
            </nav>
            <nav className="footer_nav">
                <h3>SUPPORT</h3>
                <ul>
                    <li><a target="_blank" href="http://www.wix.com/support/html5/">Support Center</a></li>
                    <li><a target="_blank" href="https://www.youtube.com/user/Wix">Training Videos</a></li>
                </ul>
            </nav>
        </div>
    </section>

</footer>


    );
  }
});
