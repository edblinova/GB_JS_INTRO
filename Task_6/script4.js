let addition = (num1, num2) => num1 + num2;
let difference = (num1, num2) => {
   if (num1 === num2) return 0;
   return (num1 > num2) ? num1 - num2 : num2 - num1;
}
let multiplication = (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;

console.log('2+6='+addition(2, 6));
console.log('mod(2-6)='+difference(2, 6));
console.log('mod(6-2)='+difference(6, 2));
console.log('mod(2-2)='+difference(2, 2));
console.log('2*6='+multiplication(2, 6));
console.log('2/6='+division(2, 6));
console.log('6/2='+division(6, 2));