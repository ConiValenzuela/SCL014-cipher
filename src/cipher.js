const cipher = {
  // ...
};

export default cipher;
// get input text from HTML

let inputText = document.getElementById("inputText").value = "ab&c";
let offset = document.getElementById("offset").value= 1;
let asciiNum;
let newAsciiNum;

let outputText = document.getElementById("outputText").innerHTML;

//convert input text to upper case and then to Acci number, apply offset to Ascii number

function encode() {
  let newText = "";
  let upperCaseText = inputText.toUpperCase();
  for ( var i = 0; i < upperCaseText.length; i++){
  asciiNum = upperCaseText.charCodeAt(i);
  if (asciiNum >=65 && asciiNum <=90){
    newAsciiNum = (asciiNum - 65 + offset) %26 + 65;
  } else {}
  newText += String.fromCharCode(newAsciiNum);
  } 
  //return newText("");
  //if (asciiNum < 65 && asciiNum > 90 ) {
    //return newText;

  //outputText = newText;
  //console.log(asciiNum);
  //console.log(newAsciiNum);
  console.log(newText);
  }

encode(); 



//console.log(inputText);

// transform new ascii number to new letters 
// imprimir al outputText

// 
/*function newAscii() {
  let newAsciiNum = (asciiNum - 65 + offset) %26 + 65;
  console.log(newAsciiNum)
}
newAscii();








/* 
      
  }
}
      return solved;
}



// convertir a ASCII para determinar valor de cada caracter .charCodeAt()
// obtener offset desde html = declararlo
// diseñar función para aplicar formula cipher (x-65+n)%26+65 
// entregar en HTML texto cifrado .fromCharCode()

*/
console.log("test de console log");