function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (/password/i.test(password)) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    return true;
}
var a=isStrongPassword("avina12p")
console.log(a)