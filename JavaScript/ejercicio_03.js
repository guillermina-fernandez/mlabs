function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
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

console.log(calcularDiasCrecimiento(7, 2, 8))