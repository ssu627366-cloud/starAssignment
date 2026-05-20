let product = [
  { name: "Bread", price: 2.5 },
  { name: "Milk", price: 3.0 },
  { name: "Eggs", price: 2.0 },
  { name: "Chesse", price: 4.5 },
  { name: "Apples", price: 5.0 },
  { name: "Chicken", price: 8.0 },
  { name: "Rice", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];
// Total Cost
let total_Price = 0;
for (let i = 0; i < product.length; i++) {
  total_Price += product[i].price;
}
console.log(`The Total Cost :  ${total_Price}`);
// Discount
let discount = 0.1;
let cost = total_Price * discount;
total_Price = total_Price - cost;
console.log(`The discount applied : ${cost}`);
// tax
let tax = 0.07;
let taxpayment = total_Price * tax;
total_Price = total_Price + taxpayment;
console.log(`Tax amount : ${taxpayment}`);
// final amount
console.log(`The final amount : ${total_Price}`);
