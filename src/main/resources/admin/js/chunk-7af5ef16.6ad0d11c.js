(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7af5ef16"],{"12de":function(t,e,a){"use strict";var n=a("9efd"),i="/api/admin/themes",o={listAll:function(){return Object(n["a"])({url:"".concat(i),method:"get"})},listFiles:function(){return Object(n["a"])({url:"".concat(i,"/files"),method:"get"})},customTpls:function(){return Object(n["a"])({url:"".concat(i,"/files/custom"),method:"get"})},active:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t,"/activation"),method:"post"})},getActivatedTheme:function(){return Object(n["a"])({url:"".concat(i,"/activation"),method:"get"})},update:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t),timeout:6e4,method:"put"})},delete:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t),method:"delete"})},fetchConfiguration:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t,"/configurations"),method:"get"})},fetchSettings:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t,"/settings"),method:"get"})},saveSettings:function(t,e){return Object(n["a"])({url:"".concat(i,"/").concat(t,"/settings"),data:e,method:"post"})},getProperty:function(t){return Object(n["a"])({url:"".concat(i,"/").concat(t),method:"get"})},upload:function(t,e,a){return Object(n["a"])({url:"".concat(i,"/upload"),timeout:864e5,data:t,onUploadProgress:e,cancelToken:a,method:"post"})},fetching:function(t){return Object(n["a"])({url:"".concat(i,"/fetching"),timeout:6e4,params:{uri:t},method:"post"})},getContent:function(t){return Object(n["a"])({url:"".concat(i,"/files/content"),params:{path:t},method:"get"})},saveContent:function(t,e){return Object(n["a"])({url:"".concat(i,"/files/content"),params:{path:t},data:e,method:"put"})},reload:function(){return Object(n["a"])({url:"".concat(i,"/reload"),method:"post"})},exists:function(t){return Object(n["a"])({url:"".concat(i,"/activation/template/exists"),method:"get",params:{template:t}})}};e["a"]=o},"4cb6":function(t,e,a){},"5f9f":function(t,e,a){"use strict";var n=a("4cb6"),i=a.n(n);i.a},"79e7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"page-header-index-wide"},[n("a-row",{attrs:{gutter:12,type:"flex",align:"middle"}},[n("a-col",{attrs:{span:24}},[n("a-list",{attrs:{grid:{gutter:12,xs:1,sm:1,md:2,lg:4,xl:4,xxl:4},dataSource:e.sortedThemes,loading:e.themeLoading},scopedSlots:e._u([{key:"renderItem",fn:function(t,a){return n("a-list-item",{key:a},[n("a-card",{attrs:{hoverable:"",title:t.name,bodyStyle:{padding:0}}},[n("div",{staticClass:"theme-thumb"},[n("img",{attrs:{alt:t.name,src:t.screenshots}})]),n("template",{staticClass:"ant-card-actions",slot:"actions"},[t.activated?n("div",[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"unlock",theme:"twoTone"}}),e._v("已启用\n              ")],1):n("div",{on:{click:function(a){return e.handleActivateClick(t)}}},[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"lock"}}),e._v("启用\n              ")],1),n("div",{on:{click:function(a){return e.handleEditClick(t)}}},[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"setting"}}),e._v("设置\n              ")],1),n("a-dropdown",{attrs:{placement:"topCenter",trigger:["click"]}},[n("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"ellipsis"}}),e._v("更多\n                ")],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:1,attrs:{disabled:t.activated}},[t.activated?n("span",[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"delete"}}),e._v("删除\n                    ")],1):n("a-popconfirm",{attrs:{title:"确定删除【"+t.name+"】主题？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return e.handleDeleteTheme(t.id)}}},[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"delete"}}),e._v("删除\n                    ")],1)],1),n("a-menu-item",{key:2},[n("a-popconfirm",{attrs:{title:"确定更新【"+t.name+"】主题？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return e.handleUpdateTheme(t.id)}}},[n("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"download"}}),e._v("更新\n                    ")],1)],1)],1)],1)],1)],2)],1)}}])})],1)],1),e.themeProperty?n("a-drawer",{attrs:{title:e.themeProperty.name+" 主题设置",width:"100%",closable:"",visible:e.visible,destroyOnClose:""},on:{close:e.onClose}},[n("a-row",{attrs:{gutter:12,type:"flex"}},[n("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[n("a-skeleton",{attrs:{active:"",loading:e.optionLoading,paragraph:{rows:10}}},[n("a-card",{attrs:{bordered:!1}},[n("img",{attrs:{slot:"cover",alt:e.themeProperty.name,src:e.themeProperty.screenshots},slot:"cover"}),n("a-card-meta",{attrs:{description:e.themeProperty.description}},[n("template",{slot:"title"},[n("a",{attrs:{href:e.themeProperty.author.website,target:"_blank"}},[e._v(e._s(e.themeProperty.author.name))])]),e.themeProperty.logo?n("a-avatar",{attrs:{slot:"avatar",src:e.themeProperty.logo,size:"large"},slot:"avatar"}):n("a-avatar",{attrs:{slot:"avatar",size:"large"},slot:"avatar"},[e._v(e._s(e.themeProperty.author.name))])],2)],1)],1)],1),n("a-col",{staticStyle:{"padding-bottom":"50px"},attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[n("a-skeleton",{attrs:{active:"",loading:e.optionLoading,paragraph:{rows:20}}},[n("div",{staticClass:"card-container"},[e.themeConfiguration.length>0?n("a-tabs",{attrs:{type:"card",defaultActiveKey:"0"}},e._l(e.themeConfiguration,function(t,a){return n("a-tab-pane",{key:a.toString(),attrs:{tab:t.label}},[n("a-form",{attrs:{layout:"vertical"}},e._l(t.items,function(t,a){return n("a-form-item",{key:a,attrs:{label:t.label+"：","wrapper-col":e.wrapperCol}},["TEXT"==t.type?n("a-input",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.themeSettings[t.name],callback:function(a){e.$set(e.themeSettings,t.name,a)},expression:"themeSettings[item.name]"}}):"TEXTAREA"==t.type?n("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:t.placeholder},model:{value:e.themeSettings[t.name],callback:function(a){e.$set(e.themeSettings,t.name,a)},expression:"themeSettings[item.name]"}}):"RADIO"==t.type?n("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["radio-group"],expression:"['radio-group']"}],attrs:{defaultValue:t.defaultValue},model:{value:e.themeSettings[t.name],callback:function(a){e.$set(e.themeSettings,t.name,a)},expression:"themeSettings[item.name]"}},e._l(t.options,function(t,a){return n("a-radio",{key:a,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1):"SELECT"==t.type?n("a-select",{attrs:{defaultValue:t.defaultValue},model:{value:e.themeSettings[t.name],callback:function(a){e.$set(e.themeSettings,t.name,a)},expression:"themeSettings[item.name]"}},e._l(t.options,function(t){return n("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1):e._e()],1)}),1)],1)}),1):n("a-alert",{attrs:{message:"当前主题暂无设置选项",banner:""}})],1)])],1)],1),e.themeConfiguration.length>0?n("footer-tool-bar",{style:{width:e.isSideMenu()&&e.isDesktop()?"calc(100% - "+(e.sidebarOpened?256:80)+"px)":"100%"}},[n("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveSettings}},[e._v("保存")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(){return t.attachmentDrawerVisible=!0}}},[e._v("附件库")])],1):e._e(),n("AttachmentDrawer",{model:{value:e.attachmentDrawerVisible,callback:function(t){e.attachmentDrawerVisible=t},expression:"attachmentDrawerVisible"}})],1):e._e(),n("div",{staticClass:"upload-button"},[n("a-dropdown",{attrs:{placement:"topLeft",trigger:["click"]}},[n("a-button",{attrs:{type:"primary",shape:"circle",icon:"plus",size:"large"}}),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{rel:"noopener noreferrer",href:"javascript:void(0);"},on:{click:function(){return t.uploadVisible=!0}}},[e._v("安装主题")])]),n("a-menu-item",[n("a",{attrs:{rel:"noopener noreferrer",href:"javascript:void(0);"},on:{click:e.handleReload}},[e._v("刷新列表")])])],1)],1)],1),n("a-modal",{attrs:{title:"安装主题",footer:null,bodyStyle:{padding:"0 24px 24px"}},model:{value:e.uploadVisible,callback:function(t){e.uploadVisible=t},expression:"uploadVisible"}},[n("div",{staticClass:"custom-tab-wrapper"},[n("a-tabs",[n("a-tab-pane",{key:"1",attrs:{tab:"远程拉取"}},[n("a-form",{attrs:{layout:"vertical"}},[n("a-form-item",{attrs:{label:"远程地址："}},[n("a-input",{model:{value:e.fetchingUrl,callback:function(t){e.fetchingUrl=t},expression:"fetchingUrl"}})],1),n("a-form-item",[n("a-button",{attrs:{type:"primary",loading:e.fetchButtonLoading},on:{click:e.handleFetching}},[e._v("下载")])],1)],1),n("a-alert",{attrs:{type:"info",closable:""}},[n("template",{slot:"message"},[e._v("\n              远程地址即主题仓库地址，如：https://github.com/halo-dev/halo-theme-quick-starter。\n              "),n("br"),e._v("更多主题请访问：\n              "),n("a",{attrs:{target:"_blank",href:"https://halo.run/theme"}},[e._v("https://halo.run/theme")])])],2)],1),n("a-tab-pane",{key:"2",attrs:{tab:"本地上传"}},[n("upload",{attrs:{name:"file",multiple:"",accept:"application/zip",uploadHandler:e.uploadHandler},on:{change:e.handleChange,success:e.handleUploadSuccess}},[n("p",{staticClass:"ant-upload-drag-icon"},[n("a-icon",{attrs:{type:"inbox"}})],1),n("p",{staticClass:"ant-upload-text"},[e._v("点击选择主题或将主题拖拽到此处")]),n("p",{staticClass:"ant-upload-hint"},[e._v("支持单个或批量上传，仅支持 ZIP 格式的文件")])])],1)],1)],1)])],1)},i=[],o=(a("7364"),a("b745"),a("ed4e")),s=a("5a70"),r=a("ac0d"),l=a("12de"),c={components:{AttachmentDrawer:o["a"],FooterToolBar:s["a"]},mixins:[r["a"],r["b"]],data:function(){return{themeLoading:!1,optionLoading:!0,uploadVisible:!1,fetchButtonLoading:!1,wrapperCol:{xl:{span:12},lg:{span:12},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,themes:[],visible:!1,themeConfiguration:[],themeSettings:[],themeProperty:null,fetchingUrl:null,uploadHandler:l["a"].upload}},computed:{sortedThemes:function(){var t=this.themes.slice(0);return t.sort(function(t,e){return e.activated-t.activated})}},created:function(){this.loadThemes()},destroyed:function(){this.visible&&(this.visible=!1)},beforeRouteLeave:function(t,e,a){this.visible&&(this.visible=!1),a()},methods:{loadThemes:function(){var t=this;this.themeLoading=!0,l["a"].listAll().then(function(e){t.themes=e.data.data,t.themeLoading=!1})},settingDrawer:function(t){var e=this;this.visible=!0,this.optionLoading=!0,this.themeProperty=t,l["a"].fetchConfiguration(t.id).then(function(a){e.themeConfiguration=a.data.data,l["a"].fetchSettings(t.id).then(function(t){e.themeSettings=t.data.data,setTimeout(function(){e.optionLoading=!1},300)})})},activeTheme:function(t){var e=this;l["a"].active(t).then(function(t){e.$message.success("设置成功！"),e.loadThemes()})},handleUpdateTheme:function(t){var e=this;l["a"].update(t).then(function(t){e.$message.success("更新成功！"),e.loadThemes()})},handleDeleteTheme:function(t){var e=this;l["a"].delete(t).then(function(t){e.$message.success("删除成功！"),e.loadThemes()})},handleSaveSettings:function(){var t=this;l["a"].saveSettings(this.themeProperty.id,this.themeSettings).then(function(e){t.$message.success("保存成功！")})},onClose:function(){this.visible=!1,this.optionLoading=!1,this.themeConfiguration=[],this.themeProperty=null},handleChange:function(t){var e=t.file.status;"done"===e?this.$message.success("".concat(t.file.name," 主题上传成功！")):"error"===e&&this.$message.error("".concat(t.file.name," 主题上传失败！"))},handleUploadSuccess:function(){this.uploadVisible=!1,this.loadThemes()},handleEllipsisClick:function(t){this.$log.debug("Ellipsis clicked",t)},handleEditClick:function(t){this.settingDrawer(t)},handleActivateClick:function(t){this.activeTheme(t.id)},handleFetching:function(){var t=this;this.fetchButtonLoading=!0,l["a"].fetching(this.fetchingUrl).then(function(e){t.$message.success("拉取成功！"),t.uploadVisible=!1,t.loadThemes()}).finally(function(){t.fetchButtonLoading=!1})},handleReload:function(){var t=this;l["a"].reload().then(function(e){t.loadThemes(),t.$message.success("刷新成功！")})}}},d=c,u=(a("92c0"),a("17cc")),h=Object(u["a"])(d,n,i,!1,null,"290ad9ab",null);e["default"]=h.exports},"92c0":function(t,e,a){"use strict";var n=a("f96c"),i=a.n(n);i.a},ed4e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-drawer",{attrs:{title:"附件库",width:t.isMobile()?"100%":"460",closable:"",visible:t.visiable,destroyOnClose:""},on:{close:t.onClose}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-input-search",{attrs:{placeholder:"搜索附件",enterButton:""},on:{search:function(e){return t.loadAttachments(!0)}},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1),a("a-divider"),a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-skeleton",{attrs:{active:"",loading:t.skeletonLoading,paragraph:{rows:18}}},[a("a-col",{attrs:{span:24}},t._l(t.formattedDatas,function(e,n){return a("div",{key:n,staticClass:"attach-item",on:{click:function(a){return t.handleShowDetailDrawer(e)}}},[a("img",{attrs:{src:e.thumbPath}})])}),0)],1)],1),a("a-divider"),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{attrs:{defaultPageSize:t.pagination.size,total:t.pagination.total},on:{change:t.handlePaginationChange}})],1),t.selectedAttachment?a("AttachmentDetailDrawer",{attrs:{attachment:t.selectedAttachment},on:{delete:t.handleDelete},model:{value:t.detailVisiable,callback:function(e){t.detailVisiable=e},expression:"detailVisiable"}}):t._e(),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleShowUploadModal}},[t._v("上传附件")])],1)],1),a("a-modal",{attrs:{title:"上传附件",footer:null,afterClose:t.onUploadClose},model:{value:t.uploadVisible,callback:function(e){t.uploadVisible=e},expression:"uploadVisible"}},[a("upload",{attrs:{name:"file",multiple:"",uploadHandler:t.attachmentUploadHandler}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("点击选择文件或将文件拖拽到此处")]),a("p",{staticClass:"ant-upload-hint"},[t._v("支持单个或批量上传")])])],1)],1)},i=[],o=(a("b745"),a("ac0d")),s=a("a796"),r=a("5bcf"),l={name:"AttachmentDrawer",mixins:[o["a"],o["b"]],components:{AttachmentDetailDrawer:r["a"]},model:{prop:"visiable",event:"close"},props:{visiable:{type:Boolean,required:!1,default:!1}},data:function(){return{attachmentType:s["a"].type,detailVisiable:!1,attachmentDrawerVisible:!1,uploadVisible:!1,skeletonLoading:!0,pagination:{page:1,size:12,sort:""},queryParam:{page:0,size:18,sort:null,keyword:null},attachments:[],selectedAttachment:{},attachmentUploadHandler:s["a"].upload}},computed:{formattedDatas:function(){var t=this;return this.attachments.map(function(e){return e.typeProperty=t.attachmentType[e.type],e})}},created:function(){this.loadSkeleton(),this.loadAttachments()},watch:{visiable:function(t,e){t&&this.loadSkeleton()}},methods:{loadSkeleton:function(){var t=this;this.skeletonLoading=!0,setTimeout(function(){t.skeletonLoading=!1},500)},handleShowUploadModal:function(){this.uploadVisible=!0},handleShowDetailDrawer:function(t){this.selectedAttachment=t,this.$log.debug("Show detail of",t),this.detailVisiable=!0},loadAttachments:function(t){var e=this;this.queryParam.page=this.pagination.page-1,this.queryParam.size=this.pagination.size,this.queryParam.sort=this.pagination.sort,t&&(this.queryParam.page=0),s["a"].query(this.queryParam).then(function(t){e.attachments=t.data.data.content,e.pagination.total=t.data.data.total})},handlePaginationChange:function(t,e){this.pagination.page=t,this.pagination.size=e,this.loadAttachments()},onUploadClose:function(){this.loadSkeleton(),this.loadAttachments()},handleDelete:function(){this.loadAttachments()},onClose:function(){this.$emit("close",!1)}}},c=l,d=(a("5f9f"),a("17cc")),u=Object(d["a"])(c,n,i,!1,null,null,null);e["a"]=u.exports},f96c:function(t,e,a){}}]);