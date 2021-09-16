let arr1 = [] //array
let obj = {} //object
console.log(typeof arr1) //object
console.log(arr1.length) //0
arr1 = [10, true, 1, "unknown", ['A','B','C'], {id:1, name:'Panalee'}] //array is untyped

console.log(arr1[2]) //1

console.log(arr1[arr1.length - 2]) //['A','B','c']

console.log(arr1[arr1[2]]) //true [integer expression]

console.log(arr1[4] [arr1[4].length-1]) //access 'C'

console.log(arr1[5].name) //access name property Panalee

arr1[4][0] = 'X' //change A to X
console.log(arr1[4]) //[ 'X', 'B', 'C' ]

arr1[0] = 20
console.log(arr1) 
//[20,true,1,'unknown',[ 'X', 'B', 'C' ],{ id: 1, name: 'Panalee' }]

//spread operator
let arr2 = ['confirm', ...arr1]
console.log(arr2) 
//['confirm',20,true,1,'unknown',[ 'X', 'B', 'C' ],{ id: 1, name: 'Panalee' }]

let arr3 = 'hello world'
let arr4 = [...arr3]
console.log(arr4.length) //11





