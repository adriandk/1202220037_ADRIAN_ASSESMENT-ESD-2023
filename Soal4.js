let prompt = require('prompt-sync')();

function hasDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            return true;
        }
    }
    return false;
}

const dataArray = [];
var jumlahData = parseInt(prompt("Masukan banyak Data : "));

for (let i = 0; i < jumlahData ; i++){
    var inputData = parseFloat(prompt("Masukan data : "));
    dataArray.push(inputData);
}

console.log(hasDuplicates(dataArray));