
function reverseString(myString) {
    return myString.split('').reverse().join('');
}

//https://ui.dev/validate-email-address-javascript
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//https://stackoverflow.com/questions/26322867/how-to-validate-password-using-following-conditions
function validatePassword(myPassword) {
    return /[A-Z]/       .test(myPassword) &&
           /[a-z]/       .test(myPassword) &&
           /[0-9]/       .test(myPassword) &&
           /[^A-Za-z0-9]/.test(myPassword) &&
           myPassword.length > 8;
}

console.log(reverseString("woa"))

console.log(validateEmail("c.augustiny@gmail.com"))
console.log(validateEmail("c.augustiny@gmail@gmail2.com"))

console.log(validatePassword("This1sAPassword!"))
console.log(validatePassword("höh"))