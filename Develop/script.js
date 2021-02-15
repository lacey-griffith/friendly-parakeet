// Assignment code here


var charLength
var lowerCase
var upperCase
var specialChar
var numericChar

// var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];

// determine amount of characters desired for password
function generatePW() {
  var charLength =
    prompt("How many characters would you like in your password?");
  parseInt(charLength);
  console.log(charLength);

  if (charLength >= "8" || charLength <= "128") {
    alert("Okay, your password will be " + charLength + " characters.");
    typeof (charLength);
  } else if (
    charLength <= 8 || charLength >= 128) {
    alert("Please choose a value between 8 and 128.");
    return generatePW();
  }

  //choose if wants lowercase letters
  var lowerCase =
    confirm("Would you like to include lowercase characters?");
  if (lowerCase) {
    alert("Okay, include lowercase characters.");
    getLowerCase();

  } else {
    (!lowerCase)
    alert("Okay, don't include lowercase characters.");
    lowerCase = false;
  }

  //choose if wants uppercase letters
  var upperCase =
    confirm("Would you like to include uppercase characters?")
  if (upperCase) {
    alert("Okay, include uppercase characters.");
  } else {
    (!upperCase)
    alert("Okay, don't include uppercase characters.");
    upperCase = false;
  }

  // choose if wants special characters
  var specialChar =
    confirm("Would you like to include special characters?")
  if (specialChar) {
    alert("Okay, include special characters.");
  } else {
    (!specialChar)
    alert("Okay, don't include special characters.");
    specialChar = false;
  }

  //choose if wants numbers
  var numericChar =
    confirm("Would you like to include numbers?")
  if (numericChar) {
    alert("Okay, include numbers.");
  } else {
    (!numericChar)
    alert("Okay, don't include numbers.");
    numericChar = false;
  }
  for (var i = 0; i < charLength; i++); {
    if (lowerCase) {
      getLowerCase();
    }
    if (upperCase) {
      getUpperCase();
    }
    if (specialChar) {
      getSpecialChar();
    }
    if (numericChar) {
      getNumericChar();
    }
  }
}



  // pulling the randomized characters functions
  //lowercase generator
  for (var i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
  }

  function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  //uppercase generator
  function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  //number 0-9 generator
  function getNumericChar() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  //special character generator
  function getSpecialChar() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  }



  //when all above prompts are answered, create pw

  //display pw on screen

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  //run on page load
  generatePW();