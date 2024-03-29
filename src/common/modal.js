

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

    },

    hide:function(){
        self.setState({show:false})
    },

    showPop:function(){

    },



    render: function() {
        return (
            <div class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            {this.props.children}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
