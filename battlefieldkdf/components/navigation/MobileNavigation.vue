<script setup lang="ts">
import { useNavigationItems } from './common';

const navItems = useNavigationItems().toReversed();
</script>

<template>
    <VFab app extended :location="'top left' as any" :to="{ name: 'home' }">
        <VIcon class="mr-1">mdi-home</VIcon>
        <p>Battlefield KdF</p>
    </VFab>
    <VSpeedDial absolute location="top right" transition="slide-y-reverse-transition">
        <template #activator="{ props: activatorProps }">
            <VFab
                app
                :location="'bottom right' as any"
                v-bind="activatorProps"
                size="x-large"
                color="primary"
                icon="mdi-menu"
            />
        </template>
        <VBtn
            v-for="it in navItems"
            :key="it.routeName"
            :to="it.to"
            color="default"
            variant="elevated"
            size="large"
            class="mt-3"
            rounded
            stacked
        >
            <VIcon>{{ it.icon }}</VIcon>
            {{ it.text }}
        </VBtn>
    </VSpeedDial>
</template>

<style scoped lang="scss">
* {
    font-family: 'Roboto', sans-serif;
}
</style>
