import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory
import Dashboard from '@/components/Dashboard';
import DashboardHome from '@/pages/Home';
import Login from '@/pages/Login.vue';

// Define las rutas
const routes = [
    {
        path: '/',
        redirect: { name: 'DashboardHome' } 
    },
    {
        path: '/dashboard', 
        component: Dashboard, 
        children: [
            { path: '/', redirect: { name: 'DashboardHome' } },
            { path: 'home', name: 'DashboardHome', component: DashboardHome }
        ]
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: Login,
        meta: { title: 'Login - Mi Aplicación' }
    },
];

// Crea el router
const router = createRouter({
    history: createWebHistory(), // Usa createWebHistory para el modo de historial
    routes
});

// Exporta el router
export default router;
