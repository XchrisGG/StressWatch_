// utils/vigenere.js

// Función para generar una clave de cifrado aleatoria
function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}

// Función para cifrar un texto utilizando el método Vigenère
function vigenereEncrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let encryptedText = '';

    for (let i = 0, j = 0; i < text.length; i++) {
        const currentLetter = text[i];
        if (alphabet.includes(currentLetter)) {
            const textIndex = alphabet.indexOf(currentLetter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            const encryptedIndex = (textIndex + keyIndex) % 26;
            encryptedText += alphabet[encryptedIndex];
            j++;
        } else {
            encryptedText += currentLetter;
        }
    }

    return encryptedText;
}

module.exports = { generateRandomKey, vigenereEncrypt };
