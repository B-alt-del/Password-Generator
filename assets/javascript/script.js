// Assignment Code
var generateBtn = document.querySelector("#generate");

var password_result = '';

// var user_char_selections = generatePassword();

// console.log(user_char_selections);

function generatePassword() {

  var Num_characters = prompt("How many characters would you like in your password?  (Enter number between 8-128)");
  
      while(Number(Num_characters) < 8 || Number(Num_characters) > 128){

        Num_characters = prompt("Invalid slection: Please choose number between 8-128");
      }

  var user_char_selections = char_selection();

  console.log(user_char_selections); // [lowercase, capitol, numbers, special]

  if(user_char_selections[0] === true){
    console.log("lowercase selected")
  }
  if(user_char_selections[2] === true){
    console.log("capitols selected")
  }
  if(user_char_selections[4] === true){
    console.log("numbers selected")
  }
  if(user_char_selections[6] === true){
    console.log("special characters selected")
  }

  //  return user_char_selections;
    }

function char_selection(){

   alert("Password must contain at least one of the following character type: Lowercase, Capitols, Numbers, and/or Special characters.");
  
  var chars_lowercase = confirm("Would you like to include lowercase letters?");
    if(chars_lowercase){
          var Num_lowercase = prompt("How many lowercase letters?"); //must add info on how many characters are left to choose from
      }
  var chars_capitol = confirm("Capitol letters?");
    if(chars_capitol){
  var Num_capitols = prompt("How many capitol letters?");
      }
  var chars_numbers = confirm("Numbers?");
    if(chars_numbers){
  var Num_numbers = prompt("How many capitol letters?")
      }
  var chars_special = confirm("Special charaters?");
    if(chars_special){
  var Num_special = prompt("How many capitol letters?")
      }
  var user_selections = [];

          if(!chars_capitol && !chars_lowercase && !chars_numbers && !chars_special){

            alert("you have not made a selection--- YOU MUST!");

            char_selection();

          }else {
            console.log("YOu have selected at least one character!");
          }

      user_selections = [chars_lowercase,Num_lowercase, chars_capitol,Num_lowercase, chars_numbers, Num_numbers, chars_special, Num_special];

      return user_selections;

      }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// I choose a length of at least 8 characters and no more than 128 characters
// I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//            at least one character type should be selected








// // Assignment Code

// var passwordResult = '';

// // passwordResult += 'blah';
// // passwordResult += 'blah';
// // console.log(passwordResult + 'something');

// var generateBtn = document.querySelector("#generate");

// function generatePassword(){
//   var uppercase = confirm('Uppercase?');
//   var lowercase = confirm('lowercase?');
//   var length = prompt("number of characters");
 
//   length = Number(length)

//   if (uppercase){
//     //add some uppercase letters to result
//   }else if (lowercase === true){
//     //add lowercase to result
//   }

//   if (lowercase){
//     //add some lowercase letters to result
//   }


//   return passwordResult;
// }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// //turning a string into a number