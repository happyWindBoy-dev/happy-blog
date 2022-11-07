<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui';
import AddBtn from './components/AddBtn.vue';
import ToggleThemeBtn from './components/toggleThemeBtn.vue';
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <div>
      <header class="header sticky">
        <div class="flex items-center justify-center h-60px">
          <router-link class="flex items-center" to="/">
            <!-- <n-icon class="icon" size="20">
              <Bulb />
            </n-icon> -->
            <p class="title text-3xl font-bold">Cat Team</p>
          </router-link>
          <div class="absolute right-0"><ToggleThemeBtn /></div>
        </div>
      </header>
      <AddBtn />
      <router-view></router-view>
    </div>
  </n-config-provider>
</template>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  src: url('/assets/font_family/Montserrat-VariableFont_wght.ttf');
}

@font-face {
  font-family: BoldnessRace-2;
  src: url('/assets/font_family/BoldnessRace-2.ttf');
}

html {
  background: var(--color-background-2);
  font-family: Montserrat;
  min-height: 100vh;
}

.header {
  top: 0px;
  left: 0px;
  width: 100%;
  max-width: 1000px;
  padding: 16px 0;
  margin: auto;
  background-color: var(--color-background-2);
  z-index: 10;

  .icon {
    color: #2c30ac;
  }

  .title {
    font-family: 'BoldnessRace-2';
    color: var(--color-text-title);
    font-style: italic;
  }
}
</style>
