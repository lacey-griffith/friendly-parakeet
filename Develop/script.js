// Assignment code here

// declaring global variables
var characterLength;

var lowerCase;
var upperCase;
var numericChar;
var specialChar;

var newPassword;

//declaring arrays of character options
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];

//declaring empty arrays to add value to
var newPasswordCharacters = [];
var newPasswordText = "";

// determine amount of characters desired for password
function chooseCharacters() {
characterLength =
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
//choose to include lowercase characters
function chooseCriteria() {
lowerCase =
    confirm("Would you like to include lowercase characters?");

  if (lowerCase) {
    alert("Okay, include lowercase characters.");
    console.log("Yes, include lowercase");

  } else {
    (!lowerCase)
    alert("Okay, don't include lowercase characters.");
  };

  //choose to include uppercase characters
  upperCase =
    confirm("Would you like to include uppercase characters?")

  if (upperCase) {
    alert("Okay, include uppercase characters.");
    console.log("Yes, include uppercase");
  } else {
    (!upperCase)
    alert("Okay, don't include uppercase characters.");
    upperCase = false;
  };

  // choose to include special characters
  specialChar =
    confirm("Would you like to include special characters?")

  if (specialChar) {
    alert("Okay, include special characters.");
    console.log("Yes, include special characters");
  } else {
    (!specialChar)
    alert("Okay, don't include special characters.");
    specialChar = false;
  };

  //choose to include numbers
  numericChar =
    confirm("Would you like to include numbers?")

  if (numericChar) {
    alert("Okay, include numbers.");
    console.log("Yes, include numbers");
  } else {
    (!numericChar)
    alert("Okay, don't include numbers.");
    numericChar = false;
  };
};

// determine the true criteria and put their array values into the new empty array to choose from
function writePassword() {
  console.log(characterLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChar);
  console.log(numericChar);

    if (lowerCase === true) {
      newPasswordCharacters.push(lowerCaseArray);
    }

    if (upperCase === true) {
      newPasswordCharacters.push(upperCaseArray);
    }

    if (specialChar === true) {
      newPasswordCharacters.push(specialCharArray);
    }

    if (numericChar === true) {
      newPasswordCharacters.push(numericArray);
    }
    console.log(newPasswordCharacters.join(','));

    for (i = 0; i < characterLength; i ++) {
    newPasswordCharacters = (Math.floor(Math.random() * characterLength) + 1);
    newPasswordCharacters = newPassword;
    console.log(newPassword);
    }
};



//Provided code//
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");

   // passwordText.value = password;

  // }

  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



  chooseCharacters();
  writePassword();