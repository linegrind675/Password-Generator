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

    var hasUpperCaseCharacters = confirm('Click OK to confirm using uppercase characters');

    var hasNumericCharacters = confirm('Click OK to confirm using numeric characters');

    var hasSpecialCharacters = confirm('Click OK to confirm using special characters');

    if (hasLowerCaseCharacters === false && hasUpperCaseCharacters === false && hasNumericCharacters === false && hasSpecialCharacters === false) {
        alert('You need to pick at least one type of character');
        return;
    }

    var passwordOptn = {
        hasLowerCaseCharacters: hasLowerCaseCharacters,
        hasUpperCaseCharacters: hasUpperCaseCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasSpecialCharacters: hasSpecialCharacters,
    };

    return passwordOptn;
  };

  function getRandom(i) {
      var randomIndex = Math.floor(Math.random() * i.length);
      var randomElement = i[randomIndex];

      return randomElement;
  }
  
  function generatePassword() {
      var options = getPasswordOptn();

      var result = [];

      var possibleCharacters = [];

      var definiteCharacters = [];

      if (options.hasLowerCaseCharacters) {
          definiteCharacters.push(getRandom(lowerCaseCharacters));
          possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
      }

      if (options.hasUpperCaseCharacters) {
          definiteCharacters.push(getRandom(upperCaseCharacters));
          possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
      }

      if (options.hasNumericCharacters) {
          definiteCharacters.push(getRandom(numericCharacters));
          possibleCharacters = possibleCharacters.concat(numericCharacters);
      }

      if (options.hasSpecialCharacters) {
          definiteCharacters.push(getRandom(specialCharacters));
          possibleCharacters = possibleCharacters.concat(specialCharacters);
      }

      for (var i = 0; i < options.length; i++) {
          var possibleCharacter = getRandom(possibleCharacters);

          result.push(possibleCharacter);
      }

      for (var i = 0; i < definiteCharacters.length; i++) {
          result[i] = definiteCharacters[i];
      }

      return result.join('');
  };


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  