import { testConn } from "../../../test-utils/testConn";
import { Connection } from "typeorm";
import { gCall } from "../../../test-utils/gCall";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
  mutation Register($data: RegisterInput!) {
    register(
      data: $data
    ) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;

describe("Register", () => {
  it("create user", async () => {
    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "Adam",
            lastName: "Drake",
            email: "adam@drake.com",
            password: "werwerwe"
          }
        }
      })
    );
  });
});
