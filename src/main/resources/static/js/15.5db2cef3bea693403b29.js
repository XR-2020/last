webpackJsonp([15],{frmu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gfnp"),l=(a("Nv5k"),a("vLgD")),n=a("mw3O"),s=a.n(n),r=function(e){return Object(l.a)({url:"/getSearchRuanJianZhuZuo",method:"get",params:e})},o=a("7GrU"),c={name:"basetable",components:{heBingShenBao:i.default},data:function(){return{role:localStorage.getItem("ms_role"),pageTotal:0,query:{key:"",pageIndex:1,pageSize:10},isdetail:!1,header:!1,people:[],tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{},idx:-1,idList:[],teacher_list:[],isInput:!0}},created:function(){var e=this;this.getData(),Object(o.m)().then(function(t){e.teacher_list=t})},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,i=0;i<e.del_list.length;i++)if(t.name===e.del_list[i].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{change:function(){this.isInput=!1},onSubmit:function(){var e=this;switch(this.editVisible=!1,this.form.type){case"专利":this.form.type=2;break;case"横向科研项目":this.form.type=3;break;case"著作":this.form.type=4;break;case"科研论文":this.form.type=5;break;case"软件著作权":this.form.type=6;break;case"科研项目结项":this.form.type=7}Object(o.b)(this.form).then(function(t){0!==t?(e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.form)):e.$message.error("修改失败"),e.getData()})},crawlerWeb:function(e){var t=this;alert("正在爬取....请稍后"),Object(o.a)({crawlertd:e}).then(function(e){alert(e),t.getData()})},handleCurrentChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()},getData:function(){var e,t=this;""!==this.query.key?r(this.query).then(function(e){t.tableData=e.list,t.pageTotal=e.pageTotal}):(e=this.query,Object(l.a)({url:"/getAllRuanJianZhuZuo",method:"get",params:e})).then(function(e){t.tableData=e.list,t.pageTotal=e.pageTotal})},search:function(){var e=this;r(this.query).then(function(t){e.tableData=t.list,e.pageTotal=t.pageTotal}),this.is_search=!0},closeDialog:function(){this.editVisible=!1},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){var a,i=this;(a={id:t.id},Object(l.a)({url:"/getRuanJianZhuZuoDetailBadge",method:"get",params:a})).then(function(e){i.form.people=e.data}),this.form=t,this.form.type="软件著作权",this.editVisible=!0},handleDetail:function(e,t){var a,i=this;(a={id:t.id},Object(l.a)({url:"/getRuanJianZhuZuoDetail",method:"get",params:a})).then(function(e){i.people=e.data}),this.isdetail=!0},handleDelete:function(e,t){var a=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then(function(){var e;(e={id:t.id},Object(l.a)({url:"/deleteOneRuanJianZhuZuo",method:"post",params:e})).then(function(e){a.getData(),a.$message.success("删除成功")}).catch(function(){a.$message.error("删除失败")})}).catch(function(){})},delAll:function(){var e=this;this.idList.length>0&&this.$confirm("确定要删除吗？","提示",{type:"warning"}).then(function(){var t;(t={ids:e.idList},Object(l.a)({url:"/deleteRuanJianZhuZuo",method:"post",params:t,paramsSerializer:function(e){return s.a.stringify(e,{indices:!1})}})).then(function(t){e.$message.success("删除成功"),e.getData()})})},handleSelectionChange:function(e){this.idList=[];for(var t=0;t<e.length;t++)this.idList.push(e[t].id)},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),e._v("软件著作权")])],1)],1),e._v(" "),a("div",{staticClass:"container",staticStyle:{width:"1000px"}},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")]),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.query.key,callback:function(t){e.$set(e.query,"key",t)},expression:"query.key"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"search",type:"primary"},on:{click:function(t){e.crawlerWeb("科技处_软件著作权")}}},[e._v("爬取原网站")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"partment",label:"部门",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"题目",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"finishtime",label:"完成时间",align:"center"}}),e._v(" "),"4"===e.role||"2"===e.role?a("el-table-column",{attrs:{label:"操作",width:"260px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){e.handleDetail(t.$index,t.row)}}},[e._v("查看参与人")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])}):a("el-table-column",{attrs:{label:"操作",width:"260px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){e.handleDetail(t.$index,t.row)}}},[e._v("查看参与人")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:e.pageTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("router-link",{attrs:{to:"/合并申报"}},[a("el-button",{attrs:{type:"primary"}},[e._v("软件著作权申报")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"50%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门"}},[a("el-input",{staticStyle:{width:"310px"},model:{value:e.form.partment,callback:function(t){e.$set(e.form,"partment",t)},expression:"form.partment"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"参与人情况"}},[a("el-select",{attrs:{multiple:"",filterable:""},model:{value:e.form.people,callback:function(t){e.$set(e.form,"people",t)},expression:"form.people"}},e._l(e.teacher_list,function(e){return a("el-option",{key:e.badge,attrs:{label:e.badge+"—"+e.name,value:e.badge}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"完成时间"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:e.form.finishtime,callback:function(t){e.$set(e.form,"finishtime",t)},expression:"form.finishtime"}}),a("br"),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:e.change},model:{value:e.form.finishtime,callback:function(t){e.$set(e.form,"finishtime",t)},expression:"form.finishtime"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.isdetail,width:"50%"},on:{"update:visible":function(t){e.isdetail=t}}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.people,border:""}},[a("el-table-column",{attrs:{prop:"badge",label:"完成人工号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"完成人",align:"center"}})],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("syFX")},"data-v-7c566bc0",null);t.default=d.exports},syFX:function(e,t){}});