//Group.2
const g2 = document.querySelector("#Section2 .group2");
g2.textContent = 'Group 2 za za';
let att = document.createAttribute("style");
att.value = "color: coral";
g2.setAttributeNode(att);

/**************************/
//1
var g1 = document.createAttribute("style");
g1.value = "color: Blue";
const Group1 = document.querySelector("#Section2 .group1");
Group1.innerHTML = " work hard play harder ";
Group1.setAttributeNode(g1);
Group1.style.fontSize = "larger";

//3
let tagImport = document.createElement('style');
document.head.appendChild(tagImport);
tagImport.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');`;

const sec2g3 = document.querySelector('#Section2 .group3')
sec2g3.textContent = 'Hello World!! We are Sec2G3'
sec2g3.style.cssText = `color : orange; font-family: 'Josefin Sans', sans-serif; font-size: 3em;`;

//4
const group4 = document.getElementsByClassName('group4')
group4[1].innerHTML = 'เข้าทุกคาบไม่ทราบอะไรเลย'
group4[1].style.color = 'red'  

//5
function sec2g5() {
    let sec = document.getElementById('Section2')
    let group = sec.getElementsByClassName('group5')[0];
    group.innerHTML = "TUS,PHAI,GUS,FERN,DOSE";
 
    let attr = document.createAttribute("style");
    attr.value = "color:blue";
    group.setAttributeNode(attr);
}
sec2g5();

//6
const g6= document.querySelector('#Section2 .group6')
g6.textContent = 'I LOVE CODING'
g6.style.color = 'blue';

//7
var attr = document.createAttribute("style");
attr.value = "color: red";
const group7 = document.querySelector("#Section2 .group7");
group7.innerHTML = "Love Aj.Umaporn";
group7.setAttributeNode(attr);

//8
const G8 = document.querySelector("#Section2 .group8");
G8.textContent="GROUP8 Hello";

let attr8 = document.createAttribute("style");
attr8.value = "color:red";
G8.setAttributeNode(attr8);

//9
const gName = document.querySelector('#Section2 .group9');
gName.innerHTML = '<font color = red >Hello</font>';

//10
const group0 = document.querySelector('#Section2 .group10')
group0.textContent='group 10!!';
group0.style.color='green';
