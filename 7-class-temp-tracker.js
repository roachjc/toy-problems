// Write a class TempTracker with these methods:
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far

/**
 * We use an 'ahead-of-time' approach that has the setter do all the work
 * The getter methods can then access everything in O(1)
 */
class TempGuarantee {
  constructor() {
    this.minTemp = null;
    this.maxTemp = null;
    this.sumTemps = 0;
    this.qtyTemps = 0;
    this.tempCounts = {};
    this.mode = null;
    this.maxFrequency = 0;
  }

  insert(temp) {
    if (this.maxTemp === null || temp > this.maxTemp) this.maxTemp = temp;
    if (this.minTemp === null || temp < this.minTemp) this.minTemp = temp;
    this.sumTemps += temp;
    this.qtyTemps += 1;

    // create counter for number of times temps are inserted
    if (!this.tempCounts[temp]) {
      this.tempCounts[temp] = 1;
    } else {
      this.tempCounts[temp] += 1;
    }

    // if there's no mode or if the new count is greatest then reset the mode to a new set
    if (!this.mode || this.maxFrequency < this.tempCounts[temp]) {
      this.mode = new Set([temp]);
      this.maxFrequency = this.tempCounts[temp];
    }

    // if new temp appears same number of times as max Frequency, add to set
    if (this.tempCounts[temp] === this.maxFrequency) this.mode.add(temp);
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.sumTemps / this.qtyTemps;
  }

}

const myTempRecord = new TempGuarantee();

myTempRecord.insert(1);
myTempRecord.insert(3);
myTempRecord.insert(6);
myTempRecord.insert(3);
myTempRecord.insert(1);
myTempRecord.insert(3);
myTempRecord.insert(1);
// myTempRecord.insert(1);

console.log(myTempRecord);

