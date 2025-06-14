function fizzBuzz(start, end) {
  let output = [];
  for (let i = start; i <= end; i++) {
    let divBy3 = i % 3 == 0;
    let divBy5 = i % 5 == 0;

    if (divBy3 && divBy5)
      output.push("FizzBuzz");
    else if (divBy3)
      output.push("Fizz");
    else if (divBy5)
      output.push("Buzz");
    else
      output.push(i);
  }
  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;