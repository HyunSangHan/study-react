(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(2),c=a.n(i),l=(a(14),a(3)),o=a(4),r=a(6),m=a(5),_=a(7),u=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).clickNum=function(e){return function(){var t,s=a.state.is_overlapped,n=a.state.operator,i=a.state.num_displayed,c=a.state.is_first_num,l=a.state.num_saved,o=a.state.is_float,r=a.state.num_under_point,m=a.state.is_under_first_num,_=a.state.num_pow,u=a.state.shadow;!1===o?!1===n?!0===c?(c=!1,i=e):i=10*i+e:!0===c?(s=!1,"\ubb34\ud55c\ub300"!==i&&(l=i),i=e,c=!1):i=10*i+e:(_+=1,t=Math.pow(.1,_),!1===n?!0===m?(m=!1,i+=r=e*t):i+=r=e*t:!0===m?(m=!1,s=!1,i+=r=e*t):i+=r=e*t),u=!1===n?" ":l+" "+n,a.setState({is_overlapped:s,operator:n,num_displayed:i,is_first_num:c,num_saved:l,is_float:o,num_under_point:r,is_under_first_num:m,num_pow:_,shadow:u})}},a.refreshValue=function(){return function(){a.setState({operator:!1,is_overlapped:!1,is_first_num:!0,num_saved:0,num_displayed:0,is_float:!1,num_under_point:0,is_under_first_num:!0,num_pow:0,shadow:" "})}},a.clickOper=function(e){return function(){var t=a.state.is_overlapped,s=a.state.operator,n=a.state.num_saved,i=a.state.num_displayed,c=(a.state.is_first_num,a.state.is_float),l=a.state.num_pow,o=a.state.num_under_point,r=a.state.shadow;!1===t&&(r=" ","+"===s?i=n+=i:"-"===s?i=n-=i:"*"===s?i=n*=i:"/"===s&&(0===i?(r=n+" "+s,i="\ubb34\ud55c\ub300"):i=n/=i)),t=!0,"="!==e&&(s=e,c=!1,l=0,o=0),a.setState({is_overlapped:t,operator:s,num_saved:n,num_displayed:i,is_first_num:!0,is_float:c,num_pow:l,num_under_point:o,shadow:r})}},a.clickPoint=function(){return function(){a.state.is_float;a.setState({is_float:!0})}},a.state={operator:!1,is_overlapped:!1,is_first_num:!0,is_float:!1,num_saved:0,num_displayed:0,num_under_point:0,is_under_first_num:!0,num_pow:0,shadow:" "},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"same"},n.a.createElement("div",{className:"typingtool"},n.a.createElement("div",{className:"flex_typingtool"},n.a.createElement("div",{className:"shadow_typing"},this.state.shadow),n.a.createElement("div",{className:"typing"},this.state.num_displayed))),n.a.createElement("div",{className:"caltool"},n.a.createElement("div",{className:"flex_cartool"},n.a.createElement("div",{onClick:this.refreshValue(),className:"first_three"},"AC"),n.a.createElement("div",{onClick:this.clickOper("/"),className:"first_one"},"/")),n.a.createElement("div",{className:"flex_cartool"},n.a.createElement("div",{onClick:this.clickNum(7),className:"rest_one"},"7"),n.a.createElement("div",{onClick:this.clickNum(8),className:"rest_one"},"8"),n.a.createElement("div",{onClick:this.clickNum(9),className:"rest_one"},"9"),n.a.createElement("div",{onClick:this.clickOper("*"),className:"rest_one"},"*")),n.a.createElement("div",{className:"flex_cartool"},n.a.createElement("div",{onClick:this.clickNum(4),className:"rest_one"},"4"),n.a.createElement("div",{onClick:this.clickNum(5),className:"rest_one"},"5"),n.a.createElement("div",{onClick:this.clickNum(6),className:"rest_one"},"6"),n.a.createElement("div",{onClick:this.clickOper("-"),className:"rest_one"},"-")),n.a.createElement("div",{className:"flex_cartool"},n.a.createElement("div",{onClick:this.clickNum(1),className:"rest_one"},"1"),n.a.createElement("div",{onClick:this.clickNum(2),className:"rest_one"},"2"),n.a.createElement("div",{onClick:this.clickNum(3),className:"rest_one"},"3"),n.a.createElement("div",{onClick:this.clickOper("+"),className:"rest_one"},"+")),n.a.createElement("div",{className:"flex_cartool"},n.a.createElement("div",{onClick:this.clickNum(0),className:"rest_two"},"0"),n.a.createElement("div",{onClick:this.clickPoint(),className:"rest_one"},"."),n.a.createElement("div",{onClick:this.clickOper("="),className:"rest_one"},"=")))))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.12662780.chunk.js.map