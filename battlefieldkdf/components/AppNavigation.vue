<script setup lang="ts">
import * as Vue from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { RouteLocationRaw, useRoute } from 'vue-router';

import { VAppBar, VAppBarTitle } from 'vuetify/lib/components/index.mjs';

const display = useDisplay();
const route = useRoute();

const PAGE_TITLE = 'Battlefield KDF';

const navItems = [
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
</script>

<template>
    <VAppBar v-if="!display.mobile.value">
        <VAppBarTitle>
            <VIcon class="mr-6">mdi-sword-cross</VIcon>
            <RouterLink :to="{ name: 'home' }" class="appTitle">
                {{ PAGE_TITLE }}
            </RouterLink>
        </VAppBarTitle>
        <template #append>
            <VTabs stacked>
                <VTab v-for="it in navItems" :key="it.routeName" :to="it.to">
                    <VIcon>{{ it.icon }}</VIcon>
                    {{ it.text }}
                </VTab>
            </VTabs>
        </template>
    </VAppBar>

    <VAppBar v-if="display.mobile.value">
        <VAppBarNavIcon />
        <VAppBarTitle class="d-flex">
            <RouterLink :to="{ name: 'home' }" class="appTitle"> {{ PAGE_TITLE }}</RouterLink>
        </VAppBarTitle>
        <template #append>
            <VIcon class="flex-right">mdi-sword-cross</VIcon>
        </template>
    </VAppBar>
</template>

<style lang="scss" scoped>
.appTitle {
    color: inherit;
    text-decoration: inherit;
}
</style>
