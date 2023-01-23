const form = document.querySelector("form");
const email = document.getElementById("mail");
const button = document.querySelector("btn");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Tut pusto!!!";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Format doljen byt' Vvide email ili posav' tuda @";
  } else if (email.validity.tooShort) {
    emailError.textContent = `V tvoiem emaile doljno byt' minimum ${email.minLength} znacheniy; Etogo poka malo ${email.value.length}.`;
  }

  emailError.className = "error active";
}
