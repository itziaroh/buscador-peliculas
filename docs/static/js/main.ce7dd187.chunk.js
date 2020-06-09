(this["webpackJsonpbuscador-peliculas"]=this["webpackJsonpbuscador-peliculas"]||[]).push([[0],{38:function(e,t,a){e.exports=a(53)},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=a(8),i=a(15),o=(a(47),a(21)),m=a(22),u=a(24),d=a(23),E=a(25),v=a(13),p=(a(48),a(49),a(17)),b=function(){return r.a.createElement(s.b,{to:"/",className:"button is-warning btn-back"},"Back to Home")},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movie:{}},a.fetchMovie=a.fetchMovie.bind(Object(p.a)(a)),a.goBack=a.goBack.bind(Object(p.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"fetchMovie",value:function(e){var t=this,a=e.id;fetch("https://www.omdbapi.com/?apikey=".concat("590a66a6","&i=").concat(a)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({movie:e})}))}},{key:"goBack",value:function(){window.history.back()}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.fetchMovie({id:e})}},{key:"render",value:function(){var e=this.state.movie,t=e.Title,a=e.Poster,n=e.Actors,c=e.Metascore,l=e.Plot,s=e.Genre,i=e.Runtime,o=e.Director;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h1",{className:"detail_title"},t),r.a.createElement("div",{className:"detail_info"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("div",{className:"detail_info-info"},r.a.createElement("span",{className:"detail_metascore"}," ",r.a.createElement("strong",null,"Score:")," ",c),r.a.createElement("p",{className:"detail_plot"},r.a.createElement("strong",null,"Director:")," ",o),r.a.createElement("p",{className:"detail_plot"},r.a.createElement("strong",null,"Genre:")," ",s),r.a.createElement("p",{className:"detail_plot"},r.a.createElement("strong",null,"Runtime:")," ",i),r.a.createElement("h3",{className:"detail_cast"},r.a.createElement("strong",null,"Cast:")," ",n,"."),r.a.createElement("p",{className:"detail_plot"},r.a.createElement("strong",null,"Plot:")," ",l))))}}]),t}(r.a.Component),h=a(36),O=Object(i.b)(null,(function(e){return{searchMoviesStart:function(t){return e(function(e){return{type:"SEARCH_MOVIE_START",payload:e}}(t))}}}))((function(e){var t=e.searchMoviesStart,a=Object(n.useState)(""),c=Object(h.a)(a,2),l=c[0],s=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-rounded",onChange:function(e){s(e.target.value)},type:"text",placeholder:"Try with Pulp Fiction",value:l})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-warning is-rounded"},"Search"))))})),g=function(e){var t=e.id,a=e.poster,n=e.title,c=e.year;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",null,r.a.createElement("img",{src:a,alt:n}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},n),r.a.createElement("p",{className:"subtitle is-6"},c)),r.a.createElement("div",{className:"media-buttons"},r.a.createElement("button",{className:"button  is-warning is-focused"},"Add to Favs"),r.a.createElement(s.b,{to:"detail/".concat(t)},r.a.createElement("button",{className:"button  is-warning is-focused"},"View detail"))))))},S=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies_list"},t.map((function(e){return r.a.createElement("div",{className:"movies_list-item",key:e.imdbID},r.a.createElement(g,{title:e.Title,year:e.Year,poster:e.Poster,id:e.imdbID}))})))},N=a(32),_=Object(N.a)([function(e){return e.searchMovies}],(function(e){return e.moviesResults})),j=Object(N.a)([_],(function(e){return e.Search})),y=function(){var e=Object(i.c)(j);return r.a.createElement("div",null,r.a.createElement("div",{className:"SearchForm-wrapper"},r.a.createElement(O,null)),e?r.a.createElement(S,{movies:e}):r.a.createElement("small",null,"Search for your favourites movies, series or videogames"))},A=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"404!"),r.a.createElement("h2",{className:"subtitle"},"We couldn't find that page"),r.a.createElement(b,null))},R=function(e){return r.a.createElement("h1",{className:"title"},e.children)},w=function(){return r.a.createElement("nav",{className:"navbar is-warning",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(R,null,"FindFun"),r.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(s.b,{to:"/",className:"navbar-item"},"Home"),r.a.createElement(s.b,{to:"/favs",className:"navbar-item"},"Favs"))))};document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")}))}))}));var C=function(e){e.favs;return r.a.createElement("div",{className:"favs_list"},"LISTA DE FAVORITOS")},M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:y}),r.a.createElement(v.a,{path:"/detail/:id",component:f}),r.a.createElement(v.a,{path:"/favs",component:C}),r.a.createElement(v.a,{component:A})))}}]),t}(r.a.Component),I=(a(51),a(11)),k=a(37),x=a(10),T=a.n(x),F=a(12),H={SEARCH_MOVIE_START:"SEARCH_MOVIE_START",SEARCH_MOVIE_SUCCESS:"SEARCH_MOVIE_SUCCESS",SEARCH_MOVIE_FAILURE:"SEARCH_MOVIE_FAILURE"},V=T.a.mark(D),L=T.a.mark(U),B=T.a.mark(P);function D(e){var t,a,n;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,fetch("https://www.omdbapi.com/?apikey=590a66a6&s=".concat(t));case 4:return a=r.sent,r.next=7,a.json();case 7:return n=r.sent,r.next=10,Object(F.c)({type:"SEARCH_MOVIE_SUCCESS",payload:n});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(F.c)({type:"SEARCH_MOVIE_FAILURE",payload:r.t0});case 16:case"end":return r.stop()}}),V,null,[[0,12]])}function U(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.d)(H.SEARCH_MOVIE_START,D);case 2:case"end":return e.stop()}}),L)}function P(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)([Object(F.b)(U)]);case 2:case"end":return e.stop()}}),B)}var G=T.a.mark(J);function J(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)([Object(F.b)(P)]);case 2:case"end":return e.stop()}}),G)}var q=a(26),W={searchText:"",moviesResults:[],isFetching:!1,errorMessage:void 0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.SEARCH_MOVIE_START:return Object(q.a)({},e,{isFetching:!0,searchText:t.payload});case H.SEARCH_MOVIE_SUCCESS:return Object(q.a)({},e,{moviesResults:t.payload,isFetching:!1,searchText:""});case H.SEARCH_MOVIE_FAILURE:return Object(q.a)({},e,{isFetching:!1,errorMessage:t.payload,searchText:""});default:return e}},z=Object(I.c)({searchMovies:Y}),K=Object(k.a)(),Q=[K];var X=Object(I.e)(z,I.a.apply(void 0,Q));K.run(J),l.a.render(r.a.createElement(i.a,{store:X},r.a.createElement(s.a,null,r.a.createElement(M,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ce7dd187.chunk.js.map