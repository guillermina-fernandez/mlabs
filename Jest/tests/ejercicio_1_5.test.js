const { findChar } = require('../src/ejercicio_1_5');

describe('encontrar primer caracter repetido consecutivamente en una cadena', () => {
    test('error de input (no es cadena)', () => {
        expect(findChar(123)).toMatch('Error');
    });
    test('no hay caracteres repetidos consecutivamente', () => {
        expect(findChar('abcd123ABC')).toEqual(-1);
    })
    test('índice del primer caracter que se repite consecutivamente', () => {
        expect(findChar('abcCddEEfg')).toEqual(2);
    })
})

