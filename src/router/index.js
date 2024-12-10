import { createRouter, createWebHistory } from 'vue-router';

// 定義路由
const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: () => import('../views/Login.vue'), // 登入頁
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: () => import('../views/Dashboard.vue'), // 儀表板頁
    },
];

// 創建路由實例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;