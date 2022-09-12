<template>
  <div class="wrap">
    <div class="flex justify-end">
      <router-link to="/editor">
        <n-button round class="w-200px h-60px font-bold" color="#2c30ac">
          Add New
        </n-button>
      </router-link>
    </div>

    <section class="flex justify-center flex-col items-start mt-30px">
      <ListItem v-for="item in data" :key="item.id" :detail="item" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGetRequest } from '@znxxj/share-utils/hooks/useToFetch';
import ListItem from '../components/ListItem.vue';

const { isFetching, error, data } = useGetRequest('/api/article/list');
</script>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: auto;
}
</style>
