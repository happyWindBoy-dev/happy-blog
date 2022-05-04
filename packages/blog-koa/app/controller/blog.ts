import { Controller, Body, Get, Post, Ctx } from "routing-controllers";
const { getArticleList, createArticle } = require("../service/blog.ts");

@Controller("/article")
export class ArticleController {
  @Get("/list")
  async getAll() {
    const list = await getArticleList();
    return list;
  }

  @Post("/create")
  async post() {
    const data = await createArticle();
    return data;
  }

  // @Put("/users/:id")
  // put(@Param("id") id: number, @Body() user: any) {
  //   return "Updating a user...";
  // }

  // @Delete("/users/:id")
  // remove(@Param("id") id: number) {
  //   return "Removing user...";
  // }
}
