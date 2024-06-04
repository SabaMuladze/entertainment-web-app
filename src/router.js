import { createRouter,createWebHistory } from "vue-router";
import UserAuth from './components/auth/UserAuth.vue'
import Home from './components/pages/Home.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/auth',component:UserAuth},
        {path:'/home',component:Home},

    ]
})

export default router