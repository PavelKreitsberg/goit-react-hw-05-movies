"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[225],{225:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var c=e(885),r=e(791),o=e(689),i=e(635),a="Cast_castList__RoNna",u=e(184),h=function(){var t=(0,o.UO)().id,n=(0,r.useState)([]),e=(0,c.Z)(n,2),h=e[0],f=e[1];return(0,r.useEffect)((function(){(0,i.hC)(t).then((function(t){return f(t.cast)}))}),[t]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:a,children:h&&h.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:t.name}),(0,u.jsx)("p",{children:t.character}),(0,u.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://image.tmdb.org/t/p/w500/cgoy7t5Ve075naBPcewZrc08qGw.jpg",alt:"poster",width:"100"})]},t.id)}))})})}},635:function(t,n,e){e.d(n,{DC:function(){return r},Mc:function(){return i},hC:function(){return a},mv:function(){return o},oJ:function(){return u}});var c="f7ffdce4cad751b792655bd09ea4613c",r=function(){return fetch("https://api.themoviedb.org/3//trending/movie/week?api_key=".concat(c)).then((function(t){return t.json()}))},o=function(t){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c)).then((function(t){return t.json()}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.json()}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.json()}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=225.fc4d74e1.chunk.js.map