let trip = { distance: 300, effcienty: 25, cost: 3.75 };
function tripAmount(tripCost) {
  let require = tripCost.distance / tripCost.effcienty;
  let TripCost = require * tripCost.cost;
  console.log(`Fuel needed : ${require} gallon`);
  console.log(`The total cost of Trip : $${TripCost}`);
  return TripCost;
}
tripAmount(trip);
