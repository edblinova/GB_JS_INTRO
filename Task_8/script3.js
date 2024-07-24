let myArray = [];
let numberGenerator = () => Math.floor(Math.random() * 9) + 1;

for (let i = 0; i < 5; i++) {
   myArray[i] = numberGenerator();
}

console.log(myArray);

let sum = 0;
myArray.forEach(x => sum += x);
console.log(sum);

let minNumber = Math.min(...myArray);
console.log(minNumber);

const searchNumber = 3;
const isExist = myArray.includes(searchNumber);
console.log((isExist) ? `Число ${searchNumber} в заданном массиве присутствует` : `Число ${searchNumber} в заданном массиве отсутствует`);