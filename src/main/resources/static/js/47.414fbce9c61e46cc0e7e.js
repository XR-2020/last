webpackJsonp([47],{t7oS:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("7GrU"),s=t("Nv5k"),i=t("vLgD"),o=t("k7Ck"),l=t("Y1IP"),r=t("bjOP"),m=t("wnaG"),c=t("+2I6"),u=t("Ntl1"),b=t("11nS"),g=t("cqzl"),_=t("rraK"),h={inject:["reload"],name:"MyShenBao",data:function(){return{updatetablename:"",teacher_list:[],form:{},editVisible:!1,badge:"",disPass:[],hadPass:[],daishenhe:[],disPassPageTotal:0,hadPassPageTotal:0,daishenhePageTotal:0,daiShenHequery:{badge:0,pageIndex:1,pageSize:5},hadPassquery:{badge:0,pageIndex:1,pageSize:5},disPassquery:{badge:0,pageIndex:1,pageSize:5}}},created:function(){var e=this;this.daiShenHequery.badge=localStorage.getItem("ms_badge"),this.hadPassquery.badge=localStorage.getItem("ms_badge"),this.disPassquery.badge=localStorage.getItem("ms_badge"),Object(n.m)().then(function(a){e.teacher_list=a}),this.getData()},methods:{handleChange:function(e){this.$forceUpdate()},onSubmit:function(){var e=this;switch(this.form.metails=null,this.updatetablename){case"honor":Object(o.c)(this.form).then(function(a){0!==a?e.$message.success("修改成功"):e.$message.error("修改失败")});break;case"jiaoyanlunwen":Object(l.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"jiaoyanxiangmu":Object(m.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"jiaoyuguihuaxiangmu":Object(r.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"keyanlunwen":this.form.type=5,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"keyanxiangmujiexiang":this.form.type=7,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"pingguzhongxinxiangguan":Object(c.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"ruanjianzhuzuoquan":this.form.type=6,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"zhuanli":this.form.type=2,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"zhuzuo":this.form.type=4,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"zongxiangkeyanxiangmu":Object(u.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"hengxiangkeyanxiangmu":this.form.type=3,Object(n.b)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"competition":Object(b.c)(this.form).then(function(a){0!==a?e.$message.success("修改成功"):e.$message.error("修改失败")});break;case"chanxueyan":Object(s.c)(this.form).then(function(a){0!==a?e.$message.success("修改成功"):e.$message.error("修改失败")});break;case"newsystem":Object(g.e)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")});break;case"shekechu":Object(_.c)(this.form).then(function(a){0!==a?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败")})}this.editVisible=!1,this.reload()},getData:function(){this.getDaiShenHeData(),this.getHadPassData(),this.getDisData()},getDaiShenHeData:function(){var e,a=this;(e=this.daiShenHequery,Object(i.a)({url:"/getDaiShenHeData",method:"get",params:e})).then(function(e){a.daishenhe=e.tableData,a.daishenhePageTotal=e.pageTotal})},getHadPassData:function(){var e,a=this;(e=this.hadPassquery,Object(i.a)({url:"/getHadPassData",method:"get",params:e})).then(function(e){a.hadPass=e.tableData,a.hadPassPageTotal=e.pageTotal})},getDisData:function(){var e,a=this;(e=this.disPassquery,Object(i.a)({url:"/getDisData",method:"get",params:e})).then(function(e){a.disPass=e.tableData,a.disPassPageTotal=e.pageTotal})},handleDaiShenHeChange:function(e){this.$set(this.daiShenHequery,"pageIndex",e),this.getDaiShenHeData()},handleHadPassChange:function(e){this.$set(this.hadPassquery,"pageIndex",e),this.getHadPassData()},handleDisPassChange:function(e){this.$set(this.disPassquery,"pageIndex",e),this.getDisData()},handleEdit:function(e,a){var t=this;Object(n.G)({id:a.object.id,tablename:a.tablename}).then(function(e){t.form=e.data.object,t.form.people=e.data.people,t.updatetablename=a.tablename}),this.editVisible=!0},handleDelete:function(e,a){var t,n=this;(t={id:a.object.id,tablename:a.tablename},Object(i.a)({url:"/deleteMyShenBao",method:"post",params:t})).then(function(e){0===e?n.$message.error("删除失败"):n.$message.success("删除"+a.object.name+"成功"),n.getDaiShenHeData()})}}},f={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-tickets"}),e._v("我的申报")])],1)],1),e._v(" "),t("div",{staticClass:"container"},[t("div",[t("br"),e._v(" "),t("p",{staticStyle:{color:"#6f7180"}},[e._v("待审核")]),e._v(" "),t("br"),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.daishenhe,border:""}},[t("el-table-column",{attrs:{prop:"object.name",label:"申报项目名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.type",label:"申报项目类别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["chanxueyan"==a.row.tablename?t("span",[e._v("产学研")]):e._e(),e._v(" "),"competition"==a.row.tablename?t("span",[e._v("学科竞赛")]):e._e(),e._v(" "),"hengxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("横向科研项目")]):e._e(),e._v(" "),"zongxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("纵向科研项目")]):e._e(),e._v(" "),"zhuzuo"==a.row.tablename?t("span",[e._v("著作")]):e._e(),e._v(" "),"zhuanli"==a.row.tablename?t("span",[e._v("专利")]):e._e(),e._v(" "),"ruanjianzhuzuoquan"==a.row.tablename?t("span",[e._v("软件著作权")]):e._e(),e._v(" "),"pingguzhongxinxiangguan"==a.row.tablename?t("span",[e._v("评估中心相关")]):e._e(),e._v(" "),"keyanxiangmujiexiang"==a.row.tablename?t("span",[e._v("科研项目结项")]):e._e(),e._v(" "),"keyanlunwen"==a.row.tablename?t("span",[e._v("科研论文")]):e._e(),e._v(" "),"jiaoyuguihuaxiangmu"==a.row.tablename?t("span",[e._v("教育规划项目")]):e._e(),e._v(" "),"jiaoyanxiangmu"==a.row.tablename?t("span",[e._v("教研项目")]):e._e(),e._v(" "),"jiaoyanlunwen"==a.row.tablename?t("span",[e._v("教研论文")]):e._e(),e._v(" "),"honor"==a.row.tablename?t("span",[e._v("荣誉称号")]):e._e(),e._v(" "),"newsystem"==a.row.tablename?t("span",[e._v("教务处成果")]):e._e(),e._v(" "),"shekechu"==a.row.tablename?t("span",[e._v("社科处成果")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"object.partment",label:"项目所属部门",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.finishtime",label:"项目完成时间",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",width:"280px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.daiShenHequery.pageIndex,"page-size":e.daiShenHequery.pageSize,total:e.daishenhePageTotal},on:{"current-change":e.handleDaiShenHeChange}})],1)],1),e._v(" "),t("div",[t("br"),e._v(" "),t("p",{staticStyle:{color:"#5daf34"}},[e._v("已通过")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.hadPass,border:""}},[t("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.type",label:"项目类别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["chanxueyan"==a.row.tablename?t("span",[e._v("产学研")]):e._e(),e._v(" "),"competition"==a.row.tablename?t("span",[e._v("学科竞赛")]):e._e(),e._v(" "),"hengxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("横向科研项目")]):e._e(),e._v(" "),"zongxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("纵向科研项目")]):e._e(),e._v(" "),"zhuzuo"==a.row.tablename?t("span",[e._v("著作")]):e._e(),e._v(" "),"zhuanli"==a.row.tablename?t("span",[e._v("专利")]):e._e(),e._v(" "),"ruanjianzhuzuoquan"==a.row.tablename?t("span",[e._v("软件著作权")]):e._e(),e._v(" "),"pingguzhongxinxiangguan"==a.row.tablename?t("span",[e._v("评估中心相关")]):e._e(),e._v(" "),"keyanxiangmujiexiang"==a.row.tablename?t("span",[e._v("科研项目结项")]):e._e(),e._v(" "),"keyanlunwen"==a.row.tablename?t("span",[e._v("科研论文")]):e._e(),e._v(" "),"jiaoyuguihuaxiangmu"==a.row.tablename?t("span",[e._v("教育规划项目")]):e._e(),e._v(" "),"jiaoyanxiangmu"==a.row.tablename?t("span",[e._v("教研项目")]):e._e(),e._v(" "),"jiaoyanlunwen"==a.row.tablename?t("span",[e._v("教研论文")]):e._e(),e._v(" "),"honor"==a.row.tablename?t("span",[e._v("荣誉称号")]):e._e(),e._v(" "),"newsystem"==a.row.tablename?t("span",[e._v("教务处成果")]):e._e(),e._v(" "),"shekechu"==a.row.tablename?t("span",[e._v("社科处成果")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"object.partment",label:"项目所属部门",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.finishtime",label:"项目完成时间",align:"center"}})],1),e._v(" "),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.hadPassquery.pageIndex,"page-size":e.hadPassquery.pageSize,total:e.hadPassPageTotal},on:{"current-change":e.handleHadPassChange}})],1)],1),e._v(" "),t("div",[t("br"),e._v(" "),t("p",{staticStyle:{color:"#dd6161"}},[e._v("未通过")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.disPass,border:""}},[t("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.type",label:"项目类别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["chanxueyan"==a.row.tablename?t("span",[e._v("产学研")]):e._e(),e._v(" "),"competition"==a.row.tablename?t("span",[e._v("学科竞赛")]):e._e(),e._v(" "),"hengxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("横向科研项目")]):e._e(),e._v(" "),"zongxiangkeyanxiangmu"==a.row.tablename?t("span",[e._v("纵向科研项目")]):e._e(),e._v(" "),"zhuzuo"==a.row.tablename?t("span",[e._v("著作")]):e._e(),e._v(" "),"zhuanli"==a.row.tablename?t("span",[e._v("专利")]):e._e(),e._v(" "),"ruanjianzhuzuoquan"==a.row.tablename?t("span",[e._v("软件著作权")]):e._e(),e._v(" "),"pingguzhongxinxiangguan"==a.row.tablename?t("span",[e._v("评估中心相关")]):e._e(),e._v(" "),"keyanxiangmujiexiang"==a.row.tablename?t("span",[e._v("科研项目结项")]):e._e(),e._v(" "),"keyanlunwen"==a.row.tablename?t("span",[e._v("科研论文")]):e._e(),e._v(" "),"jiaoyuguihuaxiangmu"==a.row.tablename?t("span",[e._v("教育规划项目")]):e._e(),e._v(" "),"jiaoyanxiangmu"==a.row.tablename?t("span",[e._v("教研项目")]):e._e(),e._v(" "),"jiaoyanlunwen"==a.row.tablename?t("span",[e._v("教研论文")]):e._e(),e._v(" "),"honor"==a.row.tablename?t("span",[e._v("荣誉称号")]):e._e(),e._v(" "),"newsystem"==a.row.tablename?t("span",[e._v("教务处成果")]):e._e(),e._v(" "),"shekechu"==a.row.tablename?t("span",[e._v("社科处成果")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"object.partment",label:"项目所属部门",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"object.finishtime",label:"项目完成时间",align:"center"}})],1),e._v(" "),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.hadPassquery.pageIndex,"page-size":e.hadPassquery.pageSize,total:e.disPassPageTotal},on:{"current-change":e.handleDisPassChange}})],1)],1)]),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"80%"},on:{"update:visible":function(a){e.editVisible=a}}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"项目名称"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),e.form.level?t("el-form-item",{attrs:{label:"项目等级"}},[t("el-input",{model:{value:e.form.level,callback:function(a){e.$set(e.form,"level",a)},expression:"form.level"}})],1):e._e(),e._v(" "),e.form.grade?t("el-form-item",{attrs:{label:"项目获奖等级"}},[t("el-input",{model:{value:e.form.grade,callback:function(a){e.$set(e.form,"grade",a)},expression:"form.grade"}})],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"项目所属部门"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.partment,callback:function(a){e.$set(e.form,"partment",a)},expression:"form.partment"}})],1),e._v(" "),e.form.wenhao?t("el-form-item",{attrs:{label:"项目立项文号"}},[t("el-input",{model:{value:e.form.wenhao,callback:function(a){e.$set(e.form,"wenhao",a)},expression:"form.wenhao"}})],1):e._e(),e._v(" "),e.form.xiangmujibie?t("el-form-item",{attrs:{label:"项目级别"}},[t("el-input",{model:{value:e.form.xiangmujibie,callback:function(a){e.$set(e.form,"xiangmujibie",a)},expression:"form.xiangmujibie"}})],1):e._e(),e._v(" "),e.form.jietidengji?t("el-form-item",{attrs:{label:"结题等级"}},[t("el-input",{model:{value:e.form.jietidengji,callback:function(a){e.$set(e.form,"jietidengji",a)},expression:"form.jietidengji"}})],1):e._e(),e._v(" "),e.form.chengguotype?t("el-form-item",{attrs:{label:"成果类别"}},[t("el-input",{model:{value:e.form.chengguotype,callback:function(a){e.$set(e.form,"chengguotype",a)},expression:"form.chengguotype"}})],1):e._e(),e._v(" "),e.form.huojiangleibie?t("el-form-item",{attrs:{label:"获奖类别"}},[t("el-input",{model:{value:e.form.huojiangleibie,callback:function(a){e.$set(e.form,"huojiangleibie",a)},expression:"form.huojiangleibie"}})],1):e._e(),e._v(" "),e.form.jianglijibie?t("el-form-item",{attrs:{label:"奖励级别"}},[t("el-input",{model:{value:e.form.jianglijibie,callback:function(a){e.$set(e.form,"jianglijibie",a)},expression:"form.jianglijibie"}})],1):e._e(),e._v(" "),e.form.jianglidengji?t("el-form-item",{attrs:{label:"奖励等级"}},[t("el-input",{model:{value:e.form.jianglidengji,callback:function(a){e.$set(e.form,"jianglidengji",a)},expression:"form.jianglidengji"}})],1):e._e(),e._v(" "),e.form.lianghua?t("el-form-item",{attrs:{label:"项目成果依据"}},[t("el-input",{model:{value:e.form.lianghua,callback:function(a){e.$set(e.form,"lianghua",a)},expression:"form.lianghua"}})],1):e._e(),e._v(" "),e.form.level?t("el-form-item",{attrs:{label:"项目级别"}},[t("el-input",{model:{value:e.form.level,callback:function(a){e.$set(e.form,"level",a)},expression:"form.level"}})],1):e._e(),e._v(" "),e.form.student?t("el-form-item",{attrs:{label:"参赛学生"}},[t("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.student,callback:function(a){e.$set(e.form,"student",a)},expression:"form.student"}})],1):e._e(),e._v(" "),e.form.danwei?t("el-form-item",{attrs:{label:"组织结题单位"}},[t("el-input",{model:{value:e.form.danwei,callback:function(a){e.$set(e.form,"danwei",a)},expression:"form.danwei"}})],1):e._e(),e._v(" "),e.form.teacher?t("el-form-item",{attrs:{label:"项目人员"}},[t("el-input",{model:{value:e.form.teacher,callback:function(a){e.$set(e.form,"teacher",a)},expression:"form.teacher"}})],1):e._e(),e._v(" "),e.form.people?t("el-form-item",{attrs:{label:"项目人员"}},[t("el-select",{attrs:{multiple:"",filterable:""},on:{change:e.handleChange},model:{value:e.form.people,callback:function(a){e.$set(e.form,"people",a)},expression:"form.people"}},e._l(e.teacher_list,function(e){return t("el-option",{key:e.badge,attrs:{label:e.badge+"—"+e.name,value:e.badge}})}))],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"完成时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.finishtime,callback:function(a){e.$set(e.form,"finishtime",a)},expression:"form.finishtime"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(a){e.editVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},p=t("VU/8")(h,f,!1,null,null,null);a.default=p.exports}});