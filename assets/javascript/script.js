var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
  var Num_characters = prompt("How many characters would you like in your password?  (Enter number between 8-128)");
    while(Number(Num_characters) < 8 || Number(Num_characters) > 128){
      Num_characters = prompt("Invalid slection: Please choose number between 8-128");
    }

  var user_char_selections = char_selection(Num_characters);
  var Password_string = '';
  var Lowercase_string = 'abcdefghijklmnopqrstuvwxyz';
  var Capitols_string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var Numbers_string = '0123456789';
  var Specials_string = '!@#$%&*+?';
  
  for(var i = 0; i < Number(user_char_selections[1]); i++){
    Password_string += Lowercase_string[Math.floor(Math.random()*26)];
  }
  for(var i = 0; i < Number(user_char_selections[3]); i++){
    Password_string += Capitols_string[Math.floor(Math.random()*26)];
  }
  for(var i = 0; i < Number(user_char_selections[5]); i++){
    Password_string += Numbers_string[Math.floor(Math.random()*10)];
  }
  for(var i = 0; i < Number(user_char_selections[7]); i++){
    Password_string += Specials_string[Math.floor(Math.random()*9)];
  }
  
  return Password_string;

}

function char_selection(characters){

  alert("Password must contain at least one of the following character type: Lowercase, Capitols, Numbers, and/or Special characters.");
  var Num_lowercase = 0;
  var Num_capitols = 0;
  var Num_numbers = 0;
  var Num_special = 0;

  var chars_lowercase = confirm("Would you like to include lowercase letters?");
    if(chars_lowercase){
      Num_lowercase = prompt("How many lowercase letters? (" + characters + " characters remaining)"); 
      characters = characters - Num_lowercase;
        console.log(Num_lowercase);
        console.log(characters);
    }

  var chars_capitol = confirm("Capitol letters?");
    if(chars_capitol){
      Num_capitols = prompt("How many capitol letters? (" + characters + " characters remaining)");
      characters = characters - Num_capitols;
    }

  var chars_numbers = confirm("Numbers?");
    if(chars_numbers){
      Num_numbers = prompt("How many capitol letters? (" + characters + " characters remaining");
      characters = characters - Num_numbers;
    }

  var chars_special = confirm("Special charaters?");
    if(chars_special){
      Num_special = prompt("How many capitol letters? (" + characters + " characters remaining");
      characters = characters - Num_special;
    }

  if(characters > 0){
    alert("The remaining (" + characters + ") will be filled with lowercase characters.");
  }

  var user_selections = [];

  if(!chars_capitol && !chars_lowercase && !chars_numbers && !chars_special){
    alert("you have not made a selection--- YOU MUST!");
    char_selection();
  }

  Num_lowercase = Number(Num_lowercase) + Number(characters);
  user_selections = [chars_lowercase, Number(Num_lowercase), chars_capitol, Number(Num_capitols), chars_numbers, Number(Num_numbers), chars_special, Number(Num_special)];

  return user_selections;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
