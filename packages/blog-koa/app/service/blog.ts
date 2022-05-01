const { Blog } = require("../model/blog");

async function getArticleList() {
  return await Blog.findAll();
}

async function createArticle() {
  return await Blog.create({
    author: "xxj",
    content: "hello blog",
    title: "my first blog",
    description: "hihi",
  });
}

export { getArticleList, createArticle };
