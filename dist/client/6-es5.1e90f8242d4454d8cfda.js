(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rhRH:function(l,n,b){"use strict";b.r(n);var t=b("CcnG"),u=b("mHGd"),a=function(){function l(l){this.productsApi=l}return l.prototype.ngOnInit=function(){this.products=[],this.inventory=[],this.getProducts(),this.getInventory()},l.prototype.getProducts=function(){var l=this;this.productsApi.getProducts().subscribe(function(n){l.products=n,console.log(n)})},l.prototype.getInventory=function(){var l=this;this.productsApi.getInventory().subscribe(function(n){console.log("Inventory: ",n),l.inventory=n})},l.prototype.updateInventory=function(l,n){console.log(l,n);var b=parseInt(n);this.productsApi.updateInventory(l,b).subscribe(function(l){console.log("updateInventory: ",l)}),this.getInventory()},l.prototype.getQuantity=function(l){for(var n=0;n<this.inventory.length;n++)if(this.inventory[n]._id===l)return this.inventory[n].qty;return 0},l}(),e=function(){return function(){}}(),o=b("9AJC"),r=b("yWMr"),i=b("t68o"),c=b("zbXB"),d=b("NcP4"),C=b("xYTU"),s=b("pMnS"),f=b("lzlj"),p=b("FVSy"),m=b("dJrM"),h=b("seP3"),y=b("Wf4p"),v=b("Fzqc"),g=b("dWZg"),E=b("wFw1"),_=b("b716"),w=b("gIcY"),I=b("/VYK"),F=b("bujt"),S=b("UodH"),k=b("lLAP"),j=b("Ip0R"),q=t.sb({encapsulation:0,styles:[[""]],data:{}});function N(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,26,"mat-card",[["class","col-6 mat-card"]],null,null,null,f.b,f.a)),t.tb(1,49152,null,0,p.a,[],null,null),(l()(),t.ub(2,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Lb(3,null,["Name: ",""])),(l()(),t.ub(4,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Lb(5,null,["current quantity: ",""])),(l()(),t.ub(6,0,null,0,20,"div",[],null,null,null,null,null)),(l()(),t.ub(7,0,null,null,16,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,m.b,m.a)),t.tb(8,7520256,null,9,h.c,[t.k,t.h,[2,y.j],[2,v.b],[2,h.a],g.a,t.B,[2,E.a]],null,null),t.Jb(603979776,1,{_controlNonStatic:0}),t.Jb(335544320,2,{_controlStatic:0}),t.Jb(603979776,3,{_labelChildNonStatic:0}),t.Jb(335544320,4,{_labelChildStatic:0}),t.Jb(603979776,5,{_placeholderChild:0}),t.Jb(603979776,6,{_errorChildren:1}),t.Jb(603979776,7,{_hintChildren:1}),t.Jb(603979776,8,{_prefixChildren:1}),t.Jb(603979776,9,{_suffixChildren:1}),(l()(),t.ub(18,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.tb(19,16384,[[3,4],[4,4]],0,h.g,[],null,null),(l()(),t.Lb(-1,null,["New Quantity"])),(l()(),t.ub(21,0,[["newQty",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","number"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],function(l,n,b){var u=!0;return"blur"===n&&(u=!1!==t.Eb(l,22)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==t.Eb(l,22)._focusChanged(!0)&&u),"input"===n&&(u=!1!==t.Eb(l,22)._onInput()&&u),u},null,null)),t.tb(22,999424,null,0,_.a,[t.k,g.a,[8,null],[2,w.p],[2,w.i],y.d,[8,null],I.a,t.B],{type:[0,"type"]},null),t.Ib(2048,[[1,4],[2,4]],h.d,null,[_.a]),(l()(),t.ub(24,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,b){var u=!0;return"click"===n&&(u=!1!==l.component.updateInventory(l.context.$implicit._id,t.Eb(l,21).value)&&u),u},F.b,F.a)),t.tb(25,180224,null,0,S.b,[t.k,k.h,[2,E.a]],null,null),(l()(),t.Lb(-1,0,["Update"]))],function(l,n){l(n,22,0,"number")},function(l,n){var b=n.component;l(n,3,0,n.context.$implicit.name),l(n,5,0,b.getQuantity(n.context.$implicit._id)),l(n,7,1,["standard"==t.Eb(n,8).appearance,"fill"==t.Eb(n,8).appearance,"outline"==t.Eb(n,8).appearance,"legacy"==t.Eb(n,8).appearance,t.Eb(n,8)._control.errorState,t.Eb(n,8)._canLabelFloat,t.Eb(n,8)._shouldLabelFloat(),t.Eb(n,8)._hasFloatingLabel(),t.Eb(n,8)._hideControlPlaceholder(),t.Eb(n,8)._control.disabled,t.Eb(n,8)._control.autofilled,t.Eb(n,8)._control.focused,"accent"==t.Eb(n,8).color,"warn"==t.Eb(n,8).color,t.Eb(n,8)._shouldForward("untouched"),t.Eb(n,8)._shouldForward("touched"),t.Eb(n,8)._shouldForward("pristine"),t.Eb(n,8)._shouldForward("dirty"),t.Eb(n,8)._shouldForward("valid"),t.Eb(n,8)._shouldForward("invalid"),t.Eb(n,8)._shouldForward("pending"),!t.Eb(n,8)._animationsEnabled]),l(n,21,0,t.Eb(n,22)._isServer,t.Eb(n,22).id,t.Eb(n,22).placeholder,t.Eb(n,22).disabled,t.Eb(n,22).required,t.Eb(n,22).readonly&&!t.Eb(n,22)._isNativeSelect||null,t.Eb(n,22)._ariaDescribedby||null,t.Eb(n,22).errorState,t.Eb(n,22).required.toString()),l(n,24,0,t.Eb(n,25).disabled||null,"NoopAnimations"===t.Eb(n,25)._animationMode)})}function J(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,5,"section",[["class","container"]],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"h2",[["class","my-4"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Inventory"])),(l()(),t.ub(3,0,null,null,2,"div",[["class","row my-4"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,N)),t.tb(5,278528,null,0,j.k,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.products)},null)}function L(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"staffs-inventory",[],null,null,null,J,q)),t.tb(1,114688,null,0,a,[u.a],null,null)],function(l,n){l(n,1,0)},null)}var x=t.qb("staffs-inventory",a,L,{},{},[]),A=b("t/Na"),O=b("4GxJ"),B=b("OBdK"),M=b("eDkP"),Q=b("4tE/"),R=b("M2Lx"),P=b("wmQ5"),z=b("o3x0"),K=b("jQLj"),Y=b("mVsa"),W=b("uGex"),D=b("v9Dh"),G=b("ZYjt"),X=b("4epT"),Z=b("OkvK"),H=b("jmvC"),T=b("QRvN"),V=b("y4qS"),U=b("4c35"),$=b("qAlS"),ll=b("6Wmm"),nl=b("BgWK"),bl=b("u7R8"),tl=b("de3e"),ul=b("/dO6"),al=b("Lwpp"),el=b("SMsm"),ol=b("LC5p"),rl=b("YhbO"),il=b("jlZm"),cl=b("r43C"),dl=b("0/Q6"),Cl=b("Z+uX"),sl=b("Blfk"),fl=b("9It4"),pl=b("Nsh5"),ml=b("w+lc"),hl=b("kWGw"),yl=b("vARd"),vl=b("BHnd"),gl=b("La40"),El=b("8mMr"),_l=b("J12g"),wl=b("5dmV"),Il=b("PCNd"),Fl=b("ZYCi"),Sl=b("YSh2");b.d(n,"StaffsInventoryModuleNgFactory",function(){return kl});var kl=t.rb(e,[],function(l){return t.Bb([t.Cb(512,t.j,t.eb,[[8,[o.a,o.b,o.h,o.i,o.e,o.f,o.g,r.a,i.a,c.b,c.a,d.a,C.a,C.b,s.a,x]],[3,t.j],t.z]),t.Cb(4608,j.n,j.m,[t.w,[2,j.E]]),t.Cb(4608,w.x,w.x,[]),t.Cb(4608,A.j,A.p,[j.d,t.D,A.n]),t.Cb(4608,A.q,A.q,[A.j,A.o]),t.Cb(5120,A.a,function(l){return[l]},[A.q]),t.Cb(4608,A.m,A.m,[]),t.Cb(6144,A.k,null,[A.m]),t.Cb(4608,A.i,A.i,[A.k]),t.Cb(6144,A.b,null,[A.i]),t.Cb(4608,A.f,A.l,[A.b,t.s]),t.Cb(4608,A.c,A.c,[A.f]),t.Cb(4608,w.e,w.e,[]),t.Cb(4608,O.t,O.t,[t.j,t.s,O.fb,O.u]),t.Cb(135680,k.h,k.h,[t.B,g.a]),t.Cb(4608,B.f,B.f,[t.O]),t.Cb(4608,M.c,M.c,[M.i,M.e,t.j,M.h,M.f,t.s,t.B,j.d,v.b,[2,j.h]]),t.Cb(5120,M.j,M.k,[M.c]),t.Cb(5120,Q.a,Q.b,[M.c]),t.Cb(4608,R.c,R.c,[]),t.Cb(4608,y.d,y.d,[]),t.Cb(5120,P.h,P.a,[[3,P.h]]),t.Cb(5120,z.b,z.c,[M.c]),t.Cb(135680,z.d,z.d,[M.c,t.s,[2,j.h],[2,z.a],z.b,[3,z.d],M.e]),t.Cb(4608,K.h,K.h,[]),t.Cb(5120,K.a,K.b,[M.c]),t.Cb(5120,Y.a,Y.d,[M.c]),t.Cb(4608,y.c,y.z,[[2,y.h],g.a]),t.Cb(5120,W.a,W.b,[M.c]),t.Cb(5120,D.b,D.c,[M.c]),t.Cb(4608,G.e,y.e,[[2,y.i],[2,y.n]]),t.Cb(5120,X.b,X.a,[[3,X.b]]),t.Cb(5120,Z.b,Z.a,[[3,Z.b]]),t.Cb(4608,H.a,H.a,[j.d,t.D]),t.Cb(1073742336,j.c,j.c,[]),t.Cb(1073742336,w.w,w.w,[]),t.Cb(1073742336,w.j,w.j,[]),t.Cb(1073742336,A.e,A.e,[]),t.Cb(1073742336,A.d,A.d,[]),t.Cb(1073742336,w.t,w.t,[]),t.Cb(1073742336,O.c,O.c,[]),t.Cb(1073742336,O.f,O.f,[]),t.Cb(1073742336,O.g,O.g,[]),t.Cb(1073742336,O.k,O.k,[]),t.Cb(1073742336,O.l,O.l,[]),t.Cb(1073742336,O.q,O.q,[]),t.Cb(1073742336,O.r,O.r,[]),t.Cb(1073742336,O.v,O.v,[]),t.Cb(1073742336,O.z,O.z,[]),t.Cb(1073742336,O.C,O.C,[]),t.Cb(1073742336,O.F,O.F,[]),t.Cb(1073742336,O.I,O.I,[]),t.Cb(1073742336,O.M,O.M,[]),t.Cb(1073742336,O.Q,O.Q,[]),t.Cb(1073742336,O.R,O.R,[]),t.Cb(1073742336,O.S,O.S,[]),t.Cb(1073742336,O.w,O.w,[]),t.Cb(1073742336,T.a,T.a,[]),t.Cb(1073742336,V.p,V.p,[]),t.Cb(1073742336,B.d,B.d,[]),t.Cb(1073742336,v.a,v.a,[]),t.Cb(1073742336,y.n,y.n,[[2,y.f],[2,G.f]]),t.Cb(1073742336,g.b,g.b,[]),t.Cb(1073742336,y.y,y.y,[]),t.Cb(1073742336,y.w,y.w,[]),t.Cb(1073742336,y.t,y.t,[]),t.Cb(1073742336,U.g,U.g,[]),t.Cb(1073742336,$.c,$.c,[]),t.Cb(1073742336,M.g,M.g,[]),t.Cb(1073742336,Q.c,Q.c,[]),t.Cb(1073742336,R.d,R.d,[]),t.Cb(1073742336,k.a,k.a,[]),t.Cb(1073742336,ll.b,ll.b,[]),t.Cb(1073742336,nl.c,nl.c,[]),t.Cb(1073742336,S.c,S.c,[]),t.Cb(1073742336,bl.a,bl.a,[]),t.Cb(1073742336,p.f,p.f,[]),t.Cb(1073742336,tl.d,tl.d,[]),t.Cb(1073742336,tl.c,tl.c,[]),t.Cb(1073742336,ul.b,ul.b,[]),t.Cb(1073742336,al.e,al.e,[]),t.Cb(1073742336,el.c,el.c,[]),t.Cb(1073742336,P.i,P.i,[]),t.Cb(1073742336,z.g,z.g,[]),t.Cb(1073742336,K.i,K.i,[]),t.Cb(1073742336,ol.b,ol.b,[]),t.Cb(1073742336,rl.c,rl.c,[]),t.Cb(1073742336,il.a,il.a,[]),t.Cb(1073742336,h.e,h.e,[]),t.Cb(1073742336,y.p,y.p,[]),t.Cb(1073742336,cl.a,cl.a,[]),t.Cb(1073742336,I.c,I.c,[]),t.Cb(1073742336,_.b,_.b,[]),t.Cb(1073742336,dl.d,dl.d,[]),t.Cb(1073742336,Y.c,Y.c,[]),t.Cb(1073742336,Y.b,Y.b,[]),t.Cb(1073742336,y.A,y.A,[]),t.Cb(1073742336,y.q,y.q,[]),t.Cb(1073742336,W.d,W.d,[]),t.Cb(1073742336,D.e,D.e,[]),t.Cb(1073742336,X.c,X.c,[]),t.Cb(1073742336,Cl.a,Cl.a,[]),t.Cb(1073742336,sl.c,sl.c,[]),t.Cb(1073742336,fl.a,fl.a,[]),t.Cb(1073742336,pl.h,pl.h,[]),t.Cb(1073742336,ml.a,ml.a,[]),t.Cb(1073742336,hl.a,hl.a,[]),t.Cb(1073742336,yl.e,yl.e,[]),t.Cb(1073742336,Z.c,Z.c,[]),t.Cb(1073742336,vl.l,vl.l,[]),t.Cb(1073742336,gl.a,gl.a,[]),t.Cb(1073742336,El.b,El.b,[]),t.Cb(1073742336,_l.d,_l.d,[]),t.Cb(1073742336,wl.a,wl.a,[]),t.Cb(1073742336,Il.a,Il.a,[]),t.Cb(1073742336,Fl.n,Fl.n,[[2,Fl.s],[2,Fl.k]]),t.Cb(1073742336,e,e,[]),t.Cb(256,A.n,"XSRF-TOKEN",[]),t.Cb(256,A.o,"X-XSRF-TOKEN",[]),t.Cb(256,ul.a,{separatorKeyCodes:[Sl.f]},[]),t.Cb(256,y.g,y.k,[]),t.Cb(1024,Fl.i,function(){return[[{path:"",component:a}]]},[])])})}}]);