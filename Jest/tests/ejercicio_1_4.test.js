const { sumArray } = require('../src/ejercicio_1_4');

describe('suma de números positivos de un arreglo', () => {
    test('error de input (no es un arreglo', () => {
        expect(sumArray('[1, 2, -3, "a"]')).toMatch('Error');
    })
    test('arreglo', () => {
        expect(sumArray(['1', -1, , 2, '-2', 3, 'A', 'b'])).toEqual(6);
    })
    test('arreglo vacío', () => {
        expect(sumArray([])).toEqual(0);
    })
})