const products = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price: 1000,
   },
];

products.forEach(element => {
   element.price = element.price * (1-0.15);
});

console.log(products);