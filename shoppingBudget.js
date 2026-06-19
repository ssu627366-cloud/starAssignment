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
  return totalCost;
}
let getTotalCost = calculateShoppingInvoice(shoppingItems);
console.log(`The Total Cost : $ ${getTotalCost}`);

// 10% Discount
function discount(amount, percent) {
  return amount * (percent / 100);
}
let discountAmount = discount(totalCost, 10);
console.log(`The discount Amount :$ ${discountAmount}`);

totalCost -= discountAmount;
console.log(`The total cost after discount : $${totalCost}`);

// 7% Tax
let taxAmount = discount(totalCost, 7);
console.log(`Tax  amount : $${taxAmount}`);
totalCost += taxAmount;
console.log(`The final amount :${totalCost}`);
