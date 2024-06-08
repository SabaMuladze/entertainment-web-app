import { createRouter,createWebHistory } from "vue-router";
import UserAuth from './components/auth/UserAuth.vue'
import Home from './components/pages/Home.vue'
import Movies from './components/pages/Movies.vue'
import TvSeries from './components/pages/TvSeries.vue'
import Bookmarked from './components/pages/Bookmarked.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/auth',component:UserAuth},
        {path:'/home',component:Home},
        {path:'/movies',component:Movies},
        {path:'/series',component:TvSeries},
        {path:'/bookmarked',component:Bookmarked},

    ]
})

export default router