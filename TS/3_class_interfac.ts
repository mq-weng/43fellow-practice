class Person{
	name: string;
	private age: number = 20;
	constructor(name: string){
		this.name=name;
	}
	getAge(message: string){
		if(message=='perfecte'){
			console.log(this.age);
		}
		throw new Error ('就不告诉你');
	}
}