let menu = document.getElementById("menu");
let header = document.getElementById("header");
let num;

function showMenu() {
    num = window.scrollY;
    menu.style.transform = "translateY(" + num + "px)";
    menu.style.display = "block";
    header.style.opacity = "0";
}

function hideMenu() {
    menu.style.transition = "all 0.5s";
    menu.style.transform = "translateY(-100%)";
    header.style.opacity = "100%";
}

window.addEventListener('scroll', function(e) {
    if (header.style.opacity == "0") {
        if (window.scrollY < num) {
            num = window.scrollY;
            menu.style.transform = "translateY(" + num + "px)";
            menu.style.transition = "all 0s";
        }
    } 
});