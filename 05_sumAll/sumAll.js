const sumAll = function(a , b) {
  if (a < 0 || b < 0){return 'ERROR'}
  if(typeof a !== "number" || typeof b !== "number"){return 'ERROR'}
  if (a > b){
    const exchangeParameters = a
    a = b
    b = exchangeParameters
  }
  let add = 0;
  for(i = a; i <= b; i++){
    add += i 
  }
    return add
  }

// Do not edit below this line
module.exports = sumAll;
