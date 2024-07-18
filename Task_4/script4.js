let userNumber = prompt('Введите число: ');
let hundreds = (userNumber - userNumber % 100) / 100
let units = userNumber % 10;
let tens = (userNumber % 100 - units) / 10;

console.log(`В числе ${userNumber} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);