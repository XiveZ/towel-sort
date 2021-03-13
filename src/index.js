
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == 'undefined') return []
  let count = []; 
  matrix.reduce((accumm, curent, index)=> {
    if (index%2!=0){
      count.push(...matrix[index].reverse())
    }else{
    count.push(...matrix[index])
    }
  },0)
  return count
}
