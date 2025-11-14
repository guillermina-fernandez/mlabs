const { findMaxOnes } = require('../src/ejercicio_1_6');

describe('encontrar máximo de 1s consecutivos en una matriz', () => {
    const testCase01 = [
        [1, 0, 1],
        ['1', 'A', 2]
    ]
    const testCase02 = [
        [1, 0, 1],
        ['1', '1', 0],
        [0, 0, 0, 1, 1]
    ]
    const testCase03 = [
        [1, 0, 1],
        ['0', '1', 0],
        [0, 0, 0, 1, 0]
    ]
    
    test('matriz inválida', () => {
        expect(findMaxOnes(testCase01)).toEqual(-1);
    });
    test('matriz válida, máximos 1s consecutivos', () => {
        expect(findMaxOnes([testCase02])).toEqual(3);
    });
    test('matriz válida, no hay 1s consecutivos', () => {
        expect(findMaxOnes(testCase03)).toEqual(1);
    });
})