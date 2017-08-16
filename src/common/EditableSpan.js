

module.exports =  React.createClass({
    getDefaultProps:function(){
        return {
            value:"",
            className:""
        }
    },
    getInitialState: function() {
        return {
            contentEditable:false
        };
    },
    compontentDidMount:function(){
        $(document).delegate(".edit-title","change", function(ev){
            var target = $(ev.target);
            var id = target.attr("data-siteid")
            var newValue = target.val();
            var value = target.attr("data-oldvalue");
            if(value !== newValue){
                self.changeTitle(id, newValue, value, target)
            }
        })
    },
    toEditor:function(){
      this.setState({contentEditable:true})

    },

    noEditor:function(){
        this.setState({contentEditable:false})

    },

    change:function(){
        var self = this;
        this.noEditor();
        if(this.props.onChange){
            var value = $(this.refs["target"]).text();
            if(value !== this.props.value){
                this.props.onChange(value, this.props.value, function(success){
                    if(!success){
                        self.setValue({value:this.props.value})
                    }
                    else{
                        self.setValue({value:value })
                    }
                })
            }

        }
    },

    render: function() {

        return (
            <span ref="target"  onMouseEnter={this.toEditor} onBlur = {this.change} onClick = {this.toEditor} contentEditable={this.state.contentEditable}   className={this.props.className +" edit-title"} type ="text"  >{this.props.value}</span>
        );
    }
});
