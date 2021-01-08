let a = 'hhh';
//数组
let b = [1, 2, 3];
// let b1: number[] = [1,'sss']//虽然错误警告，但是正常运行
//元组:数据元素类型和个数都固定的数组
let tupl1 = ['ss', false, 12];
tupl1.push(11); //push不会报错，正常编译，正常输出
//枚举
var fruit;
(function (fruit) {
    fruit[fruit["watermelon"] = 0] = "watermelon";
    fruit[fruit["strawberry"] = 1] = "strawberry";
    fruit["pear"] = "dd";
})(fruit || (fruit = {}));
;
let enum1 = fruit.watermelon; //0
let enum2 = fruit.pear; //dd
//any
let any1 = 'njjnj';
let any2 = [12, 'dk', true];
//never
// 1. 程序出错返回never
// 2. 程序死循环也返回never
function test() {
    throw new Error('发生了错误...');
}
test();
//类型断言
let any3 = 20;
let s1 = any3;
//类型推论
class Animal {
}
;
class Dog extends Animal {
}
;
class Fish extends Animal {
}
;
class Person {
}
;
let arr1 = [new Dog, new Fish]; //Dod|Fish联合数据类型
let arr = [new Dog];
arr.push(new Fish);
arr.push(new Person);
window.onmousedown = function (e) {
    console.log(e);
};
window.onkeydown = function (e) {
    console.log(e);
};
console.log(a, b, tupl1, enum1, enum2, any1, any2, s1);
export {};
