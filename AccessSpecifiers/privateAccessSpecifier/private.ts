class Employee1{
public empID: number;  
private empName: string;  
constructor(id: number, name: string){  
this.empID = id;  
this.empName = name;  
}  
public display() {  
return (`My unique ID: ${this.empID}, My name: ${this.empName}.`);  
}  
}  
  
let employee1: Employee1 = new Employee1(144101, "Puja");  
console.log(employee1.display());  