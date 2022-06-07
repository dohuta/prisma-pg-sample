import { mainModule } from "process";
import { PrismaClient } from "./generated/client";

const create = async () => {
  const client = new PrismaClient();
  const created = await client.user.create({
    data: {
      username: "test",
      email: "test",
      password: "abc",
      profile: {
        create: {
          firstname: "test",
          lastname: "test",
          fullname: "test",
          birthday: new Date(),
          gender: "male",
        },
      },
    },
  });
  console.log(created);
};

const main = async () => {
  await create();
};

main();
