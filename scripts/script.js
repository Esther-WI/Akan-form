const maleNames = [

  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calculateAkanName(event) {
  event.preventDefault();


let DD = parseInt(document.getElementById("day").value);
let MM = parseInt(document.getElementById("month").value);
let YY = parseInt(document.getElementById("year").value);
let gender = document.querySelector('input[name="gender"]:checked').value;

if (DD <= 0 || DD > 31) {
  alert("Invalid day");
  return;
}
if (MM <= 0 || MM > 12) {
  alert("Invalid month");
  return;
}
if (YY<= 1900 || YY > 2025) {
  alert("Invalid century");
  return;
}


CC = Math.floor(YY / 100);
YY = YY % 100;


//confirm formular
const day = Math.floor(
  (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
);

//console.log(day);
//confirm formular
const index = day;

//diff from HAfsa's
const akanName = gender === "male" ? maleNames[index] : femaleNames[index];

showResult("Your Akan name is " + akanName);
}

function showResult(message) {
  const akanNameElement = document.getElementById("akan-name");
  akanNameElement.textContent = message; 
  const result = document.getElementById("result");
  result.style.display = "block";
}

const form = document.getElementById("akan-form");
form.addEventListener("submit", calculateAkanName);