import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { store } from '@/store'
import './style/common.scss'
import Ripple from '@/directive/Ripple/Ripple'

createApp(App).use(router).use(store).use(Ripple).mount('#app')

