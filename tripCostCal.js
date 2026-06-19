let trip = { distance: 300, effcienty: 25, cost: 3.75 };
// function tripAmount(tripCost) {
//   let require = tripCost.distance / tripCost.effcienty;
//   let TripCost = require * tripCost.cost;
//   console.log(`Fuel needed : ${require} gallon`);
//   console.log(`The total cost of Trip : $${TripCost}`);
//   return;
// }
// tripAmount(trip);
function requireFuel(distance, effcienty) {
  return distance / effcienty;
}
function tripAmount(fuelNeed, cost) {
  return fuelNeed * cost;
}
let newRequire = requireFuel(trip.distance, trip.effcienty);
let newTripCost = tripAmount(newRequire, trip.cost);
console.log(`Fuel needed : ${newRequire} gallon`);
console.log(`The total cost of Trip : $${newTripCost}`);
