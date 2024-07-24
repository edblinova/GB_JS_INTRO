let number1 = Number(prompt('Введите число 1'));
while (isNaN(number1)) {
   number1 = Number(prompt('Введите число 1'));
}

let number2 = Number(prompt('Введите число 2'));
while (isNaN(number2)) {
   number2 = Number(prompt('Введите число 2'));
}

let number3 = Number(prompt('Введите число 3'));
while (isNaN(number3)) {
   number3 = Number(prompt('Введите число 3'));
}

let maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(maxNumber(number1, number2, number3));