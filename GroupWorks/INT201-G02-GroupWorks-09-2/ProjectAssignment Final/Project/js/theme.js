import { CookieUtil } from "./cookie.js";
import { login } from "./login.js";

const theme = document.getElementById("theme");
const button = document.getElementsByTagName("button");
const borderColor = "#f4f5f6";
const logoutBox = document.getElementById("logout-box");

theme.style.color = `${localStorage.getItem("buttonColor")}`; //set ค่าเริ่มต้นของสีปุ่มให้เป็นสีที่นำหน้าสี background 1สีเพื่อที่จะได้รู้ว่าสีไหนเป็นสีต่อไป
//array เก็บโค้ดสี โดยใช้เป็น array ซ้อน array ช่องแรกเก็บสีปุ่ม ช่องที่สองเก็บสีพื้นหลัง
const color = [
  ["", "var(--primary-color)", "#e07a5f"],
  ["#b84900", "#e07a5f", "#ce5374"], //ส้ม
  ["#9f2d4b", "#ce5374", "#966d9c"], //ชมพู
  ["#694a6d", "#966d9c", "#6477b9"], //ม่วง
  ["#3f508d", "#6477b9", "#729796"], //ฟ้า
  ["#4e6a69", "#729796", "#a07b6a"], //เขียว
  ["#705448", "#a07b6a", "#856d88"], //น้ำตาล
  ["#4e404f", "#856d88", "#818e9c"], //กะปิ
  ["#5a6672", "#818e9c", "#e07a5f"], //เทา
];

theme.addEventListener("click", () => {
  changColor.changBG();
  changColor.changBT();
});

//*แก้ code changeColor ให้อยู่ในรูป property function จากปกติค่า i ในการกำหนด changeBG จะถูกเข้าถึงได้จากภายนอก
const changColor = {
  countColorBG: 0,
  changBG: function () {
    //ถ้าค่า countColorBG < จำนวนสีทั้งหมด ใน array ให้ + ค่า countColorBG เพิ่มไปเรื่อยๆ ถ้าหากว่าไม่ตรงตามเงื่อนไขให้ค่า countColorBG = 0 จะเป็นสีเดิม
    changColor.countColorBG =
      changColor.countColorBG < color.length - 1
        ? ++changColor.countColorBG
        : 0;
    document.body.style.backgroundColor = color[changColor.countColorBG][1];
    localStorage.setItem("theme", color[changColor.countColorBG][1]); //เก็บสีธีมพื้นหลัง
    localStorage.setItem("BTNColor", color[changColor.countColorBG][2]); //เก็บสีปุ่มหัวใจ

    for (let bt of button) { //สีปุ่ม
      login.loadMember();
      bt.setAttribute(
        "style",
        `background-color: ${
          color[changColor.countColorBG][0]
        }; border-color: ${borderColor}; border-radius: 10px`
      );
      localStorage.setItem("button", color[changColor.countColorBG][0]); //เก็บสีปุ่ม
      localStorage.setItem("border-button", borderColor); //สีขอบของปุ่ม
    }
  },

  changBT: function () {
    theme.style.color = `${localStorage.getItem("BTNColor")}`; //get item ปุ่มหัวใจ
  },

  loadBG: function () {  //load ค่าที่ set ไว้ใน localstorage 
    const themeColor = localStorage.getItem("theme");
    const buttonColor = localStorage.getItem("button");
    const borderColorButton = localStorage.getItem("border-button");
    const btnChangeColor = localStorage.getItem("BTNColor"); //ปุ่มรูปหัวใจเปลี่ยนในการพื้นหลัง
    document.body.style.backgroundColor = themeColor;
    for (let bt of button) {
      bt.style.backgroundColor = buttonColor;
      bt.style.borderColor = borderColorButton;
    }
    theme.style.color = btnChangeColor;
  },
};

changColor.loadBG();
