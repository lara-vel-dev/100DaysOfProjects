let lenght = document.getElementById('length').value;
const passwordInput = document.getElementById('password');
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = upper.toLowerCase();
const number = '0123456789';
const symbol = '!@#$%^&*/<>';
const allChars = upper + lower + number + symbol;

function getLength() {
    lenght = document.getElementById('length').value;
}

function randomPassword() {

    let password = '';
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordInput.value = password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
}

