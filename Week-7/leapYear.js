function isLeapYear(year) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY\
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
      return("Leap Year");
    }
    return("Not Leap year")
}
let year = 2024;
console.log(isLeapYear(year));

