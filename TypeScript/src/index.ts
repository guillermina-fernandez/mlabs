// EJERCICIO 2.1

function doStuff(value: any): void { // Acepta cualquier valor, no retorna nada. Value: any
    if (typeof value === 'string') { // Si el valor es string, ejecuta la siguiente línea.
        console.log(value.toUpperCase().split('').join(' ')); // value: string
    } else if (typeof value === 'number') { // Si el valor es number, ejecuta la siguiente línea.
        console.log(value.toPrecision(5)); // value: number
    }

    value; // No retorna nada. value: any
}

console.log('[Ejercicio 2.1]');
doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});


// EJERCICIO 2.2

function padLeft(value: string, padding: number | string): string {
    return typeof padding === 'number' ? `${Array(padding + 1).join(' ')}${value}` : padding + value;
}

console.log('[Ejercicio 2.2]',
    `${padLeft('a', 0)}
    ${padLeft('a', 'b')}
    ${padLeft('a', '')}
    ${padLeft('', '')}
    ${padLeft('', '')}`
);


// EJERCICIO 2.3

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]): number[] { // Acepta un array con números o arrays de números y retorna una array de números.
    const flattened = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // element: number[]
            flattened.push(...element);
        } else {
            element; // element: number
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 2.3]', flattenedNumbers);

const arrayT: any[] = []

function flattenGeneric<T>(array: (T | T[])[]): T[] { // Acepta un array con elementos de un mismo tipo o arrays de ese mismo tipo y retorna un array con elementos de ese mismo tipo.
    const flattened = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element; // element: T[]
            flattened.push(...element);
        } else {
            element; // element: T
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedT = flattenGeneric(arrayT);

console.log('[Ejercicio 2.3.1]', flattenedT);


// EJERCICIO 2.4

interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

interface BirdLike extends EggLayer, Flyer { };

interface FishLike extends EggLayer, Swimmer { };

type Animal = Bird | Fish;

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals: Animal[] = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];

    const randomIndex = Math.floor(Math.random() * animals.length)
    return animals[randomIndex]!;
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if (animal instanceof Fish) {
        animal.swim(10) // se llama solo si es un pez    
    }
    if (animal instanceof Bird) {
        animal.fly(10); // se llama solo si es un pajaro   
    }

    return animal.species;
}

console.log('[Ejercicio 2.4]',
    `Tenemos un ${interrogateAnimal()} en nuestras manos!`);


// EJERCICIO 3.1

function add(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

const numArr = [3, 6, 6]
const someSum = sumArray(numArr);
const strArr = numArr.join(' + ')
console.log('[Ejercicio 3.1]', `${strArr} === ${someSum}`);


// EJERCICIO 3.2

const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};

bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received')

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);


// EJERCICIO 3.3

function computeScore(word: string) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter: string) {
    const lettersAndPoints: [string, number][] = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore, pointsTuple) => {
        const [letters, score] = pointsTuple;
        if (letters.split('').find((ll) => ll === letter)) {
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}

const word = 'zoologico'

console.log('[Ejercicio 3.3]', `${word} vale ${computeScore(word)} puntos.`);


// EJERCICIO 3.4

function greet(greeting?: string): string {
    return greeting ? greeting.toUpperCase() : 'hola';
}

const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);


// EJERCICIO 3.5

function layEggs(quantity?: number, color?: string): void {
    quantity && color ?
        console.log(
            `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`
        ) :
        console.log('[Ejercicio 3.5] Ingresar una cantidad y color de huevos.');
}

layEggs();


// EJERCICIO 3.6

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function (x: number, y: number): number {
    return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));


// EJERCICIO 3.7

const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item: T, collection: T[]): T[]{
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
//pushToCollection(false, stringCollection);
pushToCollection('false', stringCollection);
pushToCollection('hi', stringCollection);
// pushToCollection([], stringCollection);
pushToCollection('[]', stringCollection);
//pushToCollection('1', numberCollection);
//pushToCollection('2', numberCollection);
//pushToCollection('3', numberCollection);
pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);