let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric =  "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generate = '';
    for (let index = 0; index < len; index++) {
        generate += data[~~(Math.random() * data.length)];
    }
    return generate
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value =  newPassword
    setTimeout(() => {
        alert('password has been generated!')
    }, 2000)
}

function savePassword() {
    document.title = password.value
    setTimeout(() => {
        alert('berhasil disimpan')
    }, 2000)
}