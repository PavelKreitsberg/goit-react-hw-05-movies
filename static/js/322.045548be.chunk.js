"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{254:function(t,e,n){n.d(e,{u:function(){return u}});var r=n(731),i="MovieCard_MovieCard__DStH+",c="MovieCard_cardImage__hecEt",o="MovieCard_rate__lAI3j",a=n(184),u=function(t){var e=t.movie,n=t.state;return(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),state:n,children:(0,a.jsxs)("div",{className:i,children:[(0,a.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w780".concat(e.poster_path):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:e.title,width:"200",loading:"lazy",className:c}),(0,a.jsx)("h2",{children:e.title}),(0,a.jsx)("p",{children:e.release_date}),(0,a.jsx)("p",{className:o,children:e.vote_average.toFixed(1)})]})})}},322:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),i="TrandingGallery_TrandingGallery__jV+EA",c=n(254),o=n(635),a=n(791),u=n(689),s=n(184),h=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],h=e[1],d=(0,u.TH)();return(0,a.useEffect)((function(){(0,o.DC)().then((function(t){return h(t.results)}))}),[]),(0,s.jsx)("div",{className:i,children:n&&n.map((function(t){return(0,s.jsx)("div",{children:(0,s.jsx)(c.u,{movie:t,state:{from:d}})},t.id)}))})},d="Home_Home__+iehd",f=function(){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(h,{})]})}},635:function(t,e,n){n.d(e,{DC:function(){return i},Mc:function(){return o},hC:function(){return a},mv:function(){return c},oJ:function(){return u}});var r="f7ffdce4cad751b792655bd09ea4613c",i=function(){return fetch("https://api.themoviedb.org/3//trending/movie/week?api_key=".concat(r)).then((function(t){return t.json()}))},c=function(t){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(r)).then((function(t){return t.json()}))},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r)).then((function(t){return t.json()}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.json()}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=322.045548be.chunk.js.map