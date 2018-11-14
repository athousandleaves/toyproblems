var reverse = function(x) {
  let arr = x.toString().split("");
  let reversed = [];
  while (arr.length) {
    reversed.push(arr.pop());
  }
  let edger = null;
  let finalNum = 0;
  if (isNaN(reversed[reversed.length - 1])) {
    edger = reversed.pop();
  }
  edger
    ? (finalNum = Number(edger + reversed.join("")))
    : (finalNum = Number(reversed.join("")));
  return finalNum > -2147483648 && finalNum < 2147483647 ? finalNum : 0;
};
