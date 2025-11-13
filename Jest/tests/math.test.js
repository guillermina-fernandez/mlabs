const { sum, sub, mul, div } = require('../src//math');

describe('juego de operaciones aritméticas', () => {
    test('suma de números', () => {
        expect(sum(1, 1)).toBe(2);
    });
    test('resta de números', () => {
        expect(sub(1, 1)).toBe(0);
    });
    test('multiplicación de números', () => {
        expect(mul(1, 1)).toBe(1);
    });
    test('división de números', () => {
        expect(div(1, 1)).toBe(1);
    });
});