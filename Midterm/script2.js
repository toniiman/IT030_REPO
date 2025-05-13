
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
// --- Local Storage Helpers ---
function setPreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// --- Apply theme to body and toggle switch ---
function applyTheme(theme) {
  if (theme !== 'dark' && theme !== 'light') {
    theme = 'light'; // fallback
    setPreference('theme', theme);
  }

  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.checked = theme === 'dark';
  }
}

// --- Load preferences (theme + name) ---
function loadPreferences() {
  const name = getPreference('name');
  const theme = getPreference('theme');

  applyTheme(theme);

  const welcome = document.getElementById("welcome-message");
  if (name && welcome) {
    welcome.textContent = `Welcome back, ${name}`;
  }
}

// --- Prompt for preferences if missing ---
function promptPreferences() {
  const name = prompt("What's your name?");
  let theme = prompt("Do you prefer dark or light mode?").toLowerCase();

  if (theme !== 'dark' && theme !== 'light') theme = 'light';

  setPreference('name', name);
  setPreference('theme', theme);
  loadPreferences();
}

// --- DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("change", function () {
      const newTheme = this.checked ? 'dark' : 'light';
      setPreference('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  const changeBtn = document.getElementById("change-preferences");
  if (changeBtn) {
    changeBtn.addEventListener("click", promptPreferences);
  }

  const name = getPreference('name');
  const theme = getPreference('theme');

  if (!name || !theme) {
    promptPreferences();
  } else {
    loadPreferences();

    if (!sessionStorage.getItem('greeted')) {
      alert(`Welcome back, ${name}!`);
      sessionStorage.setItem('greeted', 'true');
    }
  }
});

// Function to show the popup
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("signup-form");

  // ✅ Show the popup only once per session
  if (!sessionStorage.getItem("discountPopupShown")) {
      setTimeout(() => {
          popup.style.display = "flex";
          sessionStorage.setItem("discountPopupShown", "true"); // Mark as shown
      }, 2000);
  }

  // Close the popup after user clicks the "X"
  closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;

      if (email) {
        // GA4 CTA tracking
        gtag('event', 'CTR', {
          event_category: 'callToAction',
          event_label: 'Get My Discount'
      });
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

// Currency Toggle Button
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
