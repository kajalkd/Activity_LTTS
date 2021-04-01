//implement the interface  
var Person = /** @class */ (function () {
    function Person(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Person.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Person.prototype.GetAge = function () {
        return this.age;
    };
    return Person;
}());
//use the class that implements interface  
var myPerson = new Person('Kajal', 'Kiran', 24);
var fullName = myPerson.FullName();
var Age = myPerson.GetAge();
console.log("Name of Person: " + fullName + '\nAge: ' + Age);
