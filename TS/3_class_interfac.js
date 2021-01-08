"use strict";
class Person {
    constructor(name) {
        this.age = 20;
        this.name = name;
    }
    getAge(message) {
        if (message == 'perfecte') {
            console.log(this.age);
        }
        throw new Error('就不告诉你');
    }
}
