// All password variables for generator

// All variables to store password criteria - 4.9.21 AS
var pwlowerCase = "abcdefghijklmnopqrstuvwxyz";
var pwupperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwspecialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var pwNumbers = "0123456789";
var pwLength = 0;
var finalPassword = "" 

// var confirmLower;
// var confirmUpper;
// var confirmNumber;
// var confirmSpecial;
// var userChoice;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword (){

  // Beginning the process of generating password, by asking user for character length of 8-126, and cancelling further actions if outside parameters. - 4.9.21 AMS

    pwLength = prompt ("How many characters would you like your password to contain? Choose 8-128")
    console.log (pwLength)

    // Confirms character length is not below 8 or above 128. Stops proceeding forward otherwise. 4.9.21 AMS
    if (pwLength <8 || pwLength > 128){
     pwLength = alert("You must choose between 8 and 128"); 

     }

    // Begin confirmation process of included character options in password - 4.9.21 AMS
    else{
    pwlowerCase = confirm ("Would you like your password to contain lowercase letters?");
    pwupperCase = confirm ("Would you like your password to contain uppercase letters?");
    pwspecialCharacters = confirm ("Would you like your password to contain special characters?");
    pwNumbers = confirm ("Would you like your password to contain numbers?");
    }

    var pwLength = 8-128,
    pwLength =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    retVal = "";
    for (var i = 0, n = pwLength.length; i < length; ++i) {
    retVal += pwSet.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

  }