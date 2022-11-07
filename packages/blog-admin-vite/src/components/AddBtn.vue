<template>
  <router-link to="/editor">
    <n-button
      round
      class="add-btn w-60px h-60px right-80px bottom-60px font-bold rounded-full text-16px fixed"
      color="#ea4c89"
    >
      <svg
        t="1667657935800"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2940"
        width="48"
        height="48"
      >
        <path
          d="M741.546667 493.037037 494.933333 493.037037 494.933333 246.423704c0-13.463704-8.533333-24.272593-18.962963-24.272593-10.42963 0-18.962963 10.808889-18.962963 24.272593L457.007407 493.037037 210.394074 493.037037c-13.368889 0-24.272593 8.533333-24.272593 18.962963 0 10.42963 10.903704 18.962963 24.272593 18.962963L457.007407 530.962963l0 246.613333c0 13.368889 8.533333 24.272593 18.962963 24.272593 10.42963 0 18.962963-10.903704 18.962963-24.272593L494.933333 530.962963l246.613333 0c13.463704 0 24.272593-8.533333 24.272593-18.962963C765.819259 501.57037 755.01037 493.037037 741.546667 493.037037z"
          p-id="2941"
          fill="#e6e6e6"
        ></path>
      </svg>
    </n-button>
  </router-link>
</template>

<script setup>
import { Bulb } from '@vicons/ionicons5';
</script>

<style lang="scss" scoped>
.add-btn {
  background-color: var(--color-background-secondary-btn);
  &:hover {
    box-shadow: var(--color-background-secondary-btn) 0px 30px 90px;
  }
}
</style>
