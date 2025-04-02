const bar =document.getElementById('hamburger');
const nav =document.getElementById('navbar');
const close =document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('show');
    }); 
}

if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('show');
    }); 
} 

//const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green
//console.log("The first color in the array is:", colors[0]);

// Prompt for user input
//const userName = prompt("What is your name?");
//const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store the input in an object
//const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]  // Store the selected color from the array
};

// Apply the selected color to the background
document.body.style.backgroundColor = userInfo.selectedColor;  // Use the selected color

//if (colorChoice < 0 || colorChoice > 2) {
    alert("Invalid choice, defaulting to grey.");
    colorChoice = 0; // Default to grey if the user inputs an invalid choice
}