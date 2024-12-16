import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from "@/views/Login.vue";
import DashboardPage from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import Report from "@/views/Report.vue";
import Channels from "@/views/Channels.vue";
import Tickets from "@/views/Tickets.vue";

// 定义路由
const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage, // 登录页面
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: DashboardPage, // 儀表板頁
        children: [
            {
                path: 'profile', // 相对路径，完整路径为 /dashboard/profile
                name: 'Profile',
                component: Profile,
            },
            {
                path: 'report', // 完整路径为 /dashboard/report
                name: 'Report',
                component: Report,
            },
            {
                path: 'channels', // 完整路径为 /dashboard/channels
                name: 'Channels',
                component: Channels,
            },
            {
                path: 'tickets', // 完整路径为 /dashboard/tickets
                name: 'Tickets',
                component: Tickets,
            },
        ],

    },
    {
        path: '/:pathMatch(.*)*', // 捕获所有未匹配路径
        redirect: '/dashboard', // 重定向到dashboard
    },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;