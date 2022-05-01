import { Controller, Body, Get, Post } from "routing-controllers";
const { getArticleList, createArticle } = require("../service/blog.ts");

@Controller("/article")
export class ArticleController {
  @Get("/list")
  async getAll() {
    const list = await getArticleList();
    console.log("list", list);
    return list;
  }

  @Post("/create")
  async post(@Body() user: any) {
    await createArticle();
    return "Saving user...";
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