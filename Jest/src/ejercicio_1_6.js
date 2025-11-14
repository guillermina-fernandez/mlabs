function findMaxOnes(matriz) {
    const allElems = matriz.flat();
    let newString = ''
    
    for (let elem of allElems) {
        if (Number(elem) === 1 || Number(elem) === 0) {
            newString += elem.toString();
        } else {
            return -1
        }
    };

    const ones = newString.split('0');
    let maxOnes = 0;

    for (let group of ones) {
        if (group.length > maxOnes) {
            maxOnes = group.length;
        }
    }
    return maxOnes;
}

module.exports = { findMaxOnes };
