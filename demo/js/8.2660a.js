webpackJsonp([8],{245:function(e,d,a){a(307);var r=a(0)(a(272),a(330),"data-v-171ca389",null);e.exports=r.exports},272:function(e,d,a){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default={name:"radios",data:function(){return{gender:"男",color:""}}}},284:function(e,d,a){d=e.exports=a(60)(),d.push([e.i,"h3[data-v-171ca389]{margin:2rem 0}","",{version:3,sources:["/./example/views/Radio.vue"],names:[],mappings:"AACA,oBACE,aAAe,CAChB",file:"Radio.vue",sourcesContent:["\nh3[data-v-171ca389] {\n  margin: 2rem 0;\n}"],sourceRoot:"webpack://"}])},307:function(e,d,a){var r=a(284);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(228)("dd02f392",r,!0)},330:function(e,d){e.exports={render:function(){var e=this,d=e.$createElement,a=e._self._c||d;return a("article",[a("h1",[e._v("单选 Radio")]),e._v(" "),a("h2",[e._v("例子")]),e._v(" "),a("h3",[e._v("Basic")]),e._v(" "),a("r-radio",{attrs:{id:"gender-male",name:"gender",value:"男",label:"男"},model:{value:e.gender,callback:function(d){e.gender=d},expression:"gender"}}),e._v(" "),a("r-radio",{attrs:{id:"gender-female",name:"gender",value:"女",label:"女"},model:{value:e.gender,callback:function(d){e.gender=d},expression:"gender"}}),e._v(" "),a("p",[e._v("选中的性别："+e._s(e.gender))]),e._v(" "),a("r-radio",{attrs:{id:"checked-yes",name:"checked",label:"默认选中",checked:""}}),e._v(" "),a("h3",[e._v("圆点")]),e._v(" "),a("r-radio",{attrs:{id:"color-b",name:"color",dot:"",value:"黑",label:"黑色"},model:{value:e.color,callback:function(d){e.color=d},expression:"color"}}),e._v(" "),a("r-radio",{attrs:{id:"color-w",name:"color",dot:"",value:"白",label:"白色"},model:{value:e.color,callback:function(d){e.color=d},expression:"color"}}),e._v(" "),a("p",[e._v("选中的颜色："+e._s(e.color))]),e._v(" "),a("h3",[e._v("disabled")]),e._v(" "),a("r-radio",{attrs:{id:"d1",name:"d1",label:"disabled 选中 圆点",dot:"",checked:""}}),e._v(" "),a("r-radio",{attrs:{id:"d2",name:"d2",label:"disabled 选中",disabled:"",checked:""}}),e._v(" "),a("r-radio",{attrs:{id:"d3",name:"d3",label:"disabled 未选中",disabled:""}}),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("props")]),e._v(" "),e._m(0),e._v(" "),a("Markup",{attrs:{lang:"html"}},[e._v('\n    <r-radio id="gender-male" name="gender" v-model="gender" value="男" label="男"></r-radio>\n    <r-radio id="gender-female" name="gender" v-model="gender" value="女" label="女"></r-radio>\n    <r-radio id="checked-yes" name="checked" label="默认选中" checked></r-radio>\n\n    <r-radio id="color-b" name="color" dot label="黑色"></r-radio>\n    <r-radio id="color-w" name="color" dot label="白色"></r-radio>\n\n    <r-radio id="d1" name="d1" label="disabled 选中 圆点" dot checked ></r-radio>\n    <r-radio id="d2" name="d2" label="disabled 选中" disabled checked></r-radio>\n    <r-radio id="d3" name="d3" label="disabled 未选中" disabled></r-radio>\n  ')]),e._v(" "),a("Markup",{attrs:{lang:"js"}},[e._v("\n    export default {\n      data(){\n        return {\n          gender: '男',\n          color: '',\n        }\n      }\n    }\n  ")])],1)},staticRenderFns:[function(){var e=this,d=e.$createElement,a=e._self._c||d;return a("table",{staticClass:"bordered responsive-table"},[a("thead",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("label")]),e._v(" "),a("td",[e._v("label 标签")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("id")]),e._v(" "),a("td",[e._v("input[type=radio] id 属性，对应 label 标签 for 属性")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("name")]),e._v(" "),a("td",[e._v("input[type=radio] name 属性")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("checked")]),e._v(" "),a("td",[e._v("radio 是否选中")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("disabled")]),e._v(" "),a("td",[e._v("radio 是否可用")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("value")]),e._v(" "),a("td",[e._v("input[type=radio] 的 value 属性")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("v-model 指令")]),e._v(" "),a("td",[e._v("和 input[type=radio] 的 value 双向绑定")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])])])])}]}}});