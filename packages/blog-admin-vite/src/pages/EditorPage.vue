<template>
  <div class="flex items-center justify-between">
    <div class="w-700px">
      <n-input
        class="title-input w-300px"
        v-model:value="title"
        type="text"
        placeholder="Enter your title"
      />
    </div>

    <n-button
      round
      class="w-200px h-60px font-bold"
      color="#2c30ac"
      @click="onSubmit"
    >
      Submit
    </n-button>
  </div>
  <v-md-editor v-model="content" height="450px"></v-md-editor>
  <!-- <footer class="flex justify-end mt-10"></footer> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '@vueuse/core';
import { useGetRequest, host } from '../hooks/useToFetch';
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';
import { useRouter } from 'vue-router';

const inputTitle = ref('');
const inputContent = ref('');

const router = useRouter();
const articleId = router.currentRoute.value.query.id;
const data = articleId ? getArticleDetail() : null;

const title = computed({
  get() {
    return inputTitle.value || data?.value?.title || '';
  },
  set(value: string) {
    inputTitle.value = value;
  },
});

const content = computed({
  get() {
    return inputContent.value || data?.value?.markdown_content || '';
  },
  set(value: string) {
    inputContent.value = value;
  },
});

function getArticleDetail() {
  const { data } = useGetRequest(`/api/article/detail?id=${articleId}`);
  return data;
}

function onSubmit() {
  if (!articleId) {
    // 新建一篇文章
    postNewArticle();
  } else {
    // 更新文章
    updateOldArticle();
  }
}

async function postNewArticle() {
  const markdownContent = content.value;
  const htmlContent = xss.process(
    VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(
      markdownContent
    )
  );

  const { data } = await useFetch(`${host}/api/article/create`)
    .post({
      title: title.value,
      author: 'pxdbj2333',
      markdown_content: markdownContent,
      html_content: htmlContent,
    })
    .json();
  console.log('data', data);
  alert(data.value ? '创建成功, 自动帮您跳转至展示页面' : '创建失败');

  if (data.value) {
    router.replace({
      path: 'article',
      query: {
        id: data.value.id,
      },
    });
  }
}

async function updateOldArticle() {
  const markdownContent = content.value;
  const htmlContent = xss.process(
    VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(
      markdownContent
    )
  );

  const { data } = await useFetch(`${host}/api/article/update`)
    .post({
      id: articleId,
      title: title.value,
      author: 'pxdbj2333',
      markdown_content: markdownContent,
      html_content: htmlContent,
    })
    .json();
  alert(data.value ? '更新成功' : '更新失败');
}
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  border: none;
}
</style>
