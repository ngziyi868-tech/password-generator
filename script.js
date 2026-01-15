let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+{};~?,./";

function generatePass() {
  let length = parseInt(document.querySelector("#length").value);

  let useUppercase = document.querySelector("#choice_1").checked;
  let useNumbers = document.querySelector("#choice_2").checked;
  let useSymbols = document.querySelector("#choice_3").checked;

  let Password = "";
  let charSet = "";

  charSet += lowercase;

  if (useUppercase) {
    charSet += uppercase;
  }

  if (useNumbers) {
    charSet += numbers;
  }

  if (useSymbols) {
    charSet += symbols;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    Password += charSet[randomIndex];
  }

  document.querySelector("#password").value = Password;


}

document.querySelector("#generate").addEventListener("click", generatePass);
