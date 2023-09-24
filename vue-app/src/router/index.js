import { createRouter, createWebHistory } from "vue-router";
import { requireAuth } from '../middleware/auth';

const routes = [
    {
        path: '/',
        name: 'transaction.index',
        component: () => import("@/views/transaction/Index.vue"),
        meta: {requiresAuth: true},
        beforeEnter: requireAuth
    },
    {
        path: '/create',
        name: 'transaction.create',
        component: () => import("@/views/transaction/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'transaction.edit',
        component: () => import("@/views/transaction/Edit.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/Login.vue")
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import("@/views/Logout.vue")
    },
    {
        path: '/latihan',
        name: 'latihan',
        component: () => import("@/views/Latihan.vue")
    },
    {
        path: '/latihan2',
        name: 'latihan2',
        component: () => import("@/views/Latihan2.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router