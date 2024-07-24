class MathOperation {

    /**
     * 
     * @param {number} value1 
     * @param {number} value2 
     * @returns {number}
     */
    sum(value1, value2) {
        return value1 + value2
    }

    /**
     * 
     * @param {number} value1 
     * @param {number} value2 
     * @returns {number}
     */
    subtract(value1, value2) {
        return value1 - value2
    }

    /**
     * @param {number} value 
     * @param {number} valueToDivide 
     * @returns {number}
     */
    divideBy(value, valueToDivide) {
        return value / valueToDivide
    }

    /**
     * 
     * @param {number} n 
     * @returns {number}
     */
    fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

module.exports = MathOperation