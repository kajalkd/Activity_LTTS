class Person {
    protected name: string;
    protected age: number;

    protected constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    protected displayAsString(): void {
        console.log(this);
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }

    public display(): void {
        super.displayAsString();
    }
}
let emp: Employee = new Employee("Kajal", 24, "Development");
emp.display();