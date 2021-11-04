//Array.prototype.concat()

//syntax

/*concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN) */


//Ability
//ใช้สำหรับสร้างตัวแปร Array ใหม่โดยการรวม Array ตั้งแต่ 2 Array ขึ้นไป โดยจะไม่เปลี่ยนแปลง Array ที่มีอยู่แต่จะคืนค่า Array ใหม่แทน



//Example 3 case use concat()
//---------------------------------------------------
//syntax -> concat()

//case1

let string = ['Hello','Hi'];
let greeting = string.concat();
console.log(greeting);

//case2

let books = ['Naruto','Attack on titan','One-piece','Dragonball'];
let japanese_books = books.concat();
console.log(japanese_books);

//case3

let colors = ['Red','Green','Blue'];
let rgb = colors.concat();
console.log(rgb);


//syntax -> concat(value0)
//case1

// สร้าง Attribute ของเกมเป็น Array ที่เก็บรายชื่อเกมขึ้นมา จำนวน 2  Attribute 
const game1 = ['Mario','Fifa','Final Fantasy']; 
const game2 = ['ROV','Dota2','CSGO'];
const games = game1.concat(game2); // หากเราอยากนำรายชื่อเกมจาก Attribute game1 game2 มารวมกัน สามารถทำได้โดยใช้คำสั่ง concat()
console.log(games);

//case2

const number1 = [1,2,3,4,5];
const number2 = [6,7,8,9,10];
const numbers = number1.concat(number2);
console.log(numbers);

//case3
const city1 = ['Thailand','Laos','Singapore'];
const cities = city1.concat('Japanese');
console.log(cities);






//syntax -> concat(value0,value1)
//case1
// กรณีที่เราสร้าง Attribute ที่เป็น Array 3 Attribute แล้วอยากนำข้อมูลทั้งหมดมารวมกันก็สามารถทำได้ โดยใช้ syntax -> concat(value0, value1)

const fruit1 = ['Apple','Banana'];
const fruit2 = ['Orange','Grape'];
const fruit3 = ['Mango','Strawberry'];

const fruits = fruit1.concat(fruit2,fruit3);
console.log(fruits);

//case2


const barcelona = ['Messi','Neymar','Luis Suarez'];
const realmadrid = ['Ronaldo','Gareth Bale','Karim Benzema'];
const chealsea = ['Lampard','Lukaku','Mount'];

const footballPlayer = barcelona.concat(realmadrid,chealsea);

console.log(footballPlayer);

//case3

const student1 = ['Peam','Fern','Zeed'];
const students = student1.concat(['Preng','Praew'],'Field');

console.log(students);

//case4

const animals1 = ['Cat','Dog','Pig'];
const animals2 = animals1.concat('Tiger','Lion'); //<- จะเห็นได้ว่า value ไม่จำเป็นต้องเป็น Arrays สามารถใส่ Value เป็น Primitive types 

console.log(animals2);

//syntax -> concat(value0, value1, ... , valueN) 
//case1

const name1 = ['Jennifer Lawrence','Tom Holland','Benedict Cumberbatch'];
const name2 = ['Emma Stone','Emma Watson'];
const name3 = ['Chris Hemsworth','Chris Evans','Robert Downey Jr.'];
const name4 = ['Scarlett Johansson','Chadwick Boseman'];

const actors = name1.concat(name2,name3,name4);

console.log(actors);

//case2

const foods = ['Hamburger','Fried chicken','French fries'];
const fastfoods = foods.concat('Pizza','Hot dog','Sandwich','Snacks','Doughnut');
console.log(fastfoods);


//case3

const courseIt1= ['INT202','INT207','INT205'];
const courseIt2 = ['INT214','INT202'];
const allCourseIt = courseIt1.concat(courseIt2,'INT201','INT100','INT102',['INT104','INT105','INT107'],['INT200','INT114']) //<-- สามารถใส่ค่าเป็น Primitive type หรือใส่ข้อมูลที่เป็น Arrays ลงไป ใน value ได้ ผลลัพธ์ที่ออกมาก็จะได้เป็น Arrays ตัวใหม่ที่ถูก merge กันแล้ว

console.log(allCourseIt);