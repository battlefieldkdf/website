<script setup lang="ts">
import SiteLogoJpg from '@battlefieldkdf/images/bkdf-logo.jpg';
import { useNavigationItems } from './common';

const navItems = useNavigationItems().filter((it) => it.routeName !== 'home');

// eslint-disable-next-line no-undef
const commitRef = __GITREF__;
// eslint-disable-next-line no-undef
const version = __VERSION__;
</script>

<template>
    <VCard min-height="90vh" class="d-flex flex-column ma-3" color="accent">
        <RouterLink :to="{ name: 'home' }">
            <VImg :src="SiteLogoJpg" alt="Battlefield KdF" cover />
        </RouterLink>

        <VDivider />

        <VCardText>
            <VTabs direction="vertical">
                <VTab v-for="it in navItems" :key="it.routeName" :to="it.to">
                    {{ it.text }}
                </VTab>
            </VTabs>
        </VCardText>

        <VSpacer />
        <VCardActions class="justify-center opacity-60 mb-0">
            <VBtn variant="text" class="text-caption">
                <VIcon> mdi-github </VIcon>{{ version }} ({{ commitRef }}) &copy; {{ new Date().getFullYear() }}
            </VBtn>
        </VCardActions>
    </VCard>
</template>

<style scoped lang="scss">
* {
    font-family: 'Roboto', sans-serif;
}
</style>
