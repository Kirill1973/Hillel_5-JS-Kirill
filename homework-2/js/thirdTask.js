"use strict"

function isPrime (n) {
    let i = 2;
    if (n >= 2) {
        while(i <= n) {
            if (i === n) {
                return true;
            }
            if (n % i === 0) {
                return false;
                break;
            }
            i += 1;
        }
    } else {
        return false;
    }
}

function isEven (n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

function isEvenTen (n) {
    if (n % 10 === 0) {
        return true;
    }
    return false;
}

function checkNumber (n) {
    let arrResult = [isPrime(n), isEven(n), isEvenTen(n)];
    return arrResult;
}

console.log(checkNumber(1));
