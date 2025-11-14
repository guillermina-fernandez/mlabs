const { checkYear } = require("../src/ejercicio_1_2");

describe('Chequear si el año es bisiesto', () => {
    test('bisiesto', () => {
        expect(checkYear(2000)).toBeTruthy;
        expect(checkYear(2024)).toBeTruthy;
    });
    test('no bisiesto', () => {
        expect(checkYear(2400)).toBeFalsy;
        expect(checkYear(2100)).toBeFalsy;
        expect(checkYear(2021)).toBeFalsy;
    });
    test('error de input (alfanumérico)', () => {
        expect(checkYear('dosmil100')).toMatch('Error');
    });
    test('error de input string numérico no entero', () => {
        expect(checkYear('2000.1')).toMatch('Error');
    });
    test('error de input (no entero)', () => {
        expect(checkYear(200.1)).toMatch('Error');
    });
})

