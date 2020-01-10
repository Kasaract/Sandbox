// Reference video: https://www.youtube.com/watch?v=WBPrJSw7yQA

export { }
let message = 'Welcome back';
console.log(message);

let x = 20;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
// name = true; Type error!

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;
let myName1: string = null;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22]; //Num of elem and order has to match

enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Gary';

// let myVariable: any = 10;
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj &&
    typeof obj === 'object' &&
    'name' in obj
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

// Specifying types is optional
let a;
a = 10;
a = true;

// TS infers type of variable when initialized!
let b = 20;
// b = true;


//Restricted! - Any intellisense
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;
anyType = 'Hello';

// Functions!
function add(num1: number, num2: number = 10, num3?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
add(5, 10);
// add(5, '10'); No no
add(5);

// Interface

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);

// Classes

class Employee {
  // Public, private, or protected
  public employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Gary');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);