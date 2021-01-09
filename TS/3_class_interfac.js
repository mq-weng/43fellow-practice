class Person {
    constructor(name) {
        this.age = 20;
        this.home = '黑龙江';
        this.name = name;
    }
    //getter
    getAge(message) {
        if (message == 'perfect') {
            console.log(this.age);
        }
        else
            throw new Error('就不告诉你');
    }
    //setter
    setAge(age) {
        if (age > 0 && age <= 140) {
            this.age = age;
            console.log(`年龄${age}`);
        }
        else
            throw new Error('建国之后不许成精');
    }
}
Person.nationality = '中国';
let p = new Person('lisa');
p.getAge('perfect');
// p.getAge('dff');
p.setAge(20);
console.log(p.home);
// 静态的属性和方法一般用于工具类的相关操作
console.log(Person.nationality);
/*设计抽象的父类，一定是用来做继承的！*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name); //子类中调用父类调用super
    }
    ability() {
        console.log('喵喵叫');
    }
}
let cat = new Cat('花花');
cat.getName();
class Manager {
    add(num) {
        return true;
    }
    sub(num) {
        throw new Error("Method not implemented.");
    }
}
let m = new Manager();
console.log(m.add(16556));
function cl(cloud) {
    console.log(cloud.shap);
}
cl({ shap: '花' }); //let a={shap: 'huhu',age: 22}之后带入不会报错，是个bug
let f = function (name) {
    return name;
};
console.log(f('kiki'));
export {};
