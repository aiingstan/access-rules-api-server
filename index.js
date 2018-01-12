const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.response.status = 200;
  ctx.body = 'hello';
});

app.listen(3000);