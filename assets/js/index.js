let inputText = document.querySelector(".decoded-text");
let paragraph = document.querySelector(".text-result-paragraph");
let outputText = document.querySelector(".textarea-result-paragraph");
let encryptButton = document.querySelector(".encrypt-button");
let decryptButton = document.querySelector(".decrypt-button");
let copyButton = document.querySelector(".copy-button");

function encrypt() {
    let encryptedText = inputText.value.toLowerCase();

    let result = encryptedText

        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    outputText.value = result;

    document.querySelector(".img-text-result").style.display = "none";
    document.querySelector(".text-result-title").style.display = "none";
    document.querySelector(".text-result-paragraph").style.display = "none";
    document.querySelector(".textarea-result-paragraph").innerHTML = result;
    document.querySelector(".textarea-result-paragraph").style.display = "block";
    document.querySelector(".copy-button").style.display = "block";
}

function decrypt() {
    let decryptedText = inputText.value.toLowerCase();

    let result = decryptedText

        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    outputText.value = result;

    document.querySelector(".img-text-result").style.display = "none";
    document.querySelector(".text-result-title").style.display = "none";
    document.querySelector(".text-result-paragraph").style.display = "none";
    document.querySelector(".textarea-result-paragraph").innerHTML = result;
    document.querySelector(".textarea-result-paragraph").style.display = "block";
    document.querySelector(".copy-button").style.display = "block";
}

function copyToClipboard() {
    let text = document.querySelector(".decoded-text");
    let textContent = document.querySelector(".textarea-result-paragraph").innerHTML;

    navigator.clipboard.writeText(textContent);

    text.value = "";

    setTimeout(function () {
        location.reload();
    }, 800);
}

encryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);
copyButton.addEventListener("click", copyToClipboard);
