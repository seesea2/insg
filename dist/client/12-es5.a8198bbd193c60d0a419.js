(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7n+g":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),i=t("t/Na"),a=function(){function l(l){this.httpClient=l}return l.prototype.getOxfordDefinition=function(l){return this.httpClient.get("/api/dictionary/oxford/"+l)},l.ngInjectableDef=u.Pb({factory:function(){return new l(u.Tb(i.c))},token:l,providedIn:"root"}),l}(),r=function(){function l(l){this.dictionaryService=l}return l.prototype.ngOnInit=function(){this.checkEntriesResult={lexicalEntries:[]},this.errMsg="",this.bChecking=!1},l.prototype.getOxfordDefinition=function(l){var n=this;if(!(l||"").trim())return this.errMsg="Please input a word.";this.bChecking=!0,this.dictionaryService.getOxfordDefinition(l.trim().toLowerCase()).subscribe(function(l){n.checkEntriesResult=l,n.errMsg="",n.bChecking=!1},function(l){n.checkEntriesResult={lexicalEntries:[]},n.errMsg=l,n.bChecking=!1})},l.prototype.playAudio=function(l){var n=new Audio;n.src=l,n.load(),n.play()},l}(),c=function(){return function(){}}(),e=t("9AJC"),b=t("yWMr"),o=t("t68o"),d=t("zbXB"),s=t("NcP4"),m=t("xYTU"),p=t("pMnS"),C=t("NvT6"),f=t("Blfk"),g=t("dWZg"),h=t("Ip0R"),x=t("wFw1"),v=t("seP3"),k=t("lzlj"),y=t("FVSy"),w=u.sb({encapsulation:0,styles:[[""]],data:{}});function j(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,C.b,C.a)),u.tb(2,49152,null,0,f.d,[u.k,g.a,[2,h.d],[2,x.a],f.a],null,null)],null,function(l,n){l(n,1,0,u.Eb(n,2)._noopAnimations,u.Eb(n,2).diameter,u.Eb(n,2).diameter)})}function O(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.Lb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function E(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Lb(2,null,["",""])),(l()(),u.Lb(-1,null,[" ["])),(l()(),u.ub(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Lb(5,null,["",""])),(l()(),u.Lb(-1,null,["] "])),(l()(),u.ub(7,0,null,null,0,"i",[["class","fa fa-play"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.playAudio(null==l.context.$implicit?null:null==l.context.$implicit.pronunciations[0]?null:l.context.$implicit.pronunciations[0].audioFile)&&u),u},null,null)),(l()(),u.ub(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,O)),u.tb(10,278528,null,0,h.k,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.context.$implicit.entries)},function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.lexicalCategory),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.pronunciations[0].phoneticSpelling)})}function R(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Lb(-1,null,["Definitions:"])),(l()(),u.jb(16777216,null,null,1,null,E)),u.tb(4,278528,null,0,h.k,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.checkEntriesResult.lexicalEntries)},null)}function N(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.tb(1,16384,null,0,v.b,[],null,null),(l()(),u.Lb(2,null,["",""]))],null,function(l,n){var t=n.component;l(n,0,0,u.Eb(n,1).id),l(n,2,0,t.errMsg)})}function I(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,R)),u.tb(2,16384,null,0,h.l,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,N)),u.tb(4,16384,null,0,h.l,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,(null==t.checkEntriesResult.lexicalEntries?null:t.checkEntriesResult.lexicalEntries.length)>0),l(n,4,0,t.errMsg)},null)}function F(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,18,"div",[["class","bg-light"]],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,17,"section",[["class","container py-4 "]],null,null,null,null,null)),(l()(),u.ub(2,0,null,null,16,"mat-card",[["class","mat-card"]],null,null,null,k.b,k.a)),u.tb(3,49152,null,0,y.a,[],null,null),(l()(),u.ub(4,0,null,0,3,"mat-card-title",[["class","mt-3 mb-4 mat-card-title"]],null,null,null,null,null)),u.tb(5,16384,null,0,y.h,[],null,null),(l()(),u.ub(6,0,null,null,1,"div",[["class","col-sm-12 col-md-4"]],null,null,null,null,null)),(l()(),u.ub(7,0,null,null,0,"img",[["class","w-100"],["src","/assets/oxford/PBO_blue-10359bc2ad64e89d.png"]],null,null,null,null,null)),(l()(),u.ub(8,0,null,0,10,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.tb(9,16384,null,0,y.c,[],null,null),(l()(),u.ub(10,0,null,null,4,"div",[["class","col-sm-12 col-md-4 mb-4"]],null,null,null,null,null)),(l()(),u.ub(11,0,null,null,3,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u.ub(12,0,[["oxfordInput",1]],null,0,"input",[["class","form-control"],["placeholder","word to check"],["type","text"]],null,[[null,"keyup.enter"]],function(l,n,t){var i=!0;return"keyup.enter"===n&&(i=!1!==l.component.getOxfordDefinition(u.Eb(l,12).value)&&i),i},null,null)),(l()(),u.ub(13,0,null,null,1,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),u.ub(14,0,null,null,0,"button",[["class","btn btn-primary fa fa-search"],["type","button"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.getOxfordDefinition(u.Eb(l,12).value)&&i),i},null,null)),(l()(),u.jb(16777216,null,null,1,null,j)),u.tb(16,16384,null,0,h.l,[u.R,u.O],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,I)),u.tb(18,16384,null,0,h.l,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,16,0,t.bChecking),l(n,18,0,!t.bChecking)},null)}function z(l){return u.Nb(0,[(l()(),u.ub(0,0,null,null,1,"app-oxford",[],null,null,null,F,w)),u.tb(1,114688,null,0,r,[a],null,null)],function(l,n){l(n,1,0)},null)}var D=u.qb("app-oxford",r,z,{},{},[]),L=t("gIcY"),M=t("4GxJ"),S=t("lLAP"),q=t("OBdK"),A=t("eDkP"),B=t("Fzqc"),$=t("4tE/"),P=t("M2Lx"),Y=t("Wf4p"),K=t("wmQ5"),W=t("o3x0"),Q=t("jQLj"),T=t("mVsa"),Z=t("uGex"),G=t("v9Dh"),J=t("ZYjt"),V=t("4epT"),X=t("OkvK"),_=t("jmvC"),H=t("QRvN"),U=t("y4qS"),ll=t("4c35"),nl=t("qAlS"),tl=t("6Wmm"),ul=t("BgWK"),il=t("UodH"),al=t("u7R8"),rl=t("de3e"),cl=t("/dO6"),el=t("Lwpp"),bl=t("SMsm"),ol=t("LC5p"),dl=t("YhbO"),sl=t("jlZm"),ml=t("r43C"),pl=t("/VYK"),Cl=t("b716"),fl=t("0/Q6"),gl=t("Z+uX"),hl=t("9It4"),xl=t("Nsh5"),vl=t("w+lc"),kl=t("kWGw"),yl=t("vARd"),wl=t("BHnd"),jl=t("La40"),Ol=t("8mMr"),El=t("J12g"),Rl=t("5dmV"),Nl=t("PCNd"),Il=t("ZYCi"),Fl=t("YSh2");t.d(n,"DictionaryModuleNgFactory",function(){return zl});var zl=u.rb(c,[],function(l){return u.Bb([u.Cb(512,u.j,u.eb,[[8,[e.a,e.b,e.h,e.i,e.e,e.f,e.g,b.a,o.a,d.b,d.a,s.a,m.a,m.b,p.a,D]],[3,u.j],u.z]),u.Cb(4608,h.n,h.m,[u.w,[2,h.E]]),u.Cb(4608,L.x,L.x,[]),u.Cb(4608,i.j,i.p,[h.d,u.D,i.n]),u.Cb(4608,i.q,i.q,[i.j,i.o]),u.Cb(5120,i.a,function(l){return[l]},[i.q]),u.Cb(4608,i.m,i.m,[]),u.Cb(6144,i.k,null,[i.m]),u.Cb(4608,i.i,i.i,[i.k]),u.Cb(6144,i.b,null,[i.i]),u.Cb(4608,i.f,i.l,[i.b,u.s]),u.Cb(4608,i.c,i.c,[i.f]),u.Cb(4608,L.e,L.e,[]),u.Cb(4608,M.t,M.t,[u.j,u.s,M.fb,M.u]),u.Cb(135680,S.h,S.h,[u.B,g.a]),u.Cb(4608,q.f,q.f,[u.O]),u.Cb(4608,A.c,A.c,[A.i,A.e,u.j,A.h,A.f,u.s,u.B,h.d,B.b,[2,h.h]]),u.Cb(5120,A.j,A.k,[A.c]),u.Cb(5120,$.a,$.b,[A.c]),u.Cb(4608,P.c,P.c,[]),u.Cb(4608,Y.d,Y.d,[]),u.Cb(5120,K.h,K.a,[[3,K.h]]),u.Cb(5120,W.b,W.c,[A.c]),u.Cb(135680,W.d,W.d,[A.c,u.s,[2,h.h],[2,W.a],W.b,[3,W.d],A.e]),u.Cb(4608,Q.h,Q.h,[]),u.Cb(5120,Q.a,Q.b,[A.c]),u.Cb(5120,T.a,T.d,[A.c]),u.Cb(4608,Y.c,Y.z,[[2,Y.h],g.a]),u.Cb(5120,Z.a,Z.b,[A.c]),u.Cb(5120,G.b,G.c,[A.c]),u.Cb(4608,J.e,Y.e,[[2,Y.i],[2,Y.n]]),u.Cb(5120,V.b,V.a,[[3,V.b]]),u.Cb(5120,X.b,X.a,[[3,X.b]]),u.Cb(4608,_.a,_.a,[h.d,u.D]),u.Cb(1073742336,h.c,h.c,[]),u.Cb(1073742336,L.w,L.w,[]),u.Cb(1073742336,L.j,L.j,[]),u.Cb(1073742336,i.e,i.e,[]),u.Cb(1073742336,i.d,i.d,[]),u.Cb(1073742336,L.t,L.t,[]),u.Cb(1073742336,M.c,M.c,[]),u.Cb(1073742336,M.f,M.f,[]),u.Cb(1073742336,M.g,M.g,[]),u.Cb(1073742336,M.k,M.k,[]),u.Cb(1073742336,M.l,M.l,[]),u.Cb(1073742336,M.q,M.q,[]),u.Cb(1073742336,M.r,M.r,[]),u.Cb(1073742336,M.v,M.v,[]),u.Cb(1073742336,M.z,M.z,[]),u.Cb(1073742336,M.C,M.C,[]),u.Cb(1073742336,M.F,M.F,[]),u.Cb(1073742336,M.I,M.I,[]),u.Cb(1073742336,M.M,M.M,[]),u.Cb(1073742336,M.Q,M.Q,[]),u.Cb(1073742336,M.R,M.R,[]),u.Cb(1073742336,M.S,M.S,[]),u.Cb(1073742336,M.w,M.w,[]),u.Cb(1073742336,H.a,H.a,[]),u.Cb(1073742336,U.p,U.p,[]),u.Cb(1073742336,q.d,q.d,[]),u.Cb(1073742336,B.a,B.a,[]),u.Cb(1073742336,Y.n,Y.n,[[2,Y.f],[2,J.f]]),u.Cb(1073742336,g.b,g.b,[]),u.Cb(1073742336,Y.y,Y.y,[]),u.Cb(1073742336,Y.w,Y.w,[]),u.Cb(1073742336,Y.t,Y.t,[]),u.Cb(1073742336,ll.g,ll.g,[]),u.Cb(1073742336,nl.c,nl.c,[]),u.Cb(1073742336,A.g,A.g,[]),u.Cb(1073742336,$.c,$.c,[]),u.Cb(1073742336,P.d,P.d,[]),u.Cb(1073742336,S.a,S.a,[]),u.Cb(1073742336,tl.b,tl.b,[]),u.Cb(1073742336,ul.c,ul.c,[]),u.Cb(1073742336,il.c,il.c,[]),u.Cb(1073742336,al.a,al.a,[]),u.Cb(1073742336,y.f,y.f,[]),u.Cb(1073742336,rl.d,rl.d,[]),u.Cb(1073742336,rl.c,rl.c,[]),u.Cb(1073742336,cl.b,cl.b,[]),u.Cb(1073742336,el.e,el.e,[]),u.Cb(1073742336,bl.c,bl.c,[]),u.Cb(1073742336,K.i,K.i,[]),u.Cb(1073742336,W.g,W.g,[]),u.Cb(1073742336,Q.i,Q.i,[]),u.Cb(1073742336,ol.b,ol.b,[]),u.Cb(1073742336,dl.c,dl.c,[]),u.Cb(1073742336,sl.a,sl.a,[]),u.Cb(1073742336,v.e,v.e,[]),u.Cb(1073742336,Y.p,Y.p,[]),u.Cb(1073742336,ml.a,ml.a,[]),u.Cb(1073742336,pl.c,pl.c,[]),u.Cb(1073742336,Cl.b,Cl.b,[]),u.Cb(1073742336,fl.d,fl.d,[]),u.Cb(1073742336,T.c,T.c,[]),u.Cb(1073742336,T.b,T.b,[]),u.Cb(1073742336,Y.A,Y.A,[]),u.Cb(1073742336,Y.q,Y.q,[]),u.Cb(1073742336,Z.d,Z.d,[]),u.Cb(1073742336,G.e,G.e,[]),u.Cb(1073742336,V.c,V.c,[]),u.Cb(1073742336,gl.a,gl.a,[]),u.Cb(1073742336,f.c,f.c,[]),u.Cb(1073742336,hl.a,hl.a,[]),u.Cb(1073742336,xl.h,xl.h,[]),u.Cb(1073742336,vl.a,vl.a,[]),u.Cb(1073742336,kl.a,kl.a,[]),u.Cb(1073742336,yl.e,yl.e,[]),u.Cb(1073742336,X.c,X.c,[]),u.Cb(1073742336,wl.l,wl.l,[]),u.Cb(1073742336,jl.a,jl.a,[]),u.Cb(1073742336,Ol.b,Ol.b,[]),u.Cb(1073742336,El.d,El.d,[]),u.Cb(1073742336,Rl.a,Rl.a,[]),u.Cb(1073742336,Nl.a,Nl.a,[]),u.Cb(1073742336,Il.n,Il.n,[[2,Il.s],[2,Il.k]]),u.Cb(1073742336,c,c,[]),u.Cb(256,i.n,"XSRF-TOKEN",[]),u.Cb(256,i.o,"X-XSRF-TOKEN",[]),u.Cb(256,cl.a,{separatorKeyCodes:[Fl.f]},[]),u.Cb(256,Y.g,Y.k,[]),u.Cb(1024,Il.i,function(){return[[{path:"",component:r}]]},[])])})},lzlj:function(l,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a});var u=t("CcnG"),i=(t("FVSy"),t("Fzqc"),t("Wf4p"),t("ZYjt"),u.sb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function a(l){return u.Nb(2,[u.Db(null,0),u.Db(null,1)],null,null)}}}]);