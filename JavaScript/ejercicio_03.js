function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    if (typeof velocidadCrecimiento === typeof velocidadDecrecimiento === typeof alturaDeseada === 'number' &&
        velocidadCrecimiento < 0 && velocidadDecrecimiento < 0 && alturaDeseada < 0) {
        let dias = 0
        let altura = 0
        while (altura < alturaDeseada) {
            dias += 1
            altura += velocidadCrecimiento
            if (altura >= alturaDeseada) break;
            altura -= velocidadDecrecimiento
            if (altura < 0) {
                altura = 0;
            }
        }
        return dias;
    }
    return 'Ingrese un número para velocidadCrecimiento, un número para velocidadDecrecimiento y un número para alturaDeseada, todos mayores que cero.'
}

console.log(calcularDiasCrecimiento(7, 2, 8))