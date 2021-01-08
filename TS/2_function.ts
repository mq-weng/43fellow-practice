//void
function test(): void{
    console.log('hhh');
}
test();
//参数有特定数据类型
function test1 (name: string,age: number){
    console.log(name,age);
}
test1('lisi',44);
//可选参数
function test2 (name: string,age?: number){
    console.log(name, age);
}
test2('lili');
//默认参数(我连带了返回值类型)
function test3(name: string='李明'): string {
    return name;
}
let username = test3();
console.log(username);
console.log(`你的名字是${username}吗?`)  //字符串可以用这种形式拼接变量
//剩余参数
let test4=(name: string,...arr: any[]) => {
    for(let p of arr){
        console.log(p);
    }
}
test4('ss','剩余','参数',666);
//重载
function test5 (name: string): void;
function test5 (age: number): void;
function test5 (x: any): void{
    if(typeof x === 'number'){
        console.log(`年龄${x}`);
    }
    else if(typeof x === 'string'){
        console.log(`名字${x}`);
    }
}
test5('lisi');
test5(22)