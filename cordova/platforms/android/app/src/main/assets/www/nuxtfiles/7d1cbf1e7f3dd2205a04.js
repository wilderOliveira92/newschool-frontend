(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(174),n(21),n(11),n(7),n(13),n(32),n(6);var o=n(3),r=n(290),c=n.n(r),l=n(105),d=n(104);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},f=(n(281),n(39)),h=n(43),x=n.n(h),k=n(272),w=n(267),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"33e90538",null),_=component.exports;x()(component,{VBtn:k.a,VIcon:w.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:_},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},j=(n(283),n(739)),O=Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=O.exports;x()(O,{VBottomNavigation:j.a,VBtn:k.a,VIcon:w.a})},281:function(t,e,n){"use strict";var o=n(277);n.n(o).a},282:function(t,e,n){(e=n(23)(!1)).push([t.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),t.exports=e},283:function(t,e,n){"use strict";var o=n(278);n.n(o).a},284:function(t,e,n){(e=n(23)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},362:function(t,e,n){var content=n(643);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("dd7601ce",content,!0,{sourceMap:!1})},635:function(t,e,n){t.exports=n.p+"img/fff49bd.jpg"},636:function(t,e,n){t.exports=n.p+"img/b89c6bc.jpg"},637:function(t,e,n){t.exports=n.p+"img/98560ae.jpg"},638:function(t,e,n){t.exports=n.p+"img/7d57cb5.jpg"},639:function(t,e,n){t.exports=n.p+"img/9cc2f41.jpg"},640:function(t,e,n){t.exports=n.p+"img/e0c3a2a.jpg"},641:function(t,e,n){t.exports=n.p+"img/3150eef.jpg"},642:function(t,e,n){"use strict";var o=n(362);n.n(o).a},643:function(t,e,n){(e=n(23)(!1)).push([t.i,".container[data-v-b0b9184e]{overflow-y:auto;max-width:600px}",""]),t.exports=e},753:function(t,e,n){"use strict";n.r(e);var o={components:{NavigationBar:n(280).a}},r=(n(642),n(39)),c=n(43),l=n.n(c),d=n(299),m=n(775),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(635),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(636),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(637),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(638),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(639),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(640),height:"100%"}})],1),this._v(" "),e("v-card",[e("v-img",{staticClass:"grey darken-4",attrs:{src:n(641),height:"100%"}})],1),this._v(" "),e("navigation-bar")],1)}),[],!1,null,"b0b9184e",null);e.default=component.exports;l()(component,{VCard:d.a,VImg:m.a})}}]);