function palabraMasLarga(str) {
    const wordsArray = str.split(' ');
    let longestWord = wordsArray[0];
    for (let i = 1; i < wordsArray.length - 1; i++){
        console.log(wordsArray[i].length)
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    return longestWord;
}

console.log(palabraMasLarga('esta es mi frase, cual es la palabra más larga?'))