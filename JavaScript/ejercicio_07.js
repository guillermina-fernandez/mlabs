let addOne = [2, 3, 4, 5, 6]
let addCero = [7, 8, 9]
let restOne = [10, 'J', 'Q', 'K', 'A']
let count = 0

function formatCard(card) {
    return typeof card === 'number' ? card : card.toUpperCase();
}

function cc(card) {
    card = formatCard(card);
    if (addOne.includes(card)) {
        count += 1;
        return;
    } else if (addCero.includes(card)) {
        return;
    } else if (restOne.includes(card)) {
        count -= 1;
        return;
    }
    card === 1 ? console.log('Ingrese el As como "A".') : console.log('Ingrese un valor de carta válido.');
    console.log('El siguiente resultado no es correcto:')
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

console.log(count)