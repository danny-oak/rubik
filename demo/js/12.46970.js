webpackJsonp([12],{240:function(t,e,a){a(322);var v=a(0)(a(267),a(349),"data-v-92a13050",null);t.exports=v.exports},267:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inputs",data:function(){return{val:"this is text",val1:"",val2:"",val3:"",val4:"",val5:""}}}},299:function(t,e,a){e=t.exports=a(60)(),e.push([t.i,"h3[data-v-92a13050]{margin:2rem 0}","",{version:3,sources:["/./example/views/Input.vue"],names:[],mappings:"AACA,oBACE,aAAe,CAChB",file:"Input.vue",sourcesContent:["\nh3[data-v-92a13050] {\n  margin: 2rem 0;\n}"],sourceRoot:"webpack://"}])},322:function(t,e,a){var v=a(299);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);a(228)("6afc34de",v,!0)},349:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h1",[t._v("输入 input")]),t._v(" "),a("p",[t._v("\n    TODO: 添加错误提示\n  ")]),t._v(" "),a("h2",[t._v("例子")]),t._v(" "),a("h3",[t._v("Basic")]),t._v(" "),a("r-input",{attrs:{label:"this is label",name:"input1-name"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),t._v(" "),a("r-input",{attrs:{label:"this is label",name:"input2-name"},model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}}),t._v(" "),a("r-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),a("h3",[t._v("密码")]),t._v(" "),a("r-row",[a("r-col",{attrs:{xs6:""}},[a("r-input",{attrs:{type:"password",label:"输入密码"}})],1),t._v(" "),a("r-col",{attrs:{xs6:""}},[a("r-input",{attrs:{type:"password",placeholder:"password"}})],1)],1),t._v(" "),a("h3",[t._v("带 placeholder")]),t._v(" "),a("r-input",{attrs:{label:"this is another label",placeholder:"这里是placeholder"},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}}),t._v(" "),a("h3",[t._v("带 icon")]),t._v(" "),a("r-input",{attrs:{type:"password",icon:"security",label:"Password"},model:{value:t.val3,callback:function(e){t.val3=e},expression:"val3"}}),t._v(" "),a("r-row",[a("r-col",{attrs:{xs6:""}},[a("r-input",{attrs:{icon:"account_circle",label:"this is another label"},model:{value:t.val4,callback:function(e){t.val4=e},expression:"val4"}})],1),t._v(" "),a("r-col",{attrs:{xs6:""}},[a("r-input",{attrs:{icon:"phone",placeholder:"telphone",label:"this is another label"},model:{value:t.val5,callback:function(e){t.val5=e},expression:"val5"}})],1)],1),t._v(" "),a("h2",[t._v("API")]),t._v(" "),a("h3",[t._v("props")]),t._v(" "),t._m(0),t._v(" "),a("Markup",{attrs:{lang:"html"}},[t._v('\n    <r-input label="this is label" v-model="val" name="input1-name"></r-input>\n    <r-input type="password" label="输入密码"></r-input>\n    <r-input label="this is another label"  placeholder="这里是placeholder"></r-input>\n    <r-input type="password" icon="security" label="Password" ></r-input>\n  ')])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"bordered responsive-table"},[a("thead",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("input 输入框类型")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("text")])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("label 标签")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("input id 属性，对应 label 标签 for 属性")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("input name 属性")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("input 的 placeholder")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("输入框左侧的 icon")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("输入框是否可用")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("v-model 指令")]),t._v(" "),a("td",[t._v("和 input 的 value 双向绑定")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])])])])}]}}});