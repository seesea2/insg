(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EA54:function(t,o,c){"use strict";c.r(o),c.d(o,"MoviesModule",(function(){return a}));var i=c("ofXK"),e=c("PCNd"),n=c("tyNb"),s=c("fXoL"),r=c("tk/3");let u=(()=>{class t{constructor(t){this.http=t}getMovieList(){return this.http.get("/api/movies")}}return t.\u0275fac=function(o){return new(o||t)(s.Yb(r.b))},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function b(t,o){1&t&&(s.Ub(0,"div"),s.Ac(1,"No media available."),s.Tb())}function v(t,o){if(1&t&&(s.Ub(0,"div",4),s.Ub(1,"video",5),s.Pb(2,"source",6),s.Pb(3,"source",7),s.Ac(4," Your browser does not support the video tag. "),s.Tb(),s.Tb()),2&t){const t=s.gc();s.Cb(2),s.lc("src",t.currentMovie,s.uc),s.Cb(1),s.lc("src",t.currentMovie,s.uc)}}function l(t,o){if(1&t){const t=s.Vb();s.Ub(0,"div",4),s.Ub(1,"button",8),s.cc("click",(function(){s.sc(t);const c=o.$implicit;return s.gc().chooseMovie(c)})),s.Ac(2),s.Tb(),s.Tb()}if(2&t){const t=o.$implicit;s.Cb(2),s.Bc(t)}}const p=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t){this.svc=t}ngOnInit(){this.currentMovie="",this.movieList=[],this.svc.getMovieList().subscribe(t=>{this.movieList=t,this.chooseMovie(t[0])},t=>{this.movieList=[]})}chooseMovie(t){this.currentMovie="https://movies.insg.tk/"+t}}return t.\u0275fac=function(o){return new(o||t)(s.Ob(u))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-movies"]],decls:4,vars:3,consts:[[1,"container","center"],[4,"ngIf"],["class","row",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],["height","300","controls","",1,"p-4","border","col-sm-10","col-md-6"],["type","video/mp4",3,"src"],["type","video/ogg",3,"src"],[1,"col-3",3,"click"]],template:function(t,o){1&t&&(s.Ub(0,"div",0),s.zc(1,b,2,0,"div",1),s.zc(2,v,5,2,"div",2),s.zc(3,l,3,1,"div",3),s.Tb()),2&t&&(s.Cb(1),s.lc("ngIf",!o.movieList.length),s.Cb(1),s.lc("ngIf",o.movieList.length),s.Cb(1),s.lc("ngForOf",o.movieList))},directives:[i.k,i.j],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(o){return new(o||t)},imports:[[n.e.forChild(p)],n.e]}),t})(),a=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(o){return new(o||t)},imports:[[i.c,e.a,f]]}),t})()}}]);