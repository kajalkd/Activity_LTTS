var Employee1 = /** @class */ (function () {
    function Employee1(id, name) {
        this.empID = id;
        this.empName = name;
    }
    Employee1.prototype.display = function () {
        return ("My unique ID: " + this.empID + ", My name: " + this.empName + ".");
    };
    return Employee1;
}());
var employee1 = new Employee1(144101, "Puja");
console.log(employee1.display());
