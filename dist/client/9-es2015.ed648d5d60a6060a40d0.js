(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EA54:function(t,e,o){"use strict";o.r(e),o.d(e,"MoviesModule",(function(){return l}));var i=o("ofXK"),s=o("PCNd"),c=o("tyNb"),r=o("fXoL"),n=o("tk/3");let v=(()=>{class t{constructor(t){this.http=t}getMovieList(){return this.http.get("/api/movies")}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(n.b))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function b(t,e){if(1&t&&(r.Ub(0,"div",7),r.Ub(1,"a",8),r.Bc(2),r.Tb(),r.Tb()),2&t){const t=e.$implicit;r.Cb(1),r.mc("href","https://movies.insg.xyz/",t,"",r.vc),r.Cb(1),r.Cc(t)}}function u(t,e){1&t&&(r.Ub(0,"div"),r.Bc(1,"No media available."),r.Tb())}const a=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t){this.svc=t}ngOnInit(){this.currentMovie="",this.movieList=[],this.svc.getMovieList().subscribe(t=>{this.movieList=t,this.chooseMovie(t[0])},t=>{this.movieList=[]})}chooseMovie(t){this.currentMovie="https://movies.insg.tk/"+t,console.log(this.currentMovie)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(v))},t.\u0275cmp=r.Ib({type:t,selectors:[["app-movies"]],decls:9,vars:4,consts:[[1,"container","center"],[1,"py-3"],["class","px-3","class","row",4,"ngFor","ngForOf"],[4,"ngIf"],["width","500","preload","none","controls","true"],["type","video/mp4",3,"src"],["type","video/ogg",3,"src"],[1,"row"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(r.Ub(0,"div",0),r.Ub(1,"h2",1),r.Bc(2,"Movie List"),r.Tb(),r.Ac(3,b,3,2,"div",2),r.Ac(4,u,2,0,"div",3),r.Ub(5,"video",4),r.Pb(6,"source",5),r.Pb(7,"source",6),r.Bc(8," Movie format not supported by your browser. "),r.Tb(),r.Tb()),2&t&&(r.Cb(3),r.lc("ngForOf",e.movieList),r.Cb(1),r.lc("ngIf",!e.movieList.length),r.Cb(2),r.lc("src",e.currentMovie,r.vc),r.Cb(1),r.lc("src",e.currentMovie,r.vc))},directives:[i.j,i.k],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(a)],c.e]}),t})(),l=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[i.c,s.a,p]]}),t})()}}]);