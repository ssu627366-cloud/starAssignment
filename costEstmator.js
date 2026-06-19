let area = [
  { name: "living_room", sqft: 200, cost: 15 },
  { name: "Kitchen", sqft: 150, cost: 20 },
  { name: "Bathroom", sqft: 100, cost: 25 },
];
function cost(areaList) {
  let areaCost = 0;
  let totalArea = 0;
  for (let i = 0; i < areaList.length; i++) {
    areaCost = areaList[i].sqft * area[i].cost;
    console.log(` Cost for ${area[i].name} is $ ${areaCost} .`);
    totalArea += areaCost;
  }
  console.log(`Total Renovaation :$ ${totalArea}`);
  return areaCost;
}
cost(area);
