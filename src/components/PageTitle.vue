<template>
    <div class="page-title">
        <h5 style="line-height: 0.1rem !important;">{{ title }}</h5>
    </div>
</template>
<script lang="ts" setup>
interface Props {
    title: string
}

defineProps<Props>()
</script>