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