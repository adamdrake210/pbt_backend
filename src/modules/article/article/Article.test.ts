import { testConn } from "../../../test-utils/testConn";
import { Connection } from "typeorm";
import { gCall } from "../../../test-utils/gCall";
import faker from "faker";
import { Article } from "../../../entity/Article";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const articleMutation = `
  mutation Article($data: ArticleInput!) {
    article(
      data: $data
    ) {
      id
      title
      articleText
      author
    }
  }
`;

describe("Article", () => {
  it("create article", async () => {
    const article = {
      title: faker.lorem.sentence(),
      articleText: faker.lorem.paragraph(),
      author: faker.name.findName()
    };

    const response = await gCall({
      source: articleMutation,
      variableValues: {
        data: article
      }
    });
    console.log(response);
    expect(response).toMatchObject({
      data: {
        article: {
          title: article.title,
          articleText: article.articleText,
          author: article.author
        }
      }
    });

    const dbArticle = await Article.findOne({
      where: { title: article.title }
    });
    expect(dbArticle).toBeDefined();
    expect(dbArticle!.title).toBe(article.title);
  });
});
