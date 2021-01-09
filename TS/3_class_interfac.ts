class Person{
	name: string;
	private age: number = 20;
	readonly home: string ='黑龙江';
	static nationality: string = '中国';
	constructor(name: string){
		this.name=name;
	}
	//getter
	getAge(message: string){
		if(message=='perfect'){
			console.log(this.age);
		}
		else throw new Error ('就不告诉你');
	}
	//setter
	setAge(age: number){
		if(age > 0 && age <= 140) {
			this.age = age;
			console.log(`年龄${age}`)
		}
		else throw new Error('建国之后不许成精');
		
	}
}
let p = new Person('lisa');
p.getAge('perfect');
// p.getAge('dff');
p.setAge(20);
console.log(p.home);
// 静态的属性和方法一般用于工具类的相关操作
console.log(Person.nationality);

/*设计抽象的父类，一定是用来做继承的！*/ 
abstract class Animal {//抽象类不能实例化
	private name: string ;
	constructor(name: string) {
		this.name = name;
	}
	getName() {
		console.log(this.name);
	}
	abstract ability(): void ;
}

class Cat extends Animal{
	constructor(name: string){
		super(name);//子类中调用父类调用super
	}
	ability(): void{
		console.log('喵喵叫');
	}
}

let cat = new Cat('花花');
cat.getName();
/*接口就是用来约束和制定标准的 */
//接口本身是抽象的，接口中所有方法也是抽象的
interface Flower{
	add(num: number): boolean;
	sub(num: number): boolean;
}

class Manager implements Flower{
	add(num: number): boolean {
		return true;
	}
	sub(num: number): boolean {
		throw new Error("Method not implemented.");
	}
	
}
let m = new Manager();
console.log(m.add(16556));

/*属性类型接口 */
interface Cloud{
	shap: string;
	size?: number;//可选属性
}

function cl(cloud: Cloud) {
	console.log(cloud.shap);
}
cl(  {shap: '花'}  );//let a={shap: 'huhu',age: 22}之后带入不会报错，是个bug

/*函数类型接口 */
interface fun{
	(x: string): string;
}
let f: fun = function(name: string) {
	return name;
}
console.log(f('kiki'));
// **多态：多种形态**
//一个接口被不同调用，产生多种结果

export {}