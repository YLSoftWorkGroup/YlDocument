(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("h2",{attrs:{id:"命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),a("h5",{attrs:{id:"文件命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件命名"}},[t._v("#")]),t._v(" 文件命名")]),t._v(" "),a("p",[t._v("模块名称和数据库名称保持一致，命名采用大驼峰命名（AssBss）法则，编辑界面统一用模块名称+Edit命名，如果需要add或者其他界面均以主模块+二级名称。")]),t._v(" "),a("h5",{attrs:{id:"文件夹命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件夹命名"}},[t._v("#")]),t._v(" 文件夹命名")]),t._v(" "),a("p",[t._v("文件夹命名用全部用采用小写。")]),t._v(" "),a("h5",{attrs:{id:"组件内部命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件内部命名"}},[t._v("#")]),t._v(" 组件内部命名")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("组件中内部方法均以_开始采用小驼峰方式命名。组件对外方法前不用加_。变量名均以小驼峰命名法则命名assBSS(小驼峰)。\n")])])]),a("h5",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),a("p",[t._v("组件内部支持css语法或者styus编译语言语法。")]),t._v(" "),a("h5",{attrs:{id:"脚手架文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚手架文件结构"}},[t._v("#")]),t._v(" 脚手架文件结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("public\n    |__config 前端配置文件\n    |__fonts  字体文件\n    |__img    静态图片文件\n    |__plugin 第三方插件\n    |__style  外部全局样式\n    |__theme  主题文件夹\n    |__manifest pwa配置\nsrc  \n    |__api  常用api文件\n    |__common 常用函数库\n    |__components 组件库\n    |__directive 指令\n    |__filters 过滤器\n    |__lang  多语言\n    |__mixns 混合封装\n    |__ocomponents 业务组件\n    |__pages 业务页面\n    |__vuex  全局状态   \n")])])]),a("h4",{attrs:{id:"功能-菜单命名规则："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能-菜单命名规则："}},[t._v("#")]),t._v(" 功能\\菜单命名规则：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("功能管理： 功能编码    如果模块需要功能细分授权，以主表名去掉前缀再加's'为后缀为功能编码："),a("code",[t._v("Table4Orders")]),t._v("\n如果只属于模块授权，自定义名称再加's'为后缀为功能编码："),a("code",[t._v("ReportPurchaseSums")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("菜单管理： 菜单编码    如果模块需要功能细分授权，以主表名去掉前缀全部小写为菜单编码："),a("code",[t._v("table4Order")]),t._v("\n如果只属于模块授权，自定义名称为菜单编码："),a("code",[t._v("reportpurchasesum")]),t._v("。")])])]),t._v(" "),a("p",[a("strong",[t._v("注意： 功能代码和菜单代码在全表均不能重复。")])]),t._v(" "),a("h2",{attrs:{id:"色彩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#色彩"}},[t._v("#")]),t._v(" 色彩")]),t._v(" "),a("h3",{attrs:{id:"系统颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统颜色"}},[t._v("#")]),t._v(" 系统颜色")]),t._v(" "),a("p",[a("strong",[t._v("辅助色")])]),t._v(" "),a("p",[t._v("除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。")]),t._v(" "),a("p",[a("em",[t._v("主色随着定制皮肤而变")]),t._v(" "),a("el-row",{attrs:{gutter:12}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#67C23A",color:"#fff","font-weight":"500"}},[t._v("Success "),a("br"),t._v(" #67C23A")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#E6A23C",color:"#fff","font-weight":"500"}},[t._v("Warning "),a("br"),t._v(" #E6A23C")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#F56C6C",color:"#fff","font-weight":"500"}},[t._v("Danger "),a("br"),t._v(" #F56C6C")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#909399",color:"#fff","font-weight":"500"}},[t._v("Info "),a("br"),t._v(" #909399")])],1)],1)],1),t._v(" "),a("p",[a("strong",[t._v("中性色")])]),t._v(" "),a("p",[t._v("中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。\n"),a("el-row",{attrs:{gutter:12}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#303133",color:"#fff","font-weight":"500"}},[t._v("主要文字 "),a("br"),t._v(" #303133")]),t._v(" "),a("el-card",{staticStyle:{background:"#606266",color:"#fff","font-weight":"500"}},[t._v("常规文字 "),a("br"),t._v(" #606266")]),t._v(" "),a("el-card",{staticStyle:{background:"#909399",color:"#fff","font-weight":"500"}},[t._v("次要文字 "),a("br"),t._v(" #909399")]),t._v(" "),a("el-card",{staticStyle:{background:"#C0C4CC",color:"#fff","font-weight":"500"}},[t._v("占位文字 "),a("br"),t._v(" #C0C4CC")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{background:"#DCDFE6",color:"#000","font-weight":"500"}},[t._v("一级边框 "),a("br"),t._v(" #DCDFE6")]),t._v(" "),a("el-card",{staticStyle:{background:"#E4E7ED",color:"#000","font-weight":"500"}},[t._v("二级边框 "),a("br"),t._v(" #E4E7ED")]),t._v(" "),a("el-card",{staticStyle:{background:"#EBEEF5",color:"#000","font-weight":"500"}},[t._v("三级边框 "),a("br"),t._v(" #EBEEF5")]),t._v(" "),a("el-card",{staticStyle:{background:"#F2F6FC",color:"#000","font-weight":"500"}},[t._v("四级边框 "),a("br"),t._v(" #F2F6FC")])],1)],1)],1),t._v(" "),a("p",[t._v("在系统中对应针对这些颜色提供了响应的样式类")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #67C23A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-warning")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #E6A23C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-danger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #F56C6C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #909399"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#b6d06c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text-primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#303133"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text-regular")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#606266 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text-secondary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#909399"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text-placeholder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#c0c4cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-color-base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#dcdfe6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-color-light")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#e4e7ed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-color-lighter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#ebeef5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border-color-extra-light")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#f2f6fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"皮肤定制配色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#皮肤定制配色"}},[t._v("#")]),t._v(" 皮肤定制配色")]),t._v(" "),a("p",[t._v("在系统中有的颜色是随着定制皮肤二变化的，比如主色、主页的面板色、菜单背景色等。\n下面只列出常用的一些定制类名：")]),t._v(" "),a("p",[t._v("默认皮肤")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#409EFF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主色*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-primary-light1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rbga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("158"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主色-减淡1*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-primary-light2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rbga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("158"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主色-减淡2*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-primary-light3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rbga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("158"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主色-减淡3*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".color-primary-light4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rbga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("158"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主色-减淡4*/")]),t._v("\n\n.main-text-color "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主文字色 带hover效果*/")]),t._v("\n.main-static-color  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主文字色 不带hover效果*/")]),t._v("\n.active-color  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*触发状态的背景色*/")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[t._v("#")]),t._v(" 尺寸")]),t._v(" "),a("h2",{attrs:{id:"图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),a("h3",{attrs:{id:"图标库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标库"}},[t._v("#")]),t._v(" 图标库")]),t._v(" "),a("p",[t._v("系统的图标使用来源：")]),t._v(" "),a("ol",[a("li",[t._v("element官网自带的图标。")]),t._v(" "),a("li",[t._v("系统集成的图标。在"),a("code",[t._v("public/font")]),t._v("文件夹下查看")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://fontawesome.dashgame.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://fontawesome.dashgame.com/"),a("OutboundLink")],1),t._v(" 官网的图标库")])]),t._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("图标类名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),a("p",[t._v("在系统中引用图标或文件资源时需要有正确的引用路径。")]),t._v(" "),a("blockquote",[a("p",[t._v("一般图片等资源都存放在"),a("code",[t._v("src/common")]),t._v("或者"),a("code",[t._v("public")]),t._v("中。"),a("code",[t._v("src/common")]),t._v("下的资源文件会随程序一并打包。后期不能替换。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("访问"),a("code",[t._v("src/common")]),t._v("的资源路径: "),a("code",[t._v("../../common/")]),t._v("  如image下的某个图片："),a("code",[t._v("../../common/image/login_user.png")])])]),t._v(" "),a("li",[a("p",[t._v("访问"),a("code",[t._v("public")]),t._v("的资源路径: "),a("code",[t._v("./文件名")]),t._v("  如img下的某个图片："),a("code",[t._v("./img/test.png")])])]),t._v(" "),a("li",[a("p",[t._v("文件之间相互调用：")])])]),t._v(" "),a("p",[a("code",[t._v("@")]),t._v(" 指向"),a("code",[t._v("src")]),t._v("目录；"),a("code",[t._v("./")]),t._v(" 指向本目录；"),a("code",[t._v("../")]),t._v(" 指向上层目录。")])])}),[],!1,null,null,null);s.default=r.exports}}]);