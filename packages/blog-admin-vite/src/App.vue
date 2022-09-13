<script setup lang="ts">
import { Bulb } from '@vicons/ionicons5';
import { useDark, useToggle } from '@vueuse/core';
import { darkTheme, lightTheme } from 'naive-ui';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <div class="p-16px">
      <header class="header sticky">
        <router-link to="/">
          <n-icon class="icon" size="20">
            <Bulb />
          </n-icon>
          Lighting
        </router-link>
        <n-button @click="toggleDark">darkTheme/lightTheme</n-button>
      </header>

      <router-view></router-view>
    </div>
  </n-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Montserrat, sans-serif;
  background: var(--color-background);
}

@font-face {
  font-family: 'exo';
  src: url('./assets/No.025-Sounso-Warm-2.ttf');
}

.header {
  top: 20px;
  left: 0px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 900;

  .icon {
    color: #2c30ac;
  }
}
</style>
