//Function
//test
/*
var begin = 1, end = 10
var sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)

begin = 10 
end = 20
sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)

begin = 30 
end = 50
sum = 0
for (i = begin; i <= end; i++) {
 	sum += i
}
console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)
*/

function sumRange(begin, end) {
	var sum = 0
 	for (i = begin; i <= end; i++) {
		sum += i
 	}
	console.log(`ผลรวมของ ${begin} - ${end} = ${sum}`)
}

sumRange(1, 10)
sumRange(10, 20)
sumRange(20, 50)
/*
ผลรวมของ 1 - 10 = 55
ผลรวมของ 10 - 20 = 165
ผลรวมของ 20 - 50 = 1085
*/

/******************************************************** */
//function
function print(str){
    console.log(str)
}

print('สวัสดี')
sayHello()

function sayHello(){
    console.log('Hello')
}
/*
สวัสดี
Hello
*/

//function return
function isLeapYear(year) {
    if ((year > 0) && (year < 10000) && Number.isInteger(year)) {
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            return true
        } else {
            return false
        }
    } else {
        return
    }
}

console.log(0 + ' is leap year: ' + isLeapYear(0))
console.log(2020 + ' is leap year: ' + isLeapYear(2020))
console.log(9999 + ' is leap year: ' + isLeapYear(9999))
console.log(10000 + ' is leap year: ' + isLeapYear(10000))
/*
0 is leap year: undefined
2020 is leap year: true
9999 is leap year: false
10000 is leap year: undefined
*/

/******************************************************** */
//callback
function inc(num, func) {
    num += 1
    func(num)
}

function showValue(v) {
    console.log(v)
}

//inc(10, showValue)
/*
inc(99, function(v) {
    console.log(v)
})
*/

inc(99, (v) => {
    console.log(v)      //100
})

inc(1009, v => console.log(v))  //1010

/******************************************************** */
//recursion เรียนก function ขึ้นมาทำงานซ้ำเรื่อยๆ
const prompt = require('prompt-sync')()

function selectMenu() {
	console.log('\nกรุณาเลือกเมนู')
	let menu = prompt('1: Continue,  2: Exit, 3: Help >> ')
	menu = parseInt(menu)
 	if (Number.isInteger(menu)) {
		if (menu >= 1 && menu <= 3) {
			return menu
		} else {
			selectMenu()		//ถ้าไม่ตรงตามเงื่อนไข ให้เรียกตัวมันเองแบบ Recursion
		}
	} else {
		selectMenu()			//ถ้าไม่ตรงตามเงื่อนไข ให้เรียกตัวมันเองแบบ Recursion
	}
}
//------------------------------------------------------------

let m = selectMenu()
/*
กรุณาเลือกเมนู
1: Continue,  2: Exit, 3: Help >> 5

กรุณาเลือกเมนู
1: Continue,  2: Exit, 3: Help >> 6

กรุณาเลือกเมนู
1: Continue,  2: Exit, 3: Help >> 4

กรุณาเลือกเมนู
1: Continue,  2: Exit, 3: Help >> 1     //จบการทำงาน ตรงตามเงื่อนไข
*/

