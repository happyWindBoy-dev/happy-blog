<template>
  <div class="wrap">
    <h1 class="title">{{ data?.title }}</h1>
    <p class="update-time">{{ data?.updatedAt }}</p>
    <v-md-editor
      :model-value="data?.markdown_content"
      mode="preview"
    ></v-md-editor>
    <!-- <v-md-preview :text="content"></v-md-preview> -->
  </div>
</template>

<script setup lang="ts">
import { useGetRequest } from '@znxxj/share-utils/hooks/useToFetch';
import { useRouter } from 'vue-router';

const router = useRouter();
const articleId = router.currentRoute.value.query.id;
const { data } = useGetRequest(`/api/article/detail?id=${articleId}`);
console.log('data', data);
</script>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: auto;
}
.title {
  font-size: 2rem;
  padding: 0 2rem;
  font-weight: 600;
  color: #2c3e50;
}
.update-time {
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
}
</style>
