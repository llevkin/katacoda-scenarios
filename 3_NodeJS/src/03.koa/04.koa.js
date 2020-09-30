const http = require('http');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello 04.koa!';
});

http
    .createServer(app.callback())
    .listen(3000);