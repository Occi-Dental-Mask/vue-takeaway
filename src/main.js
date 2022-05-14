import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'normalize.css'
//引入全局样式文件
import './style/index.scss' 
createApp(App).use(router).use(store).mount('#app')
