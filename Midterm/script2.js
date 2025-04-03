
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.getElementById("sidebar");
    const close = document.getElementById("close");

    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    function toggleSidebar() {
        if (isMobile()) {
            sidebar.classList.toggle("show");
        }
    }

    function closeSidebar() {
        sidebar.classList.remove("show");
    }

    // Open sidebar only on mobile
    hamburger.addEventListener("click", toggleSidebar);

    // Close sidebar when close button is clicked
    close.addEventListener("click", closeSidebar);

    // Close sidebar if screen resizes to desktop
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            closeSidebar();
        }
    });
});

const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

console.log("The first color in the array is:", colors[0]);

const userName = prompt("What is your name?");
let colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Ensure input is a valid index
colorChoice = parseInt(colorChoice);
if (isNaN(colorChoice) || colorChoice < 0 || colorChoice >= colors.length) {
    alert("Invalid choice! Defaulting to grey.");
    colorChoice = 0;
}

const userInfo = {
    name: userName || "Guest",
    selectedColor: colors[colorChoice]
};

// Apply selected color only to the home section
const homeSection = document.getElementById("home");
if (homeSection) {
    homeSection.style.backgroundColor = userInfo.selectedColor;
}

