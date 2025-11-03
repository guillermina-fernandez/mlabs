function sum(arr, n) {
    // Asegurarse que reciba una array con números y un número.
    // "Sumar" podría también concatenar strings...
    let result = 0;
    for (let i = 0; i <= n - 1; i++){
        result += arr[i];
    }
    return result;
}

console.log(sum([1, 2, 3, 4, 5], 3))
