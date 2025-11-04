function sum(arr, n) {
    if (Array.isArray(arr) && typeof n === 'number' && Number.isInteger(n)) {
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
    return 'Ingrese sólo números en la lista y un número entero para la cantidad de elementos a sumar.'
}

console.log(sum([1, 2, 3, 4, 5], 3))
