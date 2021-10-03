//Array, Object & JSON
//for -in
var arr = [1,2,3,4,5]
for(i in arr){
    console.log(arr[i])     //1, 2, 3, 4, 5
}

//for -of
let countries = ['Thailand', 'Japan', 'England', 'Germany']
for (c of countries){
    console.log(c)      //Thailand, Japan, England, Germany
}

var str = 'JavaScript'
for (s of str){
    console.log(s)      //J, a, v, a, S, c, r, i, p, t
}

//array-for-of
var thaiDigits = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙']
var words = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']	

const prompt = require('prompt-sync')()
var thaiNum = ''
var thaiWord = ''		
var strNum = prompt('กำหนดตัวเลขอารบิกเป็นจำนวนเต็มบวก >> ')
for (digit of strNum) {
	thaiNum += thaiDigits[digit]
 	thaiWord += words[digit]
}		

console.log('เลขไทย: ' + thaiNum)
console.log('คำอ่าน: ' + thaiWord)
/*
กำหนดตัวเลขอารบิกเป็นจำนวนเต็มบวก >> 754612389
เลขไทย: ๗๕๔๖๑๒๓๘๙
คำอ่าน: เจ็ดห้าสี่หกหนึ่งสองสามแปดเก้า
*/

/******************************************************************* */
//forEach()
//test
var browsers = new Array('Chrome', 'Edge', 'Firefox', 'Safari')
browsers.forEach(function(b, i) {
    console.log(i + 1, b)
})

browsers.forEach(b => {
    console.log(b)
})


let products = Array('iPhone', 'iPad', 'MacBook')
let numbers = Array.of(10, 15, 25, 75, 100)

console.log(products.join(' - '))

function summation(data) {
    var sum = 0
    for (n of data) {
        sum += n
    }
    return sum
}

var sum = summation([1, 3, 5, 7])
//console.log(sum)      //16
/*
1 Chrome
2 Edge
3 Firefox
4 Safari
Chrome
Edge
Firefox
Safari
iPhone - iPad - MacBook
*/

/******************************************************************* */
//array-2-dim
/*
var colors = [['red','green','blue'], ['black','white']]

for (i = 0 i < colors.length i++) {
	for (j = 0 j < colors[i].length j++) {
		console.log(colors[i][j])	
	}
}		//red green blue black white

for (i in colors) {
    for (j in colors[i]) {
        console.log(colors[i][j])
    }
}

for (cols of colors) {
    for (c of cols) {
        console.log(c)
    }
}

*/

var parts = ['ภาคกลาง', 'ภาคเหนือ', 'ภาคอีสาน', 'ภาคใต้']
var provinces = [['กรุงเทพ', 'สมุทรปราการ', 'ปทุมธานี', '...'],
				['เชียงใหม่', 'เชียงราย', 'ลำพูน', 'ลำปาง', '...'],
				['นครราชสีมา', 'บุรีรัมย์', 'สุรินทร์', '...'],
				['กระบี่', 'ตรัง', 'สงขลา', 'ภูเก็ต', '...']]
var str = ''
		
for (i in parts) {
	str += parts[i] + ': '
    str += provinces[i].join(', ')
    str += '\n'
}

console.log(str)
/*
ภาคกลาง: กรุงเทพ, สมุทรปราการ, ปทุมธานี, ...
ภาคเหนือ: เชียงใหม่, เชียงราย, ลำพูน, ลำปาง, ...
ภาคอีสาน: นครราชสีมา, บุรีรัมย์, สุรินทร์, ...
ภาคใต้: กระบี่, ตรัง, สงขลา, ภูเก็ต, ...
*/

/********************************************************************/
//object
let rectangle = {
    width : 10,
    height : 20,
}

rectangle['width'] = 30   				
rectangle.height = 50

//เพิ่มพร็อปเพอร์ตี้ใหม่
rectangle['filledColor'] = 'yellow'		
rectangle['borderColor'] = 'green'		
rectangle.borderWidth = 2	

Object.assign(rectangle, {
    x:1,
    y:2,
})

console.log(rectangle)

for (p in rectangle) {
    console.log(rectangle[p])
}

for (p of Object.keys(rectangle)) {
    console.log(rectangle[p])
}

with (rectangle) {
    console.log(filledColor)
    console.log(borderWidth)
    height = 15
    borderColor = 'green'
}


/********************************************************************/
//object-value
let language = {
    name: 'JavaScript',
    born: Date(1995, 10, 01),
    developer: ['Brendal Eich', 'ECMA'],
    price: undefined,
    browserSupport: {
        Microsoft: 'Edge',
        Google: 'Chrome',
        Mozilla: 'Firefox',
        Apple: 'Safari',
    },
}

console.log('Year born: ', language.born.getFullYear())
console.log('Original developer: ', language.developer[0])
console.log('Mozilla\'s browser: ', language.browserSupport.Mozilla)

/********************************************************************/
//object-object
let triangle = Object({
    base: 10,
    height: 20,
    filledColor: 'yellow',
    getArea() {
        return 0.5 * this.base * this.height
    },
})
console.log(Date(2020, 10, 30))
console.log(triangle.getArea())
/*
Sun Oct 03 2021 22:10:30 GMT+0700 (Indochina Time)
100
*/

/********************************************************************/
//object-method
let circle = {
    radius: 10,

    getArea: function(pi=3.14) {
        return pi * (circle.radius ** 2)
    },

    getPerimeter(pi=3.14) {
        return 2 * pi * circle.radius
    },
}

console.log(circle.getArea(3.14159))
console.log(circle.getPerimeter())


circle.getName = function() {
    return 'circle'
}

circle.sphereVolume = (pi=3.14) => {
    return (4/3) * pi * (circle.radius ** 3)
}

console.log(circle.getName())
console.log(circle.sphereVolume())
/*
314.159
62.800000000000004
circle
4186.666666666667
*/

//
let thaiDate = {
    currentDate: new Date(),
    thaiMonths: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม',
                 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม',
                 'พฤศจิกายน', 'ธันวาคม'],
    
    year() { return this.currentDate.getFullYear() },
    month() { return this.currentDate.getMonth() + 1 },
    day() { return this.currentDate.getDate() },

    getShortDate() {
        return `${this.day()}/${this.month()}/${this.year() + 543}`
    },

    getFullDate() {
        return `${this.day()} ${this.thaiMonths[this.month()-1]} ${this.year() + 543}`
    },
}

console.log('Short Date: ', thaiDate.getShortDate())    //Short Date:  3/10/2564
console.log('Long Date: ', thaiDate.getFullDate())      //Long Date:  3 ตุลาคม 2564

/********************************************************************/
//JSON
let person = {
	"name": "Jason Object",
	"age": 40,
	"married": true,
	"children": ["Jacob", "Jane", "Joan"],
	"website": null,
	"cars": {
		"sedan": "BMW Series 3",
		"suv": ["Honda CRV", "Toyota Fortuner"],
		"pickup": "Isuzu Dmax",
	}
}

console.log(person.name)
console.log(person['age'])
console.log(person.children[1])
console.log(person.cars.suv[0])


let circle = {
    "radius": 10,
    "color": "yellow",
    "price": null,
    "name": undefined,
    getArea() {
        return 3.14 * (this.radius ** 2)
    }
}

let circleJson = JSON.stringify(circle)
console.log(circleJson)
/*
Jason Object
40
Jane
Honda CRV
{"radius":10,"color":"yellow","price":null}
*/

let jsonStr = '{ \
    "name": "Product 1", \
    "price": 500, \
    "images": ["p1_1.jpg", "p1_2.jpg", "p1_3.jpg"], \
    "description": "Lorem Ipsum ..." \
}'

 let  obj = JSON.parse(jsonStr)
 console.log(obj)
 /*
 {
  name: 'Product 1',
  price: 500,
  images: [ 'p1_1.jpg', 'p1_2.jpg', 'p1_3.jpg' ],
  description: 'Lorem Ipsum ...'
}
*/