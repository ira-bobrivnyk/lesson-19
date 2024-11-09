const password = prompt ("Введіть пароль");
const hasDigits = password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9");
const hasSpecialChars = password.includes("!") || password.includes("@") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*");

let message;

if (!password) {
    message = "Введіть пароль";
} else if (password.length > 12 && hasDigits && hasSpecialChars) {
    message = "У вас дуже надійний пароль 💪"
} else if (password.length >= 8 && hasDigits && hasSpecialChars) {
    message = "У вас достатньо сильний пароль. 👊"
} else if (password.length > 6 && hasDigits) {
    message = "Ваш пароль є середнім ✊"
} else if (password.length > 6) {
    message = "У вас слабкий пароль 🙏"
}

console.log(message)












