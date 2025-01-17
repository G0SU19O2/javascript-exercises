const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    const numInt = parseInt(num);
    if (isNaN(numInt)) {
        return "OOPS";
    }
    if (numInt === 0) {
        return 0;
    }
    if (numInt === 1 || numInt === 2) {
        return 1;
    }
    return fibonacci(numInt - 1) + fibonacci(numInt - 2);
};

// Do not edit below this line
module.exports = fibonacci;
