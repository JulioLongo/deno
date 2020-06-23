import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "162.241.2.192",
  username: "pointn27_julioxp",
  db: "pointn27_anime",
  password: "123456",
});

export default client;
