(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{bvQO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},o=u("9AJC"),a=u("yWMr"),r=u("t68o"),b=u("zbXB"),i=u("NcP4"),s=u("xYTU"),c=u("pMnS"),d=u("8rEH"),p=u("zQui"),m=u("SVse"),f=u("IP0z"),h=u("Xd0L"),C=u("cUpR"),k=u("/HVE"),g=t.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function S(l){return t.Nb(0,[t.Jb(402653184,1,{_rowOutlet:0}),t.Jb(402653184,2,{_headerRowOutlet:0}),t.Jb(402653184,3,{_footerRowOutlet:0}),t.Db(null,0),(l()(),t.sb(4,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(5,16384,[[2,4]],0,p.t,[t.O,t.k],null,null),(l()(),t.sb(6,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(7,16384,[[1,4]],0,p.r,[t.O,t.k],null,null),(l()(),t.sb(8,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(9,16384,[[3,4]],0,p.s,[t.O,t.k],null,null)],null,null)}var B=t.qb({encapsulation:2,styles:[],data:{}});function v(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,p.c,[t.O],null,null)],null,null)}var y=t.qb({encapsulation:2,styles:[],data:{}});function E(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,p.c,[t.O],null,null)],null,null)}var w,N=u("bujt"),_=u("Fwaw"),x=u("5GAg"),L=u("omvX"),I=u("6UMx"),A=u("Q+lL"),J=u("NvT6"),O=u("W5yJ"),F=u("s7LF"),D=u("dJrM"),j=u("HsOI"),R=u("ZwOa"),T=u("oapL"),M=u("2Vo4"),q=(u("JQBr"),u("jmvC")),$=u("IheW"),P=((w=function(){function l(l,n){var u=this;this.cookieService=l,this.httpClient=n,this.busStopBookmarkSubject=new M.a([]),this.busStopBookmark$=this.busStopBookmarkSubject.asObservable(),this.busStopBookmark$.subscribe((function(l){u.busStopBookmark=l})),this.getCookieBusStopBookmark()}return l.prototype.getCookieBusStopBookmark=function(){var l=this.cookieService.get("InSgBusStopBookmark");l&&this.busStopBookmarkSubject.next(JSON.parse(l))},l.prototype.getBusStopInfo=function(l){return this.httpClient.get("/api/lta/bus/busStop/"+l)},l.prototype.getBusArrival=function(l){return this.httpClient.get("/api/lta/bus/busArrival/"+l)},l.prototype.addBusStopBookmark=function(l){this.existingBookmark(l)||(this.busStopBookmark.push(l),this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/"))},l.prototype.deleteBusStopBookmark=function(l){for(var n=0;n<this.busStopBookmark.length;n++)if(this.busStopBookmark[n].BusStopCode===l.BusStopCode){this.busStopBookmark.splice(n,1);break}this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/")},l.prototype.existingBookmark=function(l){for(var n=0;n<this.busStopBookmark.length;n++)if(l.BusStopCode===this.busStopBookmark[n].BusStopCode)return!0;return!1},l.prototype.getNearbyBusStops=function(l){return this.httpClient.get("/api/lta/bus/nearbyBusStops?latitude="+l.latitude+"&longitude="+l.longitude)},l}()).ngInjectableDef=t.Rb({factory:function(){return new w(t.Sb(q.a),t.Sb($.c))},token:w,providedIn:"root"}),w),U=function(){function l(l,n){var u=this;this.busArrivalService=l,this.snackBar=n,this.busTableColumn=["service","bus1","bus2","bus3","load"],this.bSpinnerShowNearbyBusStops=!1,this.busStopBookmark=[],l.busStopBookmark$.subscribe((function(l){u.busStopBookmark=l}))}return l.prototype.ngOnInit=function(){this.busTable=[],this.nearbyBusStops=[],this.busStopInfo=void 0,this.bExistingBookmark=!1,this.bSpinnerShowNearbyBusStops=!1,this.currentBusStopCode=""},l.prototype.addBusStopBookmark=function(){this.bExistingBookmark=!0,this.busArrivalService.addBusStopBookmark(this.busStopInfo)},l.prototype.deleteBusStopBookmark=function(l){this.bExistingBookmark=!1,this.busArrivalService.deleteBusStopBookmark(l)},l.prototype.getBusArrival=function(l){var n=this;this.busTable=[],this.bExistingBookmark=!1,this.nearbyBusStops=[],(l=l.trim())?(this.currentBusStopCode=l,this.busArrivalService.getBusArrival(l).subscribe((function(l){l.busArrival.Services.length<=0?n.snackBar.open("Bus service unavailable at the Bus Stop.","warn",{duration:2e3}):(l.busArrival.Services.forEach((function(l){var u={service:l.ServiceNo,bus1:z(l.NextBus),bus2:z(l.NextBus2),bus3:z(l.NextBus3),load:l.NextBus.Load};n.busTable.push(u)})),n.busStopInfo=l.busStopInfo,n.bExistingBookmark=n.busArrivalService.existingBookmark(l.busStopInfo))}),(function(l){n.snackBar.open(l,"Error",{duration:4e3})}))):this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:2e3})},l.prototype.getNearbyBusStops=function(l){var n=this;this.busArrivalService.getNearbyBusStops(l).subscribe((function(l){n.nearbyBusStops=l,n.bSpinnerShowNearbyBusStops=!1}),(function(l){n.nearbyBusStops=[],n.bSpinnerShowNearbyBusStops=!1,n.snackBar.open("No Nearby Bus Stop.","warn",{duration:2e3})}))},l.prototype.toggleNearbyBusStops=function(){var l=this;if(this.nearbyBusStops.length)return this.nearbyBusStops=[];this.bSpinnerShowNearbyBusStops=!0,navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){n&&n.coords?l.getNearbyBusStops(n.coords):l.bSpinnerShowNearbyBusStops=!1})):(this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("Please enable the location access.","warn",{duration:2e3}))},l}();function z(l){if(!l||!l.EstimatedArrival)return"NA";var n=(new Date(l.EstimatedArrival).valueOf()-Date.now())/1e3/60;return n<1?"Arriving":n.toFixed(0)+" mins"}var H=u("dFDH"),V=t.qb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Q(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.e,[p.d,t.k],null,null),(l()(),t.Lb(-1,null,["Service"]))],null,null)}function W(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.a,[p.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.service)}))}function G(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.e,[p.d,t.k],null,null),(l()(),t.Lb(-1,null,["1st-Bus"]))],null,null)}function X(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.a,[p.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus1)}))}function Z(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.e,[p.d,t.k],null,null),(l()(),t.Lb(-1,null,["2nd-Bus"]))],null,null)}function K(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.a,[p.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus2)}))}function Y(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.e,[p.d,t.k],null,null),(l()(),t.Lb(-1,null,["3rd-Bus"]))],null,null)}function ll(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.a,[p.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus3)}))}function nl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.e,[p.d,t.k],null,null),(l()(),t.Lb(-1,null,["Load"]))],null,null)}function ul(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,d.a,[p.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.load)}))}function tl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,v,B)),t.Ib(6144,null,p.k,null,[d.g]),t.rb(2,49152,null,0,d.g,[],null,null)],null,null)}function el(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,E,y)),t.Ib(6144,null,p.m,null,[d.i]),t.rb(2,49152,null,0,d.i,[],null,null)],null,null)}function ol(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addBusStopBookmark()&&t),t}),N.b,N.a)),t.rb(1,180224,null,0,_.b,[t.k,x.h,[2,L.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Bookmark this Bus Stop "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){l(n,0,0,t.Eb(n,1).disabled||null,"NoopAnimations"===t.Eb(n,1)._animationMode)}))}function al(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,94,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.sb(3,0,null,null,77,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""],["width","100"]],null,null,null,S,g)),t.Ib(6144,null,p.o,null,[d.k]),t.rb(5,2342912,null,4,d.k,[t.r,t.h,t.k,[8,null],[2,f.b],m.d,k.a],{dataSource:[0,"dataSource"]},null),t.Jb(603979776,10,{_contentColumnDefs:1}),t.Jb(603979776,11,{_contentRowDefs:1}),t.Jb(603979776,12,{_contentHeaderRowDefs:1}),t.Jb(603979776,13,{_contentFooterRowDefs:1}),(l()(),t.sb(10,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.rb(12,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Jb(603979776,14,{cell:0}),t.Jb(603979776,15,{headerCell:0}),t.Jb(603979776,16,{footerCell:0}),t.Ib(2048,[[10,4]],p.d,null,[d.c]),(l()(),t.hb(0,null,null,2,null,Q)),t.rb(18,16384,null,0,d.f,[t.L],null,null),t.Ib(2048,[[15,4]],p.j,null,[d.f]),(l()(),t.hb(0,null,null,2,null,W)),t.rb(21,16384,null,0,d.b,[t.L],null,null),t.Ib(2048,[[14,4]],p.b,null,[d.b]),(l()(),t.sb(23,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.rb(25,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Jb(603979776,17,{cell:0}),t.Jb(603979776,18,{headerCell:0}),t.Jb(603979776,19,{footerCell:0}),t.Ib(2048,[[10,4]],p.d,null,[d.c]),(l()(),t.hb(0,null,null,2,null,G)),t.rb(31,16384,null,0,d.f,[t.L],null,null),t.Ib(2048,[[18,4]],p.j,null,[d.f]),(l()(),t.hb(0,null,null,2,null,X)),t.rb(34,16384,null,0,d.b,[t.L],null,null),t.Ib(2048,[[17,4]],p.b,null,[d.b]),(l()(),t.sb(36,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.rb(38,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Jb(603979776,20,{cell:0}),t.Jb(603979776,21,{headerCell:0}),t.Jb(603979776,22,{footerCell:0}),t.Ib(2048,[[10,4]],p.d,null,[d.c]),(l()(),t.hb(0,null,null,2,null,Z)),t.rb(44,16384,null,0,d.f,[t.L],null,null),t.Ib(2048,[[21,4]],p.j,null,[d.f]),(l()(),t.hb(0,null,null,2,null,K)),t.rb(47,16384,null,0,d.b,[t.L],null,null),t.Ib(2048,[[20,4]],p.b,null,[d.b]),(l()(),t.sb(49,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.rb(51,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Jb(603979776,23,{cell:0}),t.Jb(603979776,24,{headerCell:0}),t.Jb(603979776,25,{footerCell:0}),t.Ib(2048,[[10,4]],p.d,null,[d.c]),(l()(),t.hb(0,null,null,2,null,Y)),t.rb(57,16384,null,0,d.f,[t.L],null,null),t.Ib(2048,[[24,4]],p.j,null,[d.f]),(l()(),t.hb(0,null,null,2,null,ll)),t.rb(60,16384,null,0,d.b,[t.L],null,null),t.Ib(2048,[[23,4]],p.b,null,[d.b]),(l()(),t.sb(62,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.rb(64,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Jb(603979776,26,{cell:0}),t.Jb(603979776,27,{headerCell:0}),t.Jb(603979776,28,{footerCell:0}),t.Ib(2048,[[10,4]],p.d,null,[d.c]),(l()(),t.hb(0,null,null,2,null,nl)),t.rb(70,16384,null,0,d.f,[t.L],null,null),t.Ib(2048,[[27,4]],p.j,null,[d.f]),(l()(),t.hb(0,null,null,2,null,ul)),t.rb(73,16384,null,0,d.b,[t.L],null,null),t.Ib(2048,[[26,4]],p.b,null,[d.b]),(l()(),t.hb(0,null,null,2,null,tl)),t.rb(76,540672,null,0,d.h,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[12,4]],p.l,null,[d.h]),(l()(),t.hb(0,null,null,2,null,el)),t.rb(79,540672,null,0,d.j,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[11,4]],p.n,null,[d.j]),(l()(),t.sb(81,0,null,null,8,"div",[["class","small mt-1"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Bus Load "])),(l()(),t.sb(83,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.sb(84,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SEA: seats available"])),(l()(),t.sb(86,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SDA: standing available"])),(l()(),t.sb(88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["LSD: limited standing"])),(l()(),t.hb(16777216,null,null,1,null,ol)),t.rb(91,16384,null,0,m.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(92,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.getBusArrival(e.currentBusStopCode)&&t),t}),N.b,N.a)),t.rb(93,180224,null,0,_.b,[t.k,x.h,[2,L.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Refresh "]))],(function(l,n){var u=n.component;l(n,5,0,u.busTable),l(n,12,0,"service"),l(n,25,0,"bus1"),l(n,38,0,"bus2"),l(n,51,0,"bus3"),l(n,64,0,"load"),l(n,76,0,u.busTableColumn),l(n,79,0,u.busTableColumn),l(n,91,0,!u.bExistingBookmark),l(n,93,0,"primary")}),(function(l,n){l(n,2,0,n.component.busStopInfo.Description),l(n,92,0,t.Eb(n,93).disabled||null,"NoopAnimations"===t.Eb(n,93)._animationMode)}))}function rl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,7,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,I.d,I.a)),t.rb(1,704512,null,0,A.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,5,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival(l.context.$implicit.BusStopCode)&&t),t}),N.b,N.a)),t.rb(4,180224,null,0,_.b,[t.k,x.h,[2,L.a]],null,null),(l()(),t.Lb(5,0,[" (",") "," "])),(l()(),t.sb(6,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteBusStopBookmark(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Lb(-1,null,["x"]))],null,(function(l,n){l(n,3,0,t.Eb(n,4).disabled||null,"NoopAnimations"===t.Eb(n,4)._animationMode),l(n,5,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description)}))}function bl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,4,"div",[["class","py-4"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Stop Bookmark"])),(l()(),t.hb(16777216,null,null,1,null,rl)),t.rb(4,278528,null,0,m.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.busStopBookmark)}),null)}function il(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"mat-spinner",[["class","small mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,J.b,J.a)),t.rb(1,114688,null,0,O.d,[t.k,k.a,[2,m.d],[2,L.a],O.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t.Eb(n,1)._noopAnimations,t.Eb(n,1).diameter,t.Eb(n,1).diameter)}))}function sl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,4,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,I.d,I.a)),t.rb(1,704512,null,0,A.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,2,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival(l.context.$implicit.BusStopCode)&&t),t}),null,null)),(l()(),t.Lb(4,null,[" (",") "," @ "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description,n.context.$implicit.RoadName)}))}function cl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,sl)),t.rb(2,278528,null,0,m.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.nearbyBusStops)}),null)}function dl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,46,"div",[["class","container py-4"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Arrival Time"])),(l()(),t.sb(3,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Get bus arrival time by bus stop code."])),(l()(),t.sb(5,0,null,null,25,"form",[["class","py-4"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Eb(l,7).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Eb(l,7).onReset()&&e),e}),null,null)),t.rb(6,16384,null,0,F.A,[],null,null),t.rb(7,4210688,null,0,F.p,[[8,null],[8,null]],null,null),t.Ib(2048,null,F.c,null,[F.p]),t.rb(9,16384,null,0,F.o,[[4,F.c]],null,null),(l()(),t.sb(10,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,D.b,D.a)),t.rb(11,7520256,null,9,j.c,[t.k,t.h,[2,h.j],[2,f.b],[2,j.a],k.a,t.y,[2,L.a]],null,null),t.Jb(603979776,1,{_controlNonStatic:0}),t.Jb(335544320,2,{_controlStatic:0}),t.Jb(603979776,3,{_labelChildNonStatic:0}),t.Jb(335544320,4,{_labelChildStatic:0}),t.Jb(603979776,5,{_placeholderChild:0}),t.Jb(603979776,6,{_errorChildren:1}),t.Jb(603979776,7,{_hintChildren:1}),t.Jb(603979776,8,{_prefixChildren:1}),t.Jb(603979776,9,{_suffixChildren:1}),(l()(),t.sb(21,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(22,16384,[[3,4],[4,4]],0,j.g,[],null,null),(l()(),t.Lb(-1,null,["Bus Stop Code"])),(l()(),t.sb(24,0,[["busStopCode",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],(function(l,n,u){var e=!0;return"blur"===n&&(e=!1!==t.Eb(l,25)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==t.Eb(l,25)._focusChanged(!0)&&e),"input"===n&&(e=!1!==t.Eb(l,25)._onInput()&&e),e}),null,null)),t.rb(25,999424,null,0,R.a,[t.k,k.a,[8,null],[2,F.p],[2,F.i],h.d,[8,null],T.a,t.y],{type:[0,"type"]},null),t.Ib(2048,[[1,4],[2,4]],j.d,null,[R.a]),(l()(),t.sb(27,0,null,4,3,"button",[["color","primary"],["mat-raised-button",""],["matSuffix",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getBusArrival(t.Eb(l,24).value)&&e),e}),N.b,N.a)),t.rb(28,180224,null,0,_.b,[t.k,x.h,[2,L.a]],{color:[0,"color"]},null),t.rb(29,16384,[[9,4]],0,j.h,[],null,null),(l()(),t.Lb(-1,0,[" Get "])),(l()(),t.hb(16777216,null,null,1,null,al)),t.rb(32,16384,null,0,m.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,bl)),t.rb(34,16384,null,0,m.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(35,0,null,null,3,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleNearbyBusStops()&&t),t}),N.b,N.a)),t.rb(36,180224,null,0,_.b,[t.k,x.h,[2,L.a]],{color:[0,"color"]},null),(l()(),t.sb(37,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Toggle Nearby Bus Stops"])),(l()(),t.hb(16777216,null,null,1,null,il)),t.rb(40,16384,null,0,m.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,cl)),t.rb(42,16384,null,0,m.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(43,0,null,null,3,"div",[["class","mt-5 small"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Powered by "])),(l()(),t.sb(45,0,null,null,1,"a",[["href","https://data.gov.sg"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Data.gov.sg"]))],(function(l,n){var u=n.component;l(n,25,0,"text"),l(n,28,0,"primary"),l(n,32,0,u.busTable.length>0),l(n,34,0,u.busStopBookmark.length),l(n,36,0,"primary"),l(n,40,0,u.bSpinnerShowNearbyBusStops),l(n,42,0,u.nearbyBusStops.length)}),(function(l,n){l(n,5,0,t.Eb(n,9).ngClassUntouched,t.Eb(n,9).ngClassTouched,t.Eb(n,9).ngClassPristine,t.Eb(n,9).ngClassDirty,t.Eb(n,9).ngClassValid,t.Eb(n,9).ngClassInvalid,t.Eb(n,9).ngClassPending),l(n,10,1,["standard"==t.Eb(n,11).appearance,"fill"==t.Eb(n,11).appearance,"outline"==t.Eb(n,11).appearance,"legacy"==t.Eb(n,11).appearance,t.Eb(n,11)._control.errorState,t.Eb(n,11)._canLabelFloat,t.Eb(n,11)._shouldLabelFloat(),t.Eb(n,11)._hasFloatingLabel(),t.Eb(n,11)._hideControlPlaceholder(),t.Eb(n,11)._control.disabled,t.Eb(n,11)._control.autofilled,t.Eb(n,11)._control.focused,"accent"==t.Eb(n,11).color,"warn"==t.Eb(n,11).color,t.Eb(n,11)._shouldForward("untouched"),t.Eb(n,11)._shouldForward("touched"),t.Eb(n,11)._shouldForward("pristine"),t.Eb(n,11)._shouldForward("dirty"),t.Eb(n,11)._shouldForward("valid"),t.Eb(n,11)._shouldForward("invalid"),t.Eb(n,11)._shouldForward("pending"),!t.Eb(n,11)._animationsEnabled]),l(n,24,0,t.Eb(n,25)._isServer,t.Eb(n,25).id,t.Eb(n,25).placeholder,t.Eb(n,25).disabled,t.Eb(n,25).required,t.Eb(n,25).readonly&&!t.Eb(n,25)._isNativeSelect||null,t.Eb(n,25)._ariaDescribedby||null,t.Eb(n,25).errorState,t.Eb(n,25).required.toString()),l(n,27,0,t.Eb(n,28).disabled||null,"NoopAnimations"===t.Eb(n,28)._animationMode),l(n,35,0,t.Eb(n,36).disabled||null,"NoopAnimations"===t.Eb(n,36)._animationMode)}))}var pl=t.ob("bus-arrival-home",U,(function(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"bus-arrival-home",[],null,null,null,dl,V)),t.rb(1,114688,null,0,U,[P,H.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),ml=u("G0yt"),fl=u("DkaU"),hl=u("QQfA"),Cl=u("/Co4"),kl=u("POq0"),gl=u("qJ5m"),Sl=u("s6ns"),Bl=u("821u"),vl=u("gavF"),yl=u("JjoW"),El=u("Mz6y"),wl=u("OIZN"),Nl=u("7kcP"),_l=u("QRvN"),xl=u("zMNK"),Ll=u("hOhj"),Il=u("KPQW"),Al=u("lwm9"),Jl=u("mkRZ"),Ol=u("igqZ"),Fl=u("r0V8"),Dl=u("kNGD"),jl=u("qJ50"),Rl=u("Gi4r"),Tl=u("02hT"),Ml=u("5Bek"),ql=u("c9fC"),$l=u("FVPZ"),Pl=u("8P0U"),Ul=u("elxJ"),zl=u("BV1i"),Hl=u("lT8R"),Vl=u("pBi1"),Ql=u("rWV4"),Wl=u("BzsH"),Gl=u("AaDx"),Xl=u("5dmV"),Zl=u("PCNd"),Kl=u("iInd"),Yl=function(){},ln=u("dvZr");u.d(n,"BusArrivalModuleNgFactory",(function(){return nn}));var nn=t.pb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.a,o.b,o.h,o.i,o.e,o.f,o.g,a.a,r.a,b.b,b.a,i.a,s.a,s.b,c.a,pl]],[3,t.j],t.w]),t.Cb(4608,m.n,m.m,[t.t,[2,m.F]]),t.Cb(4608,F.x,F.x,[]),t.Cb(4608,$.j,$.p,[m.d,t.A,$.n]),t.Cb(4608,$.q,$.q,[$.j,$.o]),t.Cb(5120,$.a,(function(l){return[l]}),[$.q]),t.Cb(4608,$.m,$.m,[]),t.Cb(6144,$.k,null,[$.m]),t.Cb(4608,$.i,$.i,[$.k]),t.Cb(6144,$.b,null,[$.i]),t.Cb(4608,$.f,$.l,[$.b,t.q]),t.Cb(4608,$.c,$.c,[$.f]),t.Cb(4608,F.e,F.e,[]),t.Cb(4608,ml.t,ml.t,[t.j,t.q,ml.jb,ml.u]),t.Cb(135680,x.h,x.h,[t.y,k.a]),t.Cb(4608,fl.f,fl.f,[t.L]),t.Cb(4608,hl.c,hl.c,[hl.i,hl.e,t.j,hl.h,hl.f,t.q,t.y,m.d,f.b,[2,m.h]]),t.Cb(5120,hl.j,hl.k,[hl.c]),t.Cb(5120,Cl.a,Cl.b,[hl.c]),t.Cb(4608,kl.c,kl.c,[]),t.Cb(4608,h.d,h.d,[]),t.Cb(5120,gl.h,gl.a,[[3,gl.h]]),t.Cb(5120,Sl.b,Sl.c,[hl.c]),t.Cb(135680,Sl.d,Sl.d,[hl.c,t.q,[2,m.h],[2,Sl.a],Sl.b,[3,Sl.d],hl.e]),t.Cb(4608,Bl.h,Bl.h,[]),t.Cb(5120,Bl.a,Bl.b,[hl.c]),t.Cb(5120,vl.a,vl.d,[hl.c]),t.Cb(4608,h.c,h.z,[[2,h.h],k.a]),t.Cb(5120,yl.a,yl.b,[hl.c]),t.Cb(5120,El.b,El.c,[hl.c]),t.Cb(4608,C.e,h.e,[[2,h.i],[2,h.n]]),t.Cb(5120,wl.b,wl.a,[[3,wl.b]]),t.Cb(5120,Nl.b,Nl.a,[[3,Nl.b]]),t.Cb(4608,q.a,q.a,[m.d,t.A]),t.Cb(1073742336,m.c,m.c,[]),t.Cb(1073742336,F.w,F.w,[]),t.Cb(1073742336,F.j,F.j,[]),t.Cb(1073742336,$.e,$.e,[]),t.Cb(1073742336,$.d,$.d,[]),t.Cb(1073742336,F.t,F.t,[]),t.Cb(1073742336,ml.c,ml.c,[]),t.Cb(1073742336,ml.f,ml.f,[]),t.Cb(1073742336,ml.g,ml.g,[]),t.Cb(1073742336,ml.k,ml.k,[]),t.Cb(1073742336,ml.l,ml.l,[]),t.Cb(1073742336,ml.q,ml.q,[]),t.Cb(1073742336,ml.r,ml.r,[]),t.Cb(1073742336,ml.v,ml.v,[]),t.Cb(1073742336,ml.z,ml.z,[]),t.Cb(1073742336,ml.C,ml.C,[]),t.Cb(1073742336,ml.F,ml.F,[]),t.Cb(1073742336,ml.I,ml.I,[]),t.Cb(1073742336,ml.M,ml.M,[]),t.Cb(1073742336,ml.R,ml.R,[]),t.Cb(1073742336,ml.U,ml.U,[]),t.Cb(1073742336,ml.V,ml.V,[]),t.Cb(1073742336,ml.W,ml.W,[]),t.Cb(1073742336,ml.w,ml.w,[]),t.Cb(1073742336,_l.a,_l.a,[]),t.Cb(1073742336,p.p,p.p,[]),t.Cb(1073742336,fl.d,fl.d,[]),t.Cb(1073742336,f.a,f.a,[]),t.Cb(1073742336,h.n,h.n,[[2,h.f],[2,C.f]]),t.Cb(1073742336,k.b,k.b,[]),t.Cb(1073742336,h.y,h.y,[]),t.Cb(1073742336,h.w,h.w,[]),t.Cb(1073742336,h.t,h.t,[]),t.Cb(1073742336,xl.g,xl.g,[]),t.Cb(1073742336,Ll.c,Ll.c,[]),t.Cb(1073742336,hl.g,hl.g,[]),t.Cb(1073742336,Cl.c,Cl.c,[]),t.Cb(1073742336,kl.d,kl.d,[]),t.Cb(1073742336,x.a,x.a,[]),t.Cb(1073742336,Il.b,Il.b,[]),t.Cb(1073742336,Al.c,Al.c,[]),t.Cb(1073742336,_.c,_.c,[]),t.Cb(1073742336,Jl.a,Jl.a,[]),t.Cb(1073742336,Ol.f,Ol.f,[]),t.Cb(1073742336,Fl.d,Fl.d,[]),t.Cb(1073742336,Fl.c,Fl.c,[]),t.Cb(1073742336,Dl.b,Dl.b,[]),t.Cb(1073742336,jl.e,jl.e,[]),t.Cb(1073742336,Rl.c,Rl.c,[]),t.Cb(1073742336,gl.i,gl.i,[]),t.Cb(1073742336,Sl.g,Sl.g,[]),t.Cb(1073742336,Bl.i,Bl.i,[]),t.Cb(1073742336,Tl.b,Tl.b,[]),t.Cb(1073742336,Ml.c,Ml.c,[]),t.Cb(1073742336,ql.a,ql.a,[]),t.Cb(1073742336,j.e,j.e,[]),t.Cb(1073742336,h.p,h.p,[]),t.Cb(1073742336,$l.a,$l.a,[]),t.Cb(1073742336,T.c,T.c,[]),t.Cb(1073742336,R.b,R.b,[]),t.Cb(1073742336,A.d,A.d,[]),t.Cb(1073742336,vl.c,vl.c,[]),t.Cb(1073742336,vl.b,vl.b,[]),t.Cb(1073742336,h.A,h.A,[]),t.Cb(1073742336,h.q,h.q,[]),t.Cb(1073742336,yl.d,yl.d,[]),t.Cb(1073742336,El.e,El.e,[]),t.Cb(1073742336,wl.c,wl.c,[]),t.Cb(1073742336,Pl.a,Pl.a,[]),t.Cb(1073742336,O.c,O.c,[]),t.Cb(1073742336,Ul.a,Ul.a,[]),t.Cb(1073742336,zl.h,zl.h,[]),t.Cb(1073742336,Hl.a,Hl.a,[]),t.Cb(1073742336,Vl.b,Vl.b,[]),t.Cb(1073742336,Vl.a,Vl.a,[]),t.Cb(1073742336,H.e,H.e,[]),t.Cb(1073742336,Nl.c,Nl.c,[]),t.Cb(1073742336,d.l,d.l,[]),t.Cb(1073742336,Ql.a,Ql.a,[]),t.Cb(1073742336,Wl.b,Wl.b,[]),t.Cb(1073742336,Gl.d,Gl.d,[]),t.Cb(1073742336,Xl.a,Xl.a,[]),t.Cb(1073742336,Zl.a,Zl.a,[]),t.Cb(1073742336,Kl.n,Kl.n,[[2,Kl.s],[2,Kl.k]]),t.Cb(1073742336,Yl,Yl,[]),t.Cb(1073742336,e,e,[]),t.Cb(256,$.n,"XSRF-TOKEN",[]),t.Cb(256,$.o,"X-XSRF-TOKEN",[]),t.Cb(256,Dl.a,{separatorKeyCodes:[ln.f]},[]),t.Cb(256,h.g,h.k,[]),t.Cb(1024,Kl.i,(function(){return[[{path:"",component:U}]]}),[])])}))}}]);