"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.checkOverride = function () {
        console.log("parent");
    };
    return Person;
}());
exports["default"] = Person;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, id, job, sal) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.id = id;
        _this.designation = job;
        _this.salary = sal;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        console.log("Employee Details");
        console.log("Name=" + this.name);
        console.log("Age=" + this.age);
        console.log("Gender=" + this.gender);
        console.log("EmpId=" + this.id);
        console.log("Designation=" + this.designation);
        console.log("Salary=" + this.salary);
    };
    Employee.prototype.checkOverride = function () {
        console.log("child");
    };
    return Employee;
}(Person));
exports.Employee = Employee;
var obj = new Employee("Ramya", 21, "Female", 491767, "TA", 493084);
obj.showDetails();
obj.checkOverride();
