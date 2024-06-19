import {createSSRApp} from 'vue'
import App from './App.vue'
import {router} from "@/router/routers";
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createSSRApp(App).use(router).use(ElementPlus).mount('#app')
