const alphabet = "abcdefghijklmnopqrstuvwxyz!";
const ralpha = '!qazwsxedcrfvtgbyhnujmikolp';

function encipher(str) {
    let result = '';
    str.toLowerCase();
    let i = 0;
    while (i < str.length) {
        index = alphabet.indexOf(str.charAt(i))
        result += ralpha.charAt(index)
        i++
    }
    return result
}

function decipher(str) {
    let result = '';
    str.toLowerCase();
    let i = 0;
    while (i < str.length) {
        index = ralpha.indexOf(str.charAt(i))
        result += alphabet.charAt(index)
        i++;
    }
    return result
}

let encoder = encipher('I love cryptography!')
let decoder = decipher(encoder)
console.log(encoder);
console.log(decoder);