// All password variables for generator

// All variables to store password criteria - 4.8.21 AS
var pwlowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var pwupperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var pwspecialCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var pwNumbers = [0,1,2,3,4,5,6,7,8,9];
var characterPool = [];

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

  // Beginning the process of generating password, by asking user for character length of 8-126, and cancelling further actions if outside parameters. - 4.9.21 AS

    var numberofCharacters = prompt ("How many characters would you like your password to contain? Choose 8-128")
    console.log (numberofCharacters)

    // Confirms character length is not below 8 or above 128. Stops proceeding forward otherwise. 4.9.21 AS
    if (numberofCharacters <8 || numberofCharacters > 128){
      alert ("You must choose between 8 and 128"); 
      return;

     }

    // Begin confirmation window process of included character options in password - 4.9.21 AS
    

    if (confirm ("Would you like your password to contain lowercase letters?")) {
       characterPool = characterPool.concat(pwlowerCase)
     }

     if (confirm ("Would you like your password to contain uppercase letters?")) {
       characterPool = characterPool.concat(pwupperCase)
     }

     if (confirm ("Would you like your password to contain special characters?")) {
       characterPool = characterPool.concat(pwspecialCharacters)
     }

     if (confirm ("Would you like your password to contain numbers?")) {
       characterPool = characterPool.concat(pwNumbers)
     }

     console.log (characterPool)

      var result = [];

      for ( var i = 0; i < numberofCharacters; i++ ) {
      result.push(characterPool[Math.floor(Math.random() * 
      characterPool.length)]);
     }

      console.log (result)

      return result.join('');
     }



   



