import Home from "./pages/Home.vue";
import Editor from "./pages/Editor.vue";
import Article from "./pages/Article.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/editor", component: Editor },
  { path: "/article", component: Article },
];
