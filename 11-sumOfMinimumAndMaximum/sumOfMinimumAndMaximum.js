function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    if (num < min)
      min = num;
    else if (num > max)
      max = num;
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;