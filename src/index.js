
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const res = [];

  if (!matrix) {
    return [];
  }

  for (const [index, element] of matrix.entries()) {
    if (index % 2) {
      res.push(element.reverse())

    } else {
      res.push(element)
    }
  }

  return res.flat();
}
