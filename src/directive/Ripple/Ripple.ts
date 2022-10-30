import { debounce, throttle } from "lodash-es"
import { Directive, Plugin, reactive } from "vue"
import './ripple.scss'

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
function mounted(el: HTMLElement, binding, vnode, preVnode) {
  el.style.position = 'relative'
  el.style.overflow = 'hidden'
  const rect = el.getBoundingClientRect()
  const rippleEl = createRipple()
  el.appendChild(rippleEl)
  el.addEventListener('mouseenter', throttle((event) => {
      console.log(event);
      const { pageX, pageY } = event
      rippleEl.style.left = pageX - rect.left + 'px'
      rippleEl.style.top = pageY - rect.top + 'px'
     
      setTimeout(() => {
        currentSize = currentSize + step
        const scale = currentSize / initialSize
        rippleEl.style.transform = `scale(${scale})`
      },20)
  }, 300))
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