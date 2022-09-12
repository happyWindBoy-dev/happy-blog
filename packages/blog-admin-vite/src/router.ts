import ArticleList from './pages/ArticleList.vue';
import Editor from './pages/EditorPage.vue';
import Article from './pages/ArticleDetail.vue';

export const routes = [
  { path: '/', component: ArticleList },
  { path: '/editor', component: Editor },
  { path: '/article', component: Article },
];
