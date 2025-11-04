// Se ignorará todo lo que no sea número.

function addOnlyNums(...rest) {
    let result = 0
    rest.forEach(arg => {
        if (typeof arg === 'number') {
            result += arg;   
        }
    })
    return result;
}

console.log(addOnlyNums(1,3,2,5,'esto es', 1, 'prueba'))