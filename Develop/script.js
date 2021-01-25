// Assignment Code


function promptMe(){

  

  var length = prompt("Enter password length. must be between 8 and 128 characters");
  if (isNaN (length) === true){
    alert ("must enter a number");
    return false;
  };
  if (length < 8 || length > 128){
    alert ("Must be between 8 and 128");
    return false;
  };
      var hasSpecial = confirm("click ok if you want to include special characters");

      var hasUpper = confirm("click ok if you want uppercase letters");

      var hasLower = confirm("click ok if you want to include lower case letters");

      var hasNumbers = confirm("click ok if you want to include numbers");

      if(hasSpecial == false && hasLower == false && hasNumbers == false && hasUpper == false){
        alert ("Must choose at least one option");
        return false;
      }; 
      
      var available = "";
      var password = "";
      var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (hasUpper){ 
        available += alpha;
    };
      if (hasLower){
       available += alpha.toLowerCase();
      };
      if (hasNumbers){
         available += "1234567890";
      };
      if (hasSpecial){
        available += "!@#$%^";
      };
      for (var i = password.length; i < length; i++){
        password += available.charAt(Math.floor(Math.random() * available.length));
      };
  return password;
};
// Write password to the #password input 
function writePassword(e) {
  // e.stopPropagation();
  console.log("promptMe", e);
  var password = promptMe();
  if (password){
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  };
  

};
window.onload = function() {

  var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
};