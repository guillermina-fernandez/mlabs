// Suponemos que los args son números separados por coma.

function sumArgs(num, ...rest) {
    let result = num;
    rest.forEach(adicional => {
        result += adicional;
    })
    return result;
}


console.log(sumArgs(1,3,5,6,9,7,2,3))