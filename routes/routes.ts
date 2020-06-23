// @ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUser } from "../controllers/video_controller.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/teste", getUser);

export default router;
