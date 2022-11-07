<template>
  <n-switch v-model:value="isDark" size="large">
    <template #checked-icon> 🌙</template>
    <template #unchecked-icon> ☀️</template>
  </n-switch>
</template>

<script setup>
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<style lang="scss" scoped>
.toggle-theme-btn {
  color: var(--color-text-btn);
}
</style>
