(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{642:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"间歇调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#间歇调用"}},[t._v("#")]),t._v(" 间歇调用")]),t._v(" "),s("p",[s("code",[t._v("window.setInterval()")]),t._v(" 方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。")]),t._v(" "),s("p",[s("strong",[t._v("解决的问题")]),t._v("：由于 JavaScript 的单线程特征，定时器提供了一种跳出单线程限制的方法，即让一段代码在一定毫秒之后，再异步执行。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" intervalID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" intervalID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("intervalId")]),t._v(" "),s("td",[t._v("定时器的唯一辨识符，可以作为参数传给 "),s("code",[t._v("clearInvterval()")])])]),t._v(" "),s("tr",[s("td",[t._v("func")]),t._v(" "),s("td",[t._v("需要重复调用的函数")])]),t._v(" "),s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("是另一种语法的应用，是指你想重复执行的一段字符串构成的代码（不推荐使用，不推荐的原因和 "),s("code",[t._v("eval()")]),t._v(" 一样）")])]),t._v(" "),s("tr",[s("td",[t._v("delay")]),t._v(" "),s("td",[t._v("是每次延迟的毫秒数（一秒等于1000毫秒），函数的每次调用会在该延迟之后发生。和 "),s("code",[t._v("setTimeout")]),t._v(" 一样，实际的延迟时间可能会稍长一点")])])])]),t._v(" "),s("p",[t._v("需要注意的是，IE不支持第一种语法中向延迟函数传递额外参数的功能。如果你想要在IE中达到同样的功能，你必须使用一种兼容代码。")]),t._v(" "),s("h4",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("ul",[s("li",[t._v("定时器的时间间隔设为0，也会有几毫秒的延迟")]),t._v(" "),s("li",[t._v("在使用 "),s("code",[t._v("setInterval")]),t._v(" 和 "),s("code",[t._v("setTimeout")]),t._v(" 时最好将其返回值赋值给一个变量，以便取消定时器")]),t._v(" "),s("li",[t._v("在使用 "),s("code",[t._v("Vue")]),t._v(" 的时候，"),s("code",[t._v("setTimeout")]),t._v(" 和 "),s("code",[t._v("setInterval")]),t._v(" 的 "),s("code",[t._v("this")]),t._v(" 指向时 window 对象，访问不到组件数据以及方法")]),t._v(" "),s("li",[t._v("在使用 "),s("code",[t._v("Vue")]),t._v(" 的时候，路由跳转但不会销毁 "),s("code",[t._v("setInterval")]),t._v(" ，但是组件已经销毁了，这会导致问题")]),t._v(" "),s("li",[t._v("在执行线程中 "),s("code",[t._v("setTimeout")]),t._v(" / "),s("code",[t._v("setInterval")]),t._v(" 无法保证准时执行回调函数的")]),t._v(" "),s("li",[s("code",[t._v("setInterval")]),t._v(" 调用有可能会被废弃以及 "),s("code",[t._v("setInterval")]),t._v(" 的连续执行")])]),t._v(" "),s("h3",{attrs:{id:"停止间歇调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止间歇调用"}},[t._v("#")]),t._v(" 停止间歇调用")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("clearInterval(timeId)")]),t._v(" 可以清除间歇调用定时器（定时器还在，只是没调用）。")]),t._v(" "),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("h4",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 间歇调用的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("animate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'间隙调用'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 间歇调用定时器（表示每过500毫秒执行一次animate函数）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intervalID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除调用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);