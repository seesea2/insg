(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7n+g":function(l,n,t){"use strict";t.r(n);var i=t("8Y7J");class u{}var a=t("9AJC"),r=t("pMnS"),e=t("fNgX"),c=t("NvT6"),o=t("W5yJ"),s=t("/HVE"),d=t("SVse"),b=t("omvX"),m=t("Nv++"),p=t("cUpR"),g=t("HsOI"),f=t("lzlj"),h=t("igqZ"),x=t("IheW");let C=(()=>{class l{constructor(l){this.httpClient=l}getOxfordDefinition(l){return this.httpClient.get(`/api/dictionary/oxford/${l}`)}}return l.ngInjectableDef=i.Rb({factory:function(){return new l(i.Sb(x.c))},token:l,providedIn:"root"}),l})();class v{constructor(l){this.dictionaryService=l}ngOnInit(){this.checkEntriesResult={lexicalEntries:[]},this.errMsg="",this.bChecking=!1}getOxfordDefinition(l){if(this.errMsg="",this.checkEntriesResult={lexicalEntries:[]},!(l||"").trim())return this.errMsg="Please input a word.";this.bChecking=!0,this.dictionaryService.getOxfordDefinition(l.trim().toLowerCase()).subscribe(l=>{this.checkEntriesResult=l,this.bChecking=!1},l=>{this.checkEntriesResult={lexicalEntries:[]},this.errMsg=l.result,this.bChecking=!1})}playAudio(l){let n=new Audio;n.src=l,n.load(),n.play()}}var k=i.qb({encapsulation:0,styles:[[""]],data:{}});function w(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,c.b,c.a)),i.rb(2,114688,null,0,o.d,[i.k,s.a,[2,d.d],[2,b.a],o.a],null,null)],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,i.Eb(n,2)._noopAnimations,i.Eb(n,2).diameter,i.Eb(n,2).diameter)}))}function y(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function E(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Lb(2,null,["",""])),(l()(),i.Lb(-1,null,[" ["])),(l()(),i.sb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Lb(5,null,["",""])),(l()(),i.Lb(-1,null,["] "])),(l()(),i.sb(7,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","play"]],[[1,"title",0],[8,"innerHTML",1]],[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.playAudio(null==l.context.$implicit?null:null==l.context.$implicit.pronunciations[0]?null:l.context.$implicit.pronunciations[0].audioFile)&&i),i}),e.d,e.c)),i.rb(8,573440,null,0,m.c,[p.b,m.a,m.d,[2,m.i]],{icon:[0,"icon"]},null),(l()(),i.sb(9,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,y)),i.rb(11,278528,null,0,d.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,8,0,"play"),l(n,11,0,n.context.$implicit.entries)}),(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.lexicalCategory),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.pronunciations[0].phoneticSpelling),l(n,7,0,i.Eb(n,8).title,i.Eb(n,8).renderedIconHTML)}))}function L(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Lb(-1,null,["Definitions:"])),(l()(),i.hb(16777216,null,null,1,null,E)),i.rb(4,278528,null,0,d.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.checkEntriesResult.lexicalEntries)}),null)}function I(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,L)),i.rb(2,16384,null,0,d.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,null==t.checkEntriesResult?null:null==t.checkEntriesResult.lexicalEntries?null:t.checkEntriesResult.lexicalEntries.length)}),null)}function O(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),i.rb(1,16384,null,0,g.b,[],null,null),(l()(),i.Lb(2,null,["",""]))],null,(function(l,n){var t=n.component;l(n,0,0,i.Eb(n,1).id),l(n,2,0,t.errMsg)}))}function N(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,23,"div",[["class","bg-light"]],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,22,"section",[["class","container py-4"]],null,null,null,null,null)),(l()(),i.sb(2,0,null,null,21,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),i.rb(3,49152,null,0,h.a,[[2,b.a]],null,null),(l()(),i.sb(4,0,null,0,3,"mat-card-title",[["class","mt-3 mb-4 row d-flex justify-content-center mat-card-title"]],null,null,null,null,null)),i.rb(5,16384,null,0,h.h,[],null,null),(l()(),i.sb(6,0,null,null,1,"div",[["class","col-sm-12 col-md-6 col-lg-4"]],null,null,null,null,null)),(l()(),i.sb(7,0,null,null,0,"img",[["class","w-100"],["src","/assets/oxford/PBO_blue-10359bc2ad64e89d.png"]],null,null,null,null,null)),(l()(),i.sb(8,0,null,0,15,"mat-card-content",[["class","container mat-card-content"]],null,null,null,null,null)),i.rb(9,16384,null,0,h.c,[],null,null),(l()(),i.sb(10,0,null,null,6,"div",[["class","mb-4 row d-flex justify-content-center"]],null,null,null,null,null)),(l()(),i.sb(11,0,null,null,5,"div",[["class","col-sm-12 col-md-6 col-lg-4 input-group"]],null,null,null,null,null)),(l()(),i.sb(12,0,[["oxfordInput",1]],null,0,"input",[["class","form-control"],["placeholder","word to check"],["type","text"]],null,[[null,"keyup.enter"]],(function(l,n,t){var u=!0;return"keyup.enter"===n&&(u=!1!==l.component.getOxfordDefinition(i.Eb(l,12).value)&&u),u}),null,null)),(l()(),i.sb(13,0,null,null,3,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),i.sb(14,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.getOxfordDefinition(i.Eb(l,12).value)&&u),u}),null,null)),(l()(),i.sb(15,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","search"]],[[1,"title",0],[8,"innerHTML",1]],null,null,e.d,e.c)),i.rb(16,573440,null,0,m.c,[p.b,m.a,m.d,[2,m.i]],{icon:[0,"icon"]},null),(l()(),i.hb(16777216,null,null,1,null,w)),i.rb(18,16384,null,0,d.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.hb(16777216,null,null,1,null,I)),i.rb(20,16384,null,0,d.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.sb(21,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,O)),i.rb(23,16384,null,0,d.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,16,0,"search"),l(n,18,0,t.bChecking),l(n,20,0,!t.bChecking),l(n,23,0,t.errMsg)}),(function(l,n){l(n,2,0,"NoopAnimations"===i.Eb(n,3)._animationMode),l(n,15,0,i.Eb(n,16).title,i.Eb(n,16).renderedIconHTML)}))}function j(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,1,"app-oxford",[],null,null,null,N,k)),i.rb(1,114688,null,0,v,[C],null,null)],(function(l,n){l(n,1,0)}),null)}var M=i.ob("app-oxford",v,j,{},{},[]),R=t("s7LF"),z=t("POq0"),F=t("Xd0L"),D=t("G0yt"),$=t("IP0z"),q=t("Fwaw"),A=t("02hT"),H=t("Q+lL"),J=t("oapL"),P=t("ZwOa"),S=t("QRvN"),T=t("iInd"),_=t("PCNd");class X{}t.d(n,"DictionaryModuleNgFactory",(function(){return U}));var U=i.pb(u,[],(function(l){return i.Bb([i.Cb(512,i.j,i.ab,[[8,[a.a,a.b,a.h,a.i,a.e,a.f,a.g,r.a,e.b,e.a,M]],[3,i.j],i.w]),i.Cb(4608,d.n,d.m,[i.t,[2,d.F]]),i.Cb(4608,R.x,R.x,[]),i.Cb(4608,R.e,R.e,[]),i.Cb(4608,z.c,z.c,[]),i.Cb(4608,F.d,F.d,[]),i.Cb(4608,D.t,D.t,[i.j,i.q,D.ib,D.u]),i.Cb(1073742336,d.c,d.c,[]),i.Cb(1073742336,R.w,R.w,[]),i.Cb(1073742336,R.j,R.j,[]),i.Cb(1073742336,R.t,R.t,[]),i.Cb(1073742336,$.a,$.a,[]),i.Cb(1073742336,F.n,F.n,[[2,F.f],[2,p.f]]),i.Cb(1073742336,s.b,s.b,[]),i.Cb(1073742336,F.y,F.y,[]),i.Cb(1073742336,q.c,q.c,[]),i.Cb(1073742336,F.p,F.p,[]),i.Cb(1073742336,F.w,F.w,[]),i.Cb(1073742336,A.b,A.b,[]),i.Cb(1073742336,H.d,H.d,[]),i.Cb(1073742336,z.d,z.d,[]),i.Cb(1073742336,g.e,g.e,[]),i.Cb(1073742336,J.c,J.c,[]),i.Cb(1073742336,P.b,P.b,[]),i.Cb(1073742336,D.c,D.c,[]),i.Cb(1073742336,D.f,D.f,[]),i.Cb(1073742336,D.g,D.g,[]),i.Cb(1073742336,D.k,D.k,[]),i.Cb(1073742336,D.l,D.l,[]),i.Cb(1073742336,D.q,D.q,[]),i.Cb(1073742336,D.r,D.r,[]),i.Cb(1073742336,D.v,D.v,[]),i.Cb(1073742336,D.z,D.z,[]),i.Cb(1073742336,D.C,D.C,[]),i.Cb(1073742336,D.F,D.F,[]),i.Cb(1073742336,D.I,D.I,[]),i.Cb(1073742336,D.M,D.M,[]),i.Cb(1073742336,D.R,D.R,[]),i.Cb(1073742336,D.U,D.U,[]),i.Cb(1073742336,D.V,D.V,[]),i.Cb(1073742336,D.W,D.W,[]),i.Cb(1073742336,D.w,D.w,[]),i.Cb(1073742336,S.a,S.a,[]),i.Cb(1073742336,T.n,T.n,[[2,T.s],[2,T.k]]),i.Cb(1073742336,h.f,h.f,[]),i.Cb(1073742336,o.c,o.c,[]),i.Cb(1073742336,m.j,m.j,[]),i.Cb(1073742336,_.a,_.a,[]),i.Cb(1073742336,X,X,[]),i.Cb(1073742336,u,u,[]),i.Cb(1024,T.i,(function(){return[[{path:"",component:v}]]}),[])])}))},lzlj:function(l,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return a}));var i=t("8Y7J"),u=(t("igqZ"),t("IP0z"),t("Xd0L"),t("cUpR"),t("omvX"),i.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function a(l){return i.Nb(2,[i.Db(null,0),i.Db(null,1)],null,null)}}}]);