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


// EJERCICIO 02:

function startGuessing() {
    let result = '';
    for (let i = 0; i < 4; i++){
        result += Math.floor(Math.random() * 7);
    }
    
    return function guess(num: number) {
        const numStr = num.toString().padStart(4, '0');
        const numArr = numStr.split('');
        let guessedPos = ''
        let guessedNum = ''
        for (let i = 0; i < 4; i++){
            if (numArr[i] === result[i]) {
                guessedPos += 'X'
            } else if (result.includes(numArr[i]!)) {
                guessedNum += '-'
            }
        }
        return guessedPos + guessedNum
    }
}


const newGuess = startGuessing();
console.log(newGuess(7854))
