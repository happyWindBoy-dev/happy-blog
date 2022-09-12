import { Controller, Body, Get, Post, QueryParam } from 'routing-controllers';
import { BlogContent } from '../../type/interface';
import { deleteArticle } from '../service/blog';
const {
  getArticleList,
  createArticle,
  updateArticle,
  getArticleDetail,
} = require('../service/blog.ts');

@Controller('/article')
export class ArticleController {
  @Get('/list')
  async getAll() {
    const list = await getArticleList();
    return list;
  }

  @Post('/create')
  async post(@Body() blog: BlogContent) {
    const res = await createArticle(blog);
    return res;
  }

  @Post('/update')
  async update(@Body() blog: BlogContent) {
    const res = await updateArticle(blog);
    return res;
  }

  @Get('/detail')
  async getDetail(@QueryParam('id') id: string) {
    const res = await getArticleDetail(id);
    return res;
  }

  @Post('/delete')
  async delete(@Body() blog: BlogContent) {
    const res = await deleteArticle(blog.id);
    return res;
  }
}
