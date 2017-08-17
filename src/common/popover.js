

module.exports =  React.createClass({

    getDefaultProps:function(){
        return {
            toggleSelector:"popover"

        }
    },

    getInitialState: function() {
        return {
            show:false
        };
    },

    componentDidMount:function(){
        var self = this;

        $(document).on("click", function(ev){

            var target = $(ev.target);

            if(!target.closest(self.props.toggleSelector).length && !target.closest(".popover").length){
                self.setState({show:false})
            }

        })

        $(document).delegate(this.props.toggleSelector,"click", function(ev){

           self.setState({show:true})
        })
    },
    hide:function(){
        self.setState({show:false})
    },



    render: function() {
        return (
            <div style={{display:this.state.show?"block":"none"}} className="popover bottom share-popover">
                <div className="arrow"></div>
                <h3 className="popover-title">分享</h3>
                <div className="popover-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
