var koa = require('koa');
var app = koa();

app.use(function* (next) {
  if (!this.request.is('application/json')) {
    return yield next;
  }
  this.body = {
    message: 'hi!'
  }
});

app.use(function* (next) {
  this.body = 'ok';
});

app.listen(process.argv[2]);
