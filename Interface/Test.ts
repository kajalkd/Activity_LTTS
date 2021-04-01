//define interface for class  
interface Details {  
    firstName: string;  
    lastName: string;  
    age: number;  
    FullName();  
    GetAge();  
}  
//implement the interface  
class Person implements Details {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
//use the class that implements interface  
let myPerson = new Person('Kajal', 'Kiran', 24);  
let fullName = myPerson.FullName();  
let Age = myPerson.GetAge();  
console.log("Name of Person: " +fullName + '\nAge: ' + Age);  