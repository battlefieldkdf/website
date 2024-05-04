<script setup lang="ts">
interface Props {
    image: string;
    alt?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <VCard variant="flat">
        <VImg :src="props.image" :alt="props.alt" :title="props.alt" cover height="360px" />
        <VCardTitle>
            <h1>
                <slot name="title" />
            </h1>
        </VCardTitle>
        <VCardText>
            <slot />
        </VCardText>
    </VCard>
</template>
