import { createSSRApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PageMain from './pages/PageMain.vue'

import { createWebHistory, createRouter } from 'vue-router';


const routes = [
  {
    path: '/',
    component: PageMain,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createSSRApp(App).use(router).use(ElementPlus).mount('#app');
