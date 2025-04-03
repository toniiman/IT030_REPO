
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

document.addEventListener('DOMContentLoaded', () => {
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

    // Apply selected color to the body background
    document.body.style.backgroundColor = userInfo.selectedColor;
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("signup-form");

    // Show the popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "flex";
    }, 2000);

    // Close the popup after user clicks the "X"
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;

        if (email) {
            alert("Thank you for signing up! Your 10% off code is: WELCOME10");
            popup.style.display = "none"; // Close popup
        }
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const currencySelector = document.getElementById("currency-selector");
    const prices = document.querySelectorAll(".price");

    // Currency exchange rates
    const exchangeRates = {
        "USD": 1,      // Base price in USD
        "EUR": 0.92,   // Example conversion rate
        "GBP": 0.78,    // Example conversion rate
        "NGN": 1500,  // Example conversion rate
    };

    // Function to update prices
    function updatePrices() {
        const selectedCurrency = currencySelector.value;
        prices.forEach(priceElement => {
            const basePrice = parseFloat(priceElement.getAttribute("data-price"));
            const convertedPrice = (basePrice * exchangeRates[selectedCurrency]).toFixed(2);
            
            // Update the price display
            let currencySymbol = selectedCurrency === "USD" ? "$" :
                                 selectedCurrency === "EUR" ? "€" : "£";
            
            priceElement.innerHTML = `Price: ${currencySymbol}${convertedPrice}`;
        });
    }

    // Event Listener: Change prices when currency is selected
    currencySelector.addEventListener("change", updatePrices);
});
