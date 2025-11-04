// Se ignorará todo lo que no sea número.

function sumArgs(...rest) {
    let result = 0;
    rest.forEach(num => {
        if (typeof num === 'number') {
            result += num;
        }
    })
    return result;
}


console.log(sumArgs(1,3,5,6,9,7,2,3))