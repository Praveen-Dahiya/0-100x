/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 
  let si=0;
  let ei=str.length-1;
  str=str.toLowerCase();
  while(si<ei){
    if(str[si]<'a' || str[si]>'z'){
      si++;
      continue;
    }
    if(str[ei]<'a' || str[ei]>'z'){
      ei--;
      continue;
    }
    if(str[si]!=str[ei]){
      return false;
    }
    si++;
    ei--;
  }
  return true;
}

module.exports = isPalindrome;
