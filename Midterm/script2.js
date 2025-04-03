
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.getElementById("sidebar");
    const close = document.getElementById("close");

    // Open sidebar menu when hamburger is clicked
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });

    // Close sidebar when close button is clicked
    close.addEventListener("click", () => {
        sidebar.classList.remove("show");
    });
});



