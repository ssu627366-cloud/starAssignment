let list = [
  { name: "Burger", price: 8.5 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];
// total bill
let total_Price = 0;
for (let i = 0; i < list.length; i++) {
  total_Price += list[i].price;
}
console.log(`The total bill : $${total_Price}`);
// service Charge
let service = 0.1;
let serviceCharge = total_Price * service;
total_Price = total_Price + serviceCharge;
console.log(`Service Charge : $ ${serviceCharge}`);
// tax
let tax = 0.07;
let taxpayment = total_Price * tax;
total_Price = total_Price + taxpayment;
console.log(`Tax amount : $ ${taxpayment}`);
// split Bill
let number_of_people = 2;
let split = total_Price / number_of_people;
console.log(`The amount of each person : $ ${split}`);
