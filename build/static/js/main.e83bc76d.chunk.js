(this["webpackJsonpvevro.veribot"]=this["webpackJsonpvevro.veribot"]||[]).push([[0],{1191:function(e,t){},1192:function(e,t){},1193:function(e,t){},1357:function(e,t){},1367:function(e,t){},1368:function(e,t){},1369:function(e,t){},1384:function(e,t){},1409:function(e,t,n){},1410:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(126),i=n.n(r),s=n(0),c=n(1),u=n(6),l=n(3),d=n(7),m=n(66),p=n.n(m),v=n(264),h=n(171),f=n.n(h),g={backgroundColor:"transparent",botAvatarBackgroundColor:"transparent",botAvatarImage:"https://res.cloudinary.com/vevro/image/upload/v1570954334/nluksdu1lr4t5f9xfubt.png",userAvatarBackgroundColor:"transparent",userAvatarImage:"https://res.cloudinary.com/vevro/image/upload/v1570953989/r3jn2uymboqtq2dzj2qu.png",bubbleBorderRadius:15,bubbleFromUserBorderRadius:15,hideSendBox:!1,hideUploadButton:!0,sendBoxBackground:"rbga(255,255,255,0.3)",sendBoxTextColor:"black",sendBoxPlaceholderColor:void 0,sendBoxTextWrap:!0},b=(n(1392),o.a.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).store=Object(h.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(a){"DIRECT_LINE/CONNECT_FULFILLED"===a.type&&t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language,userName:n.state.uname}}});a.type;return e(a)}}})),n.state={dtoken:null,uid:null,uname:null,isSet:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentInit",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t,n,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://restobot.azurewebsites.net","/api/init"));case 3:if((t=e.sent).ok){e.next=7;break}e.next=14;break;case 7:return e.next=9,t.json();case 9:n=e.sent,a=localStorage.getItem("fd_Bot_UserId"),o=localStorage.getItem("fd_Bot_UserName"),"undefined"!=typeof a&&null!=a&&32===a.length||(localStorage.setItem("fd_Bot_UserId",n.i),a=n.i),this.setState({dtoken:n.d,uid:a,uname:o,isSet:!0});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.componentInit();case 2:document.addEventListener("keyup",this.escFunction,!1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{id:"bot",className:"col"},this.state.isSet&&o.a.createElement(f.a,{directLine:Object(h.createDirectLine)({token:this.state.dtoken,webSocket:!0}),userID:this.state.uid,username:this.state.uname,styleOptions:g,store:this.store}))}}]),t}(a.Component)),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isMobile:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isMobile?"col-12":"col-8";return(o.a.createElement("div",{className:"row",style:{height:"90%"}},o.a.createElement("div",{style:{width:"100%"}}),o.a.createElement("div",{className:"col-4 portraitHide ",style:{maxHeight:"100%"}},o.a.createElement("div",{className:"row ",style:{maxHeight:"100%"}},o.a.createElement("div",{id:"slider"},o.a.createElement("figure",null,o.a.createElement("img",{src:"https://res.cloudinary.com/vevro/image/upload/v1594867405/RestOBot/ps0fxy14tdioqp6svk28.png"}),o.a.createElement("img",{src:"https://res.cloudinary.com/vevro/image/upload/v1594867405/RestOBot/ugzk2zojwt8ia05xywyw.png"}),o.a.createElement("img",{src:"https://res.cloudinary.com/vevro/image/upload/v1594867404/RestOBot/vnyusgbxru12gnjikugw.png"}),o.a.createElement("img",{src:"https://res.cloudinary.com/vevro/image/upload/v1594867404/RestOBot/l6ptpx6xvmscfwsaz3qb.png"}),o.a.createElement("img",{src:"https://res.cloudinary.com/vevro/image/upload/v1594867403/RestOBot/ztasczqnucncmg8zg4ib.png"}))),o.a.createElement("div",{className:"col-12",style:{position:"relative",width:"100%",textAlign:"center",float:"center"}},o.a.createElement("span",{className:"lovespan "},"Made with ",o.a.createElement("i",{className:"fa fa-heart pulse"})," by ",o.a.createElement("span",{onClick:this.onClickVevro,id:"lvevro",style:{cursor:"pointer"}},"Maleesha Kumarage",o.a.createElement("sup",null,"\xa9"))),o.a.createElement("br",null)))),o.a.createElement("div",{className:e,style:{maxHeight:"100%"}},o.a.createElement(b,null),o.a.createElement("input",{id:"userOutput",style:{maxHeight:"100%",width:"100%",border:"none"},readonly:!0}))))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({isMobile:window.innerWidth<1200})}),!1),window.addEventListener("load",(function(){e.setState({isMobile:window.innerWidth<1200})}),!1)}}]),t}(a.Component);y.displayName=y.name;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(1409),n(302);var w=document.getElementById("root");i.a.render(o.a.createElement(y,null),w),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},268:function(e,t){},269:function(e,t){},537:function(e,t){},539:function(e,t,n){e.exports=n(1410)},646:function(e,t){},648:function(e,t){},683:function(e,t){},684:function(e,t){}},[[539,1,2]]]);