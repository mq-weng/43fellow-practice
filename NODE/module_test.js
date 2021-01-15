//方法一的导入1
// var aa = require('././module_a')
//  console.log(aa.add(1,2))
//方法一的导入2
// var {add} = require('./module_a');
// console.log(add(5,1))
//方法二的导入
// var sub = require('./module_a');
// console.log(sub(5,4))

// var p = require('./module_b');
// console.log(p);

let Person = require('./module_b')
let p = new Person('lisi',22);
p.sayHello();