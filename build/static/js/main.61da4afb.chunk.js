(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{30:function(t,e,n){t.exports={contactform:"ContactForm_contactform__1jNwu"}},64:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(14),u=n(10),i=n(2),l=n(28),d=n.n(l),b=n(3),j=n(5),f=n(11),p=n.n(f);p.a.defaults.baseURL="http://localhost:4040";var h,O,C=Object(i.b)("contacts/addContactRequest"),m=Object(i.b)("contacts/addContactSuccess"),v=Object(i.b)("contacts/addContactError"),g=Object(i.b)("contacts/deleteContactRequest"),S=Object(i.b)("contacts/deleteContactSuccess"),y=Object(i.b)("contacts/deleteContactError"),x=Object(i.b)("contacts/fetchContactRequest"),A=Object(i.b)("contacts/fetchContactSuccess"),q=Object(i.b)("contacts/fetchContactError"),k={filterSet:Object(i.b)("app/setFilterArr"),addContactRequest:C,addContactSuccess:m,addContactError:v,deleteContactRequest:g,deleteContactSuccess:S,deleteContactError:y,fetchContactRequest:x,fetchContactSuccess:A,fetchContactError:q},E=n(18),R=n.n(E),w=n(29),F=function(){return function(){var t=Object(w.a)(R.a.mark((function t(e){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(k.fetchContactRequest()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(k.fetchContactSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(k.deleteContactError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},L=function(t){return function(e){e(k.addContactRequest()),p.a.post("/contacts",t).then((function(t){var n=t.data;return e(k.addContactSuccess(n))})).catch((function(t){return e(k.addContactError(t))}))}},D=function(t){return function(e){e(k.deleteContactRequest()),p.a.delete("/contacts/".concat(t)).then((function(){return e(k.deleteContactSuccess(t))})).catch((function(t){return e(k.deleteContactError(t))}))}},I=Object(i.c)([],(h={},Object(b.a)(h,k.fetchContactSuccess,(function(t,e){return e.payload})),Object(b.a)(h,k.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(b.a)(h,L,(function(t,e){e.type;var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?(alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!"),t):[].concat(Object(u.a)(t),[n])})),Object(b.a)(h,k.deleteContactSuccess,(function(t,e){e.types;var n=e.payload,c=t.filter((function(t){return t.id!==n}));return Object(u.a)(c)})),h)),N=Object(i.c)(!1,(O={},Object(b.a)(O,k.addContactRequest,(function(){return!0})),Object(b.a)(O,k.addContactSuccess,(function(){return!1})),Object(b.a)(O,k.addContactError,(function(){return!1})),Object(b.a)(O,k.deleteContactRequest,(function(){return!0})),Object(b.a)(O,k.deleteContactSuccess,(function(){return!1})),Object(b.a)(O,k.deleteContactError,(function(){return!1})),Object(b.a)(O,k.fetchContactRequest,(function(){return!0})),Object(b.a)(O,k.fetchContactSuccess,(function(){return!1})),Object(b.a)(O,k.fetchContactError,(function(){return!1})),O)),T=Object(i.c)("",Object(b.a)({},k.filterSet,(function(t,e){return e.payload}))),z=Object(j.b)({contacts:I,filters:T,loading:N});console.log(Object(i.d)());var V=[].concat(Object(u.a)(Object(i.d)()),[d.a]),J=Object(i.a)({reducer:{app:z},middleware:V,devTools:!1}),M=n(6),U=n(7),Z=n(9),_=n(8),B=n(30),H=n.n(B),P=n(1),$=function(t){Object(Z.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(M.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(b.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.onSubmitData(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(U.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{className:H.a.contactform,children:Object(P.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(P.jsxs)("label",{children:["Name",Object(P.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(P.jsxs)("label",{children:["Number",Object(P.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(P.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),G=n(31),K=function(t){Object(Z.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(M.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).deleteId=function(e){t.props.del(e)},t.createList=function(){return t.props.contacts.map((function(e){return Object(P.jsxs)("li",{id:e.id,children:["".concat(e.name,": ").concat(e.number),Object(P.jsx)("button",{"data-id":e.id,onClick:function(){return t.deleteId(e.id)},children:"Delete"})]},Object(G.uuid)())}))},t}return Object(U.a)(n,[{key:"render",value:function(){return Object(P.jsx)("ul",{children:this.createList()})}}]),n}(c.Component);K.defaultProps={contacts:[]};var Q=K,W=function(t){Object(Z.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(M.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).setFilterValue=function(e){var n=e.currentTarget.value.toUpperCase();t.props.setFilterToState(n)},t}return Object(U.a)(n,[{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Find contacts by name"}),Object(P.jsx)("input",{onChange:this.setFilterValue})]})}}]),n}(c.Component),X=n(13),Y=function(t){return t.app.filters},tt=function(t){return t.app.contacts},et={getIsLoading:function(t){return t.app.loading},getFilter:Y,getContacts:tt,getVisibleFilterArray:Object(X.a)([tt,Y],(function(t,e){var n=t.filter((function(t){return t.name.toUpperCase().includes(e)}));return Object(u.a)(n)}))},nt=function(t){Object(Z.a)(n,t);var e=Object(_.a)(n);function n(){return Object(M.a)(this,n),e.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return console.log(this.props.contacts),console.log(this.props.filter),console.log(this.props.visibleArray),Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)("h1",{children:"Phonebook"}),this.props.isLoadingContacts&&Object(P.jsx)("h2",{children:"Loading ..."}),Object(P.jsx)($,{onSubmitData:this.props.formSubmitHandler}),Object(P.jsx)("h1",{children:"Contacts"}),Object(P.jsx)(W,{setFilterToState:this.props.filterSet}),Object(P.jsx)(Q,{contacts:this.props.visibleArray,del:this.props.contactDelete})]})}}]),n}(c.Component),ct=Object(s.b)((function(t){return{isLoadingContacts:et.getIsLoading(t),contacts:et.getContacts(t),filter:et.getFilter(t),visibleArray:et.getVisibleFilterArray(t)}}),(function(t){return{fetchContacts:function(){return t(F())},formSubmitHandler:function(e){return t(L(e))},contactDelete:function(e){return t(D(e))},filterSet:function(e){return t(k.filterSet(e))}}}))(nt);o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(s.a,{store:J,children:Object(P.jsx)(ct,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.61da4afb.chunk.js.map