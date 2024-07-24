let tax = salary => salary - (salary * 13 / 100);
let userNumber = Number(prompt('Введите вашу зароботную плату'));
console.log(isNaN(userNumber) ? 'Значение задано не верно' : `Размер заработной платы за вычетом налогов равен ${tax(userNumber)}`);