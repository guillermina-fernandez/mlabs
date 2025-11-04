function combineTwoArrays(arr1, arr2) {
    return Array.isArray(arr1) && Array.isArray(arr2) ?
        arr1.concat(arr2) :
        'Ingrese dos listas como argumentos.'
}

console.log(combineTwoArrays(['Array', 1], ['Array', 2]))