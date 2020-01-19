import { Resolver, Mutation, Arg } from "type-graphql";

import { Article } from "../../entity/Article";
import { ArticleInput } from "./article/ArticleInput";

@Resolver()
export class ArticleResolver {
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
