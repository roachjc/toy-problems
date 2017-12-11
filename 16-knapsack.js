const diamonds = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const bagSize = 20;

/**
 * Classic dynamic programming problem.
 * Given a list of items with weights and values, and a total weight we can carry
 * What combination of items would allow us to carry the maximum total value?
 * @param {array} items - List of item objects with weight and value properties
 * @param {number} weightCapacity - Total weight available
 * @returns {number}
 */
function maxVal(items, weightCapacity) {
  // Array to store the maxValue at every capacity up to the given weightCapacity
  // The index represents the weight and the value is maxval for that weight
  // So the last index will be the max weight for the given weightCapacity
  const maxValsAtCapacities = new Array(weightCapacity).fill(0);

  // We iterate from capacity of 0 to target capacity and calculate max valye for every capacity in order
  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity += 1) {
    // This represents running max value for currentCapacity
    let currentMaxValue = 0;
    // for each capacity we are identifying whether or not we should add an item.
    // So we iterate through every item for every capacity
    items.forEach((item) => {
      // If the weight is more than the capacity then we can never take it.
      if (item.weight <= currentCapacity) {
        // if we were to use the item, then the max value we would be able to achieve would always be
        // the value of the item plus the maximum value available at the total weight minus the item's weight
        const maxValueUsingItem = item.value + maxValsAtCapacities[currentCapacity - item.weight];
        // Then we just decide if this should replace the currentMaxValue for this index / capacity
        currentMaxValue = Math.max(currentMaxValue, maxValueUsingItem);
      }
    });
    // Once we have iterated over all items,
    // we assign whatever the currentMaxVal to the current index / capacity
    maxValsAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValsAtCapacities.pop();
}


console.log(maxVal(diamonds, bagSize));
