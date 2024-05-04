<script setup lang="ts">
import AppNavigation from '@battlefieldkdf/components/AppNavigation.vue';
</script>

<template>
    <VApp>
        <VLayout>
            <AppNavigation />
            <VMain scrollable>
                <VContainer>
                    <RouterView></RouterView>
                </VContainer>
            </VMain>
        </VLayout>
    </VApp>
</template>

<style lang="scss"></style>
