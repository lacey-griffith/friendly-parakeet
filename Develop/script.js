// Assignment code here

var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];

// determine amount of characters desired for password
function chooseCharacters() {
var characterLength =
    prompt("How many characters would you like?");
    characterLength = Number(characterLength);
    console.log(characterLength);

      if (characterLength > Number(8) && characterLength < Number(128)) {
        alert(" Your password will be " +characterLength+ " characters.");
        chooseCriteria();
      }
      
      else { (characterLength < Number(8) || characterLength > Number(128) || characterLength === "null" || characterLength === " ") 
        alert("Choose a value between 8 and 128.");
        chooseCharacters();
      }
    }


//choose if wants lowercase letters
function chooseCriteria() {  
  var lowerCase =
      confirm("Would you like to include lowercase characters?");

        if (lowerCase) {
          alert("Okay, include lowercase characters.");
          console.log("Yes, include lowercase");

        } 
        else {
          (!lowerCase)
          alert("Okay, don't include lowercase characters.");
          };

  //choose if wants uppercase letters
    var upperCase =
      confirm("Would you like to include uppercase characters?")

        if (upperCase) {
          alert("Okay, include uppercase characters.");
          console.log("Yes, include uppercase");
        } 
        else {
          (!upperCase)
          alert("Okay, don't include uppercase characters.");
          upperCase = false;
        };

    // choose if wants special characters
    var specialChar =
      confirm("Would you like to include special characters?")

        if (specialChar) {
          alert("Okay, include special characters.");
          console.log("Yes, include special characters");
        } 
        else {
          (!specialChar)
          alert("Okay, don't include special characters.");
          specialChar = false;
        };

    //choose if wants numbers
    var numericChar =
      confirm("Would you like to include numbers?")

        if (numericChar) {
          alert("Okay, include numbers.");
          console.log("Yes, include numbers");
        } 
        else {
          (!numericChar)
          alert("Okay, don't include numbers.");
          numericChar = false;
        };
      }
function generatePassword() {




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

  chooseCharacters()
