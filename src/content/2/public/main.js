const navPopup = document.querySelector("#nav-menu");
const closeNavPopup = document.querySelector("#close-nav");
const openNavPopup = document.querySelector("#open-nav");

// Handle nav open and close
closeNavPopup.onclick = () => {
    navPopup.style.display = "none";
}

openNavPopup.onclick = () => {
    navPopup.style.display = "flex";
}