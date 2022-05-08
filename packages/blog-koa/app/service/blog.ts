import { BlogContent } from "../../type/interface";

const { Blog } = require("../model/blog");

async function getArticleList() {
  return await Blog.findAll({
    raw: true,
  });
}

async function createArticle(blog: BlogContent) {
  const { author, title, description, content } = blog;
  return await Blog.create({
    author,
    title,
    description,
    content,
  });
}

async function getArticleDetail(id: string) {
  return await Blog.findAll({
    raw: true,
    where: {
      id,
    },
  });
}

// async function updateArticle(blog: BlogContent) {

// }

// async function deleteArticle() {
// }

export { getArticleList, createArticle, getArticleDetail };
