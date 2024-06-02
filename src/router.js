import { createRouter,createWebHistory } from "vue-router";
import UserAuth from './components/auth/UserAuth.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/auth',component:UserAuth}
    ]
})

export default router