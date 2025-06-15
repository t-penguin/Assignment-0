function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  for (const num of args)
    product *= num;

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;