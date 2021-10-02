//if
const prompt = require('prompt-sync')() 

var n1 = parseFloat(prompt('จำนวนที่ 1 >> '))	
var max = n1				//ให้ค่าสูงสุดเท่ากับจำนวนแรกไว้ก่อน

var n2 = parseFloat(prompt('จำนวนที่ 2 >> '))	
if (n2 > max) {
	max = n2				//ถ้า n2 มากกว่า max เดิม ให้ค่า max มีค่าเท่ากับ n2
}

var n3 = parseFloat(prompt('จำนวนที่ 3 >> '))	
if (n3 > max) {
	max = n3				//ถ้า n3 มากกว่า max เดิม ให้ค่า max มีค่าเท่ากับ n3
}
console.log('จำนวนที่มากที่สุดคือ: ' + max)

/***********************************************************************/
//if-else_if-else
const prompt = require('prompt-sync')() 
let size = parseFloat(prompt('ขนาดของไฟล์ (ไบต์) >> '))
var unit		
if (size >= 1099511627776) {  		//ขนาด 1,099,511,627,776 ขึ้นไป ให้แปลงเป็นหน่วย TB
	size /= 1099511627776
	unit = "TB"
} else if (size >= 1073741824) {  	//ขนาด 107,3741,824 ขึ้นไป แปลงเป็นหน่วย GB
	size /= 1073741824
	unit = "GB"
} else if (size >= 1048576) {  		//ขนาด 1,048,576 ขึ้นไป ให้แปลงเป็นหน่วย MB
	size /= 1048576
	unit = "MB"
} else if (size >= 1024) {   		//ขนาด 1,024 ขึ้นไป ให้แปลงเป็นหน่วย KB
	size /= 1024
	unit = "KB"
} else {      						//ขนาดน้อยกว่า 1,024 ให้ใช้หน่วย Byte
	unit = "Byte"
}
console.log(`ของไฟล์ที่เหมาะสมคือ: ${size.toFixed(2)} ${unit}`)

/***********************************************************************/
//switch
var size = 'M'
switch (size) {
	case 'S': console.log("Small"); break
	case 'M': console.log("Medium"); break
	case 'L': console.log("Large"); break
	default: console.log("Unkown")
}   //Medium

/***********************************************************************/
//for
var str = ''
for (i = 1; i <= 5; i++) {
    str = ''
    for (j = 1; j <= 10; j++) {
        str += j + ' '
    }
    console.log(str)
}
/*
1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10
*/

var str = ''
for (i = 1; i <= 5; i++) {
    str = ''
    for (j = 1; j <= i; j++) {  		
        str += j + ' '
    }
    console.log(str)
}
/*
1 
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
*/

var str = ''
var v = 0
for (i = 1; i <= 5; i++) {          //ลูปชั้นนอก (i) สำหรับตัวเลขในแนวตั้ง
    str = '' 
    for (j = 1; j <= 5; j++) {	    //ลูปชั้นใน (j) สำหรับเลขตัวคูณ
        v = i * j
        str += v
        str += (v < 10) ? '   ' : '  '  //ถ้าผลคูณน้อยกว่า 10 เว้นช่องว่าง 3 ช่อง 
                                        //มิฉะนั้น ให้เว้นช่องว่าง 2 ช่อง
    }
    console.log(str)  		        //ถ้าครบลูป j ให้เขียนข้อมูลในแถวนั้น       		
}
/*
1   2   3   4   5   
2   4   6   8   10  
3   6   9   12  15
4   8   12  16  20
5   10  15  20  25
*/

/***********************************************************************/
//break หยุดการทำงานของลูป
var remain = 0
for (n = 1; n <= 6; n++) {
 	remain = n % 2
 	switch (remain) {
 		case 0: console.log(n + ' => Even'); break
 		default: console.log(n + ' => Odd')
 	}
}
/*
1 => Odd
2 => Even
3 => Odd
4 => Even
5 => Odd
6 => Even
*/

/***********************************************************************/
//continue สั่งให้วนลูปทัดไปทันที ไม่ทำคำสั่งภายในลูกที่อยู่ถัดลงไป
var sum = 0
for (n = 1; n<= 10; n++) {
    if (n == 5) {
        continue
    }
    sum += n
}
console.log(sum)    //sum = (1+2+3+4+6+7+8+9+10) = 50

/***********************************************************************/
//while ตรวจสอบเงื่อนไขก่อนก่อนเริ่มลูป และจะวนก็ต่อเมื่อเงื่อนไขเป็นจริง
const prompt = require('prompt-sync')() 
while (true) {
	x = parseInt(prompt('Enter number > 0 : '))
	if (x <= 0) {
		continue
	} else {
		break
	}
}

//
const prompt = require('prompt-sync')() 
var validCode = false
var code = ''		
while (!validCode) {  		//ถ้าตัวแปร validCode ยังเป็น false ก็ให้วนลูปต่อไป
	code = prompt('กรุณาใส่รหัสผ่าน >> ')
	if (code == '1234') {
		validCode = true  	//ถ้าใส่รหัสถูกต้อง เปลี่ยนค่า validCode เป็น true 
	}						//เพื่อออกจากลูป while
}
console.log('คุณใส่รหัสถูกต้อง')
/*
กรุณาใส่รหัสผ่าน >> abcd
กรุณาใส่รหัสผ่าน >> 5555
กรุณาใส่รหัสผ่าน >> 1234
คุณใส่รหัสถูกต้อง
*/

/***********************************************************************/
//do-while วนลูปก่อนทำตามเงื่อนไข
const prompt = require('prompt-sync')() 
var x = 0
do {
 	x = parseInt(prompt('กรุณาใส่เลขที่มากกว่า 99 >> '))
} while (x <= 99)

console.log('ขอบคุณค่ะ')

//
const prompt = require('prompt-sync')() 
var number = parseInt(Math.random() * 100)
var win = false			//สถานะที่บ่งชี้ว่าชนะหรือยัง
var count = 1			//การทายครั้งที่
const maxGuess = 7		//ทายได้ไม่เกิน 7 ครั้ง
var guessNum			//จำนวนครั้งที่ทาย
var message = ''		//ข้อความที่จะแสดง
var input = ''			//ข้อมูลที่รับจากผู้ใช้		

do {
	input = prompt(`การทายครั้งที่: ${count} กรุณาใส่ตัวเลข >> `)
	guessNum = parseInt(input)
			
	if (guessNum > number) {
		message= 'น้อยกว่านี้'
	} else if (guessNum < number) {
		message = 'มากกว่านี้'
	} else if (guessNum == number) {
		message = 'ถูกต้อง'
		win = true
	} else {
		message = 'กรุณาใส่ค่าเป็นตัวเลข 0-100'
	}
	console.log(message + '\n')

	if (count == maxGuess) {
		console.log('ทายเกินจำนวนครั้งที่กำหนด')
		break
	}
			
	count++			
} while (!win)
/*
การทายครั้งที่: 1 กรุณาใส่ตัวเลข >> 50
มากกว่านี้

การทายครั้งที่: 2 กรุณาใส่ตัวเลข >> 75
น้อยกว่านี้

การทายครั้งที่: 3 กรุณาใส่ตัวเลข >> 60
น้อยกว่านี้

การทายครั้งที่: 4 กรุณาใส่ตัวเลข >> 55
ถูกต้อง
*/


