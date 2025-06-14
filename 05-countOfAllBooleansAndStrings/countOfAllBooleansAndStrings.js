function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for (const element of arr)
    if (typeof element == "boolean" || typeof element == "string")
        count++;

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;