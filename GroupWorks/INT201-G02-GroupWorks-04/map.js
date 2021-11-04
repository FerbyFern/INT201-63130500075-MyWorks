//Array.prototype.map()

//syntax
//Arrow function
/*map((element) => {...})
map((element, index) => {...})
map((element, index, array) => {...})*/

//Ability

/*
- map() นั้นจะมีลักษณะคล้ายกับ ForEach ก็คือการวน loop ใน array แต่ละ element ใน array ก็จะนำไปผ่าน function ที่เรากำหนดไว้ แต่ map นั้นจะต่างกันออกไปตรงที่ จะมีการ return ค่าผ่าน function ที่เรากำหนดไว้ โดยค่าที่ได้จากการ return จะเป็น Array 
- map() ใช้ในการสร้างข้อมูลชุดใหม่จาก Array ชุดเดิมที่ได้เราเรียกใช้ ผ่าน function ที่เรากำหนดไว้ได้
*/


//Example 3 case use map()
//---------------------------------------------------

// array.map(function(currentValue, index, arr), thisValue)
//case1
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)   // 2,3,4,5

console.log(newArr);

//case2

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}  

console.log(newArr);



//case3

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");    
  
  }

  console.log(persons.map(getFullName));





//syntax map((element) => {...})
/*Case 1 กรณีแรก หากเรามีรายชื่อหนัง 1 ชุดเป็นเก็บเป็น Array แต่รายชื่อหนังที่ถูกเก็บไว้นั้นขึ้นต้นด้วยตัวพิมพ์ใหญ่และลงท้ายด้วยตัวพิมพ์เล็กทั้งหมด แต่เราอยากให้รายชื่อหนังนั้นเปลี่ยนเป็นตัวพิมพ์ใหญ่ทั้งชุด
ดังนั้นเราสามารถนำ method map() มาช่วยในกรณีนี้ได้*/

let movies = ['Spiderman','Iron man','Batman','Avengers','Star wars','Back to the future','Harry Potter']

let movieToUppercase = movies.map((nameMovie) => {
    return nameMovie.toUpperCase();
})

console.log(movieToUppercase);

/*Case 2 หากเรามีชุดข้อมูลตัวเลขเก็บเป็น Array เลขคู่ตั้งแต่ 2 - 20 เราสามารถหาค่ายกกำลัง 2 หรือค่ายกกำลังอื่นๆของชุดข้อมูลนี้ ของตัวเลขที่เก็บเอาไว้ในชุดข้อมูลเหล่านี้ได้โดยใช้ map() เช่นกัน */

let num = [2,4,6,8,10,12,14,16,18,20]

let result = num.map((x) =>{
    return Math.pow(x,2)
})

console.log(result);


/*Case 3 */

let fruit = ['Apple','Banana','Mango','Orange','Strawberry'];

let countString = fruit.map((x) =>{
    return x.length;
})
console.log(countString);


//syntax map((element, index) => {...})

//case 1

let employees = ['John','Peter','Smith','Owen'];

let listEmp = employees.map((x,index) => {
    return `Employer number ${index+1} : ${x}`
})

console.log(listEmp);

//case 2

let number = [1, 2, 3, 4];

let numbers = number.map((x,index) => {
        return x*index;

})
console.log(numbers);


//case 3

let players = ['Neymar','Messi','Ronaldo','Kaka'];

let listplayers = players.map((x,index) => {
      return `Player ${index+1} : ${x}`;

})

console.log(listplayers);


//syntax map((element, index, array) => {...})

//case 1



const students = [
  {name: 'Somchai', score : 30, score2 : 50},
  {name: 'Thanakrit', score : 40, score2 : 80}

]

const newStudents = students.map((student) =>({
    ...student, totalScore : student.score + student.score2

}))

function calScore(score1,score2){
  let totalScore = score1 + score2;
}

console.log(newStudents);


//case 2


const products = [
  {name:'Iphone 13', price : 42000, brand: 'Apple',color : 'Silver'},
  {name:'Laptop' ,price : 25000, brand: 'MSI', color:'Black'},
  {name:'Camera' ,price : 30000, brand: 'Nikon', color: 'Black'},
  {name:'Printer' ,price : 5400, brand: 'Canon', color: 'White'},
];
let total = 0
const getProductPrice = products.map(products => {
    total += products.price;
});

console.log(total);

//case 3

const population = [
  {country:'Thailand', population : 69800000,},
  {country:'India' ,population: 1830000000},
  {country:'Japan' ,population : 125800000},
  {country:'England' ,population : 55980000},
]
let totalPopulation = 0;

const halfpopulation = population.map(population => {
    return {...population, population : population.population / 2 }
  
   
});


console.log(halfpopulation);

//---------------------------------------------------



