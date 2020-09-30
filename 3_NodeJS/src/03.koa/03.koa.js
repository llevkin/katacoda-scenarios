const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello 03.koa!';
});

app.listen(3000);