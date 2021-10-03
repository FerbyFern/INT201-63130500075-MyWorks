//5
//สุ่มเลข
let num1 = 0;
let num2 = 0;
let num3 = 0; //โยนค่าออกมา
function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

//หาค่าผลรวม sum
/*function sumNum() {
  return num1 + num2 + num3;
}

//หาค่าน้อยสุด min
function minNum() {
  return Math.min(num1, num2, num3);
}
//หาค่าสูงสุด max
function maxNum() {
  return Math.max(num1, num2, num3);
}*/

//หาค่าตามตัวเลือก
function find(n) {
    switch (n) {
      case 1:
        console.log(num1 + num2 + num3);
        break;
      case 2:
        console.log(Math.min(num1, num2, num3));
        break;
      case 3:
        console.log(Math.max(num1, num2, num3));
        break;
    }
  }

  //
function pressMain() {
  num1 = randomNum();
  num2 = randomNum();
  num3 = randomNum();
  console.log("Num1 = " + num1);
  console.log("Num2 = " + num2);
  console.log("Num3 = " + num3);
  find(1);
  find(2);
  find(3);
}

pressMain();
/*
Num1 = 38
Num2 = 61
Num3 = 33
132
33
61
*/

/****************************************************/
function getRandomNumber(){
  return Math.floor(Math.random() * 100) + 1; //สุ่มตัวเลขระหว่าง1-100 โดยใช้การ random
}

function sum(a,b,c){
  return a+b+c // เป็นfunctionไว้รวมผลบวก
}

function max(a,b,c){
  if(a>b&&a>c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่ามากสุด 
  else if(b>a&&b>c) return b
  else if(c>a&&c>b) return c
}

function min(a,b,c){
  if(a<b&&a<c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่าน้อยสุด 
  else if(b<a&&b<c) return b
  else if(c<a&&c<b) return c
  }

function find(a,b,c){
  const sum_fin = sum(a,b,c) 
  const min_fin = min(a,b,c)
  const max_fin = max(a,b,c)
  console.log(`sum is ${sum_fin}`) 
  console.log(`min is ${min_fin}`) 
  console.log(`max is ${max_fin}`) 
}

function main(){
  const a = getRandomNumber();
  const b = getRandomNumber();
  const c = getRandomNumber();
  console.log(`number1 is ${a}`) 
  console.log(`number2 is ${b}`) 
  console.log(`number3 is ${c}`) 
  find(a,b,c)
}

main()
