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
}

/***********************************************************************/
