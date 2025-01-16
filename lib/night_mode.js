
let darkmode = localStorage.getItem("dark-mode");

let button_night_mode = document.querySelector(".night-button");

let text_mode = document.querySelector("#text-mode");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    text_mode.innerText = "Light Mode";
    localStorage.setItem("dark-mode", "active");
    darkmode = "active";
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    text_mode.innerText = "Dark Mode";
    localStorage.setItem("dark-mode", null);
}

if(darkmode === "active"){
    enableDarkMode();
}

button_night_mode.addEventListener("click", function(){
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();

});
