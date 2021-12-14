(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2dm9m",label:"ContactForm_label__21wVR",input:"ContactForm_input__2feUw"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(18),n(10)),i=n(3),l=n(4),u=n(6),d=n(5),m=(n(19),n(12)),b=n(2),h=n.n(b),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(){return Object(m.a)({},a,c)}))},t.submitNewContact=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.addNewContact(a,c),t.clearForm()},t.clearForm=function(){t.setState((function(){return{name:"",number:""}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.submitNewContact,className:h.a.form,children:[Object(j.jsx)("label",{className:h.a.label,htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange}),Object(j.jsx)("label",{className:h.a.label,htmlFor:"number",children:"Number"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=f,v=n(8),O=n.n(v);var C=function(t){var e=t.id,n=t.name,a=t.number,c=t.deleteFunction;return Object(j.jsxs)("li",{className:O.a.listItem,children:[Object(j.jsx)("p",{children:"".concat(n,": ").concat(a)}),Object(j.jsx)("button",{className:O.a.listBtn,onClick:function(){c(e)},children:"Delete"})]})};var g=function(t){var e=t.contactsList,n=t.deleteContactBtn,a=e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(C,{id:e,name:a,number:c,deleteFunction:n},e)}));return Object(j.jsx)("ul",{children:a})},x=n(9),F=n.n(x);var _=function(t){var e=t.value,n=t.updateFilterFunc;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:F.a.label,htmlFor:"filter",children:"Find contacts by name"}),Object(j.jsx)("input",{className:F.a.input,id:"filter",value:e,onChange:n})]})};var y=function(t){var e=t.msg;return Object(j.jsx)("p",{children:e})},N=n(13),w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.saveContactsToLocalStorage=function(){var e=t.state.contacts;localStorage.setItem("contacts",JSON.stringify(e))},t.addNewContact=function(e,n){t.setState((function(t){var a=t.contacts;if(!a.find((function(t){return t.name===e})))return{contacts:[].concat(Object(s.a)(a),[{id:Object(N.a)(),name:e,number:n}])};alert("".concat(e," is already in contacts."))}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.updateFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacs=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState((function(){var e=t.loadContactsFromLocalStorage();return{contacts:Object(s.a)(e)}}))}},{key:"componentDidUpdate",value:function(){this.saveContactsToLocalStorage()}},{key:"loadContactsFromLocalStorage",value:function(){return JSON.parse(localStorage.getItem("contacts"))}},{key:"render",value:function(){var t=this.getFilteredContacs();console.log(t);var e=this.state.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{addNewContact:this.addNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),t.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{value:e,updateFilterFunc:this.updateFilter}),Object(j.jsx)(g,{contactsList:t,deleteContactBtn:this.deleteContact})]}):Object(j.jsx)(y,{msg:"You seem not to have added any contacts yet!"})]})}}]),n}(a.Component),S=w;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={listItem:"Contact_listItem__2JHwY",listBtn:"Contact_listBtn__1OSL8"}},9:function(t,e,n){t.exports={label:"Filter_label__Zh7qw",input:"Filter_input__MqFRE"}}},[[21,1,2]]]);
//# sourceMappingURL=main.61d0feb4.chunk.js.map