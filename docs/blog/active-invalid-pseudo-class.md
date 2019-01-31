---
title: 移动端:active伪类无效的解决方法
date: '2019/01/30 14:15:42'
type: post
tag: ['css', 'mobile']
meta:
  -
    name: description
    content: null
  -
    name: keywords
    content: null
---
&#8195;&#8195;伪类``:active``常用于设定点击状态下或其他被激活状态下一个链接的样式。最常用于锚点``<a href="#">``这种情况，一般主流浏览器下也支持其他元素，如``button``等。<!-- more -->  
&#8195;&#8195;说到``:active``伪类就不得不提到``:link`` ``:visited`` ``:hover`` ``:active``这个四个，最常用的是用于``a``链接，设定鼠标交互时不同的链接颜色。如下示例：
```css
/* Essentially means a[href] */  
a:link { 
  color: blue; 
}
a:visited {  
  color: purple;  
}
a:hover { 
  color: green;  
}
a:active { 
  color: red;  
}
```
&#8195;&#8195;经过一番查找，之后在[mozilla开发社区](https://developer.mozilla.org/zh-CN/)找到了``:active``不起作用的答案：
>[1] By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the ``<body>``.  

&#8195;&#8195;看来在iOS系统的移动设备中，需要在按钮元素或``body/html``上绑定一个``touchstart``事件才能激活``:active``状态。
```javascript
// 方法 1
document.body.addEventListener('touchstart', function () {});  //...空函数即可
// 方法2 或者在 <body > 加个ontouchstart 也可以使之生效
<body ontouchstart>
```
&#8195;&#8195;将上述事件监听代码加上后，Safari Mobile上就可以看到按钮按下后的切换效果了。