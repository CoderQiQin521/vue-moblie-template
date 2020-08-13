const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const order = require("./index");
router.get("/", async ctx => {
  ctx.body = order;
});
app.use(router.routes(), router.allowedMethods());
var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("koa服务已启动, http://%s:%s", host, port);
});
