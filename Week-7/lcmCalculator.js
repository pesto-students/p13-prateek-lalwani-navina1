function calculateHCF(a, b) {
    if (b == 0) {
        return a;
    }
    return calculateHCF(b, a % b);
}
function calculateLCM(a, b) {
    return (a * b) / calculateHCF(a, b);
}
let a = 10;
let b = 12;
console.log(calculateHCF(a, b));
console.log(calculateLCM(a, b));