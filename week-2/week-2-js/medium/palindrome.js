/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let newStr="";

  for (let char of str) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
        newStr += char.toLowerCase();
    }
  }
  newStr=newStr.split("");
  let pointer1=0;
  let pointer2=newStr.length-1;


  while(pointer2>pointer1){
    if(newStr[pointer1]==newStr[pointer2]){
      pointer1++;
      pointer2--;
    }
    else{
      return false;
    }
  }
  // console.log("true")
  return true;
}

isPalindrome("level");

module.exports = isPalindrome;
