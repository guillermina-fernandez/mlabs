function game(myNum) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (typeof myNum !== 'number' && myNum < 1) return 'Ingrese un número válido.'
    if (myNum < randomNum) {
        return 'El número es mayor';
    } else if (myNum > randomNum) {
        return 'El número es menor';
    }
    return 'Acertaste. Fin del juego.'
}

console.log(game(7));


function difficultGame() {
    let randomNum = Math.floor(Math.random() * 10) + 1;

    return function game(myNum) {
        if (typeof myNum !== 'number' && myNum < 1) return 'Ingrese un número válido.'
        if (myNum === randomNum) return 'Acertaste. Fin del juego.'
        if (myNum < randomNum) {
            randomNum += 1;
            return 'El número es mayor';
        } else if (myNum > randomNum) {
            randomNum += 1;
            return 'El número es menor';
        }
    }
}

const newGame = difficultGame();
console.log(newGame(7))
console.log(newGame(4))