var koa = require('koa');
var parse = require('co-body');
var app = koa();

app.use(function* (next) {
  if (this.method !== 'POST') {
    return yield next;
  }
  var body = yield parse(this, { limit: '1kb' });

  if (!body.name) {
    this.throw(400, 'name required');
  }
  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
