webpackJsonp([8],{3:function(e,t,a){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(n[l]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},358:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=React.createClass({displayName:"Footer",getInitialState:function(){return{secondsElapsed:0}},tick:function(){this.setState({secondsElapsed:this.state.secondsElapsed+1})},componentDidMount:function(){this.interval=setInterval(this.tick,1e3)},componentWillUnmount:function(){clearInterval(this.interval)},render:function(){return React.createElement("footer",null,React.createElement("div",{className:"btt"}),React.createElement("section",{className:"new_footer"},React.createElement("div",null,React.createElement("nav",{className:"footer_nav"},React.createElement("h3",null,"产品"),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/template/create"},"创建新模板")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/template/market"},"市场")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/user/login"},"登录")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/user/signup"},"注册")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/my"},"我的站点")))),React.createElement("nav",{className:"footer_nav"},React.createElement("h3",null,"公司"),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/about/us"},"关于我们")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/jobs/main"},"招聘")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/about/privacy"},"协议")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/about/contact-us"},"联系我们")))),React.createElement("nav",{className:"footer_nav"},React.createElement("h3",null,"帮助"),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/support/html5/"},"文档")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/user/Wix"},"视频")))),React.createElement("nav",{className:"footer_nav"},React.createElement("h3",null,"社区"),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/blog"},"微博")),React.createElement("li",null,React.createElement("a",{target:"_blank",href:"/stories"},"微信")))))))}})},387:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(139),r=a(365);a(406),t.default=React.createClass({displayName:"BackHeader",componentDidMount:function(){},logout:function(e,t,a){a.preventDefault();var n=$(this.refs.logout),l=this;$.get(n.attr("href"),function(e){e.success?(r.logout(),l.forceUpdate()):alert("登出失败")})},renderLoginInfo:function(){if(r.isLogin()){var e=r.getUser();return React.createElement("p",{className:"navbar-text navbar-right login-status"},React.createElement("span",null,React.createElement("i",{className:"fa fa-user-md"}),React.createElement("a",{href:"#",className:"navbar-Link"},e.username),React.createElement("a",{ref:"logout",onClick:this.logout,href:"/json/user/logout",className:""},React.createElement("span",{className:"oi oi-account-logout"},"登出"))))}return React.createElement("p",{className:"navbar-text navbar-right signup"},React.createElement("span",{className:""},React.createElement("a",{href:"/user/login",className:"navbar-Link"},"登录")," ",React.createElement("a",{href:"/user/signup",className:"navbar-Link"},"注册")))},renderItem:function(){var e=[],t=(r.getUser(),{my:React.createElement(n.Link,{activeClassName:"active",className:"my",to:"/my/app"},"我的站点"),template:React.createElement(n.Link,{activeClassName:"active",className:"template",to:"/my/template"},"我的模板"),account:React.createElement(n.Link,{activeClassName:"active",className:"account",to:"/my/account"},"账号中心")}),a=(this.props.active,0);for(var l in t)e.push(React.createElement("li",{key:a++},t[l]));return e},render:function(){var e=(this.props.active,"navbar");return"home"==this.props.type&&(e="navbar home"),React.createElement("div",{id:"nav",className:e,role:"navigation"},React.createElement("div",{className:"container"},React.createElement("div",{className:"navbar-header"},React.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},React.createElement("span",{className:"sr-only"},"Toggle navigation"),React.createElement("span",{className:"icon-bar"}),React.createElement("span",{className:"icon-bar"}),React.createElement("span",{className:"icon-bar"})),React.createElement("a",{className:"navbar-brand",href:"/"},React.createElement("img",{src:window.rootPath+"img/logo1x.png"}))),React.createElement("div",{className:"collapse navbar-collapse ",id:"bs-example-navbar-collapse-1"},this.renderLoginInfo(),React.createElement("ul",{className:"nav navbar-nav navbar-right main-back "},this.renderItem()))))}})},388:function(e,t,a){var n=a(408);"string"==typeof n&&(n=[[e.i,n,""]]);a(4)(n,{});n.locals&&(e.exports=n.locals)},4:function(e,t){function a(e,t){for(var a=0;a<e.length;a++){var n=e[a],r=u[n.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](n.parts[l]);for(;l<n.parts.length;l++)r.parts.push(o(n.parts[l],t))}else{for(var i=[],l=0;l<n.parts.length;l++)i.push(o(n.parts[l],t));u[n.id]={id:n.id,refs:1,parts:i}}}}function n(e){for(var t=[],a={},n=0;n<e.length;n++){var r=e[n],l=r[0],o=r[1],i=r[2],s=r[3],c={css:o,media:i,sourceMap:s};a[l]?a[l].parts.push(c):t.push(a[l]={id:l,parts:[c]})}return t}function r(){var e=document.createElement("style"),t=p();return e.type="text/css",t.appendChild(e),e}function l(){var e=document.createElement("link"),t=p();return e.rel="stylesheet",t.appendChild(e),e}function o(e,t){var a,n,o;if(t.singleton){var u=h++;a=f||(f=r()),n=i.bind(null,a,u,!1),o=i.bind(null,a,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=l(),n=c.bind(null,a),o=function(){a.parentNode.removeChild(a),a.href&&URL.revokeObjectURL(a.href)}):(a=r(),n=s.bind(null,a),o=function(){a.parentNode.removeChild(a)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function i(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var l=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(l,o[t]):e.appendChild(l)}}function s(e,t){var a=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function c(e,t){var a=t.css,n=(t.media,t.sourceMap);n&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([a],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(r),l&&URL.revokeObjectURL(l)}var u={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},d=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=m(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,h=0;e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=d());var r=n(e);return a(r,t),function(e){for(var l=[],o=0;o<r.length;o++){var i=r[o],s=u[i.id];s.refs--,l.push(s)}if(e){a(n(e),t)}for(var o=0;o<l.length;o++){var s=l[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},406:function(e,t,a){var n=a(407);"string"==typeof n&&(n=[[e.i,n,""]]);a(4)(n,{});n.locals&&(e.exports=n.locals)},407:function(e,t,a){t=e.exports=a(3)(),t.push([e.i,"#nav .main-back {\n    margin-top: 7px;\n}",""])},408:function(e,t,a){t=e.exports=a(3)(),t.push([e.i,"\n#my-container {\n    display: block;\n    position: relative;\n}\n\n\n\n\n.blank-tips{\n    text-align: center;\n    padding: 200px;\n}\n\n\n#app-detail .templ{\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 30px;\n}\n\n#app-detail .templ .bd{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .bd img{\n    width: 324px;\n    height: 234px;\n}\n\n#app-detail .templ .des{\n    flex: 1;\n    margin-left: 30px;\n}",""])},417:function(e,t,a){"use strict";!function(e){e.fn.html5_upload=function(t){function a(e){return e.name||e.fileName}function n(e){return e.size||e.fileSize}function r(r){function l(c){if(c==o)return i.triggerHandler("html5_upload.onFinish",[o]),t.setStatus(t.genStatus(1,!0)),i.attr("disabled",!1),void(t.autoclear&&i.val(""));var u=r[c];if(!i.triggerHandler("html5_upload.onStartOne",[a(u),c,o]))return l(c+1);if(t.setStatus(t.genStatus(0)),t.setName(t.genName(a(u),c,o)),t.setProgress(t.genProgress(0,n(u))),s.upload.onprogress=function(e){i.triggerHandler("html5_upload.onProgress",[e.loaded/e.total,a(u),c,o]),t.setStatus(t.genStatus(e.loaded/e.total)),t.setProgress(t.genProgress(e.loaded,e.total))},s.onload=function(e){s.status>=205||s.status<200?(i.triggerHandler("html5_upload.onError",[a(u),e]),t.stopOnFirstError||l(c+1)):(i.triggerHandler("html5_upload.onFinishOne",[s.responseText,a(u),c,o]),t.setStatus(t.genStatus(1,!0)),t.setProgress(t.genProgress(n(u),n(u))),l(c+1))},s.onabort=function(){i[0].html5_upload.continue_after_abort?l(c+1):(i.attr("disabled",!1),t.autoclear&&i.val(""))},s.onerror=function(e){i.triggerHandler("html5_upload.onError",[a(u),e]),t.stopOnFirstError||l(c+1)},s.open(t.method,"function"==typeof t.url?t.url(c):t.url,!0),e.each(t.headers,function(e,t){if(!1===(t="function"==typeof t?t(u):encodeURIComponent(t)))return!0;s.setRequestHeader(e,t)}),t.sendBoundary)if(window.FormData){var m=new FormData;m.append("function"==typeof t.fieldName?t.fieldName():t.fieldName,u),t.extraFields="function"==typeof t.extraFields?t.extraFields():t.extraFields,e.each(t.extraFields,function(e,t){m.append(e,t)}),s.send(m)}else if(u.getAsBinary){var d="------multipartformboundary"+(new Date).getTime(),p="";p+="--",p+=d,p+="\r\n",p+='Content-Disposition: form-data; name="'+("function"==typeof t.fieldName?t.fieldName():t.fieldName)+'"',fileName=unescape(encodeURIComponent(a(u))),p+='; filename="'+fileName+'"',p+="\r\n",p+="Content-Type: "+u.type,p+="\r\n",p+="\r\n",p+=u.getAsBinary(),p+="\r\n",p+="--",p+=d,p+="--",p+="\r\n",s.setRequestHeader("content-type","multipart/form-data; boundary="+d),s.sendAsBinary(p)}else t.onBrowserIncompatible();else s.send(u)}var o=r.length,i=e(this);if(!i.triggerHandler("html5_upload.onStart",[o]))return!1;this.disabled=!0;var s=this.html5_upload.xhr;return this.html5_upload.continue_after_abort=!0,l(0),!0}var l=["onStart","onStartOne","onProgress","onFinishOne","onFinish","onError"],t=e.extend({onStart:function(e,t){return!0},onStartOne:function(e,t,a,n){return!0},onProgress:function(e,t,a,n,r){},onFinishOne:function(e,t,a,n,r){},onFinish:function(e,t){},onError:function(e,t,a){},onBrowserIncompatible:function(){alert("Sorry, but your browser is incompatible with uploading files using HTML5 (at least, with current preferences.\n Please install the latest version of Firefox, Safari or Chrome")},autostart:!0,autoclear:!0,stopOnFirstError:!1,sendBoundary:!1,fieldName:"user_file[]",extraFields:{},method:"post",STATUSES:{STARTED:"Started",PROGRESS:"Progress",LOADED:"Loaded",FINISHED:"Finished"},headers:{"Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest","X-File-Name":function(e){return encodeURIComponent(a(e))},"X-File-Size":function(e){return n(e)},"X-CSRF-Token":e('meta[name="csrf-token"]').attr("content"),"Content-Type":function(e){return!t.sendBoundary&&"multipart/form-data"}},setName:function(e){},setStatus:function(e){},setProgress:function(e){},genName:function(e,t,a){return e+"("+(t+1)+" of "+a+")"},genStatus:function(e,a){return a?t.STATUSES.FINISHED:0==e?t.STATUSES.STARTED:1==e?t.STATUSES.LOADED:t.STATUSES.PROGRESS},genProgress:function(e,t){return e/t}},t);try{return this.each(function(){var a=this;this.html5_upload={xhr:new XMLHttpRequest,continue_after_abort:!0},t.autostart&&e(this).bind("change",function(e){r.call(e.target,this.files)});var n=this;e.each(l,function(a){t[l[a]]&&e(n).bind("html5_upload."+l[a],t[l[a]])}),e(this).bind("html5_upload.startFromDrop",function(e,t){t.dataTransfer&&t.dataTransfer.files.length&&r.call(a,t.dataTransfer.files)}).bind("html5_upload.start",r).bind("html5_upload.cancelOne",function(){this.html5_upload.xhr.abort()}).bind("html5_upload.cancelAll",function(){this.html5_upload.continue_after_abort=!1,this.html5_upload.xhr.abort()}).bind("html5_upload.destroy",function(){this.html5_upload.continue_after_abort=!1,this.xhr.abort(),delete this.html5_upload,e(this).unbind("html5_upload.*").unbind("change",r)})})}catch(e){return t.onBrowserIncompatible(),!1}}}(jQuery)},469:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(387),l=n(r),o=a(358),i=n(o);a(388),a(417),e.exports=React.createClass({displayName:"exports",getDefaultProps:function(){return{type:"app"}},getInitialState:function(){return{site:{id:this.props.params.id,title:"站点"}}},componentDidMount:function(){this.getData(),this.uploadImg(),this.bindEvent()},uploadImg:function(){var e="/json/"+this.props.type+"/"+this.props.params.id+"/bg";$("#fileupload").html5_upload({url:e,sendBoundary:window.FormData||$.browser.mozilla,onStart:function(e,t){return!0},fieldName:"file",onProgress:function(e,t,a,n,r){console.log(t,n)},setName:function(e){$("#progress_report_name").text(e)},setStatus:function(e){$("#progress_report_status").text(e)},setProgress:function(e){$("#progress_report_bar").css("width",Math.ceil(100*e)+"%")},onFinishOne:function(e,t,a,n,r){console.log(t)},onError:function(e,t,a){alert("error while uploading file "+t)}})},getData:function(){var e=this,t=this.props.params.id;$.get("/json/"+this.props.type+"/"+t,function(t){debug||e.setState({site:t})})},bindEvent:function(){$(".del-site",this.nativeNode).on("click",function(e){e.preventDefault(),window.confirm("确定删除这个站点嘛？");var t=$(e.target).attr("href");$.ajax({url:t,type:"DELETE",success:function(){location.href="/my"}})})},render:function(){window.serverData;return React.createElement("div",null,React.createElement(l.default,{active:"my"}),React.createElement("div",{id:"app-detail"},this.renderItem()),React.createElement(i.default,null))},renderItem:function(){if(this.state.site||debug){var e=this.state.site;return React.createElement("div",{className:"container"},React.createElement("div",{className:"templ"},React.createElement("div",{className:"bd"},React.createElement("a",{href:"/my/"+this.props.type+"/"+e.id},React.createElement("img",{src:e.logo||window.rootPath+"img/template_bg.png"}))),React.createElement("div",{className:"des"},React.createElement("h3",null,React.createElement("a",{href:"/"+this.props.type+"/"+e.id},e.title)),React.createElement("div",null,React.createElement("p",{className:"action"},React.createElement("input",{id:"fileupload",type:"file",name:"file"}),React.createElement("a",{className:"",href:"/designer/"+this.props.type+"/"+e.id},"设计"),React.createElement("span",null,"  |  "),React.createElement("a",{className:"del-site",href:"/json/"+this.props.type+"/"+e.id},"删除 "))))),React.createElement("ul",{className:"nav nav-tabs",role:"tablist"},React.createElement("li",{role:"presentation",className:"active"},React.createElement("a",{href:"#home",role:"tab","data-toggle":"tab"},"数据")),React.createElement("li",{role:"presentation"},React.createElement("a",{href:"#profile",role:"tab","data-toggle":"tab"}))),React.createElement("div",{className:"tab-content"},React.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"home"},React.createElement("div",null)),React.createElement("div",{role:"tabpanel",className:"tab-pane",id:"profile"},"...")))}return React.createElement("div",{className:"loading"},"加载中...")}})},935:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(387),l=(n(r),a(358));n(l);a(388),a(417);var o=a(469);e.exports=React.createClass({displayName:"exports",render:function(){return React.createElement(o,{id:this.props.params.id,type:"template"})}})}});