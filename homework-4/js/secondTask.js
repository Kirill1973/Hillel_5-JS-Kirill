function getFibonacci (n) {
    let currentValue = 0;
    let num1 = 1;
    let num2 = 1;
    for(let i = 3; i <= n; i += 1) {
        currentValue = num1 + num2;
        num1 = num2;
        num2 = currentValue;
    }
    return num2;
}

console.log(getFibonacci(7));