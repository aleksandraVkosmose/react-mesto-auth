(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.7baba3c1.svg"},19:function(e,t,n){e.exports=n(91)},28:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(16),r=n.n(o),c=n(4),i=n(3),l=n(1),s=n.n(l),u=n(0),p=n(18),m=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return n.isLoggedIn?s.a.createElement(t,n):s.a.createElement(u.a,{to:"/sign-in"})},d=s.a.createContext("");var _=function(e){var t=e.name,n=e.buttonText,a=e.title,o=e.children,r=e.isOpen,c=e.onClose,i=e.onSubmit;return s.a.createElement("div",{className:"popup popup-".concat(t," ").concat(r?"popup_opened":"")},s.a.createElement("div",{className:"popup__container"},s.a.createElement("button",{className:"popup__button-close button",type:"button",onClick:c}),s.a.createElement("form",{className:"popup__form popup__form-".concat(t),name:t,onSubmit:i,noValidate:!0},s.a.createElement("h4",{className:"popup__profile popup__profile-".concat(t)},a),o,s.a.createElement("button",{className:"popup__button-save",type:"submit"},n))))};var f=function(e){var t=e.onClose,n=e.onUpdateUser,a=e.onLoading,o=e.isOpen,r=s.a.useContext(d),c=Object(l.useState)(""),u=Object(i.a)(c,2),p=u[0],m=u[1],f=Object(l.useState)(""),h=Object(i.a)(f,2),E=h[0],b=h[1];return Object(l.useEffect)(function(){b(r.name||""),m(r.about||"")},[r,o]),s.a.createElement(_,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:E,about:p})},isOpen:o,onClose:t},s.a.createElement("input",{className:"popup__input popup__input_type_name",id:"name-input",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:E||"",onChange:function(e){b(e.target.value)}}),s.a.createElement("span",{className:"popup__input-error name-input-error"}),s.a.createElement("input",{className:"popup__input popup__input_type_job",id:"job-input",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,value:p||"",onChange:function(e){m(e.target.value)}}),s.a.createElement("span",{className:"popup__input-error job-input-error"}))};var h=function(e){var t=e.onLoading,n=e.onClose,a=e.onUpdateAvatar,o=e.isOpen,r=s.a.useRef(null);return s.a.useEffect(function(){r.current.value=""},[o]),s.a.createElement(_,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:t?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({avatar:r.current.value})},isOpen:o,onClose:n},s.a.createElement("input",{className:"popup__input popup__input_type_avatar",id:"avatar-input",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,onChange:function(){return r.current.value},ref:r}),s.a.createElement("span",{className:"popup__input-error avatar-input-error"}))};var E=function(e){var t=e.onClose,n=e.onAddPlace,a=e.onLoading,o=e.isOpen,r=Object(l.useState)(""),c=Object(i.a)(r,2),u=c[0],p=c[1],m=Object(l.useState)(""),d=Object(i.a)(m,2),f=d[0],h=d[1];return Object(l.useEffect)(function(){p(""),h("")},[o]),s.a.createElement(_,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:u,link:f})},onClose:t,isOpen:o},s.a.createElement("input",{className:"popup__input popup__input_type_place",id:"place-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0,value:u,onChange:function(e){p(e.target.value)}}),s.a.createElement("span",{className:"popup__input-error place-input-error"}),s.a.createElement("input",{className:"popup__input popup__input_type_link",id:"link-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,value:f,onChange:function(e){h(e.target.value)}}),s.a.createElement("span",{className:"popup__input-error link-input-error"}))},b=n(17),g=n.n(b);var v=function(e){var t=e.onSignOut,n=e.headerEmail,o=e.signUp,r=e.signIn,c=e.signOut;return s.a.createElement("header",{className:"header"},s.a.createElement("img",{className:"header__logo",src:g.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e"}),s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"/sign-in",element:s.a.createElement(a.b,{className:"header__link",to:"/sign-up"},o)}),s.a.createElement(u.b,{path:"/sign-up",element:s.a.createElement(a.b,{className:"header__link",to:"sign-in"},r)}),s.a.createElement(u.b,{path:"/*",element:s.a.createElement("div",{className:"header__container"},s.a.createElement("p",{className:"header__email"},n),s.a.createElement(a.b,{className:"header__exit",onClick:t,to:"sign-in"},c))})))};var O=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("p",{className:"footer__autor"},"\xa9 2020 Mesto Russia"))};var N=function(e){var t=e.card,n=e.onCardLike,a=e.onCardDelete,o=e.onCardClick,r=Object(l.useContext)(d),c=t.likes.some(function(e){return e._id===r._id}),i=t.owner._id===r._id,u="element__button-like ".concat(c?"element__button-like_is-active":""),p="element__button-delete ".concat(i?"element__button-delete_is-active":"");return s.a.createElement("article",{className:"element"},s.a.createElement("img",{className:"element__img",alt:t.name,src:t.link,onClick:function(){o(t)}}),i&&s.a.createElement("button",{className:p,type:"button",onClick:function(){a(t)}}),s.a.createElement("div",{className:"element__info"},s.a.createElement("h3",{className:"element__title"},t.name),s.a.createElement("div",{className:"element__like-container"},s.a.createElement("button",{className:u,type:"button",onClick:function(){n(t)}}),s.a.createElement("span",{className:"element__like-count"},t.likes.length))))};var k=function(e){var t=e.cards,n=e.onEditProfile,a=e.onEditAvatar,o=e.onAddPlace,r=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,l=s.a.useContext(d);return s.a.createElement("main",{className:"main"},s.a.createElement("section",{className:"profile"},s.a.createElement("div",{className:"profile__card"},s.a.createElement("img",{className:"profile__avatar",src:l.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),s.a.createElement("button",{className:"profile__avatar-button",type:"button",onClick:function(){a(!0)}})),s.a.createElement("div",{className:"profile__info"},s.a.createElement("h1",{className:"profile__title"},l.name),s.a.createElement("button",{className:"profile__button-edit button",type:"button",onClick:function(){n(!0)}}),s.a.createElement("h2",{className:"profile__subtitle"},l.about)),s.a.createElement("button",{className:"profile__button-add button",type:"button",onClick:function(){o(!0)}})),s.a.createElement("section",{className:"elements","aria-label":"\u0424\u043e\u0442\u043e\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},t.map(function(e){return s.a.createElement(N,{card:e,key:e._id,onCardDelete:i,onCardClick:r,onCardLike:c})})))};var C=function(e){var t=e.card,n=e.onClose;return s.a.createElement("div",{className:"popup popup_photo-card ".concat(t.link?"popup_opened":"")},s.a.createElement("div",{className:"popup__container-card"},s.a.createElement("button",{className:"popup__button-close button popup__button-close-photo",type:"button",onClick:n}),s.a.createElement("img",{className:"popup__img-card",src:t.link,alt:t.name}),s.a.createElement("h4",{className:"popup__title-card"},t.name)))},y=n(6),j=n(7),S=new(function(){function e(t){Object(y.a)(this,e),this._options=t,this._url=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(function(t){return e._handleOriginalResponse(t)})}},{key:"setCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"setLike",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then(function(e){return n._handleOriginalResponse(e)})}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(function(t){return e._handleOriginalResponse(t)})}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(function(e){return t._handleOriginalResponse(e)})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"f7e16f72-6fdb-4cb4-9e4c-1f17e80e3d75","Content-Type":"application/json"}});var L=function(e){var t=e.isLoggedIn,n=e.onRegister,o=Object(l.useState)(""),r=Object(i.a)(o,2),c=r[0],p=r[1],m=Object(l.useState)(""),d=Object(i.a)(m,2),_=d[0],f=d[1];return t?s.a.createElement(u.a,{to:"/*"}):s.a.createElement("section",{className:"login"},s.a.createElement("div",{className:"login__container"},s.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(c,_)},className:"login__form",noValidate:!0,name:"register"},s.a.createElement("input",{className:"login__input",id:"email",name:"email",type:"email",placeholder:"Email",value:c,onChange:function(e){p(e.target.value)},autoComplete:"off"}),s.a.createElement("input",{className:"login__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:_,onChange:function(e){f(e.target.value)},autoComplete:"off"}),s.a.createElement("button",{type:"submit",className:"login__button-save"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),s.a.createElement(a.b,{to:"/sign-in",className:"login__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"))))};var w=function(e){var t=e.isLoggedIn,n=e.onLogin,a=Object(l.useState)(""),o=Object(i.a)(a,2),r=o[0],c=o[1],p=Object(l.useState)(""),m=Object(i.a)(p,2),d=m[0],_=m[1];return t?s.a.createElement(u.a,{to:"/*"}):s.a.createElement("section",{className:"login"},s.a.createElement("div",{className:"login__container"},s.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(r,d)},className:"login__form",noValidate:!0},s.a.createElement("input",{className:"login__input",id:"email",name:"email",type:"email",placeholder:"Email",value:r,onChange:function(e){c(e.target.value)},autoComplete:"off"}),s.a.createElement("input",{className:"login__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d,onChange:function(e){_(e.target.value)},autoComplete:"off"}),s.a.createElement("button",{className:"login__button-save"},"\u0412\u043e\u0439\u0442\u0438"))))},U=new(function(){function e(t){Object(y.a)(this,e),this._options=t,this._url=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"registerUser",value:function(e,t){var n=this;return fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(function(e){return n._handleOriginalResponse(e)})}},{key:"loginUser",value:function(e,t){var n=this;return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(function(e){return n._handleOriginalResponse(e)})}},{key:"checkToken",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}}]),e}())({baseUrl:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}});var T=function(e){var t=e.name,n=e.onClose,a=e.isOpen,o=e.isSuccess;return s.a.createElement("div",{className:"popup popup-".concat(t," ").concat(a?"popup_opened":"")},s.a.createElement("div",{className:"popup__container popup__container-state"},s.a.createElement("button",{className:"popup__button-close button",type:"button",onClick:n}),s.a.createElement("div",{className:"popup__success ".concat(o?"popup__success_type_ok":"popup__success_type_fail")}),s.a.createElement("h4",{className:"popup__title"},o?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")))};var x=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=s.a.useState(!1),r=Object(i.a)(o,2),p=r[0],b=r[1],g=s.a.useState(!1),N=Object(i.a)(g,2),y=N[0],j=N[1],x=s.a.useState({}),R=Object(i.a)(x,2),P=R[0],I=R[1],A=Object(l.useState)({}),D=Object(i.a)(A,2),J=D[0],q=D[1],G=Object(l.useState)(!1),V=Object(i.a)(G,2),z=V[0],B=V[1],H=Object(l.useState)([]),M=Object(i.a)(H,2),F=M[0],K=M[1],Q=s.a.useState(!1),W=Object(i.a)(Q,2),X=W[0],Y=W[1],Z=s.a.useState(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState(!1),ae=Object(i.a)(ne,2),oe=ae[0],re=ae[1],ce=Object(l.useState)(""),ie=Object(i.a)(ce,2),le=ie[0],se=ie[1],ue=Object(u.n)();function pe(){a(!1),b(!1),j(!1),te(!1),I({})}Object(l.useEffect)(function(){S.getUserInfo().then(function(e){return q(e)}).catch(function(e){return console.log(e)}),S.getCards().then(function(e){K(e.map(function(e){return{_id:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner}}))}).catch(function(e){return console.log(e)})},[]);var me=p||n||y||ee||P;return Object(l.useEffect)(function(){function e(e){"Escape"===e.key&&pe()}if(me)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[me]),Object(l.useEffect)(function(){var e=localStorage.getItem("jwt");e&&U.checkToken(e).then(function(e){e&&(re(!0),se(e.data.email),ue("/"))}).catch(function(e){return console.log(e)})},[ue]),s.a.createElement(d.Provider,{value:J},s.a.createElement("div",{className:"page"},s.a.createElement(v,{onSignOut:function(){localStorage.removeItem("jwt"),se(null),re(!1),ue("/sign-in")},headerEmail:le,signUp:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",signIn:"\u0412\u043e\u0439\u0442\u0438",signOut:"\u0412\u044b\u0439\u0442\u0438"}),s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"/sign-up",element:s.a.createElement(L,{onRegister:function(e,t){U.registerUser(e,t).then(function(e){e&&(Y(!0),ue("/sign-in"))}).catch(function(e){Y(!1),console.log(e)}).finally(function(){return te(!0)})}})}),s.a.createElement(u.b,{path:"/sign-in",element:s.a.createElement(w,{onLogin:function(e,t){U.loginUser(e,t).then(function(t){t.token&&(se(e),re(!0),localStorage.setItem("jwt",t.token),ue("/"))}).catch(function(e){Y(!1),te(!0),console.log(e)})}})}),s.a.createElement(u.b,{path:"/",element:s.a.createElement(m,{component:k,onEditProfile:a,onEditAvatar:b,onAddPlace:j,onCardClick:I,onCardDelete:function(e){S.deleteCard(e._id).then(function(){return K(function(t){return t.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.log(e)})},onCardLike:function(e){var t=e.likes.some(function(e){return e._id===J._id});S.setLike(e._id,!t).then(function(t){return K(function(n){return n.map(function(n){return n._id===e._id?t:n})})}).catch(function(e){return console.log(e)})},cards:F,isLoggedIn:oe,path:"/"})}),s.a.createElement(u.b,{path:"*",element:s.a.createElement(u.a,{to:oe?"/":"/sign-in"})})),s.a.createElement(O,null),s.a.createElement(E,{onAddPlace:function(e){B(!0),S.setCard(e).then(function(e){K([e].concat(Object(c.a)(F))),pe()}).catch(function(e){return console.log(e)}).finally(function(){return B(!1)})},isOpen:y,onClose:pe,onLoading:z}),s.a.createElement(f,{isOpen:n,onUpdateUser:function(e){B(!0),S.setUserInfo(e).then(function(e){q(e),pe()}).catch(function(e){return console.log(e)}).finally(function(){return B(!1)})},onClose:pe,onLoading:z}),s.a.createElement(h,{onUpdateAvatar:function(e){B(!0),S.setUserAvatar(e).then(function(e){q(e),pe()}).catch(function(e){return console.log(e)}).finally(function(){return B(!1)})},isOpen:p,onClose:pe,onLoading:z}),s.a.createElement(C,{card:P,onClose:pe}),s.a.createElement(_,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),s.a.createElement(T,{isSuccess:X,isOpen:ee,onClose:pe,name:"success"})))};n(28);r.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(a.a,null,s.a.createElement(x,null))))}},[[19,2,1]]]);
//# sourceMappingURL=main.fdc80b82.chunk.js.map