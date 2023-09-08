function fibnocci(num) {
    let memo = {};
    function f(num) {
        if (num in memo) {
            return memo[num];
        } else if (num == 1) {
            return 0;
        } else if (num == 2 || num == 3) {
            return 1;
        }else{
            let a = f(num - 1) + f(num - 2);
            memo[num] = a;
            return a;
        }
    }
    return f(num);
}
console.log(fibnocci(6));