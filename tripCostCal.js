let trip = { distance: 300, effcienty: 25, cost: 3.75 };

let require = trip.distance / trip.effcienty;
let Trip_cost = require * trip.cost;
console.log(`Fuel needed : ${require} gallon`);
console.log(`The total cost of Trip : $${Trip_cost}`);
