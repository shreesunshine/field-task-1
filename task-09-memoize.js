function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Returning cached result:");
            return cache.get(key);
        }

        console.log("Calculating result:");
        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
