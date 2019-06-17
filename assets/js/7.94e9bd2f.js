(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("TypeScript里的每个函数中，传递给一个函数的参数个数必须与函数期望的参数个数一致。如下实例演示")]),t._v(" "),t._m(2),a("p",[t._v("JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：")]),t._v(" "),t._m(3),a("p",[t._v('可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"。')]),t._v(" "),t._m(4),a("p",[t._v("在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。")]),t._v(" "),t._m(5),a("p",[t._v("和")]),t._v(" "),t._m(6),a("p",[t._v("共享同样的类型(firstName: string, lastName?: string) => string。 默认参数的默认值消失了，只保留了它是一个可选参数的信息。与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 例如，我们重写最后一个例子，让 firstName是带默认值的参数：")]),t._v(" "),t._m(7),a("p",[t._v("本实例结束实践项目地址")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/durban89/typescript_demo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/durban89/typescript_demo.git"),a("OutboundLink")],1),a("br"),t._v("\ntag: 1.2.1")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("strong",[this._v("函数")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"可选参数和默认参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可选参数和默认参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 可选参数和默认参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Smith"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"A"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"A"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Smith"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Durban"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" lastName\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"A"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"A"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 错误演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 正确演示")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("buildName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="typescript-function-argv.md";s.default=e.exports}}]);