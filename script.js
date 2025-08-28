// =======================
// Part 1: Basics
// =======================

// Variable + Conditional
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = `You are ${age} years old. ✅ Adult`;
  } else {
    result.textContent = `You are ${age} years old. ❌ Not an adult`;
  }
}

// =======================
// Part 2: Functions
// =======================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent =
    `Total = $${total}`;
}

// Function 2: Format a string
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// =======================
// Part 3: Loops
// =======================

// Example 1: Countdown using a loop
function showCountdown() {
  let output = "";
  for (let i = 5; i >= 1; i--) {
    output += i + " ";
  }
  document.getElementById("countdown").textContent = "Countdown: " + output;
}

// Example 2: Iterate through an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(fruit => {
  console.log("Fruit: " + fruit);
});

// =======================
// Part 4: DOM Manipulation
// =======================

// Example 1: Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.querySelector("h1").textContent = "🌟 Text Changed Dynamically!";
});

// Example 2: Toggle class
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.querySelector("h1").classList.toggle("highlight");
});

// Example 3: Add list item dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New List Item";
  document.getElementById("dynamicList").appendChild(li);
});
