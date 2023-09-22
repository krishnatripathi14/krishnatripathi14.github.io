/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable;
myVariable = "Bob";
or
let myVariable = "Bob";
myVariable;
or
let myVariable = "Bob";
myVariable = "Steve";
*/
/*
let myVariable = 3; Strict equality check up.
myVariable === 4;
*/
/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

let myVariable = document.querySelector("h1");
alert("hello!");
*/
/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  } */

/*
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  }); //we can also use () => in place of function () which is called anonymous function.
*/
// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
  


  

