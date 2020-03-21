import { buildSchema } from "type-graphql";
import { RegisterResolver } from "../modules/user/Register";
import { LoginResolver } from "../modules/user/Login";
import { LogoutResolver } from "../modules/user/Logout";
import { MeResolver } from "../modules/user/Me";
import { ArticleResolver } from "../modules/article/Article";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      RegisterResolver,
      LoginResolver,
      LogoutResolver,
      MeResolver,
      ArticleResolver
    ],
    authChecker: ({ context: { req } }) => {
      if (req.session.userId) {
        return true;
      }
      return false;
    }
  });
