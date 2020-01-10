import * as _ from 'lodash';

export { }
console.log('Hello world');

async function hello() {
  return 'world'
}

// From DOM library
// const url = new URL('')

// Wow! Intellisense!
// _.pickBy()

let lucky = 23;
// lucky = '23'; Oops, inferred type error

let lucky2: any = 23;
lucky2 = 20;


// Creating your own type!
type Style = 'bold' | 'italic' | 23;
let font: Style;
font = 'bold'


// Enforce shape of objects using an interface
interface Person {
  first: string,
  last: string,
  [key: string]: any
}

const person = {
  first: 'Jeff',
  last: 'Delaney'
}

// Functions
function pow(x: number, y: number): void {
  Math.pow(x, y).toString();
}
// Void does not return a value!

// No errors if no types!
// pow('23', 'foo')


// Arrays
const arr: number[] = [];

arr.push(1);
// Whoops! Not valid value
// arr.push('23');

// Tuple
type MyList = [number?, string?, boolean?]
const arr2: MyList = []

// Generics
class Observable<T> {
  constructor(public value: T) { }
}

let x: Observable<number>;
let z = new Observable(23);