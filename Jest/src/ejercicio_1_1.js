function fizzBuzz(num) {
    if (isNaN(Number(num))) return false;
    
    let div3 = num % 3;
    let div5 = num % 5;

    if (div3 === 0 && div5 === 0) return 'FizzBuzz';
    if (div3 === 0) return 'Fizz';
    if (div5 === 0) return 'Buzz';
    return num;
};

module.exports = { fizzBuzz };