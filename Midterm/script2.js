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

// Apply selected color to the background
document.body.style.backgroundColor = userInfo.selectedColor;
