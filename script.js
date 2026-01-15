let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+{};~?,./";


function generatePass(){

    let length = parseInt(document.querySelector("length".value));

    document.getElementById("length").value ="number";
    document.querySelector("#choice_1").checked;
    document.querySelector("#choice_2").checked;
    document.querySelector("#choice_3").checked;

    let Password = "";
    let charSet = "";

    charSet += lowercase;

    if (uppercase){
        charSet += uppercase;
    }

    if (numbers){
        charSet += numbers;
    }

    if (symbols){
        charSet += symbols;
    }

    for(let i = 0; < length; i++){
       let randomIndex = Math.floor(Math.random() * charSet.length);
       Password += charSet[randomIndex];
    }

    document.querySelector("#password").value = Password;

}