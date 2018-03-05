webpackJsonp([10],{242:function(e,r,t){t(310);var o=t(0)(t(269),t(333),"data-v-3e30c516",null);e.exports=o.exports},269:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"loaders",data:function(){return{type:{normal:!1,half:!1,reverse:!1,bar:!1,round:!1,barReverse:!1,double:!1}}},methods:{showLoader:function(e){var r=this;this.type[e]=!0,setTimeout(function(t){r.type[e]=!1},1500)}}}},287:function(e,r,t){r=e.exports=t(60)(),r.push([e.i,".loader-box[data-v-3e30c516]{margin-bottom:10px}","",{version:3,sources:["/./example/views/Loader.vue"],names:[],mappings:"AACA,6BACE,kBAAoB,CACrB",file:"Loader.vue",sourcesContent:["\n.loader-box[data-v-3e30c516] {\n  margin-bottom: 10px;\n}"],sourceRoot:"webpack://"}])},310:function(e,r,t){var o=t(287);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(228)("63ccd254",o,!0)},333:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("article",[t("h1",[e._v("加载 Loader")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("例子")]),e._v(" "),t("h3",[e._v("Default")]),e._v(" "),t("section",{staticClass:"loader-box"},[t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("normal")}}},[e._v("Normal")]),e._v(" "),t("r-loader",{attrs:{normal:"",show:e.type.normal}}),e._v(" "),t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("half")}}},[e._v("Half")]),e._v(" "),t("r-loader",{attrs:{half:"",show:e.type.half}}),e._v(" "),t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("reverse")}}},[e._v("Reverse")]),e._v(" "),t("r-loader",{attrs:{reverse:"",show:e.type.reverse}})],1),e._v(" "),t("h3",[e._v("Bar")]),e._v(" "),t("section",{staticClass:"loader-box"},[t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("bar")}}},[e._v("Normal")]),e._v(" "),t("r-loader",{attrs:{bar:"",show:e.type.bar}}),e._v(" "),t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("round")}}},[e._v("Round")]),e._v(" "),t("r-loader",{attrs:{"bar-round":"",show:e.type.round}}),e._v(" "),t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("barReverse")}}},[e._v("reverse")]),e._v(" "),t("r-loader",{attrs:{"bar-reverse":"",show:e.type.barReverse}})],1),e._v(" "),t("h3",[e._v("Double")]),e._v(" "),t("section",{staticClass:"loader-box"},[t("r-btn",{attrs:{info:"",small:""},nativeOn:{click:function(r){e.showLoader("double")}}},[e._v("Double")]),e._v(" "),t("r-loader",{attrs:{double:"",show:e.type.double}})],1),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("h2",[e._v("API")]),e._v(" "),t("h3",[e._v("props")]),e._v(" "),e._m(1),e._v(" "),t("Markup",{attrs:{lang:"html"}},[e._v('\n    <r-btn info small @click.native="showLoader(\'normal\')">Normal</r-btn>\n    <r-loader normal :show="type.normal"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'round\')">Round</r-btn>\n    <r-loader bar-round :show="type.round"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'reverse\')">Reverse</r-btn>\n    <r-loader reverse :show="type.reverse"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'bar\')">Normal</r-btn>\n    <r-loader bar :show="type.bar"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'round\')">Round</r-btn>\n    <r-loader bar-round :show="type.round"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'barReverse\')">reverse</r-btn>\n    <r-loader bar-reverse :show="type.barReverse"></r-loader>\n\n    <r-btn info small @click.native="showLoader(\'double\')">Double</r-btn>\n    <r-loader double :show="type.double"></r-loader>\n\n  ')]),e._v(" "),t("Markup",{attrs:{lang:"js"}},[e._v("\n    export default {\n      \n      data () {\n        return {\n          type: {\n            normal: false,\n            half: false,\n            reverse: false,\n            bar: false,\n            round: false,\n            barReverse: false,\n            double: false\n          }\n        }\n      },\n      methods: {\n        showLoader(loader){\n          this.type[loader] = true\n          setTimeout( _ => {\n            this.type[loader] = false\n          }, 1500)\n        }\n      }\n    }\n  ")])],1)},staticRenderFns:[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\n    The loader component base on "),t("a",{attrs:{target:"_blank",href:"http://www.raphaelfabeni.com.br/css-loader/"}},[e._v("css-loader")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("table",{staticClass:"bordered responsive-table"},[t("thead",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("show")]),e._v(" "),t("td",[e._v("是否显示")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("normal")]),e._v(" "),t("td",[e._v("默认类型")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("half")]),e._v(" "),t("td",[e._v("半圆形的默认类型")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("reverse")]),e._v(" "),t("td",[e._v("反向旋转的默认类型")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("bar")]),e._v(" "),t("td",[e._v("loading条类型")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("bar-round")]),e._v(" "),t("td",[e._v("圆角的loading条")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("bar-reverse")]),e._v(" "),t("td",[e._v("反向动画的loading条")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("double")]),e._v(" "),t("td",[e._v("两个默认的loading")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("-")])])])])}]}}});