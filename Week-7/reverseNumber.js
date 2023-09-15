function reverseNumber(number) {
    let a = number;
    let b = 0;
    while (a > 0) {
        b = b * 10 + a % 10;
        a = Math.floor(a / 10);
    }
    return b
}
let number = 5678;
console.log(reverseNumber(number));

