<script setup lang="ts">
import { Bulb } from '@vicons/ionicons5';
import { useDark, useToggle } from '@vueuse/core';
import { darkTheme, lightTheme } from 'naive-ui';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <div>
      <header class="header sticky">
        <div class="flex items-center justify-center h-60px">
          <router-link class="flex items-center" to="/">
            <n-icon class="icon" size="20">
              <Bulb />
            </n-icon>
            <p class="title text-3xl font-bold">Cat Team</p>
          </router-link>

          <div class="absolute right-0">
            <button class="toggle-theme-btn mr-4 font-bold text-base" @click="() => toggleDark()">
              {{ isDark ? 'lightTheme' : 'darkTheme' }}
            </button>

            <router-link to="/editor">
              <n-button round class="w-200px h-60px font-bold bg-green-400 add-btn text-base" color="#2c30ac">
                Add New
              </n-button>
            </router-link>
          </div>
        </div>
      </header>

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
  border-bottom: 1px solid var(--color-border);
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

  .toggle-theme-btn {
    color: var(--color-text-btn);
  }

  .add-btn {
    background-color: var(--color-background-primary-btn);
  }
}
</style>
