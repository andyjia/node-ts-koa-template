import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

// response
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "Hello Koa";
});

app.listen(3000, () => {
  console.log("Koa started");
});
