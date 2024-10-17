function caesarCipher(text, shift, mode = 'encrypt') {
    let result = '';
    
    // Adjust shift for decryption
    if (mode === 'decrypt') {
        shift = -shift;
    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-zA-Z]/)) {  // Check if the character is a letter
            let base = char === char.toUpperCase() ? 65 : 97;  // ASCII value for 'A' is 65, for 'a' is 97
            let newChar = String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
            result += newChar;
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }
    
    return result;
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);

    if (!message || isNaN(shift)) {
        alert('Please enter both a message and shift value');
        return;
    }

    const encryptedMessage = caesarCipher(message, shift, 'encrypt');
    document.getElementById('output').textContent = encryptedMessage;
}

function decryptMessage() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);

    if (!message || isNaN(shift)) {
        alert('Please enter both a message and shift value');
        return;
    }

    const decryptedMessage = caesarCipher(message, shift, 'decrypt');
    document.getElementById('output').textContent = decryptedMessage;
}
