const cipher = {
//isValid:(creditCard)=>
//cipher.encode(offset, string) =>
//cipher.decode(offset, string) => 
};

export default cipher;
// obtener texto desde html = declararlo
// convertir el texto a carácteres separados tipo Array 
// convertir a ASCII para determinar valor de cada caracter .charCodeAt()
// obtener offset desde html = declararlo
// diseñar función para aplicar formula cipher (x-65+n)%26+65 
// entregar en HTML texto cifrado .fromCharCode()

let offset = document.getElementById("offset").value="3";

let inputText = document.getElementById("inputText").value="ABC";
//let chars = inputText.split("");

function encode() {
  for ( var i = 0; i < inputText.lenght; i++) {  
     let asciiNum = inputText.charCodeAt(i);
     console.log(asciiNum);
  }
  
}
encode();





