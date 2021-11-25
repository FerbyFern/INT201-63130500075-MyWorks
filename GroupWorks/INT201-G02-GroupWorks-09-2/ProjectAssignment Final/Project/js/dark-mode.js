
/*
function enableDarkMode(){
        document.body.classList.toggle("dark-mode"); // show/hide class ที่ชื่อ dark-mode ที่ body
        darkModeToggle.className = 'fa fa-sun-o ml-5'; // เปลี่ยน class ของ darkMode ให้เป็นรูปพระอาทิตย์
        localStorage.setItem('darkMode','enabled'); // set ค่าใน localStorage
}
function disableDarkMode(){
        document.body.classList.toggle("dark-mode");
        darkModeToggle.className = 'fa fa-moon-o ml-5';
        localStorage.setItem('darkMode', 'disabled');
}
      
darkModeToggle.addEventListener("click", () => {

        if(darkMode !== "enabled"){ //ถ้า localStorage ไม่เท่ากับ enabled จะไปเรียก enableDarkMode เพื่อเปิด dark-mode
                enableDarkMode();
                console.log(darkMode);
        }else{
                disableDarkMode();
                console.log(darkMode);
        }
})

let darkMode = localStorage.getItem('darkMode');
if(darkMode === 'enabled'){ // ถ้า localStorage มีค่า enabled จะทำการเปิด dark-mode
        enableDarkMode();
}
*/

const darkModeToggle= document.getElementById("darkMode");
let darkmode = {
        enableDarkMode: function(){
                document.body.classList.toggle("dark-mode"); // show/hide class ที่ชื่อ dark-mode ที่ body
                darkModeToggle.className = 'fa fa-sun-o ml-5'; // เปลี่ยน class ของ darkMode ให้เป็นรูปพระอาทิตย์
                localStorage.setItem('darkMode','enabled'); // set ค่าใน localStorage
        },
        disableDarkMode: function(){
                document.body.classList.toggle("dark-mode");
                darkModeToggle.className = 'fa fa-moon-o ml-5';
                localStorage.setItem('darkMode', 'disabled');
        },
       

}

darkModeToggle.addEventListener("click", () => {
        let darkMode = localStorage.getItem('darkMode');
        if(darkMode !== 'enabled'){ //ถ้า localStorage ไม่เท่ากับ enabled จะไปเรียก enableDarkMode เพื่อเปิด dark-mode
                darkmode.enableDarkMode();
                //console.log(darkMode);
        }else{
                darkmode.disableDarkMode();
                //console.log(darkMode);
        }
})

let darkMode = localStorage.getItem('darkMode');
if(darkMode === 'enabled'){
        darkmode.enableDarkMode();
}
