const Koa = require("koa");
const app = new Koa();
const cors = require("@koa/cors");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");

app.use(cors());
app.use(bodyParser());

const mockData = require("./mockData");
router.get("/", async ctx => {
  ctx.body = mockData.order;
});

router.get("/user", async ctx => {
  ctx.body = mockData.user;
});

router.post("/a", async ctx => {
  console.log(ctx.request.body);
  ctx.body = await {
    code: 0,
    msg: "提示信息",
    data: 1
  };
});

app.use(router.routes(), router.allowedMethods());
var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("koa服务已启动, http://%s:%s", host, port);
});
