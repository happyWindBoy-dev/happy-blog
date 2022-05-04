<template>
  <div class="mb-40px flex">
    <!-- <n-icon size="20">
      <Document />
    </n-icon> -->
    <div>
      <p class="title">{{ detail.title }}</p>
      <p>{{ detail.updatedAt }}</p>
    </div>
  </div>
</template>

<script setup>
import { Document } from "@vicons/ionicons5";
import { ref } from "vue";

const props = defineProps({
  detail: Object,
});
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
