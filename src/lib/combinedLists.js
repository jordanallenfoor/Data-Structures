function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  const ll1 = firstMonthTotals.asArray();
  const ll2 = secondMonthTotals.asArray();
  const CityObj = [...ll1, ...ll2].reduce((acc, cur) => {
    if (!acc[cur.city]) {
      acc[cur.city] = cur.rainfall;
    }
    acc[cur.city] += cur.rainfall;
    return acc;
  }, {});
  console.log(CityObj);
}

module.exports = combineMonthlyRainfallTotals;
