function generateRandomKey(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = '';
    for (let i = 0; i < length; i ++){
        key += characters.charAt(Math.floor(Math.random()*  characters.length));

    }
    return key;
}

function vigenereEncrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let encryptedText = '';

    for(let i = 0, j = 0; i < text.length; i++){
        const currentLetter = text[i];
        if(alphabet.includes(currentLetter)){
            const textIndex = alphabet.indexOf(currentLetter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            const encryptedIndex = (textIndex + keyIndex) % 26;
            encryptedText += alphabet[encryptedIndex];
            j++;
        }else{
            encryptedText += currentLetter;

        }

    }
    return encryptedText;
}
function vigenereDecrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let decryptedText = '';

    for (let i = 0, j = 0; i < text.length; i++) {
        const currentLetter = text[i];
        if (alphabet.includes(currentLetter)) {
            const textIndex = alphabet.indexOf(currentLetter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            const decryptedIndex = (textIndex - keyIndex + 26) % 26; // +26 to handle negative results
            decryptedText += alphabet[decryptedIndex];
            j++;
        } else {
            decryptedText += currentLetter;
        }
    }

    return decryptedText;
}

module.exports = { generateRandomKey, vigenereEncrypt, vigenereDecrypt };