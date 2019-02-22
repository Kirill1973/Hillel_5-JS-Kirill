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

