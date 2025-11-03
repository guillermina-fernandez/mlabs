function palabraMasLarga(str) {
    const wordsArray = str.split(' ');
    let longestWord = wordsArray[0];
    for (let i = 1; i < wordsArray.length; i++){
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    return longestWord;
}

console.log(palabraMasLarga('esta es mi frase, cual es la palabra más larga?'))
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');


function titleCase(str) {
    let wordsArray = str.split(' ');
    let titleArray = []
    wordsArray.map(word => {
        word = word.toLowerCase();
        titleArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    })
    return titleArray.join(' ');
}

console.log(titleCase('esta es MI frase, con la primer letra de cada palabra capitalizada.'))