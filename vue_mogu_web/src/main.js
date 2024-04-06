// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// Vue.use(ElementUI, { locale })

import App from './App'
import router from './router'
import store from './store'

// 引入公共JS
import "@/assets/iconfont/iconfont.css";
import '../static/css/ckeditor.css';
import '../static/css/index.css';
Vue.config.productionTip = false
import './permission' // permission control

import xss from 'xss'
// 定义全局XSS解决方法
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})

// 引入全局工具类
import prototype from './utils/prototype'
Vue.use(prototype)

import MathJax from './utils/MathJax'
Vue.prototype.MathJax = MathJax;

import MetaInfo from 'vue-meta'
import hljs from '../static/cdn/highlight';

// import '../static/cdn/highlightjs-line-numbers.min.js'

// const hljs = require('../static/cdn/highlight.js')

// export async function highlightJSLoad () {
//   await import('../static/cdn/highlight.js')
// }
// export async function highlightLineNumbersLoad () {
//   await import('../static/cdn/highlightjs-line-numbers.min.js')
// }

Vue.use(MetaInfo)

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
//   highlightJSLoad().then(() => {
//     window.hljs = hljs

//     highlightLineNumbersLoad().then(() => {
//       hljs.initLineNumbersOnLoad()
//       hljs.initLineNumbersOnLoad({
//         singleLine: true
//     })
//       blocks.forEach((block) => {
//         hljs.highlightBlock(block)
//         hljs.lineNumbersBlock(block)
//       })
//     })
//   })
// })

  blocks.forEach((block) => {

// 1.创建ul节点
// let ul = document.createElement("ul");
// // 2.根据换行符获取行数，根据获取的行数生成行号
// let rowCount = block.outerHTML.split('\n').length;
// for(let i=1;i <= rowCount - 1; i++){
//   //创建li节点，创建文本节点
//   let li = document.createElement("li")
//   let text = document.createTextNode(i)
//   //为li追加文本节点，将li加入ul
//   li.appendChild(text)
//   ul.appendChild(li)
// }
// // 3.给行号添加类名
// ul.className = 'pre-numbering'
// // 4.将ul节点加到 代码块
// block.parentNode.appendChild(ul)

    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //需要将store和vue实例进行关联，这里将其传递进去
  store,
  components: { App },
  template: '<App/>'
})
