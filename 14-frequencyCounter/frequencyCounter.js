function frequencyCounter(word) {
  let output = {};
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (char in output)
      output[char]++;
    else
      output[char] = 1;
  }
  return output;
}

// Do not edit this line;
module.exports = frequencyCounter;