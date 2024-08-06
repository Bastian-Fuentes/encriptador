function encriptar() {
    const text = document.getElementById("inputText").value;

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;

    const redirectLink = checkRedirection(text);
    if (redirectLink) {
        window.location.href = redirectLink;
        return;
    }
}

function desencriptar() {
    const text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

function checkRedirection(text) {
    for (let i = 0; i < redirectionArray.length; i++) {
        if (text === redirectionArray[i][0]) {
            return redirectionArray[i][1];
        }
    }
    return null;
}

const redirectionArray = [
    ["rick", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    ["nightcore", "https://www.youtube.com/watch?v=cvaIgq5j2Q8"],
    ["lol", "https://www.youtube.com/watch?v=ZHhqwBwmRkI"]
];

document.getElementById('inputText').addEventListener('input', function (event) {
    // Filtrar el valor del textarea
    this.value = this.value.replace(/[^a-z\s]/g, '');
});