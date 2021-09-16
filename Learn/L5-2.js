//include object variable  in array with spread operator
let per1 = [{ id: 1, name: "Adam" }];
let arr1 = [...per1];
arr1[0].name = "Joe";
console.log(per1);

//include primitive variable in array with spread operator
let num1 = [10];
let arr2 = [...num1];
arr2[0] = 20;
console.log(num1);

//desturing assignment
({ a, b, ...rest } = { a: true, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(typeof a);
console.log(typeof b);
console.log(typeof rest); // {c: 30, d: 4