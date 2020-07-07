const cipher = {

//encode function for text encryption.
encode:(offset, inputText) => {
  let asciiNum;
  let newAsciiNum;
  let newText = "";
  //converts all letters to upper case.
  let upperCaseText = inputText.toUpperCase();
  //for loop through each character from user input text.
  for ( var i = 0; i < upperCaseText.length; i++){
  //convert to correspondent ASCII number.
  asciiNum = upperCaseText.charCodeAt(i);
    //number must be between 65 and 90; "A" and "Z" on ASCII table.
    if (asciiNum >= 65 && asciiNum <= 90) {
    //if it is, apply formula to shift letter position on ASCII table according to offset key.
    newAsciiNum = (asciiNum - 65 + offset) %26 + 65;
    //if is not, dont shift ASCII table position.
    } else {
    newAsciiNum = asciiNum;
    }
  //obtain letters corresponding to ASCII table numbers and concatenate them into a string.
  newText += String.fromCharCode(newAsciiNum);
  }
  return newText  
  },

//decode function for text decryption.
  decode:(offset, inputText) =>  {
  let asciiNum2;
  let newAsciiNum2;
  let newText2 = "";
  //converts all letters to upper case.
  let upperCaseText2 = inputText.toUpperCase();
  //for loop through each character from user input text.
  for ( var i = 0; i < upperCaseText2.length; i++){
  //convert to correspondent ASCII number
  asciiNum2 = upperCaseText2.charCodeAt(i);
    //number must be between 65 and 90; "A" and "Z" on ASCII table.
    if (asciiNum2 >=65 && asciiNum2 <=90) {
    //if it is, apply formula to shift letter position on ASCII table according to offset key.
    newAsciiNum2 = (asciiNum2 + 65 - offset) %26 + 65;
    console.log(newAsciiNum2);
    newText2 += String.fromCharCode(newAsciiNum2);
    //if is not, dont shift ASCII table position.
    } else {
    newAsciiNum2 = asciiNum2;
    //newText2 = newText2 + inputText.charAt(i);
  }
  //obtain letters corresponding to ASCII table numbers and concatenate them into a string.
  //newText2 += String.fromCharCode(newAsciiNum2);
  }
  return newText2
  }
};
export default cipher;
