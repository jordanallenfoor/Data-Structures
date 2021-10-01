function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  const ll1 = firstMonthTotals.asArray();
  const ll2 = secondMonthTotals.asArray();
  const array = [...ll1, ...ll2];

  const obj = {};

  array.forEach(({ city, rainfall }) => {
    if (obj[city]) {
      obj[city] += rainfall;
    } else {
      obj[city] = rainfall;
    }
  });

  let result = Object.entries(obj).map(([city, rainfall]) => {
    return { city, rainfall };
  });

  console.log(result);
}
module.exports = combineMonthlyRainfallTotals;
