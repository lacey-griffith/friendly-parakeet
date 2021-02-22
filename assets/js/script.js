// Assignment code here

// declaring global variables
var characterLength;

var lowerCase;
var upperCase;
var numericChar;
var specialChar;

var charString = "";
var newPassword = "";

//declaring arrays of character options
var upperCaseArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCaseArray = ['abcdefghijklmnopqrstuvwxyz'];
var numericArray = ['0123456789'];
var specialCharArray = ['!@#$%^&*()_+'];

//declaring empty arrays to add value to
var newPasswordCharacters = [];

//to generate a new password, with emptied arrays for new criteria
function reset() {
  charString = "";
  newPassword = "";
  newPasswordCharacters = [];
}

// determine amount of characters desired for password
function chooseCharacters() {
characterLength =
    prompt("How many characters would you like?");
    characterLength = Number(characterLength);
    console.log(characterLength);
      if (characterLength >= Number(8) && characterLength <= Number(128)) {
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
}

// determine the true criteria and put their array values into the new empty array to choose from
function generatePassword() {
    if (lowerCase === true) {
      //add lowercase characters to potential character array
      newPasswordCharacters.push(lowerCaseArray);
  }

    if (upperCase === true) {
      //add uppercase characters to potential character array
      newPasswordCharacters.push(upperCaseArray);
  }

    if (specialChar === true) {
      //add special characters to potential character array
      newPasswordCharacters.push(specialCharArray);
  }

    if (numericChar === true) {
      //add numbers to potential character array
      newPasswordCharacters.push(numericArray);
  }
  
    //new array to join all characters of potential character array
    charString = newPasswordCharacters.join("");
    console.log(charString);

    // loop to choose characters from joined potential character array with desired password length
    for (var i = 0; i < characterLength; i ++) {
    newPassword = newPassword.concat(charString[Math.floor(Math.random() * charString.length)]);  
  }
  console.log(newPassword);
}

//Provided code//
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  //Write password to the #password input
  function writePassword() {
    reset();
    chooseCharacters();
    generatePassword();
    var newPasswordText = document.querySelector("#password");
    newPasswordText.value = newPassword;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


  
  //chooseCharacters();
  //generatePassword();
  //writePassword ();