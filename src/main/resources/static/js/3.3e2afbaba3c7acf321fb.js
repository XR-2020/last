webpackJsonp([3],{"0WHQ":function(t,e){},IOPI:function(t,e,a){var l,i;
/*!
 * sChart JavaScript Library v2.0.0
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
/*!
 * sChart JavaScript Library v2.0.0
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
i=function(t){"use strict";function e(t,e,a,l){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.dpi=window.devicePixelRatio||1,this.type=e,this.data=a,this.dataLength=this.data.length,this.showValue=!0,this.autoWidth=!1,this.width=this.canvas.width*this.dpi,this.height=this.canvas.height*this.dpi,this.topPadding=50*this.dpi,this.leftPadding=50*this.dpi,this.rightPadding=0*this.dpi,this.bottomPadding=50*this.dpi,this.yEqual=5,this.yLength=0,this.xLength=0,this.yFictitious=0,this.yRatio=0,this.bgColor="#ffffff",this.fillColor="#1E9FFF",this.axisColor="#666666",this.contentColor="#eeeeee",this.titleColor="#000000",this.title="",this.titlePosition="top",this.radius=100*this.dpi,this.innerRadius=70*this.dpi,this.colorList=["#1E9FFF","#13CE66","#F7BA2A","#FF4949","#72f6ff","#199475","#e08031","#726dd1"],this.legendColor="#000000",this.legendTop=40*this.dpi,this.totalValue=this.getTotalValue(),this.init(l)}return e.prototype={init:function(t){if(0===this.dataLength)return!1;if(t){var e=["topPadding","leftPadding","rightPadding","bottomPadding","radius","innerRadius","legendTop"];for(var a in t)"colorList"===a&&Array.isArray(t[a])?this[a]=t[a].concat(this[a]):e.indexOf(a)>-1?this[a]=t[a]*this.dpi:this[a]=t[a]}t.autoWidth?(this.width=this.canvas.width=this.canvas.parentNode.offsetWidth*this.dpi,this.height=this.canvas.height=this.canvas.parentNode.offsetHeight*this.dpi,this.canvas.setAttribute("style","width:"+this.canvas.parentNode.offsetWidth+"px;height:"+this.canvas.parentNode.offsetHeight+"px;")):(this.canvas.setAttribute("style","width:"+this.canvas.width+"px;height:"+this.canvas.height+"px;"),this.canvas.width*=this.dpi,this.canvas.height*=this.dpi),"bar"===this.type||"line"===this.type?(this.yLength=Math.floor((this.height-this.topPadding-this.bottomPadding-10)/this.yEqual),this.xLength=Math.floor((this.width-this.leftPadding-this.rightPadding-10)/this.dataLength),this.yFictitious=this.getYFictitious(this.data),this.yRatio=this.yLength/this.yFictitious,this.drawBarUpdate()):this.drawPieUpdate()},drawBarUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawAxis(),this.drawPoint(),this.drawTitle(),this.drawBarChart()},drawPieUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawLegend(),this.drawTitle(),this.drawPieChart()},drawBarChart:function(){this.ctx.fillStyle=this.fillColor,this.ctx.strokeStyle=this.fillColor;for(var t=0;t<this.dataLength;t++)this.data[t].left=this.leftPadding+this.xLength*(t+.25),this.data[t].top=this.height-this.bottomPadding-this.data[t].value*this.yRatio,this.data[t].right=this.leftPadding+this.xLength*(t+.75),this.data[t].bottom=this.height-this.bottomPadding,"line"===this.type?(this.ctx.beginPath(),this.ctx.arc(this.data[t].left+this.xLength/4,this.data[t].top,2,0,2*Math.PI,!0),this.ctx.fill(),0!==t&&(this.ctx.moveTo(this.data[t].left+this.xLength/4,this.data[t].top),this.ctx.lineTo(this.data[t-1].left+this.xLength/4,this.data[t-1].top)),this.ctx.stroke()):"bar"===this.type&&this.ctx.fillRect(this.data[t].left,this.data[t].top,this.data[t].right-this.data[t].left,this.data[t].bottom-this.data[t].top),this.showValue&&(this.ctx.font=12*this.dpi+"px Arial",this.ctx.fillText(this.data[t].value,this.data[t].left+this.xLength/4,this.data[t].top-5))},drawPieChart:function(){for(var t=this.width/2,e=this.height/2,a=0,l=0,i=0;i<this.dataLength;i++)this.ctx.beginPath(),this.ctx.fillStyle=this.colorList[i],this.ctx.moveTo(t,e),this.data[i].start=0===i?-Math.PI/2:this.data[i-1].end,this.data[i].end=this.data[i].start+this.data[i].value/this.totalValue*2*Math.PI,this.ctx.arc(t,e,this.radius,this.data[i].start,this.data[i].end),this.ctx.closePath(),this.ctx.fill(),this.data[i].middle=(this.data[i].start+this.data[i].end)/2,a=Math.ceil(Math.abs(this.radius*Math.cos(this.data[i].middle))),l=Math.floor(Math.abs(this.radius*Math.sin(this.data[i].middle))),this.ctx.strokeStyle=this.colorList[i],this.data[i].middle<=0?(this.ctx.textAlign="left",this.ctx.moveTo(t+a,e-l),this.ctx.lineTo(t+a+10,e-l-10),this.ctx.moveTo(t+a+10,e-l-10),this.ctx.lineTo(t+a+this.radius/2,e-l-10),this.ctx.stroke(),this.ctx.fillText(this.data[i].value,t+a+5+this.radius/2,e-l-5)):this.data[i].middle>0&&this.data[i].middle<=Math.PI/2?(this.ctx.textAlign="left",this.ctx.moveTo(t+a,e+l),this.ctx.lineTo(t+a+10,e+l+10),this.ctx.moveTo(t+a+10,e+l+10),this.ctx.lineTo(t+a+this.radius/2,e+l+10),this.ctx.stroke(),this.ctx.fillText(this.data[i].value,t+a+5+this.radius/2,e+l+15)):this.data[i].middle>Math.PI/2&&this.data[i].middle<Math.PI?(this.ctx.textAlign="right",this.ctx.moveTo(t-a,e+l),this.ctx.lineTo(t-a-10,e+l+10),this.ctx.moveTo(t-a-10,e+l+10),this.ctx.lineTo(t-a-this.radius/2,e+l+10),this.ctx.stroke(),this.ctx.fillText(this.data[i].value,t-a-5-this.radius/2,e+l+15)):(this.ctx.textAlign="right",this.ctx.moveTo(t-a,e-l),this.ctx.lineTo(t-a-10,e-l-10),this.ctx.moveTo(t-a-10,e-l-10),this.ctx.lineTo(t-a-this.radius/2,e-l-10),this.ctx.stroke(),this.ctx.fillText(this.data[i].value,t-a-5-this.radius/2,e-l-5));"ring"===this.type&&(this.ctx.beginPath(),this.ctx.fillStyle=this.bgColor,this.ctx.arc(t,e,this.innerRadius,0,2*Math.PI),this.ctx.fill())},drawAxis:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+.5,this.topPadding+.5),this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding+.5),this.ctx.stroke()},drawPoint:function(){this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="center",this.ctx.fillStyle=this.axisColor;for(var t=0;t<this.dataLength;t++){var e=this.data[t].name,a=this.xLength*(t+1);this.ctx.moveTo(this.leftPadding+a+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+a+.5,this.height-this.bottomPadding+5.5),this.ctx.fillText(e,this.leftPadding+a-this.xLength/2,this.height-this.bottomPadding+15*this.dpi)}this.ctx.stroke(),this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="right",this.ctx.fillStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding+.5),this.ctx.fillText(0,this.leftPadding-10,this.height-this.bottomPadding+5);for(t=0;t<this.yEqual;t++){var l=this.yFictitious*(t+1),i=this.yLength*(t+1);this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-i+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding-i+.5),this.ctx.stroke(),this.ctx.fillText(l,this.leftPadding-10,this.height-this.bottomPadding-i+5),this.ctx.beginPath(),this.ctx.strokeStyle=this.contentColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-i+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding-i+.5),this.ctx.stroke()}},drawTitle:function(){this.title&&(this.ctx.beginPath(),this.ctx.textAlign="center",this.ctx.fillStyle=this.titleColor,this.ctx.font=16*this.dpi+"px Microsoft YaHei","bottom"===this.titlePosition&&this.bottomPadding>=40?this.ctx.fillText(this.title,this.width/2,this.height-5):this.ctx.fillText(this.title,this.width/2,this.topPadding/2+5))},drawLegend:function(){for(var t=0;t<this.dataLength;t++)this.ctx.fillStyle=this.colorList[t],this.ctx.fillRect(10,this.legendTop+15*t*this.dpi,20,11),this.ctx.fillStyle=this.legendColor,this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="left",this.ctx.fillText(this.data[t].name,35,this.legendTop+10+15*t*this.dpi)},getYFictitious:function(t){var e=t.slice(0);e.sort(function(t,e){return-(t.value-e.value)});var a=Math.ceil(e[0].value/this.yEqual),l=a.toString().length-1;return l=l>2?2:l,Math.ceil(a/Math.pow(10,l))*Math.pow(10,l)},getTotalValue:function(){for(var t=0,e=0;e<this.dataLength;e++)t+=this.data[e].value;return t}},e},void 0===(l=function(){return i()}.call(e,a,e,t))||(t.exports=l)},IpCk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("S4mo"),i=a("vLgD"),n=function(t){return Object(i.a)({url:"/SearchByDetail",method:"get",params:t})},r={inject:["reload"],name:"basecharts",components:{Schart:l.a},data:function(){return{form:{date1:"",date2:"",value:""},value:"",options:[{value:"1",label:"产学研"},{value:"2",label:"教研项目"},{value:"3",label:"教研论文"},{value:"4",label:"教育规划项目"},{value:"5",label:"纵向科研项目"},{value:"6",label:"评估中心相关"},{value:"7",label:"专利"},{value:"8",label:"横向科研项目"},{value:"9",label:"著作"},{value:"10",label:"科研论文"},{value:"11",label:"软件著作权"},{value:"12",label:"科研项目结项"},{value:"13",label:"学科竞赛"},{value:"14",label:"荣誉称号"}],rongyuchenghao:[],xuekejingsai:[],keyanxiangmujiexiang:[],ruanjianzuzuo:[],keyanlunwen:[],zhuzuo:[],hengxiangkeyan:[],zhuanli:[],pingguzhongxin:[],zongxiangkeyan:[],jiaoyuguihua:[],jiaoyanlunwen:[],jiaoyanxiangmu:[],chanxueyan:[],options2:{title:"成果统计",showValue:!0,bgColor:"#F9EFCC",fillColor:"#00887C",contentColor:"rgba(46,199,201,0.3)",yEqual:7,width:500,height:400},data1:[],tableData:[],hasdate:!1,hastype:!1,bysearch:!1,istype:!1}},methods:{search:function(){var t,e=this;if(this.form.date1=this.value[0],this.form.date2=this.value[1],this.form.value){switch(console.log(this.form.value),this.form.value){case"1":n(this.form).then(function(t){e.chanxueyan=t});break;case"2":n(this.form).then(function(t){e.jiaoyanxiangmu=t});break;case"3":n(this.form).then(function(t){e.jiaoyanlunwen=t});break;case"4":n(this.form).then(function(t){e.jiaoyuguihua=t});break;case"5":n(this.form).then(function(t){e.zongxiangkeyan=t});break;case"6":n(this.form).then(function(t){e.pingguzhongxin=t});break;case"7":n(this.form).then(function(t){e.zhuanli=t});break;case"8":n(this.form).then(function(t){e.hengxiangkeyan=t});break;case"9":n(this.form).then(function(t){e.zhuzuo=t});break;case"10":n(this.form).then(function(t){e.keyanlunwen=t});break;case"11":n(this.form).then(function(t){e.ruanjianzuzuo=t});break;case"12":n(this.form).then(function(t){e.keyanxiangmujiexiang=t});break;case"13":n(this.form).then(function(t){e.xuekejingsai=t});break;case"14":n(this.form).then(function(t){e.rongyuchenghao=t})}this.hasdate=!1,this.istype=!0}else(t=this.form,Object(i.a)({url:"/SearchAll",method:"get",params:t})).then(function(t){e.data1=t.zheXians,console.log(t.chanxueyan),e.chanxueyan=t.chanxueyan,e.jiaoyanxiangmu=t.jiaoyanxiangmu,e.jiaoyanlunwen=t.jiaoyanlunwen,e.jiaoyuguihua=t.jiaoyuguihua,e.zongxiangkeyan=t.zongxiangkeyan,e.pingguzhongxin=t.pingguzhongxin,e.zhuanli=t.zhuanli,e.hengxiangkeyan=t.hengxiangkeyan,e.zhuzuo=t.zhuzuo,e.keyanlunwen=t.keyanlunwen,e.ruanjianzuzuo=t.ruanjianzhuzuo,e.keyanxiangmujiexiang=t.keyanxiangmujiexiang,e.xuekejingsai=t.xuekejingsai,e.rongyuchenghao=t.rongyuchenghao,e.hasdate=!0});this.bysearch=!0}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-star-on"}),t._v("教研成果统计")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","unlink-panels":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),a("el-select",{attrs:{placeholder:"请选择类型"},on:{change:t.search},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查看统计")])],1),t._v(" "),a("div",{attrs:{visible:t.bysearch},on:{"update:visible":function(e){t.bysearch=e}}},[t.hasdate?a("div",{staticClass:"schart-box"},[a("p",[t._v("产学研明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{attrs:{data:t.chanxueyan,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.wenhao",label:"立项文号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lianghua",label:"成果依据",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("教研项目明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.jiaoyanxiangmu,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.wenhao",label:"立项文号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lianghua",label:"成果依据",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("教研论文明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.jiaoyanlunwen,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"论文名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("教育规划项目明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.jiaoyuguihua,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.danwei",label:"结题单位",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"项目级别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"结题等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("纵向科研项目明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.zongxiangkeyan,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lixiang",label:"立项部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.type",label:"项目类别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"项目级别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("评估中心相关明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pingguzhongxin,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"获奖等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",walign:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("专利明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.zhuanli,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("横向科研明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.hengxiangkeyan,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("著作明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.zhuzuo,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("科研论文明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.keyanlunwen,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"题目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("软件著作权")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ruanjianzuzuo,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"题目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("科研项目结项明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.keyanxiangmujiexiang,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("学科竞赛明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.xuekejingsai,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"竞赛名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"获奖等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"比赛等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.teacher",label:"指导教师",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.student",label:"参赛学生",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"获奖时间",align:"center"}})],1),t._v(" "),a("br"),t._v(" "),a("p",[t._v("荣誉称号明细")]),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rongyuchenghao,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"称号名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"级别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"获奖时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.teacher",label:"获奖教师",align:"center"}})],1)],1):t._e(),t._v(" "),"1"===t.form.value?[a("el-table",{key:"chanxueyan",attrs:{data:t.chanxueyan,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.wenhao",label:"立项文号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lianghua",label:"成果依据",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"2"===t.form.value?[a("el-table",{key:"jiaoyanxiangmu",staticStyle:{width:"100%"},attrs:{data:t.jiaoyanxiangmu,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.wenhao",label:"立项文号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lianghua",label:"成果依据",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"3"===t.form.value?[a("el-table",{key:"jiaoyanlunwen",staticStyle:{width:"100%"},attrs:{data:t.jiaoyanlunwen,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"论文名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"4"===t.form.value?[a("el-table",{key:"jiaoyuguihua",staticStyle:{width:"100%"},attrs:{data:t.jiaoyuguihua,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.danwei",label:"结题单位",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"项目级别",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"结题等级",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"5"===t.form.value?[a("el-table",{key:"zongxiangkeyan",staticStyle:{width:"100%"},attrs:{data:t.zongxiangkeyan,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"项目名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.lixiang",label:"立项部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.type",label:"项目类别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"项目级别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"6"===t.form.value?[a("el-table",{key:"pingguzhongxin",staticStyle:{width:"100%"},attrs:{data:t.pingguzhongxin,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"获奖等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",walign:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"7"===t.form.value?[a("el-table",{key:"zhuanli",staticStyle:{width:"100%"},attrs:{data:t.zhuanli,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"8"===t.form.value?[a("el-table",{key:"hengxiangkeyan",staticStyle:{width:"100%"},attrs:{data:t.hengxiangkeyan,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"9"===t.form.value?[a("el-table",{key:"zhuzuo",staticStyle:{width:"100%"},attrs:{data:t.zhuzuo,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"10"===t.form.value?[a("el-table",{key:"keyanlunwen",staticStyle:{width:"100%"},attrs:{data:t.keyanlunwen,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"题目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"11"===t.form.value?[a("el-table",{key:"ruanjianzuzuo",staticStyle:{width:"100%"},attrs:{data:t.ruanjianzuzuo,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"题目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"12"===t.form.value?[a("el-table",{key:"keyanxiangmujiexiang",staticStyle:{width:"100%"},attrs:{data:t.keyanxiangmujiexiang,border:""}},[a("el-table-column",{attrs:{prop:"object.partment",label:"部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"完成时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员情况",width:"185px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.people,"show-header":!1}},[a("el-table-column",{attrs:{prop:"badge",align:"center",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}})],1)]}}])})],1)]:t._e(),t._v(" "),"13"===t.form.value?[a("el-table",{key:"xuekejingsai",staticStyle:{width:"100%"},attrs:{data:t.xuekejingsai,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"竞赛名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.grade",label:"获奖等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"比赛等级",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.teacher",label:"指导教师",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.student",label:"参赛学生",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"获奖时间",align:"center"}})],1)]:t._e(),t._v(" "),"14"===t.form.value?[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rongyuchenghao,border:""}},[a("el-table-column",{attrs:{prop:"object.name",label:"称号名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.level",label:"级别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.finishtime",label:"获奖时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"object.teacher",label:"获奖教师",align:"center"}})],1)]:t._e()],2)])])},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(t){a("0WHQ")},"data-v-1401c2de",null);e.default=s.exports},S4mo:function(t,e,a){"use strict";var l=a("IOPI"),i=a.n(l),n={data:function(){return{schart:null,opt:{}}},props:{canvasId:{type:String,default:""},type:{type:String,default:"bar"},data:{type:Array,default:[]},options:{type:Object,required:!1}},mounted:function(){this.renderChart()},methods:{renderChart:function(){this.schart=null,this.opt=this.options,this.width&&this.height||(this.opt?this.opt.autoWidth=!0:this.opt={autoWidth:!0}),this.schart=new i.a(this.canvasId,this.type,this.data,this.opt)}},watch:{data:function(){this.renderChart()},options:function(){this.renderChart()},type:function(){this.renderChart()}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:this.canvasId}})])},staticRenderFns:[]},o=a("VU/8")(n,r,!1,null,null,null);e.a=o.exports}});