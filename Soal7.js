function decryptText(encryptedText) {
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {

        let charCode = encryptedText.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - 5 + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(charCode);
    }

    return decryptedText;
}

var soalSatu = "xfqfr bfmdz";
var soalDua = "gjxtp lzj rfz ifkyfw jxi snm";
var soalTiga = "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?";
var soalEmpat = "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz";
var soalLima = "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";

var decryptedTextSatu = decryptText(soalSatu);
var decryptedTextDua = decryptText(soalDua);
var decryptedTextTiga = decryptText(soalTiga);
var decryptedTextEmpat = decryptText(soalEmpat);
var decryptedTextLima = decryptText(soalLima);


console.log("Soal 1: " + decryptedTextSatu);
console.log("Soal 2: " + decryptedTextDua);
console.log("Soal 3: " + decryptedTextTiga);
console.log("Soal 4: " + decryptedTextEmpat);
console.log("Soal 5: " + decryptedTextLima);
