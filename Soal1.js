let prompt = require('prompt-sync')();

const reviewArray = [];
const returnArray = [];
var sum = 0;

var jumlahReview = parseInt(prompt("Masukan banyak Review : "));

for (let i = 0; i < jumlahReview ; i++){
    var inputReview = parseFloat(prompt("Masukan nilai Review : "));
    reviewArray.push(inputReview);
}

console.log("Data Review : ");
console.log(reviewArray.toString());

var minValue = Math.min(...reviewArray);
returnArray.push(minValue);
var maxValue = Math.max(...reviewArray);
returnArray.push(maxValue);

for (let x = 0; x < reviewArray.length; x++) {
    sum += reviewArray[x];
}

var average = sum / reviewArray.length;
returnArray.push(average);
console.log("Data Return : ");
console.log(returnArray.toString);