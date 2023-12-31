function countUsernameCombinations(fullName) {
    const name = fullName.toLowerCase().replace(/\s/g, ''); 
    const maxLength = Math.min(name.length, 6); 

    const combinations = new Set();

    for (let len = 1; len <= maxLength; len++) {
        for (let i = 0; i <= name.length - len; i++) {
            const username = name.substr(i, len);
            combinations.add(username);
        }
    }

    return combinations.size;
}

const fullName = "Naip Lovyu";
const totalCombinations = countUsernameCombinations(fullName);

console.log(`Total kombinasi username yang mungkin dari "${fullName}": ${totalCombinations}`);
