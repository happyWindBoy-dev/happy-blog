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
  <v-md-editor v-model="text" height="450px"></v-md-editor>
  <!-- <footer class="flex justify-end mt-10"></footer> -->
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useFetch } from "@vueuse/core";
import { useGetRequest } from "@znxxj/share-utils/hooks/useToFetch";
import { host } from "@znxxj/share-utils/constants/url";
import VueMarkdownEditor, { xss } from "@kangc/v-md-editor";
import { useRouter } from "vue-router";

const text = ref("");
const inputTitle = ref("")

const router = useRouter();

const articleId = router.currentRoute.value.query.id;
const { data } = useGetRequest(`/api/article/detail?id=${articleId}`);

const title = computed({
  get() {
    return inputTitle.value || data.value?.[0].title
  },
  set(value: string) {
    inputTitle.value = value
  }
});


function onSubmit() {
  const content = xss.process(
    VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(text.value)
  );
  const res = useFetch(`${host}/api/article/create`)
    .post({
      title: title.value,
      author: "pxdbj2333",
      content,
    })
    .json();
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
