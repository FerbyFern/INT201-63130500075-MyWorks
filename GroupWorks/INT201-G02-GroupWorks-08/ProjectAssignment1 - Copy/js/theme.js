import { CookieUtil } from "./cookie.js";

const themeBtn = document.getElementById('button-theme')
themeBtn.addEventListener('click', () => {
    changeTheme();
})

const themeColor = [
 'AEC8CA', '6D8C8E', 'D28A7C', 'FEC397', '6F5F5E'
]

let themeCookie = CookieUtil.getCookie('button-theme')
export let currentTheme = (themeCookie!=null) ? themeCookie : 0
showTheme(currentTheme)

function changeTheme() {
    currentTheme++
    currentTheme = (currentTheme >= themeColor.length) ? 0 : currentTheme
    CookieUtil.setCookie('button-theme', currentTheme)
    showTheme(currentTheme)
   
}

//เปลี่ยน background
export function showTheme(currentTheme) {
    document.body.style.backgroundColor = themeColor[currentTheme][1]

    let button = document.getElementsByTagName('button')

    for (let b of button) {
        if (b.getAttribute('class') != 'btn btn-danger') {
            b.setAttribute('style', `background-color : $themeColor[currentTheme][0]`)
        }
    }

    //เปลี่ยนสี navbar
}

