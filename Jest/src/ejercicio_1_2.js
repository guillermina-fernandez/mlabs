function checkYear(year) {
    if (isNaN(Number(year)) || !Number.isInteger(Number(year))) return 'Error. El número ingresado debe ser un entero.';
    if (year % 4 === 0) {
        // bisiesto
        if (year % 100 === 0) {
            // no bisiesto
            if (year % 400 === 0) return true; // bisiesto
            return false; // no bisiesto
        }
        return true; // bisiesto
    };
    return false; // no bisiesto
};

module.exports = { checkYear };
