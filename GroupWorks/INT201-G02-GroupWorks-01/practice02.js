let greeting = 'Hello';

//let greeting = 'Hi'; เมื่อใส่จะ error ทันที เนื่องจาก let เป็น block scope ที่ไม่สามารถ re-declared ได้ แต่สามารถ update ได้

greeting = 'Hi'; //<- ไม่ต้องใส่ตัวแปร จะเป็นการ update ค่าลงไปแทนที่


function Greeter(){
    let greeting = 'Sawaddee'; //จะเห็นว่าก็มีการประกาศ greeting เหมือนกัน แต่การประกาศตัวแปรในนี้จะเปรียบเสมือนเราสร้างตัวแปรใหม่ใน scope ๆ หนึ่ง ซึ่งก็คือสร้างไว้ใน function ทำให้เราสามารถเรียกใช้งานได้

  //let greeting = 'Good Night'; เหมือนกันกับการประกาศภายนอก scope เราไม่สามารถ re-declared ค่าได้ แต่สามารถ update ได้
    greeting = 'Good Night'; // ค่าจะออกเป็น Good Night แทน

    console.log(greeting);
}

console.log(greeting); // แสดงผล greeting ภายนอก function ค่าจะแสดงเป็น Hi เนื่องจากมีการ Update ค่าในตัวแปร greeting
console.log(Greeter());// แสดงผล greeting ภายใน function ค่าจะแสดงเป็น Good Night เนื่องจากมีการ Update ค่าใน greeting ที่อยู่ภายใน function Greeter

var student1 = 'Peam';
var student2 = 'Phai';
var x = 10;
if(x===10){
    console.log(student1);
}else{ 
    console.log(student2);
}