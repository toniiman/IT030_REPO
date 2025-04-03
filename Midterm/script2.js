
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


