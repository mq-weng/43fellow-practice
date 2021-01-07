let a = 'hhh';
//数组
let b = [1, 2, 3];
let b1 = [1, 'sss']; //虽然错误警告，但是正常运行
//元组:数据元素类型和个数都固定的数组
let tupl1 = ['ss', false, 12];
tupl1.push(11); //push不会报错，正常编译，正常输出
console.log(a, b, b1, tupl1);
export {};
