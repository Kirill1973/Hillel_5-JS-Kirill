"use strict"

function getREsultAboutRassword (str) {
    let arrResult = [];
    if (str.length > 5 && str.length < 21) {
        for(let i = 0; i < str.length; i += 1) {
            if ((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)) {
			arrResult.push(str[i]);
            } else {
                return 'invalid'
            }
        }
    }
    let isNumber = arrResult.some(item => (item.charCodeAt() > 47 && item.charCodeAt() < 58));
    let isCharLowerCase = arrResult.some(item => (item.charCodeAt() > 96 && item.charCodeAt() < 123))
    if(isNumber === true && isCharLowerCase === true) {
        return 'valid';
    } else {
        return 'invalid'
    }
}

function getResult () {
    let password = prompt('enter password', '');
    if (getREsultAboutRassword(password) === 'valid') {
        let number = +prompt('enter number', '');
        let arrFunc = [isPrime(number), isEven(number), isEvenTen(number)];
        let value = arrFunc.some(item => {
            return item === true;
        }) 
        if (value === true) {
            let a = +prompt('enter number for sum', '');
            let b = +prompt('enter number for sum', '');
            alert(a + b);
        } else {
            return alert('sorry, this value is not a number or not valid value');
        }
    } else {
        return alert('invalid');
    }
}

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

getResult();

