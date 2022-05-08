<template>
  <div class="mb-40px flex">
    <div>
      <p class="title">{{ detail?.title }}</p>
      <p>{{ detail?.updatedAt }}</p>
      <p>{{ describe }}</p>
    </div>
    <router-link :to="{ path: '/editor', query: { id: props.detail.id }}">
      <n-button>编辑</n-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { filterHTMLTag } from "../utils/markdown";

const props = defineProps({
  detail: Object,
});

const describe = filterHTMLTag(props.detail?.content);

console.log(props.detail, describe);
</script>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  // margin-bottom: 40px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: rgb(210, 54, 105);
  }
}
</style>
