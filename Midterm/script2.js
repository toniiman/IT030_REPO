const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

// Open menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

// Close menu when close button is clicked
close.addEventListener("click", () => {
    navbar.classList.remove("show");
});