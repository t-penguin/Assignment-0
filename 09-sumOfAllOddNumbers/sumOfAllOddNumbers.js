function sumOfAllOddNumbers(nums) {
  let count = 0;
  for (const num of nums)
    if (num % 2 != 0)
      count++;

  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;