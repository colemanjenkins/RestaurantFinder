(this.webpackJsonprestaurant_app=this.webpackJsonprestaurant_app||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),l=(a(32),a(6)),s=a(7),i=a(9),u=a(8),p=(a(33),a(10)),h=a(26);a(14);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/RestaurantFinder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_API_KEY:"AIzaSyCtsU4hkzYAIbx3woGLJ-zekJUWxh9T3Oc"}));var m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).getData=function(){console.log("doing stuff");"https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".concat("AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI","&radius=100000&location=38.0293,-78.4767&type=restaurant");a(14).get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCtsU4hkzYAIbx3woGLJ-zekJUWxh9T3Oc&radius=100000&location=38.0293,-78.4767&type=restaurant").then((function(e){console.log("response received"),console.log(e)})).catch((function(e){console.error(e),console.log(e)}))},o.state={},o}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(p.a.Group,{controlID:"SearchBar"},o.a.createElement(p.a.Label,null,"Restaurant Search Bar"),o.a.createElement(p.a.Control,{type:"textarea",placeholder:"Search for a restaurant"}))),o.a.createElement(h.a,{onClick:this.getData},"Search"))}}]),n}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"List")}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"Map")}}]),a}(n.Component),b=(a(54),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setData=function(e){n.setState({data:e})},n.test=function(){console.log("test")},n.state={data:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{setData:this.setData}),o.a.createElement(d,null),o.a.createElement(O,null),o.a.createElement("button",{onClick:this.test},"TEST"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.41d650cc.chunk.js.map