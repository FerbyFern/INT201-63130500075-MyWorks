import { CookieUtil } from "./cookie.js";

const user_input = document.getElementById("user");
const userText = document.getElementById("user-text");
const loginBox = document.getElementById("login-box");
const logoutBox = document.getElementById("logout-box");
const userLoginButton = document.getElementById("button-login");


export let login = {
    saveMember : function() {
        CookieUtil.setCookie("Username", user_input.value, 30);
        console.log(user_input.value);
    },
    loadMember : function(){
        let loadUser = CookieUtil.getCookie("Username");
        if(loadUser){
          userText.textContent = `Welcome: ${loadUser}`;
         // logoutText.innerHTML=``
         loginBox.style.display = "none"; 
         logoutBox.style.display = "flex";
        }else{
          logoutBox.style.display = "none";
        }
    }
}

userLoginButton.addEventListener("click", () => { //ปุ่ม login
  if (user_input.value === "") { //ถ้า user ไม่ได้ใส่ข้อมูลมา
    alert("Please enter username."); //ให้ขึ้น alert ว่า Please enter user name
  } else {
  login.saveMember(); //เรียก savemember เพื่อเก็บ cookie ของ username
  location.reload();
  alert(`Welcome ${user_input.value}`); //แต่ถ้าใส่ให้ขึ้น alert "Welcome ตามด้วยข้อมูลที่ user ใส่มา"
  } 
});

logoutBox.addEventListener("click", () => { //ปุ่ม logout
  CookieUtil.deleteCookie('Username'); //เมื่อกด logout จะไปลบชื่อในคุกกี้
  localStorage.removeItem('InCarts'); //ลบของที่ลูกค้าใส่ไว้ในตะกร้าใน localstorage
  localStorage.removeItem('shoppingCart');
  alert("You have logged out.");                     
  location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  login.loadMember();
})

