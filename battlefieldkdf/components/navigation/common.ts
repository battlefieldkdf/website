import * as Vue from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router';

export const useNavigationItems = () => {
    const route = useRoute();
    return [
        { text: 'Home', routeName: 'home', icon: 'mdi-home' },
        { text: 'About Us', routeName: 'about-us', icon: 'mdi-information-variant' },
        { text: 'Calendar', routeName: 'calendar', icon: 'mdi-calendar-month' },
        { text: 'Contact', routeName: 'contact', icon: 'mdi-account-heart' },
    ].map(({ text, routeName, icon }) => ({
        text,
        routeName,
        icon,
        to: <RouteLocationRaw>{ name: routeName },
        active: Vue.computed(() => route.name === routeName),
    }));
};
