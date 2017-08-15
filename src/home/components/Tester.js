
import  "./Tester.css"

export default  React.createClass({
    getInitialState: function() {
        return {template:[{id:123}]};
    },



    componentDidMount: function (){



    },
    sender:function(){
        var value = $("#texter-input").val();
        if(!value){
            alert("手机号码不能为空")
            return;
        }

          $.post("/json/tester",{phone:value},function(){
              alert("申请已经发送")
          },function(){
              alert("发送失败")
          })
    },
    render: function() {

        return (
            <div id="Tester">
                <form className="form-inline">
                    <div className="form-group">

                        <input type="text" className="form-control" id="texter-input" placeholder="请输入手机号码"/>
                    </div>

                    <a onClick={this.sender} className="btn btn-default">发送内测申请</a>
                </form>
            </div>

        )
    },



});
