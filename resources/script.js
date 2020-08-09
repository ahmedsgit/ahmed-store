const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const subLink = document.getElementById('sub-link');
const bar = document.querySelector('.bar');

// theme
const theme = document.querySelector('.theme');
const orca = document.querySelector('.orca');
const theBlueLagoon = document.querySelector('.theBlueLagoon');
const deepSeaSpace = document.querySelector('.deepSeaSpace');

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