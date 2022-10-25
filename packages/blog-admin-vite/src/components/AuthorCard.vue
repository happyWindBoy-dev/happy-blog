<template>
  <div class="author-card flex">
    <img
      src="https://cdn.dribbble.com/users/4502108/avatars/small/9bac3cfcfffbb1492b7be1e2c0437c32.jpg?1654857921"
      alt=""
    />
    <div class="flex flex-col">
      <p class="author">{{ detail?.author }}</p>
      <p class="created-at">{{ detail?.createdAt }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  detail: Object,
});
</script>

<style lang="scss" scoped>
.author-card {
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .author {
    color: var(--color-text-title);
  }

  .created-at {
    color: var(--color-text-secondary);
  }
}
</style>
