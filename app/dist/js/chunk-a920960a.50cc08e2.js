(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a920960a"],{2699:function(t,n,e){},"444e":function(t,n,e){"use strict";e("2699")},9800:function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list row"},[e("div",{staticClass:"col-md-6"},[e("h4",[t._v("Contacts List")]),e("ul",{staticClass:"list-group"},t._l(t.contacts,(function(n,c){return e("li",{key:c,staticClass:"list-group-item",class:{active:c==t.currentIndex},on:{click:function(e){return t.setActiveContact(n,c)}}},[t._v(" "+t._s(n.firstname)+" ")])})),0)]),e("div",{staticClass:"col-md-6"},[t.currentContact._id?e("div",[e("h4",[t._v("Contact")]),e("div",[t._m(0),t._v(" "+t._s(t.currentContact.firstname)+" ")]),e("div",[t._m(1),t._v(" "+t._s(t.currentContact.lastname)+" ")]),e("div",[t._m(2),t._v(" "+t._s(t.currentContact.email)+" ")]),e("div",[t._m(3),t._v(" "+t._s(t.currentContact.country)+" ")]),e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:function(n){return t.goToEdit(t.currentContact._id)}}},[t._v("Edit")])]):e("div",[e("br"),e("p",[t._v("Please click on a Contact...")])])])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",[e("strong",[t._v("First Name:")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",[e("strong",[t._v("Last Name:")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",[e("strong",[t._v("Email:")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",[e("strong",[t._v("Country:")])])}],r=e("d4ec"),s=e("bee2"),i=e("262e"),o=e("2caf"),u=e("9ab4"),l=e("1b40"),v=e("6b12"),_=function(t){Object(i["a"])(e,t);var n=Object(o["a"])(e);function e(){var t;return Object(r["a"])(this,e),t=n.apply(this,arguments),t.contacts=[],t.currentContact={},t.currentIndex=-1,t}return Object(s["a"])(e,[{key:"retrieveContacts",value:function(){var t=this;v["a"].getAll().then((function(n){t.contacts=n.data,console.log("all the contacts"),console.log(n.data)})).catch((function(t){console.log(t)}))}},{key:"refreshList",value:function(){this.retrieveContacts(),this.currentContact={},this.currentIndex=-1}},{key:"setActiveContact",value:function(t,n){this.currentContact=t,this.currentIndex=n}},{key:"goToEdit",value:function(t){this.$router.push("/contacts/"+t)}},{key:"mounted",value:function(){this.retrieveContacts()}}]),e}(l["b"]);_=Object(u["a"])([l["a"]],_);var f=_,d=f,b=(e("444e"),e("2877")),h=Object(b["a"])(d,c,a,!1,null,"de8c6e12",null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-a920960a.50cc08e2.js.map