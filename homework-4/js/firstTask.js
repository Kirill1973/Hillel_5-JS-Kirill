function applyAll (func, ...rest) {
    return rest.reduce((acc, next) =>  acc = func(acc, next));
}

function sum (a, b) {
    return a + b;
}

function mul (a, b) {
    return a * b;
}
