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
