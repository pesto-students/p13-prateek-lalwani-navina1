
function divideArray() {
    let evenNums = [];
    let oddNums = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            if (a[i] != 0) {
                evenNums.push(a[i]);
            }
        } else {
            oddNums.push(a[i]);
        }
    }
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
    console.log("Even number Array: ", evenNums.length > 0 ? evenNums : "None");
    console.log("Odd number array: ", oddNums.length > 0 ? oddNums : "None");
}
//var a=[2,1,9,8,12,2,3];
//var a=[3,11,9,1];
var a = [16, 2, 4, 68,0];
divideArray(a)
