import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class ArticleInput {
  @Field()
  @Length(1, 255)
  title: string;

  @Field()
  articleText: string;

  @Field()
  author: string;

  @Field()
  isPublished: boolean;
}
