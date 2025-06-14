function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for (const num of nums)
    if (num < target)
      count++;

  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;