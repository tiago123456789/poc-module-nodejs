

class MathOperation {
    sum(value1, value2) {
        return value1 + value2
    }

    subtract(value1, value2) {
        return value1 - value2
    }

    fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

module.exports = {
    MathOperation
}