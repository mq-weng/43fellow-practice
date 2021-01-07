class Person{
	name: string;
	private age: number = 20;
	constructor(name: string){
		this.name=name;
	}
	print(){
		console.log(this.age);
	}
}