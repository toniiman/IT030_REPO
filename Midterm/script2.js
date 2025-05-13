
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

// Function to have preferences in local storage
function setPreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// --- Apply theme to body ---
function applyTheme(theme) {
  if (theme !== 'dark' && theme !== 'light') {
    theme = 'light'; // fallback
    setPreference('theme', theme);
  }

  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.checked = theme === 'dark';
}

// --- Load and apply preferences ---
function loadPreferences() {
  const name = getPreference('name');
  const theme = getPreference('theme');

  const welcome = document.getElementById("welcome-message");
  if (name && welcome) {
    welcome.textContent = `Welcome back, ${name}`;
  }

  applyTheme(theme);
}

// --- Prompt and update preferences ---
function promptPreferences() {
  const name = prompt("What's your name?");
  let theme = prompt("Do you prefer dark or light mode?").toLowerCase();

  if (theme !== 'dark' && theme !== 'light') theme = 'light';

  setPreference('name', name);
  setPreference('theme', theme);
  loadPreferences();
}

// --- Theme toggle switch ---
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("change", function () {
    const newTheme = this.checked ? 'dark' : 'light';
    setPreference('theme', newTheme);
    applyTheme(newTheme);
  });
}

// --- "Change Preferences" button ---
const changeBtn = document.getElementById("change-preferences");
if (changeBtn) {
  changeBtn.addEventListener("click", promptPreferences);
}

// --- First-time check ---
const name = getPreference('name');
const theme = getPreference('theme');

if (!name || !theme) {
  promptPreferences(); // first-time setup
} else {
  loadPreferences();   // returning user setup

  // Only greet once per actual page load
  if (!sessionStorage.getItem('greeted')) {
    alert(`Welcome back, ${name}!`);
    sessionStorage.setItem('greeted', 'true');
  }
}

if (!name || !theme) {
  promptPreferences();
} else {
  loadPreferences();

  // Only greet once per actual page load
  if (!sessionStorage.getItem('greeted')) {
    alert(`Welcome back, ${name}!`);
    sessionStorage.setItem('greeted', 'true');
  }
}

// Function to show the popup
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

//
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
