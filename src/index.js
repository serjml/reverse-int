module.exports = function reverse (n) {
  let result = '';
  n = n.toString();
  for (i = 0; i < n.length; i++) {
    if (n[i] === '-') {
      result += result;
    } else {
      result = `${n[i]}${result}`;
    }          
  }
  return +result;  
}