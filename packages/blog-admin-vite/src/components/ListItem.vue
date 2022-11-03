<template>
  <div class="list-item-wrapper flex rounded-2xl p-8" @click="openDetail">
    <div class="left mr-8 flex-shrink-0 flex-grow-0">
      <img
        class="w-50 rounded-xl"
        :src="detail?.cover_img_url"
        alt="cover_img"
      />
    </div>
    <div>
      <AuthorCard :detail="detail" />
      <p class="title font-semibold my-4">
        {{ detail?.title }}
      </p>
      <p class="describe mb-4">
        {{ describe }}
      </p>
      <n-button class="mr-4" @click.stop="onEdit">编辑</n-button>
      <n-button @click.stop="onDelete">删除</n-button>
    </div>
    <!-- <router-link
      :to="{ path: '/editor', query: { id: props.detail?.id ?? 0 } }"
    > -->
    <!-- </router-link> -->
  </div>
</template>

<script setup lang="ts">
import { usePostRequest } from '../hooks/useToFetch';
import { useRouter } from 'vue-router';
import { filterHTMLTag } from '../utils/markdown';
import AuthorCard from './AuthorCard.vue';

const props = defineProps({
  detail: Object,
});

const describe = filterHTMLTag(props.detail?.html_content);

const router = useRouter();

async function openDetail() {
  router.push({
    path: 'article',
    query: {
      id: props.detail?.id,
    },
  });
}
async function onEdit() {
  router.push({
    path: 'editor',
    query: {
      id: props.detail?.id,
    },
  });
}
async function onDelete() {
  const { data } = await usePostRequest('/api/article/delete', {
    id: props.detail?.id ?? 0,
  });
  alert(data.value ? '删除成功' : '删除失败');
  if (data.value) {
    window.location.reload();
  }
}
</script>

<style lang="scss" scoped>
.list-item-wrapper {
  width: 100%;
  color: var(--color-text-2);
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* &:hover {
    background-color: var(--color-venn-1);
    transition: all 0.2s;
  } */

  .title {
    font-size: 22px;
    font-weight: bold;
  }

  .updatedAt {
    color: var(--color-text-secondary);
  }

  .describe {
    color: var(--color-text-secondary);
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
