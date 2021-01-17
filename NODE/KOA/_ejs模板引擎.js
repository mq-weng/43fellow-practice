const Koa = require('koa');
const view = require('koa-views');
const path = require('path')

const app = new Koa();

app.use(view(path.join(__dirname,"./view"),{
    extension: "esj",
})
);

app.use(async (ctx) => {
    let title = "koa2";
    await ctx.render("index",{
        title
    });
});
app.listen(3001);
console.log("[demo] start-quick is starting at port 3001");