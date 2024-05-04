<script setup lang="ts">
import { useNavigationItems } from './common';

const navItems = useNavigationItems().toReversed();
</script>

<template>
    <VSpeedDial absolute location="top right" transition="slide-y-transition">
        <template #activator="{ props: activatorProps }">
            <VFab
                app
                :location="'bottom right' as any"
                style="z-index: 1000"
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
            rounded
        >
            <VIcon>{{ it.icon }}</VIcon>
            {{ it.text }}
        </VBtn>
    </VSpeedDial>
</template>
