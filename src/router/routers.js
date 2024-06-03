import {createMemoryHistory, createRouter} from 'vue-router'

// import HomeView from '../App.vue'
import MainView from '../components/MainView.vue'
// import AboutView from './AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainView,
        children: [
            {path: '/main', name: 'main', component: MainView}
        ]
    }
    // { path: '/about', component: AboutView },

]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})