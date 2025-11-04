function camelize(str) {
    if (typeof str === 'string') {
        const wordsArray = str.split(' ');
        let camelWordsArray = [wordsArray[0].toLowerCase()]
        
        for (let i = 1; i < wordsArray.length; i++) {
            let word = wordsArray[i].toLowerCase();
            camelWordsArray.push(
                word.charAt(0).toUpperCase() + word.slice(1)
            )
        }

        return camelWordsArray.join('');
    }
    return 'Ingrese una frase.'
}

console.log(camelize('esta es MI frase en CAMEL case'));
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');