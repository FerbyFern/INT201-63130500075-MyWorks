//node
const value=3
value=10 //error
const student={id:1, name:"Somchai"}
student=value //error
student.email="somple@example.com"
student // {id:1, name:"Somchai", email:"somple@example.com"}

/*******************************/
value=0 //var scope
for(i=0;i<10;i++){

}
myVariable //camel case
myMethod
myFunction
myObject

const CM_TO_METER = 0.2554 //const primitive value
const constObject //const object
function doSometing() {
    //console.log(someValue);
    return someValue;
}
doSometing() + "xxx";
console.log(doSometing());

/*******************************/
//node
//for/in
const student={id:1, name:"Somchai"}
for(let prop in student){
console.log(prop);
console.log(student[prop])
}
//for/of
let data=[1, 10, 5, "Hello", true]
for(let item of data){
console.log(item)
}

/*******************************/
//obj. literal
let square ={
area: function(){ return this.side * this.side;},  
side: 10  
};
square.area() //100 เรียก function ต้องมีวงเล็บ ()

let book={isbn: 1111, title: "JS Beginner", author:{firstname: "John", lastname: "Hang"}}
book.versions =[1.0,1.5, 2.0]

//understanding object
function distance(p1, p2) {
//p1 and p2 are formal parameter  
console.log(typeof p1); //object  
console.log(typeof p2); //object
// - The exponentiation assignment operator  
return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);  
}
let point1 = { x: 1, y: 1 };
let point2 = { x: 2, y: 2 };  
console.log(distance(point1, point2)); //point1 and point2 are actual parameter  
 //1.4142135623730951

let start = new Date()
console.log(start)

objectName["string expresion"]
 
objectName.property
//backing field 
 
 