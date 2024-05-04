import * as VueRouter from 'vue-router';

const ROUTER_OPTIONS: VueRouter.RouterOptions = {
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@battlefieldkdf/pages/Home.vue'),
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: () => import('@battlefieldkdf/pages/About.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('@battlefieldkdf/pages/Calendar.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@battlefieldkdf/pages/Contact.vue'),
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@battlefieldkdf/pages/NotFound.vue'),
        },
    ],
};

export const createBkdfRouter = () => VueRouter.createRouter(ROUTER_OPTIONS);
