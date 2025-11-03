const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal() {
        let total = 0
        this.productos.forEach(prod => {
            total += (prod.precio * prod.unidades);
        })
        return total;
    }
}

console.log(carrito.precioTotal);