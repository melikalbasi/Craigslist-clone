(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=n(2),o=n(3),u=n(5),m=n(4),s=n(6),p=n(15),f=n.n(p),d={getItems:function(){return console.log("Running API getItems"),f.a.get("http://localhost:3001/api/items")}};var h=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.item.name),r.a.createElement("p",null,e.item.description),r.a.createElement("p",null,e.item.image),r.a.createElement("p",null,e.item.price),r.a.createElement("p",null,e.item.location),r.a.createElement("p",null,e.item.reservetime))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},n.loadItems=function(){d.getItems().then(function(e){return n.setState({items:e.data})}).catch(function(e){return console.log(e)})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.items.map(function(e){return r.a.createElement(h,{item:e})}))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("Rendering App"),r.a.createElement(b,null)}}]),t}(a.Component);l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3dd4b4c0.chunk.js.map