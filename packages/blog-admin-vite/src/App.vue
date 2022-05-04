<script setup>
import { Bulb } from "@vicons/ionicons5";
</script>

<template>
  <div class="p-16px">
    <header class="header">
      <router-link to="/">
        <n-icon class="icon" size="20">
          <Bulb />
        </n-icon>
        Lighting
      </router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Montserrat, sans-serif;
}

@font-face {
  font-family: "exo";
  src: url("./assets/No.025-Sounso-Warm-2.ttf");
}

.header {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 900;

  .icon {
    color: #2c30ac;
  }
  /* color: #2a2799; */
  /* color: #fff; */
}
</style>
