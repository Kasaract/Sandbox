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
var message = 'Welcome back';
console.log(message);
var x = 20;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
// name = true; Type error!
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var myName1 = null;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22]; //Num of elem and order has to match
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Gary';
// let myVariable: any = 10;
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
// Specifying types is optional
var a;
a = 10;
a = true;
// TS infers type of variable when initialized!
var b = 20;
// b = true;
//Restricted! - Any intellisense
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
anyType = 'Hello';
// Functions!
function add(num1, num2, num3) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
// add(5, '10'); No no
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Gary');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
