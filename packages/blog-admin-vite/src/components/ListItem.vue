<template>
  <div class="list-item" @click="openDetail">
    <div>
      <p class="title">{{ detail?.title }}</p>
      <p>{{ detail?.updatedAt }}</p>
      <p class="describe">{{ describe }}</p>
    </div>
    <!-- <router-link
      :to="{ path: '/editor', query: { id: props.detail?.id ?? 0 } }"
    > --><!-- </router-link> -->
    <n-button @click.stop="onEdit">编辑</n-button>
    <n-button @click.stop="onDelete">删除</n-button>
  </div>
</template>

<script setup lang="ts">
import { usePostRequest } from "@znxxj/share-utils/hooks/useToFetch";
import { useRouter } from "vue-router";
import { filterHTMLTag } from "../utils/markdown";

const props = defineProps({
  detail: Object,
});

const describe = filterHTMLTag(props.detail?.html_content);

const router = useRouter();

async function openDetail() {
  router.push({
    path: "article",
    query: {
      id: props.detail?.id,
    },
  });
}
async function onEdit() {
  router.push({
    path: "editor",
    query: {
      id: props.detail?.id,
    },
  });
}
async function onDelete() {
  const { data } = await usePostRequest("/api/article/delete", {
    id: props.detail?.id ?? 0,
  });
  alert(data.value ? "删除成功" : "删除失败");
  if (data.value) {
    window.location.reload();
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  width: 100%;
  color: #2c3e50;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: aliceblue;
    transition: all 0.2s;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .describe {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
