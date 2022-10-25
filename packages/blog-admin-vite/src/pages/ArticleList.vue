<template>
  <div class="wrap">
    <section class="flex justify-center flex-col items-start mt-30px">
      <ListItem v-for="item in data" :key="item.id" :detail="item" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGetRequest } from '../hooks/useToFetch';
import ListItem from '../components/ListItem.vue';

const { data } = useGetRequest('/api/article/list');
</script>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: auto;
}
</style>
