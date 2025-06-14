function countOfAllBooleans(arr) {
  let count = 0;
  for (const element of arr)
    if (typeof element == "boolean")
        count++;

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;