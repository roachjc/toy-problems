const meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },

  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

function mergeRanges(dates) {
  const datesCopy = JSON.parse(JSON.stringify(dates));
  datesCopy.sort((a, b) => a.startTime - b.startTime);

  const result = [dates[0]];

  for (let i = 1; i < datesCopy.length; i += 1) {
    const current = datesCopy[i];
    const prev = result[result.length - 1];

    // if start is greater than result endTime then push
    if (current.startTime > prev.endTime) {
      result.push(current);
    } else {
      prev.endTime = Math.max(prev.endTime, current.endTime);
    }
  }
  return result;
}

console.log(mergeRanges(meetings));
