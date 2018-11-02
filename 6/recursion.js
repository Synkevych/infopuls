// recursion
function factorial(N) {
    return N <= 1 ? 1 : N * factorial(N - 1);
}
console.log(factorial(10));

function getSum(N) {
    return N <= 1 ? 1 : N + getSum(--N);
}
console.log(getSum(100));