const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const subLink = document.getElementById('sub-link');
const bar = document.querySelector('.bar');
const popup = document.querySelector('.popup');

// theme
const theme = document.querySelector('.theme');
const orca = document.querySelector('.orca');
const theBlueLagoon = document.querySelector('.theBlueLagoon');
const deepSeaSpace = document.querySelector('.deepSeaSpace');

// Login Registration
const loginBtn = document.getElementById('login');
const popupLogin = document.getElementById('popup-login');
const registrationBtn = document.getElementById('registration');
const popupRegistration = document.getElementById('popup-registration');
const closeRegistrationBtn = document.getElementById('close-registration');
const closeLoginBtn = document.getElementById('close-login');



hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});


// Theme
theme.addEventListener("click", () => {
    subLink.classList.toggle("active");
});

bar.addEventListener("click", () => {
    subLink.classList.remove("active");
});
orca.addEventListener("click", () => {
    container.classList.toggle("orca");
});
theBlueLagoon.addEventListener("click", () => {
    container.classList.toggle("theBlueLagoon");
});
deepSeaSpace.addEventListener("click", () => {
    container.classList.toggle("deepSeaSpace");
});


// login registration event

loginBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupLogin.style.display = "flex";
    popupRegistration.style.display = "none";
});
closeRegistrationBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
registrationBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupRegistration.style.display = "flex";
    popupLogin.style.display = "none";
});
closeLoginBtn.addEventListener("click", () => {
    popup.style.display = "none";
});