(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{276:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("77f4c5a8",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("10e8a9fe",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n(174),n(19),n(9),n(6),n(11),n(36),n(5);var o=n(3),r=n(290),l=n.n(r),c=n(105),d=n(104);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){localStorage.clear(),$nuxt._router.push("/login"),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:l.a}},x=(n(280),n(39)),m=n(43),h=n.n(m),w=n(272),_=n(268),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"7640787c",null),k=component.exports;h()(component,{VBtn:w.a,VIcon:_.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:k},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(282),n(607)),j=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=j.exports;h()(j,{VBottomNavigation:O.a,VBtn:w.a,VIcon:_.a})},280:function(t,e,n){"use strict";var o=n(276);n.n(o).a},281:function(t,e,n){(e=n(22)(!1)).push([t.i,".container-page[data-v-7640787c]{z-index:2}#btnLogout[data-v-7640787c]{margin-top:5px}.container-page>main[data-v-7640787c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-7640787c],.container-page>main[data-v-7640787c]{display:-webkit-box;display:flex}#avatar[data-v-7640787c]{margin-right:1rem}.text-menu[data-v-7640787c]{text-transform:uppercase}h1[data-v-7640787c]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-7640787c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-7640787c]{margin-left:0}#close-btn[data-v-7640787c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-7640787c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-7640787c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-7640787c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-7640787c]{width:100%}.item-menu[data-v-7640787c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-7640787c],.item-menu div[data-v-7640787c]{display:-webkit-box;display:flex}.item-menu div[data-v-7640787c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-7640787c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-7640787c]{margin-bottom:0!important}h4[data-v-7640787c]{font-weight:600}@media(max-width:320px){.item-menu[data-v-7640787c]{height:42px}}",""]),t.exports=e},282:function(t,e,n){"use strict";var o=n(277);n.n(o).a},283:function(t,e,n){(e=n(22)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},298:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5c8fbe94",content,!0,{sourceMap:!1})},299:function(t,e,n){(e=n(22)(!1)).push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:#fff}.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.v-textarea textarea{-webkit-box-flex:1;flex:1 1 auto;line-height:18px;max-width:100%;min-height:32px;outline:none;padding:7px 0 8px;width:100%}.v-textarea .v-text-field__prefix{padding-top:4px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined textarea,.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea{margin-top:12px}.v-textarea.v-text-field--box.v-text-field--outlined .v-label,.v-textarea.v-text-field--box.v-text-field--single-line .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label{top:18px}.v-textarea.v-text-field--solo{-webkit-box-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:16px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),t.exports=e},322:function(t,e,n){"use strict";n(19),n(9),n(6),n(5),n(11);var o=n(3),r=(n(52),n(298),n(307)),l=n(40);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=Object(l.a)(r.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){r.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},397:function(t,e,n){var content=n(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2fea4c72",content,!0,{sourceMap:!1})},398:function(t,e){},578:function(t,e,n){"use strict";var o=n(397);n.n(o).a},579:function(t,e,n){(e=n(22)(!1)).push([t.i,"h1[data-v-6431fbe2]{font-weight:600;font-size:16px;line-height:36px;text-transform:uppercase;text-align:center;color:#60c}@media screen and (max-width:20.625em){h1[data-v-6431fbe2]{font-size:14px}}h3[data-v-6431fbe2]{font-weight:900;font-size:1em;line-height:24px;text-transform:uppercase;text-align:left;color:#60c}.main-container[data-v-6431fbe2]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:2em 3em 78px 2em}.v-input[data-v-6431fbe2]{width:100%;height:50px}.save-button[data-v-6431fbe2]{height:2.75em;width:100%;font-weight:600;margin-top:auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;color:#fff}.v-button__content[data-v-6431fbe2]{font-weight:900;font-size:12px;line-height:14px}.new-parts-span[data-v-6431fbe2]{font-weight:600;font-size:16px;line-height:20px;color:#656565;width:100%;text-align:center;display:inline-block}.back-button[data-v-6431fbe2]{min-width:0!important;float:left}.v-label[data-v-6431fbe2]{color:#60c}.part-form[data-v-6431fbe2]{margin-top:1.5em}[data-v-6431fbe2] .v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c}[data-v-6431fbe2] .v-label{font-weight:600;font-size:14px;color:#aa56ff}[data-v-6431fbe2] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff}[data-v-6431fbe2] .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:#ff5252}[data-v-6431fbe2] .v-messages__message{text-align:right;margin-top:-.3em}",""]),t.exports=e},580:function(t,e,n){"use strict";var o=n(398),r=n.n(o);e.default=r.a},639:function(t,e,n){"use strict";n.r(e);n(27);var o,r=n(4),l=n(279),c=n(123),d={components:{NavigationBar:l.a},data:function(){return{title:"Editar Aula",status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",titleRules:[function(title){return!!title||"Digite um título"}],descriptionRules:[function(t){return!!t||"Digite uma descrição"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Altere ou reestruture a Aula de um Curso da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},methods:{submit:function(){var t=this;this.$refs.lesson.validate()?(this.animateForm(!0),this.lesson.lesson=this.$route.params.lessonId,c.a.put("/api/v1/lesson",this.lesson.id,this.lesson).then((function(e){t.loading=!1,t.showConfirmSnack("Aula salva! ;)","success")})).catch((function(e){t.showConfirmSnack("Ocorreu um erro.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},showConfirmSnack:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},asyncData:(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.store,e.data,n=e.params,console.log(n.id),t.next=4,c.a.getById("/api/v1/lesson",n.lessonId);case 4:return o=t.sent,t.next=7,c.a.getById("/api/v1/part/lesson",n.lessonId);case 7:return r=t.sent,t.abrupt("return",{lesson:o.data,parts:r.data});case 9:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),created:function(){this.lesson.course=this.$route.params.courseId}},f=(n(578),n(39)),v=n(580),x=n(43),m=n.n(x),h=n(272),w=n(310),_=n(598),k=n(268),y=n(300),O=n(273),j=n(307),I=n(322),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{id:"page"}},[n("v-flex",{ref:"flex",staticClass:"main-container"},[n("h1",[n("n-link",{attrs:{to:"../../edit"}},[n("v-btn",{staticClass:"back-button",attrs:{text:"",icon:"",color:"primary"}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v("\n      Gerenciar meus cursos\n    ")],1),t._v(" "),n("v-form",{ref:"lesson",staticClass:"lesson-form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("h3",[t._v("Aula")]),t._v(" "),n("v-text-field",{attrs:{rules:t.titleRules,"margin-bottom":!t.titleRules,color:"#60c",label:"Título",required:""},model:{value:t.lesson.title,callback:function(e){t.$set(t.lesson,"title",e)},expression:"lesson.title"}}),t._v(" "),n("v-textarea",{attrs:{rules:t.descriptionRules,"margin-bottom":!t.titleRules,color:"#60c",label:"Descrição",rows:"1",required:""},model:{value:t.lesson.description,callback:function(e){t.$set(t.lesson,"description",e)},expression:"lesson.description"}})],1),t._v(" "),n("resources-list",{attrs:{name:"Parte",resources:t.parts,redirect:"true",path:"part"}}),t._v(" "),t.parts.length?t._e():n("span",{staticClass:"new-parts-span"},[t._v("Favor, adicionar uma parte")]),t._v(" "),n("v-btn",{staticClass:"save-button",attrs:{color:"primary"},on:{click:t.submit}},[t._v("Salvar")])],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n    "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Fechar\n    ")])],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"6431fbe2",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;m()(component,{VBtn:h.a,VFlex:w.a,VForm:_.a,VIcon:k.a,VLayout:y.a,VSnackbar:O.a,VTextField:j.a,VTextarea:I.a})}}]);