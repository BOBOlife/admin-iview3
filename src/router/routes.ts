import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/view/home/Home.vue')
        
    }
]

export default routes