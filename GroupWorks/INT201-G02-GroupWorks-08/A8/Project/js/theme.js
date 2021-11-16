import { CookieUtil } from "./cookie.js";
let theme = document.getElementById("theme");
let button = document.getElementsByTagName("button");

//array เก็บโค้ดสี โดยใช้เป็น array ซ้อน array ช่องแรกเก็บสีปุ่ม ช่องที่สองเก็บสีพื้นหลัง
var color = [
  ["#337ab7", "var(--primary-color)"],
  ["#9f2d4b", "#ce5374"],
  ["#694a6d", "#966d9c"],
  ["#3f508d", "#6477b9"],
  ["#4e6a69", "#729796"],
  ["#705448", "#a07b6a"],
  ["#b84600", "#ff8133"]
];

var i = 0;

theme.addEventListener("click", () => {
  changeBG();
});

function changeBG() {
  i = i < color.length ? ++i : 0;
  document.body.style.backgroundColor = color[i][1];
  localStorage.setItem("theme", color[i][1]);

  for (let bt of button) {
    bt.setAttribute(
      "style",
      `background-color: ${color[i][0]}; border-color: #fff`
    );
   localStorage.setItem("button", color[i][0]);
  }
}

let themeColor = localStorage.getItem("theme");
let buttonColor = localStorage.getItem("button");

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = themeColor;
  for (let bt of button) {
    bt.style.backgroundColor = buttonColor;
  }
});


