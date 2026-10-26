import { createSSRApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PageMain from './pages/PageMain.vue'
import PageMap from './pages/PageMap.vue'
import PageStaticMap from './pages/PageStaticMap.vue'

import { createWebHistory, createRouter } from 'vue-router';


const routes = [
  {
    path: '/',
    component: PageMain,
  },
  {
    path: '/map',
    component: PageStaticMap,
  },
  {
    path: '/map/bluemap',
    component: PageMap,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createSSRApp(App).use(router).use(ElementPlus).mount('#app');
