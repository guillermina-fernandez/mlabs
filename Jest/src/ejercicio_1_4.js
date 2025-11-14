function sumArray(newArray) {
    if (!Array.isArray(newArray)) return 'Error. Ingrese un arreglo.';
    let sum = 0
    for (let item of newArray) {
        const num = Number(item);
        if (num && num >= 0) {
            sum += num;
        }
    }
    return sum;
};


module.exports = { sumArray };
