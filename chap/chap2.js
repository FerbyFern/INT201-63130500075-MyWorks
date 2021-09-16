//ประกาศตัวแปร
var x
var result
let message

var p, q, r
let num1, num2, result

var a
let b
// let a   //error
// var a   //error
// var b   //error

/*******************************/
//กำหนดค่าตัวแปร
var text              //ประกาศตัวแปรชื่อ text
text = ค่าที่กำหนด      //กำหนดค่าให้กับตัวแปร text
let number
number = ค่าที่กำหนด

var text = ค่าที่กำหนด        //ประกาศตัวแปรชื่อ text พร้อมกำหนดค่า
let number = ค่าที่กำหนด      //ประกาศตัวแปรชื่อ number พร้อมกำหนดค่า

var a = ค่าที่กำหนด, b = ค่าที่กำหนด, c = ค่าที่กำหนด   //กำหนดค่าให้กับทุกตัวแปร
let x, y = ค่าที่กำหนด, z                          //กำหนดค่าเพียงบางตัวแปร

var number = ค่าที่1
number = ค่าที่2         //เปลี่ยนแปลงค่าได้
number = ค่าที่3

/*******************************/
//ข้อมูลชนิด number
var x = 123             //เลขจำนวนเต็ม
var y = -456            //ค่าติดลบ
let z = 456.789         //เลขทศนิยม
let a = 108, b = 1009   //อาจประกาศและกำหนดค่าในคำสั่ง vat / let เดียวกัน
var c = +123            //เมื่อนำไปใช้ จะได้ค่าเป็น 123
var d = 007             //เมื่อนำไปใช้ จะได้ค่าเป็น 7
var e = 1.0             //เมื่อนำไปใช้ จะได้ค่าเป็น 1

// var a = 123,456         //error
// var b = 7_890           //error

var x = 123             //เดิมเป็นจำนวนเต็ม
x = 4.56                //เปลี่ยนเป็นเลขทศนิยม
var y = 7.11            //เดิมเป็นเลขทศนิยม
y = 101                 //เปลี่ยนเป็นจำนวนเต็ม

/*******************************/
//ข้อมูลชนิด String
var d = "JavaScript"
var s = 'avaScript'
var b = `JavaScript`
//ห้ามแยกไว้คนละบรรทัด
/* var text1 = "Lorem Ipsum is simply dummy text of the printing
                and typesetting industry"              //error
   var text2 = 'Lorem Ipsum is simply dummy text of the printing
                and typesetting industry'              //error   */
//ใสเครื่องหมาย \
var text1 = "Lorem Ipsum is simply dummy text of the printing \
             and typesetting industry"                          //OK
var text2 = 'Lorem Ipsum is simply dummy text of the printing \
             and typesetting industry'                          //OK
//แยกเป็น String ย่อยๆ นำมาต่อกันด้วยเครื่องหมาย +
var text1 = "Lorem Ipsum is simply dummy text of the printing" +
             "and typesetting industry"                          //OK
var text2 = 'Lorem Ipsum is simply dummy text of the printing' +
             'and typesetting industry'                          //OK
//เปลี่ยนเป็นเครื่องหมาย ` `
let lorem = `Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry`

/*******************************/
//ข้อมูลชนิด Boolean
var a = true        //a มีค่าเป็นจริง
let b = false       //b มีค่าเป็นเท็จ
// var c = True        //error เขียนในรูปแบบตัวพิมพ์
// var d = FALSE       //error ...
// let e = "true"      //e เป็นข้อมูลชนิด string ไม่ใช่ boolean

/*******************************/
//ค่าคงที่ (Constant)
const ชื่อค่าคงที่ = ค่าที่กำหนด

const PI = 3.141
// PI = 3.14        //erroe ค่าคงที่แก้ไขไม่ได้

const APP_VERSION
APP_VERSION = 8     //error ต้องกำหนดค่าตั้งแต่ประกาศตัวแปร

const LATITUDE = 50.12345       //OK
const LONGTITUDE = 80.67890     //OK
var LATITUDE = 60.6666          //error นำค่าคงที่มาเปลี่ยนเป็นตัวแปรไม่ได้
let LONGTITUDE = 85.5555        //error

var language = "JavaScript"
const language = "ECMAScript"   //error นำตัวแปรมาเปลี่ยนเป็นค่าคงที่ไม่ได้

/*******************************/
//การตรวงสอบชนิดข้อมูล
var a = 123
var b = 4.56
var c = "hello"
var d = false
var e
console.log(typeof a)           //number
console.log(typeof d)           //number
console.log(typeof c)           //string
console.log(typeof d)           //boolean
console.log(typeof e)           //undefined
console.log(typeof console)     //object
console.log(typeof console.log) //function
console.log(typeof null)        //object
console.log(typeof x)           //undefined ยังไม่ได้ประกาศตัวแปร

/*******************************/
//Operator สำหรับการกำหนดค่า (Assignment Operator -> =)
var x = 12345
let y = 6.789
const TITLE = 'JavaScript & Node.js'
//Chaining Assignment กำหนดค่าจากขวาไปซ้าย
var x, y, z
x = y = z = 10      //z = 10, y = 10, x = 10

/*******************************/
//Arithmetic Operator
//Division /
var a = 10/2    //5
var b = 100/8   //12.5
let c = 10/2.5  //4

//Remainder %
var a = 8%3     //2
var b = 10%5    //0
var c = 13%4    //1
var d = 12%3.5  //1.5

//Exponentiation ** = Math.pow()
var radius = 10                         //10
var circleArea = 3.14 * (radius ** 2)   //314
let sqrt100 = 100 ** 0.5                //10
console.log(radius, circleArea, sqrt100)

let a = "100" * "10"    //1000
let b = 10 - '2'        //8
let c = "100" / '25'    //4
let d = 108 + '1009'    //1081009 เป็นการเชื่อมต่อตัวเลขกับ string
console.log(a, b, c, d)

/*******************************/
//Compound Operator
var x = 5
x += 1      //6

var y = 4.5
y += 0.5    //5.0

var a = 20
a -= 15     //5

var b =5
b *= 2      //10

let c = 100
c /= 20     //5

let d = 13
d %= 6      //1

let e = 10
e **= 3     //1000

/*******************************/
//Increment & Decrement Operator
// (++ , +=) = +1
var a = 10
a++         //a = 11
var b = 10.75
++b         //b = 11.75
let c = 999
let d = ++c //d = 1000

// (-- , -=) = -1
var a = 10
a--         //a = 9
var b = 10.75
--b         //b = 9.75
let c = 999
let d = --c //d = 998

var x = 10
x++     //x = 11
x--     //x = 10
let y = 10
++y     //y = 11
--y     //y = 10

x = 10
y = 2 + (++x)   //y = 13
x = 10
y = 2 + (x++)   //y = 12

