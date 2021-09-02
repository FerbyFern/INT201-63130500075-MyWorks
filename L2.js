const student={id:1, name:"Somchai"}

for(let prop in student){
console.log(prop);
console.log(student[prop])
}

let data=[1, 10, 5, "Hello", true]
for(let item of data){
console.log(item)
}

//obj. literal
let square ={
area: function(){ return this.side * this.side;},  
side: 10  
};
square.area()

let book={isbn: 1111, title: "JS Beginner", author:{firstname: "John", lastname: "Hang"}}
book.versions =[1.0,1.5, 2.0]
