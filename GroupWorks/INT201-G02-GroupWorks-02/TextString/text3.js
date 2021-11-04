<<<<<<< HEAD
function select(x) {
  //function ชื่อ select รับค่า x ในการเลือกเมนูว่าเราจะเลือกเมนูไหนในการแปลง String
  string = "Hello World"; //กำหนด string
  const vowels = ["a", "e", "i", "o", "u"];
  //กำหนด vowels เป็น array ใช้ const เพราะกำหนดค่าเป็น final กำหนดค่าไปแล้วไม่สามารถเปลี่ยนแปลงค่าได้
  let newString = ""; //กำหนด newString เป็นช่องว่างเพื่อเก็บค่า String ใหม่
  let count = 0; //กำหนด count เป็น 0 count จะทำการนับจำนวนของตัวอักษรที่เป็น Vowels เก็บไว้ในเมนูที่ 3
 
  switch (x) //เป็นการรับพารามิเตอร์ x เพื่อนำมาเปรียบเทียบกับแต่ละค่าที่กำหนดใน case
    {
    case 1:
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
        //ใช้ for-loop ในการวนเช็คตัวอักษร โดยที่ กำหนด i = จำนวนตัวอักษรทั้งหมดของ String นั้น ลบด้วย 1 เพื่อให้ค่าในช่องสุดท้ายใน array = 0 โดยให้ i-- หรือให้ถอยหลังกลับไปเรื่อยๆ จนกว่า i จะมากกว่าหรือเท่ากับ 0 ในแต่ละครั้งก็จะนำ String ที่ได้ไปเก็บไว้ในค่า newString ที่กำหนดขึ้นมาไว้รองรับ String ที่จะถูก reverse ไว้ และเมื่อ i หยุด ที่ 0 ก็จะจบการทำงาน แสดงผล String ตัวใหม่ที่กลับด้านออกมา
      }
      console.log(newString); //แสดงคำที่ได้จาก newString ผ่าน console
      break; //break เพื่อให้โปรแกรมหยุดการทำงาน
    case 2:
      string = string.toLowerCase(); //เปลี่ยน string ให้เป็นตัวอักษรพิมพ์เล็ก
      for (let i = 0; i < string.length; i++) {
        //ใช้คำสั่ง for loop วนตัวอักษรทีละตัวเพื่อทำงานใน if
        if (vowels.includes(string[i])) {
          //ใช้คำสั่ง if เพื่อเทียบค่าใน vowels โดยใช้ .includes() ซึ่งเป็น function ในการค้นหาค่าใน array โดย includes จะเป็นการเช็คว่า array นั้นมีค่าที่เราต้องการจะค้นหาอยู่หรือไม่ โดย return ค่าออกเป็น true false
          newString += "*";
          //ถ้าตรงกับ Vowels จะแทน string[i] ตัวนั้นด้วย *
        } else {
          newString += string[i];
          //ถ้าไม่ตรงกับ Vowels จะแสดงค่า string[i] ตัวเดิมนั้นออกมา
        }
      }
      console.log(newString); //แสดงคำที่ได้จาก newString ผ่าน console
      break; //break เพื่อหยุดการทำงาน
 
    case 3:
      string = string.toLowerCase(); //เปลี่ยน string ให้เป็นตัวอักษรพิมเล็ก
      for (let i = 0; i < string.length; i++) {
        //ใช้คำสั่ง for loop วนอักษรทีละตัวเพื่อทำงานใน if
        if (vowels.includes(string[i])) {
          //ใช้วิธีเช็คเหมือนกันกับ case 2 โดยเป็นการเก็บค่าไว้ใน count หากเจอตัวอักษรที่เป็น Vowels ให้ count++
          count++; //เพิ่มทีละหนึ่ง
        }
      }
      console.log(count); //แสดงจำนวน count ที่ได้ ผ่าน console
      break; //break เพื่อให้โปรแกรมหยุดการทำงาน
  }
}
=======
function select(x) {
  //function ชื่อ select รับค่า x ในการเลือกเมนูว่าเราจะเลือกเมนูไหนในการแปลง String
  string = "Hello World"; //กำหนด string
  const vowels = ["a", "e", "i", "o", "u"];
  //กำหนด vowels เป็น array ใช้ const เพราะกำหนดค่าเป็น final กำหนดค่าไปแล้วไม่สามารถเปลี่ยนแปลงค่าได้
  let newString = ""; //กำหนด newString เป็นช่องว่างเพื่อเก็บค่า String ใหม่
  let count = 0; //กำหนด count เป็น 0 count จะทำการนับจำนวนของตัวอักษรที่เป็น Vowels เก็บไว้ในเมนูที่ 3
 
  switch (x) //เป็นการรับพารามิเตอร์ x เพื่อนำมาเปรียบเทียบกับแต่ละค่าที่กำหนดใน case
    {
    case 1:
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
        //ใช้ for-loop ในการวนเช็คตัวอักษร โดยที่ กำหนด i = จำนวนตัวอักษรทั้งหมดของ String นั้น ลบด้วย 1 เพื่อให้ค่าในช่องสุดท้ายใน array = 0 โดยให้ i-- หรือให้ถอยหลังกลับไปเรื่อยๆ จนกว่า i จะมากกว่าหรือเท่ากับ 0 ในแต่ละครั้งก็จะนำ String ที่ได้ไปเก็บไว้ในค่า newString ที่กำหนดขึ้นมาไว้รองรับ String ที่จะถูก reverse ไว้ และเมื่อ i หยุด ที่ 0 ก็จะจบการทำงาน แสดงผล String ตัวใหม่ที่กลับด้านออกมา
      }
      console.log(newString); //แสดงคำที่ได้จาก newString ผ่าน console
      break; //break เพื่อให้โปรแกรมหยุดการทำงาน
    case 2:
      string = string.toLowerCase(); //เปลี่ยน string ให้เป็นตัวอักษรพิมพ์เล็ก
      for (let i = 0; i < string.length; i++) {
        //ใช้คำสั่ง for loop วนตัวอักษรทีละตัวเพื่อทำงานใน if
        if (vowels.includes(string[i])) {
          //ใช้คำสั่ง if เพื่อเทียบค่าใน vowels โดยใช้ .includes() ซึ่งเป็น function ในการค้นหาค่าใน array โดย includes จะเป็นการเช็คว่า array นั้นมีค่าที่เราต้องการจะค้นหาอยู่หรือไม่ โดย return ค่าออกเป็น true false
          newString += "*";
          //ถ้าตรงกับ Vowels จะแทน string[i] ตัวนั้นด้วย *
        } else {
          newString += string[i];
          //ถ้าไม่ตรงกับ Vowels จะแสดงค่า string[i] ตัวเดิมนั้นออกมา
        }
      }
      console.log(newString); //แสดงคำที่ได้จาก newString ผ่าน console
      break; //break เพื่อหยุดการทำงาน
 
    case 3:
      string = string.toLowerCase(); //เปลี่ยน string ให้เป็นตัวอักษรพิมเล็ก
      for (let i = 0; i < string.length; i++) {
        //ใช้คำสั่ง for loop วนอักษรทีละตัวเพื่อทำงานใน if
        if (vowels.includes(string[i])) {
          //ใช้วิธีเช็คเหมือนกันกับ case 2 โดยเป็นการเก็บค่าไว้ใน count หากเจอตัวอักษรที่เป็น Vowels ให้ count++
          count++; //เพิ่มทีละหนึ่ง
        }
      }
      console.log(count); //แสดงจำนวน count ที่ได้ ผ่าน console
      break; //break เพื่อให้โปรแกรมหยุดการทำงาน
  }
}
>>>>>>> 8511728 ([update] Wk2)
