import { CookieUtil } from "./cookie.js";


let user_input = document.getElementById("user").value;

let login = {
    member : function() {
        let user_input = document.getElementById("user").value;
        if (user_input == "") {
          alert("Please enter user name.");
        } else {
          $('#loginModal').modal('hide');
          CookieUtil.setCookie("Username", user_input, 30);
        }
    },
    loadMember : function(){
        let loadUser = CookieUtil.getCookie("Username");
        userText.textContent = `Welcome ${loadUser}`;
        logoutText.style.display = "";
        loginBox.style.display = "none";
    }
}




let userText = document.getElementById("user-text");
let logoutText = document.getElementById("logout-text");
let loginBox = document.getElementById("login-box");
let logout = document.getElementById("logout-text");
let userLoginButton = document.getElementById("button-login");


userLoginButton.addEventListener("click", () => {
  login.member();
  login.loadMember();
});



logout.addEventListener("click", () => {
  CookieUtil.deleteCookie("Username");
  alert("You are logged out.");
  location.reload();
});


window.onload = login.loadMember;
