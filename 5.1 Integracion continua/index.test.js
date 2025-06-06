const cadenaInversa = require('./index');
test('Invierte una cadena "hola" a "aloh"', () => {
    expect(cadenaInversa('hola')).toBe('aloh');
});
test('Invierte una cadena vacía a una cadena vacía', () => {
    expect(cadenaInversa('')).toBe('');
});
test('Invierte una cadena con espacios "abc def" a "fed cba"', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});