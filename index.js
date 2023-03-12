const form = document.getElementById("form");
const btn = document.getElementById("btn");
var nameError = document.getElementById("name-error");
var nameSuccess = document.querySelector("name-success");
btn.addEventListener("submit", (e) => {
  e.preventDefault();
  if (submit == true) {
    alert("thank you for submittion");
  }
  // return false;
});
