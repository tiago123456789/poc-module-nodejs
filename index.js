const sum = (value1, value2) => {
    return value1 + value2
}

const subtract = (value1, value2) => {
    return value1 - value2
}



function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    sum,
    subtract,
    fibonacci
}