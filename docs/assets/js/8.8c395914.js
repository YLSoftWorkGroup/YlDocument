(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(a,t,r){"use strict";r.r(t);var s=r(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"开发规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发规范")]),r("h2",{attrs:{id:"命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 命名")]),r("h5",{attrs:{id:"文件命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件命名")]),r("p",[a._v("模块名称和数据库名称保持一致，命名采用大驼峰命名（AssBss）法则，编辑界面统一用模块名称+Edit命名，如果需要add或者其他界面均以主模块+二级名称。")]),r("h5",{attrs:{id:"文件夹命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件夹命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件夹命名")]),r("p",[a._v("文件夹命名用全部用采用小写。")]),r("h5",{attrs:{id:"文件结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件结构")]),r("p",[a._v("主要业务模块都在src/pages文件夹下，其中ocomponents文件夹下为封装的业务组件，operation为业务模块，一个模块一个文件夹一般情况文件和文件夹名称相同。\n功能组件在components下，功能组件一般要全局引入。")]),r("h5",{attrs:{id:"组件内部命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件内部命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 组件内部命名")]),r("pre",[r("code",[a._v("组件中内部方法均以_开始采用小驼峰方式命名。组件对外方法前不用加_。变量名均以小驼峰命名法则命名assBSS(小驼峰)。\n")])]),r("h5",{attrs:{id:"css类命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css类命名","aria-hidden":"true"}},[a._v("#")]),a._v(" css类命名")]),r("p",[a._v("css命名都为小写，如果出现辅类名，均以xxx-xxx形式命名。如果使用预编译语言函数均以_开始，名称全部小写。")]),r("h4",{attrs:{id:"功能-菜单命名规则："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能-菜单命名规则：","aria-hidden":"true"}},[a._v("#")]),a._v(" 功能\\菜单命名规则：")]),r("p",[a._v("功能管理： 功能编码    如果属于业务模块，以主表名去掉前缀再加's'为后缀为功能编码："),r("code",[a._v("Table4Orders")]),a._v("\n如果属于报表模块，以Report开头+自定义名称再加's'为后缀为功能编码："),r("code",[a._v("ReportPurchaseSums")]),a._v(",\n菜单管理： 菜单编码    如果属于业务模块，以主表名去掉前缀全部小写为菜单编码："),r("code",[a._v("table4Order")]),a._v("\n如果属于报表模块，以report开头+自定义名称为菜单编码："),r("code",[a._v("reportpurchasesum")]),a._v(",")]),r("p",[r("strong",[a._v("注意： 功能代码和菜单代码在全表均不能重复。")])]),r("h2",{attrs:{id:"色彩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#色彩","aria-hidden":"true"}},[a._v("#")]),a._v(" 色彩")]),r("h2",{attrs:{id:"尺寸"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尺寸","aria-hidden":"true"}},[a._v("#")]),a._v(" 尺寸")]),r("h2",{attrs:{id:"图标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图标","aria-hidden":"true"}},[a._v("#")]),a._v(" 图标")]),r("h2",{attrs:{id:"路径"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路径","aria-hidden":"true"}},[a._v("#")]),a._v(" 路径")]),r("h2",{attrs:{id:"页面用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面用法","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面用法")])])}],!1,null,null,null);t.default=e.exports}}]);