function palindrom(number) {
    let a = number;
    let b = 0;
    while (a > 0) {
        b = b * 10 + a % 10;
        a = Math.floor(a / 10);
    }
    if (b == number) {
        return ("palindrome");
    }
    return ("Not palindrome");
}
let number = 123421;
console.log(palindrom(number));

