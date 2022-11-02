import { debounce, throttle } from "lodash-es"
import { Directive, Plugin, reactive } from "vue"
import type { DirectiveBinding } from "vue"
import './ripple.scss'

interface RippleOptions {

}
interface RippleHTMLElement extends HTMLElement {
  _ripple?: RippleOptions

}
function createRipple() {
  const el = document.createElement('div')
  el.className = 'ripple'
  return el
}

function beforeMount(el, binding, vnode, prevVnode) {

}
let initialSize = 4
let step = 4
let currentSize = 4
function mounted(el: RippleHTMLElement, binding: DirectiveBinding) {
  el._ripple = {
    task: null
  }
  el.addEventListener('touchstart', () => {}, {passive:true})
  el.addEventListener('touchmove', () => {}, {passive:true})
}

const Ripple: Directive & Plugin = {
  // 在元素被插入到 DOM 前调用
  beforeMount,
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted,
  // 绑定元素的父组件更新前调用
  install: function (app) {
    app.directive('ripple', this)
  }
}

export default Ripple