import cipher from './cipher.js';
let inputText;
let offset;

//start button to second page with cipher app.
document.getElementById("start").addEventListener("click", function displayCipher() {
    const hideLogo = document.getElementById("firstPage");
    hideLogo.classList.toggle("hidden");
    const showCipherPage = document.getElementById("cipherPage")
    showCipherPage.classList.remove("hidden");
});

//cipher button to show encrypted text.
const buttonEncode = document.getElementById("encode-btn");
buttonEncode.addEventListener("click", function () {
    inputText = document.getElementById("inputText").value;
    offset = parseInt(document.getElementById("offset").value);
    let newText = cipher.encode(offset, inputText);
    document.getElementById("outputText").innerHTML = newText;
});

//decipher button to show unencrypted text.
const buttonDecode = document.getElementById("decode-btn");
buttonDecode.addEventListener("click", function () {
    inputText = document.getElementById("inputText").value;
    offset = parseInt(document.getElementById("offset").value);
    let newText = cipher.decode(offset, inputText);
    document.getElementById("outputText").innerHTML = newText;
});

//copy button to send resultant text to clipboard..
document.getElementById("copy-btn").addEventListener("click", function copyText() {
    const copyText = document.getElementById("outputText");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    
});

//erase button clears input information.
document.getElementById("erase-btn").addEventListener("click", function clearContents () {
    location.reload();
});

//console.log(cipher);
//L45 commented to avoid NPM Test warning.