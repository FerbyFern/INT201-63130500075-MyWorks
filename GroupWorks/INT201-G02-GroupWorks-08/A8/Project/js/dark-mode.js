
let darkMode = localStorage.getItem('darkMode');
let darkModeToggle= document.getElementById("darkMode");

function enableDarkMode(){
        document.body.classList.toggle("dark-mode");
        darkModeToggle.className = 'fa fa-sun-o ml-5';
        localStorage.setItem('darkMode','enabled');
}
function disableDarkMode(){
        document.body.classList.toggle("dark-mode");
        darkModeToggle.className = 'fa fa-moon-o ml-5';
        localStorage.setItem('darkMode', 'disabled');
}
      
darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");

        if(darkMode !== "enabled"){
                enableDarkMode();
                console.log(darkMode);
        }else{
                disableDarkMode();
                console.log(darkMode);
        }

})

if(darkMode === 'enabled'){
        enableDarkMode();
}