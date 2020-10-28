const Koa     = require('koa');
const Router  = require('koa-router');
const koaBody = require('koa-body');
const config  = require('../config.json');
const rabbit  = require('./rabbitmq');

const app    = new Koa();
const router = new Router();

router.get('/alive', ctx => {
    ctx.body = 1;
});

router.put('/catalog', ctx => {
    ctx.body = ctx.request.body;
    rabbit.send(ctx.request.body);
});

app
    .use(koaBody())
    .use(router.routes());

app.listen(config.koa.port);