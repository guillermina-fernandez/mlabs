function convertString(newInput) {
    if (typeof newInput !== 'string') return 'Error. Ingrese una cadena.';
    const canonicLetters = ['C', 'T', 'A', 'G'];
    const letters = newInput.split('');
    
    let complyLetters = letters.filter(letter => canonicLetters.includes(letter))
    return complyLetters.join('');
}

module.exports = { convertString };
