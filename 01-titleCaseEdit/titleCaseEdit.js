function titleCaseEdit(title) {
  let words = title.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;