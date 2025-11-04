function sum(arr, n) {
    // Asegurarse que reciba una array con números y un número.
    // "Sumar" podría también concatenar strings...
    if (Array.isArray(arr) && typeof n === 'number') {
        let result = 0;
        for (let i = 0; i <= n - 1; i++){
            if (typeof arr[i] === 'number') {
              result += arr[i];  
            } else {
                return 'Ingrese sólo números en la lista.'
            }
        }
        return result;    
    }
    return 'Ingrese sólo números en la lista y un número para la cantidad de elementos a sumar.'
}

console.log(sum([1, 2, 3, 4, 5], 3))
