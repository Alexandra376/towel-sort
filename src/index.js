
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  if (matrix === undefined) {
    return []
  }
  matrix.filter((elem,index) => {
    if (index % 2 !== 0) {
      elem.reverse();
    }
  })
  return matrix.flat()
};







