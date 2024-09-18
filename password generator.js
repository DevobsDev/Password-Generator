
//option1
let passLengthInput
passLengthInput = 100 //window.prompt("What is you password length?  ")

if (typeof(passLengthInput) !== "number"){
    console.log("pleass enter a number. we gave you a default number.")
    passLengthInput = 10
    //passLengthInput = window.prompt("What is you password length?  ")
} else{
    var passLength = passLengthInput
}

//option2
let specialCharInput  
specialCharInput = "y" //window.prompt("Do you want special characters?y/n  ")
if (specialCharInput.toLowerCase == "y" || specialCharInput.toLowerCase == "n"){
    console.log("pleass enter y/n. we gave you a default answer.")
    specialCharInput = "y"
    //specialCharInput = window.prompt("Do you want special characters?y/n  ")
}

if (specialCharInput == "y") {
    var specialCharBolean = true
} else {
   var specialCharBolean = false 
}

//option3
let numberInput
numberInput = "y"
if (numberInput.toLowerCase == "y" || numberInput.toLowerCase == "n"){
    console.log("pleass enter y/n. we gave you a default answer.")
    numberInput = "y"
    //specialCharInput = window.prompt("Do you want special characters?y/n  ")
}
if (numberInput == "y") {
    var numberBolean = true
} else {
   var numberBolean = false 
}

//option4
let upperCharInput
upperCharInput = "y"
if (upperCharInput.toLowerCase == "y" || upperCharInput.toLowerCase == "n"){
    console.log("pleass enter y/n. we gave you a default answer.")
    upperCharInput = "y"
    //specialCharInput = window.prompt("Do you want special characters?y/n  ")
}
if (upperCharInput == "y") {
    var upperCharBolean = true
} else {
   var upperCharBolean = false 
}

//option5
let lowerCharInput
lowerCharInput = "y"
if (lowerCharInput.toLowerCase == "y" || lowerCharInput.toLowerCase == "n"){
    console.log("pleass enter y/n. we gave you a default answer.")
    lowerCharInput = "y"
    //specialCharInput = window.prompt("Do you want special characters?y/n  ")
}
if (lowerCharInput == "y") {
    var lowerCharBolean = true
} else {
   var lowerCharBolean = false 
}




console.log(passLengthInput)
console.log(specialCharBolean)
console.log(numberBolean)
console.log(upperCharBolean)

const lowerChar = "abcdefghijklmnopqrstuvwxyz"
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const specialCharacters = "!@#$%^&*()_+"

//the function

function passGenerator (passLengthInput1, specialCharBolean1 ,numberBolean1, upperCharBolean1, lowerCharBolean1) {
    let prefChars = ""
    if (specialCharBolean1){
        prefChars += specialCharacters
    }
    if (numberBolean1){
        prefChars += numbers
    }
    if (upperCharBolean1){
        prefChars += upperChar
    }
    if (lowerCharBolean1){
        prefChars += lowerChar
    }
    let myPass = ""
    for(i = 1; i<= passLengthInput1; i++){
        var randomChar = prefChars[Math.ceil(Math.random() * prefChars.length )]
        myPass += randomChar
    }
    console.log(prefChars)
    console.log(passLengthInput1)
    console.log(myPass)
}

passGenerator(passLengthInput, specialCharBolean ,numberBolean, upperCharBolean)


