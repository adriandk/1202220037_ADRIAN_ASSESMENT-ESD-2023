let prompt = require('prompt-sync')();

const dataAnak = [];

for (let i = 0; i < 10 ; i++){
    var inputAnak = prompt("Masukan nama anak : ");
    dataAnak.push(inputAnak);
}

function findDuplicates(dataAnak) {
    return dataAnak.filter((item, index) => dataAnak.indexOf(item) !== index);
}

const duplicateValues = findDuplicates(dataAnak);

if(duplicateValues.length == 0){
    console.log("Semua anak baik");
} else if (duplicateValues.length == 1) {
    console.log(duplicateValues.toString() + " nackal");
} else if(duplicateValues.length == 2) {
    console.log(duplicateValues.join(' dan ') + " nackal");
} else {
    console.log(duplicateValues.join(', ')+ " nackal");
}
