const Koa = require("koa");
const app = new Koa();
const cors = require("@koa/cors");
const router = require("koa-router")();

app.use(cors());

const mockData = require("./mockData");
router.get("/", async ctx => {
  ctx.body = mockData.order;
});

router.get("/user", async ctx => {
  ctx.body = mockData.user;
});

app.use(router.routes(), router.allowedMethods());
var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("koa服务已启动, http://%s:%s", host, port);
});
