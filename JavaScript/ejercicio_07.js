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
        return count;
    } else if (addCero.includes(card)) {
        return count;
    } else if (restOne.includes(card)) {
        count -= 1;
        return count;
    }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

console.log(count)