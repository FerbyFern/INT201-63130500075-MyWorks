//array ถ้าจะเพิ่มข้อมูลใหม่เพิ่มหลังตัวสุดท้ายดีที่สุด - เร็ว
let products = [
  { id: 1, price: 10 },
  { id: 2, price: 5 },
];

let newProduct = { id: 3, price: 20 };
console.log(products);
products = [...products, { id: newProduct.id, price: newProduct.price }];

//products[products.length].id = newProduct.id;
  
//shallow copy
newProduct.price = 100
console.log(products)

//... 1)spread operator

//... 2)rest parameter

/******************** */
//destructuring +rest parameter
function getStudentsInClass(instructor, ta, ...students) {
  return students;
}
let studentSec2 = getStudentsInClass("Umaporn", "Tisanai", "A", "B", "C");
console.log(studentSec2);

[instructor, ta, ...student] = ["Umaporn", "Tisanai", "A", "B", "C"];
console.log(student);

/*************************** */
//1.
const myFunc = function (instructor, ta, ...students) {
  let greeting = "Hello";
  return students;
};

//2.
function echo(text) {
  return text;
}

//3.
function sayHi(greeting, name) {
  return `${greeting}, ${name}`;
}
//4.
function getClass() {
  return `INT201`;
}

/**************************** */
const myFunc = function (instructor = "unknown", numsOfStd = 0) {
  console.log(instructor);
  console.log(numsOfStd);
  return instructor;
};

myFunc(5);