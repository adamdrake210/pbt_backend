import { Resolver, Mutation, Arg, Query } from "type-graphql";

import { Article } from "../../entity/Article";
import { ArticleInput } from "./article/ArticleInput";

@Resolver()
export class ArticleResolver {
  @Query(() => Article)
  async getonearticle(@Arg("id") id: string) {
    const article = await Article.findOne(id);
    if (article === undefined) {
      console.log(`The article with id: ${id} can't be found`);
    }

    return article;
  }

  @Query(() => [Article])
  async articles(): Promise<Article[]> {
    const articles = await Article.find();

    return articles;
  }

  @Mutation(() => Article)
  async article(
    @Arg("data") { title, articleText, author }: ArticleInput
  ): Promise<Article> {
    const article = await Article.create({
      title,
      articleText,
      author
    }).save();

    return article;
  }
}
