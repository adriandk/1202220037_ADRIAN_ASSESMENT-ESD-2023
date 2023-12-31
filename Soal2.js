let prompt = require('prompt-sync')();

function isPalindrome(str) {
    var retrunString;
    var reversedStr = str.split('').reverse().join('');
    if(str === reversedStr){
        retrunString = "eureeka!";
    } else {
        retrunString = "suka blyat";
    }
    return retrunString;
}

var stringToCheck = prompt("Masukan kata : ");
console.log(isPalindrome(stringToCheck));