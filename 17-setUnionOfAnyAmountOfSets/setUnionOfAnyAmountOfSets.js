function setUnionOfAnyAmountOfSets(...args) {
  const result = new Set();
  for (const set of args)
    for (const val of set)
      result.add(val);

  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;