(self["webpackChunkvue_covid"]=self["webpackChunkvue_covid"]||[]).push([[928],{72928:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"select-city"},[o("div",{staticClass:"title"},[t._v("疫情期间出行防疫政策查询")]),o("van-field",{attrs:{"is-link":"",readonly:"",label:"出发城市",placeholder:"请选择所在地区"},on:{click:function(e){t.show=!0}},model:{value:t.fromCity,callback:function(e){t.fromCity=e},expression:"fromCity"}}),o("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("van-cascader",{attrs:{title:"请选择所在地区",options:t.options},on:{close:function(e){t.show=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1),o("van-field",{attrs:{"is-link":"",readonly:"",label:"到达城市",placeholder:"请选择所在地区"},on:{click:function(e){t.show2=!0}},model:{value:t.toCity,callback:function(e){t.toCity=e},expression:"toCity"}}),o("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}},[o("van-cascader",{attrs:{title:"请选择所在地区",options:t.options},on:{close:function(e){t.show2=!1},finish:t.onFinish2},model:{value:t.cascaderValue2,callback:function(e){t.cascaderValue2=e},expression:"cascaderValue2"}})],1),o("div",{staticClass:"btn"},[o("van-button",{attrs:{square:"",type:"primary",block:""},on:{click:t.goTravelQuery}},[t._v("点击查询")])],1)],1)},i=[],r=o(4367),a=(o(69600),o(21249),o(74916),o(15306),o(41539),o(54747),o(13911)),c=o(34665),s={data:function(){return{show:!1,show2:!1,fromCity:"",toCity:"",fromCode:"",toCode:"",cascaderValue:"",cascaderValue2:"",options:[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}]}},methods:(0,r.Z)((0,r.Z)({onFinish:function(t){var e=t.value,o=t.selectedOptions;this.show=!1,this.fromCode=e,this.fromCity=o.map((function(t){return t.text})).join("/")},onFinish2:function(t){var e=t.value,o=t.selectedOptions;this.toCode=e,this.show2=!1,this.toCity=o.map((function(t){return t.text})).join("/")}},(0,c.OI)("cityInfo",{updateInfo:"UPDATEINFO"})),{},{goTravelQuery:function(){this.updateInfo({FromCode:this.fromCode,ToCode:this.toCode}),this.$router.replace("/CityQuery")}}),mounted:function(){var t=this;a.Z.getTravel().then((function(e){var o=[];e.data.result&&e.data.result.forEach((function(t){var e={};e.text=t.province,e.value=t.province_id,e.children=[],t.citys.forEach((function(t){var o={};o.text=t.city,o.value=t.city_id,e.children.push(o)})),o.push(e)})),t.options=o}))}},l=s,u=o(1001),f=(0,u.Z)(l,n,i,!1,null,"429d696f",null),d=f.exports},49337:function(t,e,o){var n=o(82109),i=o(19781),r=o(53887),a=o(45656),c=o(31236),s=o(86135);n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,o,n=a(t),i=c.f,l=r(n),u={},f=0;while(l.length>f)o=i(n,e=l[f++]),void 0!==o&&s(u,e,o);return u}})},4367:function(t,e,o){"use strict";o.d(e,{Z:function(){return r}});o(47941),o(82526),o(57327),o(41539),o(38880),o(54747),o(49337);var n=o(23796);function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){(0,n.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}}}]);
//# sourceMappingURL=928-legacy.da228d05.js.map