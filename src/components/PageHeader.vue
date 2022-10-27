<template>
    <div class="page-header">
        <button @click="toggle">切换</button>
    </div>
</template>
<script setup lang="ts">
import { setThemes } from '@/util/style';
import type { ThemeType } from '@/util/style';

import { ref } from 'vue';
const theme = ref<ThemeType>('light')
const toggle = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    setThemes(theme.value)
}

setThemes(theme.value)
</script>
<style>
.page-header {
    background-color: var(--site-config-color-bg);
}
</style>