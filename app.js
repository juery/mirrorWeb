const Koa = require('koa');
const got = require('got');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
// app.use(function (req, res, next) {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	next();
// });
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx) => {
    const { body } = await got('https://m.myweimai.com/topic/epidemic_info.html')
    ctx.body = body
    .replace(/微脉/g, 'xx')
    .replace(/\/\/cdn\.myweimai\.com\/images\/115ebf6046981385d8d6a9d437b7483d_138x64.png/g, 'https://static.oschina.net/new-osc/img/logo_new.svg')
    //.replace()  所有替换均可通过 .replace()继续替换
    // console.log(ctx)
});

// 在端口3000监听:
app.listen(3000);

console.log('http://localhost:3000')