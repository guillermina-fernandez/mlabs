function findChar(newString) {
    if (typeof newString !== 'string') return 'Error. Ingrese una cadena.';
    newString = newString.toLowerCase();
    for (let i = 0; i < newString.length - 2; i++){
        if (newString.charAt(i) === newString.charAt(i + 1)) return i;
    }
    return -1;
}

module.exports = { findChar };
