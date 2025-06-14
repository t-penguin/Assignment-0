function isPalindrome(word) {
  let mid = word.length / 2;
  for (let i = 0; i < mid; i++)
    if (word.charAt(i) != word.charAt(word.length - i - 1))
      return false;

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;