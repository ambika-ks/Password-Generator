// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var len=parseInt( prompt("Enter the Length of the password Needed (between 8 and 128"));
  if (len<8 || len >128){
    alert("The Length of the password must be within the Limit 8-128, try Again!!");
  }
  else{
  var lowerCase=confirm("Do you like to have Lower case Letters in your password ?");
  var upperCase=confirm("Do you like to have Upper case Letters in your password ?");
  var SplChar=confirm("Do you like to have Special Characters in your password ? ");
  var number=confirm("Do you like to have numbers in your password? ");
  }

}

// Function for getting a random element from an array
function getRandom(arr) {

}




// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);