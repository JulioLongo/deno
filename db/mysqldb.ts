import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "",
  username: "",
  db: "",
  password: "",
});

export default client;
