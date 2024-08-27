function encryptText(text) {
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => replacements[match]);
}

function decryptText(text) {
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => replacements[match]);
}

document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

