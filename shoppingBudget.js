const shoppingItems = [
  { name: "Bread", price: 2.5 },
  { name: "Milk", price: 3.0 },
  { name: "Eggs", price: 2.0 },
  { name: "Cheese", price: 4.5 },
  { name: "Apples (1 kg)", price: 5.0 },
  { name: "Chicken (1 kg)", price: 8.0 },
  { name: "Rice (1 kg)", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];

function calculateShoppingInvoice(itemsList) {
  let totalCost = 0;
  for (let i = 0; i < itemsList.length; i++) {
    totalCost += itemsList[i].price;
  }
  console.log(`The Total Cost : $ ${totalCost.toFixed(2)}`);

  // 10% Discount
  const discountRate = 0.1;
  let discountAmount = totalCost * discountRate;
  let costAfterDiscount = totalCost - discountAmount;
  console.log(`The discount applied : $ ${discountAmount.toFixed(2)}`);

  // 7% Tax
  const taxRate = 0.07;
  let taxAmount = costAfterDiscount * taxRate;
  let finalCost = costAfterDiscount + taxAmount;
  console.log(`Tax amount : $ ${taxAmount.toFixed(2)}`);

  // Final Cost
  console.log(`The final amount : $ ${finalCost.toFixed(2)}`);

  return finalCost;
}
calculateShoppingInvoice(shoppingItems);

// // Total Cost
// let totalPrice = 0;
// for (let i = 0; i < product.length; i++) {
//   total_Price += product[i].price;
// }
// console.log(`The Total Cost : $ ${total_Price}`);
// // Discount
// let discount = 0.1;
// let cost = total_Price * discount;
// total_Price = total_Price - cost;
// console.log(`The discount applied : $ ${cost}`);
// // tax
// let tax = 0.07;
// let taxpayment = total_Price * tax;
// total_Price = total_Price + taxpayment;
// console.log(`Tax amount : $ ${taxpayment}`);
// // final amount
// console.log(`The final amount : $ ${total_Price}`);
