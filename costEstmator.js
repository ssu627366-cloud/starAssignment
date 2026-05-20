let area = [
  { name: "living_room", sqft: 200, cost: 15 },
  { name: "Kitchen", sqft: 150, cost: 20 },
  { name: "Bathroom", sqft: 100, cost: 25 },
];
let area_cost = 0;
let total_area = 0;
for (let i = 0; i < area.length; i++) {
  area_cost = area[i].sqft * area[i].cost;
  console.log(` Cost for ${area[i].name} is $ ${area_cost} .`);
  total_area += area_cost;
}
console.log(`Total Renovaation :$ `${total_area}`);
