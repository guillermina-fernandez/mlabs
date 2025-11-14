const { convertString } = require('../src/ejercicio_1_3');

describe('cadena canónica', () => {
    test('cadena', () => {
        expect(convertString('CcCTttAaGgRrR123')).toBe('CCTAG');
    });
    test('cadena vacía', () => {
        expect(convertString('abcdefg123')).toBe('');
        expect(convertString('')).toBe('');
    });
    test('error de input (numérico)', () => {
        expect(convertString(123)).toMatch('Error');
    });
})

