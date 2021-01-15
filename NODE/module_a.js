// console.log('hello word!');
//导出函数方法1
exports.add=function(a,b){
    return a + b;
}
//导出函数方法2
module.exports= (a,b) => {
    return a-b
}