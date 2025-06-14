function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  for (const num of nums)
    if (num >= start && num <= end)
      count++;

  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;