//ทำการ import function ทั้งหมดจาก function.js เพื่อนำมาใช้งาน
import {checkAge,getPrice,createProduct,addPlayer,calAverage} from "./function.js";

//สร้าง product เพื่อทดสอบ function
const productApple = [
    { id: 1, name: "Iphone13", price: 42000 },
    { id: 2, name: "Ipad Air4", price: 36000 },
    { id: 3, name: "Airpod", price: 5600 },
    { id: 4, name: "iMac", price: 56900 },
  ];
  
  const productMicrosoft = [
      { id: 1, name: "Surface Book", price: 32000 },
      { id: 2, name: "Xbox Series X", price: 25000 },
      { id: 3, name: "Surface Mouse", price: 3500},
      { id: 4, name: "Surface Keyboard", price: 4000 },
    ];

  const productHuawei = [
    { id: 1, name: "HUAWEI Mate 40 Pro", price: 31990},
    { id: 2, name: "HUAWEI MateBook 14 2020 AMD", price: 26990},
    { id: 3, name: "HUAWEI WATCH FIT", price: 2999},
    { id: 4, name: "HUAWEI MatePad Pro 12.6", price: 28990 },
  ];


//case 1
let totalPriceProductApple = getPrice(productMicrosoft.map(({price}) => price)); //ใช้ map() ในการ loop ค่าใน object โดยเอาค่าที่เป็นราคาออกมาคำนวณ
console.log(`Total price of products Apple is ${totalPriceProductApple()}`); //แสดงผลรวมของราคาสินค้าทั้งหมด โดยจะไปใช้ function totalprice() ที่อยู่ใน getPrice() มาคำนวณ

//case 2
let totalPriceProductMicrosoft = getPrice(productMicrosoft.map(({price}) => price));
console.log(`Total price of products Microsoft is ${totalPriceProductMicrosoft()}`);

//case 3
let totalPriceProductHuawei = getPrice(productHuawei.map(({price}) => price));
console.log(`Total price of products Huawei is ${totalPriceProductHuawei ()}`);

//output  
//Total price of productApple is 140500
//Total price of productMicrosoft is 64500
//Total price of All product is 205000

// checkAge function test case

let ages = [5,12,15,20,25,10,18]; //สร้าง list ของอายุ เก็บเป็น array 
let testage = checkAge(ages); //สร้าง testage ให้เก็บค่า checkAges ของ list ages
console.log(testage(20)) // แสดงผล testage (20) ก็คือ list อายุที่มากกว่า 20 ปี ใน array ages ออกมา โดยจะไปเรียกการทำงานของ function morethan ที่เป็น closure function ใน function checkAge 
console.log(testage(18)); //ages มากกว่า 18
console.log(testage(5)); //ages มากกว่า 5


//function create product test case

let product = createProduct();
product(1,'Coca Cola',16);
product(2,'Sprite',17);
product(3,'Milk',12);
product(3,'Beer',60);
console.log(product(4,'Orange juice',25))
//จะไม่แสดง product ที่เป็น Beer ออกมา เพราะ id ซ้ำ



//function addPlayer test case

console.log(addPlayer('Messi','Barcelona'))
console.log(addPlayer('Ronaldo')) //หากไม่ใส่ team จะแสดงเป็น Marid เป็น default




//function calAverage test case

console.log(calAverage(20,30,40,60)); //37.5
console.log(calAverage(100,250,300,500)); //287.5
console.log(calAverage(1,4,5,10)); //5
//calAverage function รับ paramter เป็น rest parameter โดยจะเอา arguments ที่เราใส่เข้าไปทุกตัวผ่าน function รวมเป็น array 