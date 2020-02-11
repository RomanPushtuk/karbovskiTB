/* Самый простой декоратор */
function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5)); // 10

function logParams(fn) {
    return function (...params) {
        console.log("Параметры - " + [...params]);
        return fn(...params)
    }
}

const logSum = logParams(sum)

logSum(10, 20); // Параметры - 10, 20
// 30

/* Самый простой декоратор */
