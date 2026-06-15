const sidebar =
document.getElementById("sidebar");

const overlay =
document.getElementById("overlay");

document
.getElementById("menuBtn")
.onclick = () => {

    sidebar.classList.add("active");
    overlay.classList.add("active");

};

document
.getElementById("closeMenu")
.onclick = closeMenu;

overlay.onclick = closeMenu;

function closeMenu(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    ){

        themeBtn.innerHTML = "☾";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        themeBtn.innerHTML = "☀";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

};

if(
    localStorage.getItem("theme")
    ===
    "dark"
){

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☾";

}
