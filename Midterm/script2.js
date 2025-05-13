
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

// Function to get cookie by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Get user preferences
let userName = getCookie('name');
let userTheme = getCookie('theme');

// If not present, prompt user and set cookies
if (!userName || !userTheme) {
  userName = prompt("What's your name?");
  userTheme = prompt("Do you prefer dark or light mode?").toLowerCase();

  // Fallback to light if input is invalid
  if (userTheme !== 'dark' && userTheme !== 'light') {
    userTheme = 'light';
  }

  setCookie('name', userName);
  setCookie('theme', userTheme);
}

// Show greeting
const welcome = document.getElementById("welcome-message");
if (welcome && userName) {
  welcome.textContent = `Welcome back, ${userName}`;
}

// Apply theme
document.body.classList.add(userTheme === 'dark' ? 'dark' : 'light');

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
                                 selectedCurrency === "NGN" ? "NGN" : "NGN";
            
            priceElement.innerHTML = `Price: ${currencySymbol}${convertedPrice}`;
        });
    }

    // Event Listener: Change prices when currency is selected
    currencySelector.addEventListener("change", updatePrices);
});
