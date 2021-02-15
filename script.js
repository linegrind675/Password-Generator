// Assignment code here
var lowerCaseCharacters = [
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
  
  var upperCaseCharacters = [
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
  
  var numericCharacters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];
  
  var specialCharacters = [
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '"',
    "'",
    '!',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '~',
    '-',
    '_',
    '.',
    '/',
    '\\',
    '?'
  ];
  
  function getPasswordOptn() {
    
    var length = parseInt(prompt('How many characters should your password have?'));

    if (length < 8) {
        alert('Password must contain at least 8 characters');
        return;
    }

    if (length > 128) {
        alert('Password must contain less than 128 characters');
        return;
    }

    if (isNaN(length) === true) {
        alert('Password must be written as a number')
        return;
    }

    var hasLowerCaseCharacters = confirm('Click OK to comfirm using lowercase characters');

    var hasUpperCaseCharacters = confirm('Click OK to confirm using uppercare characters');

    var hasNumericCharacters = confirm('Click OK to confirm using numeric characters');

    var hasSpecialCharacters = confirm('Click OK to confirm using special characters');
  };
  
  function generatePassword() {
      var options = getPasswordOptn();

      var result = [];

      var possibleCharacters = [];

      var definiteCharacters = [];
  }


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
  