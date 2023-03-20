const removeFromArray = function(arr, ...arg) {
  return arr.filter(value => !arg.includes(value))
}
// Do not edit below this line
module.exports = removeFromArray;
