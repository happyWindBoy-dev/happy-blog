import { Controller, Body, Get, Post, QueryParam } from "routing-controllers";
import { BlogContent } from "../../type/interface";
const {
  getArticleList,
  createArticle,
  updateArticle,
  getArticleDetail,
} = require("../service/blog.ts");

@Controller("/article")
export class ArticleController {
  @Get("/list")
  async getAll() {
    const list = await getArticleList();
    return list;
  }

  @Post("/create")
  async post(@Body() blog: BlogContent) {
    const res = await createArticle(blog);
    return res;
  }

  @Get("/detail")
  async getDetail(@QueryParam("id") id: string) {
    const res = await getArticleDetail(id);
    return res;
  }

  // @Post("/update")
  // async update(@Body() blog: BlogContent) {
  //   await updateArticle(blog);
  //   return "Update updateArticle...";
  // }

  // @Put("/users/:id")
  // put(@Param("id") id: number, @Body() user: any) {
  //   return "Updating a user...";
  // }

  // @Delete("/users/:id")
  // remove(@Param("id") id: number) {
  //   return "Removing user...";
  // }
}
