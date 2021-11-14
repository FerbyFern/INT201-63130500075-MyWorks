//script นี้สำหรับตกแกต่งฉากหลัง และมีการเก็บ cookie เพื่อ set theme ที่ผู้ใช้ชื่นชอบ เมื่อเปิดครั้งถัดไปก็จะแสดง theme นั้นเลย

//เรียก function ของ cookie
import { setCookie, getCookie } from "./cookie.js";

//เรียกข้อมูลปุ่มการเปลี่ยน theme และ addEventListener
const themeBtn = document.getElementById('theme')
themeBtn.addEventListener('click',changeTheme);
//array เก็บโค้ดสี โดยใช้เป็น array ซ้อน array ช่องแรกเก็บสีปุ่ม+navbar ช่องที่สองเก็บสี bg
const themeColor = [
    ['#337ab7','#fff'],
    ['#48ada9','#F1F9F9'],
    ['#9ab87a','#F5F8F2'],
    ['#e4b777','#fcf6ee'],
    ['#eb99ad','#FBEFF8'],
    ['#b497d8','#f4f0f9'],
    ['#A3A3A3','#f5f5f5']
];

//เรียกข้อมูล cookie ที่มี key = theme
let themeCookie = getCookie('theme');
//หากมีคุกกี้จะใช้ค่านั้นๆ หากไม่มี (เข้าครั้งแรกให้เป็น 0) เพื่อบอกว่า ผู้ใช้ปัจจุบันอยู่ theme ช่องที่เท่าไหร่
export let currentIndex = (themeCookie!=null) ? themeCookie : 0

//เรียก function แสดงล theme
showTheme(currentIndex);

//เมื่อคลิ๊กปุ่ม change theme จะเป็นการเพิ่มค่าในตัวแปร currentIndex
//เก็บค่าใหม่ใน cookie
//เมื่อเกินค่า index เกินค่า index ใน array จะ set ให้เป็น 0 เพื่อไปเริ่ม theme แรกใหม่
//นำค่า index ที่ได้ไปแสดงผล เรียกใช้ function showTheme
function changeTheme(){
    currentIndex++;
    currentIndex = (currentIndex>=themeColor.length) ? 0 : currentIndex  
    setCookie('theme', currentIndex);

    showTheme(currentIndex);
}

//ทำการเปลี่ยน bg, button, bg-navbar
export function showTheme(currentIndex){
    //set ค่า style background-color ของ body ให้เป็น bg (indexช่องที่1 ของแต่ละ theme)
    document.body.style.backgroundColor = themeColor[currentIndex][1];
    //เรียกฝช้ getElementByTagName จะได้ทุกๆ tag ที่เป็ฯ button มาในรูปแบบ array
    let button = document.getElementsByTagName('button');
    //ใช้ loop เปลี่ยนทุกๆ ปุ่มให้เป็นสีปุ่ม (index ช่องที่ 0 ของแต่ละ theme)
    for(let b of button){
        //เช็คว่า ปุ่มนั้นมี attribute class = btn btn-danger (สำหรับสินค้าที่ไม่มีของใน stock) ไหม? 
        //ถ้าใช่ไม่ต้องเปลี่ยน
        if(b.getAttribute('class')!='btn btn-danger'){
            b.setAttribute('style',`background-color: ${themeColor[currentIndex][0]}; border-color: #fff`)
            
        }
    }
    //เหมือน button แต่เป็น navbar
    let navBar = document.getElementsByTagName('nav');
    for(let n of navBar){
        n.setAttribute('style',`background-color: ${themeColor[currentIndex][0]}`);
    }
    
}



