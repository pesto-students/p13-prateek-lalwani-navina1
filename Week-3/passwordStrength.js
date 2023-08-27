function isStrongPassword(password) {
    if (password.length < 8) {
        let message="password length is less than 8 digits";
        return message;
    }
    if (/password/i.test(password)) {
        let message="password includes the word 'password'";
        return message;
    }
    if (!/[A-Z]/.test(password)) {
        let message="password should contain atleast one capital letter";
        return message;
    }
    return "password saved successfully";
}
var a=isStrongPassword("Navi")
console.log(a)