let day = Math.ceil(Math.random() * 31 + 1);

if (day >= 1 && day <= 10) {
   console.log(`Число ${day} попадает в первую декаду месяца.`);
} else if (day > 10 && day <= 20) {
   console.log(`Число ${day} попадает во вторую декаду месяца.`);
} else if (day > 20 && day <= 31) {
   console.log(`Число ${day} попадает в третью декаду месяца.`);
}