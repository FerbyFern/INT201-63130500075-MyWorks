
//สร้างตัวแปร x,y
var x = 10; 
var y = 10;

function multiply(){ // สร้างฟังก์ชั่นสำหรับการคุณตัวเลข
    var x = 20; //<-- เดิมค่าแรกเป็น 10 มีการกำหนดตัวแปร x ใหม่เป็น 20
    return x*y;
}
function greeter(){
    var greet = 'Hello There';
    console.log(greet);    
}
//คำสั่ง console.log ใช้แสดงผลลัพธ์ของค่าที่ต้องการ
console.log(x); //แสดงค่าของ x ตัวแรกเนื่องจากเป็น global scope
console.log(y); //แสดงค่า y
console.log(multiply()); //จะแสดงค่าเป็น 20 * 10 เพราะค่า x ถูก re-declared หรือถูกแทนค่าเข้าไปใหม่ ค่าจะออกมาเป็น 200
console.log(greet); // เมื่อรันคำสั่งจะ error เนื่องจาก ตัวแปร greet อยู่ในฟังก์ชั่น greeter ซึ่งเป็น function scope เราจะไม่สามารถเข้าถึงได้จากภายนอก ถ้าอยากเข้าถึงได้ลองไปวางในฟังก์ชั่นแล้วพิมพ์คำสั่ง console.log(greeter());
