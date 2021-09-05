const Stocks = [ // Array ของ Stocks สินค้้าที่มีชื่อสินค้าและราคาเป็น obj อยู่ภายใน
    {
        product: "TV",
        price: 50000,
    },
    {
        product: "Iron",
        price: 4500,
    },
    {
        product: "Air Conditioner",
        price: 20000,
    },
];

const Money = {//obj Money เป็น obj ที่เก็บค่าของเงินเอาไว้ 	
    B500: 0,//แบงค์ 500 บาท
    B100: 0,//แบงค์ 100 บาท
    B50: 0,//แบงค์ 50 บาท
    B20: 0,//แบงค์ 20 บาท
    C10: 0,//เหรียญ 10 บาท
    C5: 0,//เหรียญ 5 บาท
    C2: 0,//เหรียญ 2 บาท
    C1: 0,//เหรียญ บาท
};

function Change(price, insertMoney) {
    let changeMoney = insertMoney - price; //ฟังค์ชั่นChange คือที่ๆเราจะหาจำนวนเงินทอนออกมา changeMoney คือเงินทอน insertMoney คือจำนวนเงินที่เราต้องใส่ และ price คือราคาที่เรากำหนดไว้ใน Array ของ Stocks 
    console.log(`Your change is : ${changeMoney} Baht`); // แสดงผลจำนวนเงินทอนคือ changeMoney
    if (changeMoney < 0) return `Don't have enough money!`;
    else if (changeMoney == 0) return Money; // ถ้า changeMoney เท่ากับ จำนวนเงินที่จ่ายไปจะแสดงค่า money ออกมา
    while (changeMoney != 0) { // วน loop เพื่อคิดจำนวนแบงค์กับเหรียญในเงินทอน โดยเงื่อนไขคือ ถ้า changeMoney ไม่เท่ากับ 0 ก็ทำจนกว่าจะเท่ากับ 0 
        if (changeMoney % 500 == 0) { // เช็คเงื่อนไข โดยถ้า changeMoney mod 500 ลงตัว
            changeMoney -= 500;  // ลบจำนวนเงินใน changeMoney ออก 500 เพื่อนำไปคิดรอบต่อไป 
            Money.B500++; // เพิ่มจำนวนแบงค์ 500 ใน Object -> Money
        } else if (changeMoney % 100 == 0) { // เช็คเงื่อนไข โดยถ้า changeMoney mod 100 ลงตัว
            changeMoney -= 100; // ลบจำนวนเงินใน changeMoney ออก 100 เพื่อนำไปคิดรอบต่อไป
            Money.B100++; // เพิ่มจำนวนแบงค์ 100 ใน Object -> Money
        } else if (changeMoney % 50 == 0) { // เช็คเงื่อนไข โดยถ้า changeMoney mod 50 ลงตัว

            changeMoney -= 50; //ลบจำนวนเงินใน changeMoney ออก 50 เพื่อนำไปคิดรอบต่อไป
            Money.B50++;// เพิ่มจำนวนแบงค์ 50 ใน Object -> Money
        } else if (changeMoney % 20 == 0) { //เช็คเงื่อนไข โดยถ้า changeMoney mod 20 ลงตัว
            changeMoney -= 20; //ลบจำนวนเงินใน changeMoney ออก 20 เพื่อนำไปคิดรอบต่อไป
            Money.B20++;// เพิ่มจำนวนแบงค์ 20 ใน Object -> Money
        } else if (changeMoney % 10 == 0) { //เช็คเงื่อนไข โดยถ้า changeMoney mod 10 ลงตัว
            changeMoney -= 10; //ลบจำนวนเงินใน changeMoney ออก 10 เพื่อนำไปคิดรอบต่อไป
            Money.C10++;// เพิ่มจำนวนเหรียญ 10 บาท ใน Object -> Money
        } else if (changeMoney % 5 == 0) { //เช็คเงื่อนไข โดยถ้า changeMoney mod 5 ลงตัว
            changeMoney -= 5; //ลบจำนวนเงินใน changeMoney ออก 5 เพื่อนำไปคิดรอบต่อไป
            Money.C5++;// เพิ่มจำนวนเหรียญ 5 บาท ใน Object -> Money
        } else if (changeMoney % 2 == 0) { //เช็คเงื่อนไข โดยถ้า changeMoney mod 2 ลงตัว
            changeMoney -= 2;
            Money.C2++;// เพิ่มจำนวนเหรียญ 2 บาท ใน Object -> Money
        } else { // ถ้า changeMoney ไม่สามารถหารลงด้วยตัวใดลงตัว
            changeMoney -= 1;// ลบจำนวนเงินใน changeMoney ออก 1 เพื่อนำไปคิดรอบต่อไป
            Money.C1++;// เพิ่มจำนวนเหรียญ 1 บาท ใน Object -> Money
        }
    }
    return Money;
}
// ทดสอบโดยเรียก function Change แล้วใส่ค่า ที่กำหนดใน argument คือสินค้าที่ต้องการจะซื้อ และจำนวนเงินที่ได้รับมา
console.log(Change(Stocks[1].price, 4500));
console.log(Change(Stocks[1].price, 5000));
console.log(Change(Stocks[1].price, 3000));