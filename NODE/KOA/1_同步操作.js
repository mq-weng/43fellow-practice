const Koa = require("koa");
const app = new Koa();

app.use((cxt) => {
    cxt.body = 'hello word!';
});
app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");