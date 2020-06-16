import cipher from './cipher.js';

console.log(cipher);

//start button to second page with cipher app
document.getElementById("start").addEventListener("click", function displayCipher() {
    const hideLogo = document.getElementById("firstPage");
    hideLogo.classList.toggle("hidden");
    const showCipherPage = document.getElementById("cipherPage")
    showCipherPage.classList.remove("hidden");
});

//cipher button to show encrypted text

//decipher button to show unencrypted text

//copy button to send resultant text to clipboard
document.getElementById("copy").addEventListener("click", function copyText() {
    const copyText = document.getElementById("outputText");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
});

//erase button clears input information
document.getElementById("erase").addEventListener("click", function clearContents () {
    document.getElementById("outputText").value = "";
    document.getElementById("inputText").value = "";
});
