//num1 & num2 are primitive variable
let num1 = 10
let num2 = 20

console.log(num1 == num2) //10==20 fales
num2=num1
console.log(num1 == num2) //true

num2 = 55
console.log(num1) //10

//per1 & per2 are object variable
let per1 = {id:1, name:'Panalee'}
let per2 = {id:1, name:'Panalee'}

console.log(per1==per2) //false

per2=per1 //memory address that points to its properties
console.log(per1==per2) //true, compare memory address
per2.name = 'Fern'
console.log(per1.name) //Fern

/******************************/
//arr1 & arr2 are object variable bec array in JS are objects
let arr1=[0, 2, 4, 6]
let arr2=[0, 2, 4, 6] //garbage

console.log(arr1==arr2) //false
arr2 = arr1 //memory address of arr1 to arr2
arr2[1] = 5
console.log(arr1[1]) //5
console.log(arr1) //[ 0, 5, 4, 6 ]
console.log(arr2) //[ 0, 5, 4, 6 ]

/******************************/
function doSomething(value) { 
    //value(formal paramiter) = item1(actual paramiter) //memory address
    value.name = 'unknown'
}

let item1 = {name: 'ABC'}
doSomething(item1)
console.log(item1.name) //unknown

/******************************/
function doSomething2(value) {
    //value = isNum, primitive
    value = 100
}

let isNum = true
doSomething2(isNum)
console.log(isNum) //true

//3. Shallow Equality
function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(`keys1: ${keys1}`);
  console.log(`keys2: ${keys2}`);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
let book1 = {
  isbn: 123456789,
  title: "JavaScript",
};

let book2 = {
  isbn: 123456789,
  title: "JavaScript",
};

console.log(shallowEquality(book1, book2));
  
  