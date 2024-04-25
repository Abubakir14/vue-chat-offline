(function(){"use strict";var e={2876:function(e,s,t){var r=t(6848),n=function(){var e=this,s=e._self._c;return s("div",{class:{"dark-mode":e.darkMode},attrs:{id:"app"}},[s("router-view")],1)},a=[],o={name:"App",data(){return{darkMode:!1}}},i=o,u=t(1656),c=(0,u.A)(i,n,a,!1,null,null,null),l=c.exports,d=t(6178),m=function(){var e=this,s=e._self._c;return s("div",{staticClass:"chat-container",class:{"dark-mode":e.darkMode}},[s("div",{staticClass:"users"},e._l(e.filteredUsers,(function(t,r){return s("div",{key:r,staticClass:"user",class:{selected:e.selectedUser===r},on:{click:function(s){return e.selectUser(r)}}},[s("div",[e._v(e._s(t.name))]),s("div",[e._v(e._s(t.status))])])})),0),s("div",{staticClass:"messages-container"},[s("div",{staticClass:"messages"},e._l(e.selectedUserMessages,(function(t,r){return s("div",{key:r,staticClass:"message"},[e._v(" "+e._s(t.text)+" ")])})),0),s("div",{staticClass:"input-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticStyle:{"padding-left":"20px"},attrs:{type:"text",placeholder:"write message..."},domProps:{value:e.newMessage},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.sendMessage.apply(null,arguments)},input:function(s){s.target.composing||(e.newMessage=s.target.value)}}}),s("button",{on:{click:e.sendMessage}},[e._v("Send")])])])])},h=[],f=(t(4114),{name:"ChatRoom",props:{darkMode:Boolean},data(){return{newMessage:"",selectedUser:null,users:[]}},computed:{filteredUsers(){return null===this.selectedUser?this.users:this.users.filter(((e,s)=>s!==this.selectedUser))},selectedUserMessages(){return null!==this.selectedUser?this.users[this.selectedUser].messages:[]}},methods:{sendMessage(){if(""!==this.newMessage.trim()){const e={text:this.newMessage},s=this.users[this.selectedUser];s.messages.push(e),this.saveMessageToStorage(s.name,e),this.newMessage=""}},selectUser(e){this.selectedUser=e},saveMessageToStorage(e,s){const t=JSON.parse(localStorage.getItem(e))||[];t.push(s),localStorage.setItem(e,JSON.stringify(t))},handleStorageEvent(e){const{key:s,newValue:t}=e;if(s&&t){const e=this.users[this.selectedUser]?.name;if(e&&s===e){const e=JSON.parse(t);this.users[this.selectedUser].messages=e}}}},mounted(){const e=JSON.parse(localStorage.getItem("selectedUser"));if(e){const s=JSON.parse(localStorage.getItem("users"))||[],t=s.findIndex((s=>s.name===e.name));-1!==t?this.selectedUser=t:this.$router.push({path:"/home"}),this.users=s}else this.$router.push({path:"/home"});window.addEventListener("storage",this.handleStorageEvent)},beforeUnmount(){window.removeEventListener("storage",this.handleStorageEvent)},created(){const e=this.users[this.selectedUser]?.name;if(e){const s=JSON.parse(localStorage.getItem(e))||[];this.users[this.selectedUser].messages.push(...s)}},watch:{selectedUser(e){const s=this.users[e]?.name;if(s){const t=JSON.parse(localStorage.getItem(s))||[];this.users[e].messages=t}}}}),p=f,g=(0,u.A)(p,m,h,!1,null,"7f06799a",null),v=g.exports,y=function(){var e=this,s=e._self._c;return s("div",{staticClass:"user-selection"},[s("h1",[e._v("Select User")]),e._l(e.users,(function(t,r){return s("div",{key:r,staticClass:"user",on:{click:function(s){return e.selectUser(t)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)},S=[],U={name:"UserSelection",data(){return{users:[{name:"Jack",status:"*out*"},{name:"BIBER",status:"*meter*"},{name:"NEDO",status:"*mimo*"},{name:"Manu",status:"*mimo*",messages:[]}]}},methods:{selectUser(e){this.$store&&this.$store.commit&&this.$store.commit("setSelectedUser",e),localStorage.setItem("selectedUser",JSON.stringify(e)),this.$router.push({path:"/chat"})}}},w=U,_=(0,u.A)(w,y,S,!1,null,"630f662c",null),k=_.exports;r.Ay.config.productionTip=!1,r.Ay.use(d.Ay);const O=[{path:"/",redirect:"/home"},{path:"/home",component:k},{path:"/chat",name:"chat",component:v,props:!0}],M=new d.Ay({mode:"history",routes:O}),b=[{name:"Jack",status:"*out*",messages:[]},{name:"BIBER",status:"*meter*",messages:[]},{name:"NEDO",status:"*mimo*",messages:[]},{name:"Manu",status:"*mimo*",messages:[]}];localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(b)),new r.Ay({router:M,render:e=>e(l)}).$mount("#app")}},s={};function t(r){var n=s[r];if(void 0!==n)return n.exports;var a=s[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(s,r,n,a){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(l--,1);var c=n();void 0!==c&&(s=c)}}return s}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,n,a]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,r){var n,a,o=r[0],i=r[1],u=r[2],c=0;if(o.some((function(s){return 0!==e[s]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(u)var l=u(t)}for(s&&s(r);c<o.length;c++)a=o[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkmy_chat_apps"]=self["webpackChunkmy_chat_apps"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(2876)}));r=t.O(r)})();
//# sourceMappingURL=app.9e9c056c.js.map