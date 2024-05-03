<script setup lang="ts">
console.log('setup');

const appReady = () => {
    console.log('app ready');
};
</script>

<template>
    <VApp @vue:mounted="appReady">nothing?</VApp>
</template>

<style lang="scss"></style>
