const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  console.log(1);
  next();
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use(ctx => {
  ctx.body = 'Hello 05.koa!';
});

app.listen(3000);