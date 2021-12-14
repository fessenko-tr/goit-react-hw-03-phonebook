(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__3dn11",label:"ContactForm_label__3cWTv",input:"ContactForm_input__2115s"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(18),n(12)),s=n(3),l=n(4),u=n(6),d=n(5),m=(n(19),n(11)),b=n(2),h=n.n(b),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(){return Object(m.a)({},a,c)}))},t.submitNewContact=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.addNewContact(a,c),t.clearForm()},t.clearForm=function(){t.setState((function(){return{name:"",number:""}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.submitNewContact,className:h.a.form,children:[Object(j.jsx)("label",{className:h.a.label,htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange}),Object(j.jsx)("label",{className:h.a.label,htmlFor:"number",children:"Number"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=f,C=n(8),v=n.n(C);var O=function(t){var e=t.id,n=t.name,a=t.number,c=t.deleteFunction;return Object(j.jsxs)("li",{className:v.a.listItem,children:[Object(j.jsx)("p",{children:"".concat(n,": ").concat(a)}),Object(j.jsx)("button",{className:v.a.listBtn,onClick:function(){c(e)},children:"Delete"})]})};var F=function(t){var e=t.contactsList,n=t.deleteContactBtn,a=e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(O,{id:e,name:a,number:c,deleteFunction:n},e)}));return Object(j.jsx)("ul",{children:a})},x=n(9),g=n.n(x);var _=function(t){var e=t.value,n=t.updateFilterFunc;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:g.a.label,htmlFor:"filter",children:"Find contacts by name"}),Object(j.jsx)("input",{className:g.a.input,id:"filter",value:e,onChange:n})]})},N=n(13),w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e,n){t.setState((function(t){var a=t.contacts;if(!a.find((function(t){return t.name===e})))return{contacts:[].concat(Object(o.a)(a),[{id:Object(N.a)(),name:e,number:n}])};alert("".concat(e," is already in contacts."))}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.updateFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacs=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacs(),e=this.state.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{addNewContact:this.addNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(_,{value:e,updateFilterFunc:this.updateFilter}),Object(j.jsx)(F,{contactsList:t,deleteContactBtn:this.deleteContact})]})}}]),n}(a.Component),y=w,A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),A()},8:function(t,e,n){t.exports={listItem:"Contact_listItem__2DE1M",listBtn:"Contact_listBtn__1TP5z"}},9:function(t,e,n){t.exports={label:"Filter_label__24FHL",input:"Filter_input__lzasv"}}},[[21,1,2]]]);
//# sourceMappingURL=main.9b8c8e32.chunk.js.map