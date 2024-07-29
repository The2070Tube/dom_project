// Add your code to this file

// Select the body element (there's only one body element, so you don't need querySelectorAll)
let background = document.querySelector("body");

background.style.background = "#000099"; // This sets the text color to blue

// Correctly select the element by ID
let bulbaback = document.getElementById("bulbasaur_container");

if (bulbaback) {
    bulbaback.style.background = "#006666"; // This sets the background to yellow
} else {
    console.log("Element with ID 'bulbasaur_container' not found");
}


let lisp = document.getElementsByClassName("pokemon_names");

for (let pos = 0; pos < lisp.length; pos++) {
    lisp[pos].style.color = "yellow";
}


let centerhead = document.getElementsByClassName("introduction");

for (let pos = 0; pos < centerhead.length; pos++) {
    centerhead[pos].style.textAlign = "center"; // This aligns the text to the center
}