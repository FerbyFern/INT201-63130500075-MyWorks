function select(x) { //function ชื่อ select รับค่า x
    string = "Hello World"; //กำหนด string 
    const vowels = ["a", "e", "i", "o", "u"]; //กำหนด vowels เป็น array ใช้ const เพราะกำหนดค่าเป็น final กำหนดค่าไปแล้วไม่สามารถเปลี่ยนแปลงค่าได้
    let newString = ''; //กำหนด newString เป็นช่องว่าง
    let newString2 = ''; //กำหนด newString2 เป็นช่องว่าง
    let replace = "*"; //กำหนด replace เป็น *
    let count = 0; //กำหนด count เป็น 0
   
    switch(x){ //เป็นการรับพารามิเตอร์ x เพื่อนำมาเปรียบเทียบกับแต่ละค่าที่กำหนดใน case
      case 1:
        let newString = ""; //เรียกใช้ newString
        for (let i = string.length - 1; i >= 0; i--) { 
          newString += string[i]; //ใช้คำสั่ง for loop วนตัวอักษรสุดท้ายของ String เพื่อสร้าง String แบบกลับด้าน
        }
        console.log(newString); //แสดงคำที่ได้จาก newString
        break; //break เพื่อให้โปรแกรมหยุดการทำงาน
      case 2:
        string = string.toLowerCase();//เปลี่ยน string ให้เป็นตัวอักษรพิมพ์เล็ก
        for (i = 0; i < string.length; i++) { //ใช้คำสั่ง for loop วนตัวอักษรทีละตัวเพื่อทำงานใน if
          if (vowels.includes(string[i])) { //ใช้คำสั่ง if เพื่อเทียบค่าใน vowels ว่ามีค่าตรงกับ string[i] หรือไม่
            newString2 += "*"; //ถ้าตรงจะแทน string[i] นั้นด้วย *
          } else {
            newString2 += string[i]; //ถ้าไม่ตรงจะแสดงเป็น string[i]
          }
        }
        console.log(newString2); //แสดงคำที่ได้จาก newString2
        break; //break เพื่อหยุดการทำงาน
       
      case 3:
        string = string.toLowerCase(); //เปลี่ยน string ให้เป็นตัวอักษรพิมเล็ก
        for (let i = 0; i < string.length; i++) { //ใช้คำสั่ง for loop วนอักษรทีละตัวเพื่อทำงานใน if
          if (vowels.includes(string[i])) { //ใช่คำสั่ง if เพื่อค้นหาค่าใน array ถ้ามีค่าอยู่จะทำการวนนับค่าที่ได้
            count++; //เพิ่มทีละหนึ่ง
          }
        }
        console.log(count); //แสดงจำนวน count ที่ได้
        break; //break เพื่อให้โปรแกรมหยุดการทำงาน
    }
  }
   
  
  