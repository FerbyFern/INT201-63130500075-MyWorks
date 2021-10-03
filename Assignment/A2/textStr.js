//4
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

/*************************/
let myString = "Hello world";

function Reverse() {
  let result = ""; // string pen array
  for (i = 0; i <= myString.length; i++) {
    //ใช้ <= เพราะจะได้นับตัวสุดท้ายพอดี
    result += myString.charAt(myString.length - i); //charAt = properti แสดงผลที่เรากำหนด
  }
  console.log(result);
}

Reverse(myString);

function Replace(myString) {
  let result = "";
  for (i = 1; i <= myString.length; i++) {
    //ใช้ < เพราะ <= จะไปนับ index ที่ 11 ซึ่งมันไม่มี แต่ๆๆถ้า i = 1 จะใช้ <= ได้
    if (myString[i] == "E" || myString[i] == "e") {
      result += "*";
    } else if (myString[i] == "O" || myString[i] == "o") {
      result += "*";
    } else {
      result += myString[i];
    }
  }
  console.log(result);
}

Replace(myString);

function Replace2(myString) {
  let result = "";
  for (i = 0; i < myString.length; i++) {
    switch (myString[i]) {
      case "O":
        result += "*";
        break;
      case "o":
        result += "*";
        break;
      case "E":
        result += "*";
        break;
      case "e":
        result += "*";
        break;
      default:
        result += myString[i];
        break;
    }
  }
  console.log(result);
}

Replace2(myString);

function CountVowel(myString) {
  let result = 0;
  for (i = 0; i < myString.length; i++) {
    switch (myString[i]) {
      case "O":
        result++;
        break;
      case "o":
        result++;
        break;
      case "E":
        result++;
        break;
      case "e":
        result++;
        break;
      default:
        break;
    }
  }
  console.log(result);
}
CountVowel(myString);

function menu(num, myString) {
  switch (num) {
    case 1:
      Reverse(myString);
      break;
    case 2:
      Replace(myString);
      break;
    case 3:
      CountVowel(myString);
      break;
  }
}
menu(1, myString);

/***********************************************************/
let text = "Panalee Palasri";
let vowel=['A','E','I','O','U','a','e','i','o','u'];
TestString(0,text);
TestString(1,text);
TestString(2,text);
TestString(3,text);

function TestString(n, str) {
    switch(n){
        case 0: console.log(str); //print text
        break;
        case 1: console.log(reverseString(str));
        break;
        case 2: console.log(replaceString(str));
        break;
        case 3: console.log(countVowel(str));
        break;
    }
}
//Reverse String
function reverseString(str){
    return str.split("").reverse().join("");
    //split("") = ตัดแบ่งด้วย "" แล้วเป็น array
    //reverse() = จะเรียง array แบบ reverse ให้ใหม่
    //join("") = รวม array ให้เป็น String โดยใช้ "" คั่นระหว่าง object ใน array 
}

//Replace Vowel with '*'
function replaceString(str) {
    for(let i=0; i<str.length; i++){ 
        for(let j=0; j<vowel.length; j++){ 
            str = str.replace(vowel[j],'*');
            //replace('a','b') = เปลี่ยน string ที่เป็น a ให้เป็น b ทั้งหมด
        }
    }
    return str;
}

//Count vowels in String
function countVowel(str) {
    let count = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowel.length; j++){
            if(str.charAt(i) == vowel[j]){
            count++;
            }
        }
    }
    return count;
}
/*
Panalee Palasri
irsalaP eelanaP
P*n*l** P*l*sr*
7
*/