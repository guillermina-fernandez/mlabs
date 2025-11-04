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
            if (unidades && precio) {
                total += (prod.precio * prod.unidades);   
            } else {
                return 'Ingresar unidades y precio para el producto: ' + prod.nombre
            }
        })
        return total;
    }
}

console.log(carrito.precioTotal);