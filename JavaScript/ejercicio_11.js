function onlyUniques(...rest) {
    let result = [];
    rest.forEach(arg => {
        !result.includes(arg) && result.push(arg);
    })
    return result;
}

console.log(onlyUniques(1, 2, 3, 1, 'A', 'B', 'B'))