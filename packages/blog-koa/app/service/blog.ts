import { BlogContent } from "../../type/interface";

const { Blog } = require("../model/blog");

async function getArticleList() {
  return await Blog.findAll({
    raw: true,
  });
}

async function createArticle(blog: BlogContent) {
  const { author, title, html_content, markdown_content } = blog;
  const newBlog = await Blog.create({
    author,
    title,
    html_content,
    markdown_content,
  });
  console.log("newBlog", newBlog);

  return newBlog.dataValues;
}

async function getArticleDetail(id: string) {
  return await Blog.findOne({
    raw: true,
    where: {
      id,
    },
  });
}

async function updateArticle(blog: BlogContent) {
  const { id, title, html_content, markdown_content } = blog;
  const blogItem = await Blog.findOne({
    where: {
      id,
    },
  });
  return await blogItem.update({ title, html_content, markdown_content });
}

async function deleteArticle(id: string) {
  const blogItem = await Blog.findOne({
    where: {
      id,
    },
  });
  return blogItem.destroy();
}

export {
  getArticleList,
  createArticle,
  getArticleDetail,
  updateArticle,
  deleteArticle,
};
