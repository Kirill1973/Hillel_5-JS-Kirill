function getSumInColumn (...rest) {
    let arr = rest.map(item => item.split('').map(item => +item));
    let currentValue = 0;
    let result = "";
    let max = Math.max(arr[0].length, arr[1].length);
    for(let i = 0; i < max; i += 1) {
        arr[0][arr[0].length - 1] = arr[0][arr[0].length - 1] || 0;
        arr[1][arr[1].length - 1] = arr[1][arr[1].length - 1] || 0;
        currentValue += arr[0][arr[0].length - 1] + arr[1][arr[1].length - 1]; 
        if (currentValue > 9) {
            result += currentValue - 10; 
            currentValue = 1;
        } else {
            result += currentValue;
            currentValue = 0;
        }
        if (currentValue === 1 && i === max - 1) {
            result += 1;
        }
        arr[0].pop();
        arr[1].pop();
    }
    return result;
}

console.log(getSumInColumn('999', '1'));
