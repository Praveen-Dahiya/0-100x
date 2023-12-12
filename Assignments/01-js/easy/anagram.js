/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


let sortString = (stringg) => {
  return stringg.split("").sort().join("");
};
function isAnagram(str1, str2) {
  if(str1.length !=str2.length){
    return false;
  }
  str1=sortString(str1.toLowerCase());
  str2=sortString(str2.toLowerCase());
  return str1==str2;
}

module.exports = isAnagram;
