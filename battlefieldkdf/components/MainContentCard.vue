<script setup lang="ts">
interface Props {
    image: string;
    alt?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <VCard variant="text" rounded="0">
        <VImg :src="props.image" :alt="props.alt" :title="props.alt" cover height="360px" />
        <VCardTitle tag="h1">
            <slot name="title" />
        </VCardTitle>
        <VCardText>
            <slot />
        </VCardText>
    </VCard>
</template>
