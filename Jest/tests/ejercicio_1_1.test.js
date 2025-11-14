const { fizzBuzz } = require("../src/ejercicio_1_1");

// Divisibles son todos los números, se infiere que el ejercicio apunta a múltiplo de...
describe('Pruebas número divisible por 3 y/o 5', () => {
    test('es sólo divisible por 3', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    });
    test('es sólo divisible por 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
    test('es divisible por 3 y 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    test('no es divisible ni por 3 ni por 5', () => {
        expect(fizzBuzz(88)).toEqual(88);
    })
    test('input numérico de tipo cadena', () => {
        expect(fizzBuzz('18')).toBe('Fizz');
        expect(fizzBuzz('88')).toEqual('88');
    });
    test('input alfanumérico de tipo cadena', () => {
        expect(fizzBuzz('veinti2')).toBeFalsy();
    });
});