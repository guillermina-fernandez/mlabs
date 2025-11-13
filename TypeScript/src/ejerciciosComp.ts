// EJERCICIO 1:

function myFunction(piedra: string, piedraTipo: string): number {
    let areJewel = 0;
    for (const letter of piedra) {
        const count = piedraTipo.split(letter).length - 1
        if (count > 0) {
            areJewel += count;
        }
    }
    return areJewel;
};

console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);


// EJERCICIO 2:

function startGuessing() {
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += Math.floor(Math.random() * 7);
    }

    return function guess(numStr: string) { // No puedo adivinar números que empiecen con 0. Paso el input a string.
        //const numStr = num.toString().padStart(4, '0');
        const numArr = numStr.split('');
        let guessedPos = ''
        let guessedNum = ''
        for (let i = 0; i < 4; i++) {
            if (numArr[i] === result[i]) {
                guessedPos += 'X'
                continue
            } else if (result.includes(numArr[i]!)) {
                guessedNum += '-'
            }
        }
        return guessedPos + guessedNum
    }
}


const newGuess = startGuessing();
console.log(`[Ejercicio 2] ${newGuess('7854')}`);


// JUEGO DE CARTAS

function startGame() {
    enum suits { comodin, basto, copa, espada, oro}
    enum letters { sota = 10, reina = 11, rey = 12, as = 13 }

    
    function drawCard() {
        const suit = Math.floor(Math.random() * 5);
        const num = suit === suits.comodin ? 0 : Math.floor(Math.random() * 12) + 2;
        return { suit, num };
    }

    let card1 = drawCard();
    let card2 = drawCard();

     while (card1.suit === card2.suit && card1.num === card2.num && card1.suit !== suits.comodin) {
        card2 = drawCard();
    }

    const card1result = `${letters[card1.num] || card1.num} de ${suits[card1.suit]}`;
    const card2result = `${letters[card2.num] || card2.num} de ${suits[card2.suit]}`;

    if (card1.suit === 0 && card2.suit === 0) return 'Empate de comodines.';
    if (card1.suit === 0) return `Ganó el jugador 2 con la carta ${card2result}. El jugador 1 sacó un comodín.`;
    if (card2.suit === 0) return `Ganó el jugador 1 con la carta ${card1result}. El jugador 2 sacó un comodín.`;       
    
    if (card1.num === card2.num) return `Empate!. El jugador 1 sacó ${card1result} y el jugador 2 ${card2result}.`;
    if (card1.num > card2.num) return `Ganó el jugador 1 con la carta: ${card1result}. El jugador 2 sacó ${card2result}.`;
    if (card1.num < card2.num) return `Ganó el jugador 2 con la carta: ${card2result}. El jugador 1 sacó ${card1result}.`;
}

console.log(`[Juego de cartas] ${startGame()}`)

