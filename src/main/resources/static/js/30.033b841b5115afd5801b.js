webpackJsonp([30],{"9q4x":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("7GrU"),i={name:"xuekejingsai",props:["edit"],mounted:function(){this.form=this.edit},data:function(){return{is_editor:!0,form:{},teacher_list:[],isInput:!0}},created:function(){var e=this;Object(a.m)().then(function(t){e.teacher_list=t})},methods:{change:function(){this.isInput=!1},handleChange:function(e){this.isPeople=!1,this.$forceUpdate()},closethis:function(){this.$parent.$parent.closeDialog()},onSubmit:function(){console.log(this.form)}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-tickets"}),e._v(" 学科竞赛申报")])],1)],1),e._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"form-box"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"竞赛名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"获奖等级"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.grade,callback:function(t){e.$set(e.form,"grade",t)},expression:"form.grade"}},[l("el-option",{key:"YuanJi",attrs:{label:"院级",value:"院级"}}),e._v(" "),l("el-option",{key:"XiaoJi",attrs:{label:"校级",value:"校级"}}),e._v(" "),l("el-option",{key:"ShengJi",attrs:{label:"省级",value:"省级级"}}),e._v(" "),l("el-option",{key:"GuoJia",attrs:{label:"国家级",value:"国家级"}}),e._v(" "),l("el-option",{key:"GuoJi",attrs:{label:"国际级",value:"国际级"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"比赛级别"}},[l("el-input",{model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"参赛学生"}},[l("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.student,callback:function(t){e.$set(e.form,"student",t)},expression:"form.student"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"指导教师"}},[l("el-select",{attrs:{multiple:"",filterable:""},on:{change:e.handleChange},model:{value:e.form.people,callback:function(t){e.$set(e.form,"people",t)},expression:"form.people"}},e._l(e.teacher_list,function(e){return l("el-option",{key:e.badge,attrs:{label:e.badge+"—"+e.name,value:e.badge}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"完成时间"}},[l("el-input",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],attrs:{disabled:""},model:{value:e.form.finishtime,callback:function(t){e.$set(e.form,"finishtime",t)},expression:"form.finishtime"}}),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:e.change},model:{value:e.form.finishtime,callback:function(t){e.$set(e.form,"finishtime",t)},expression:"form.finishtime"}})],1)],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:e.closethis}},[e._v("取消")])],1)],1)],1)])])},staticRenderFns:[]},n=l("VU/8")(i,o,!1,null,null,null);t.default=n.exports}});