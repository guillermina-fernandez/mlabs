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