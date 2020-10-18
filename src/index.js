
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length){
    return []
  }

  

  // return matrix.reduce((item,index) => item.concat(index))
  return matrix.reduce((array ,item, index) => array.concat(index % 2 === 0 ? item : item.reverse()) )


}
