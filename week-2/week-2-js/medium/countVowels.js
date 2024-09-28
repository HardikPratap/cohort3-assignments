/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    const vowel=['a','e','i','o','u'];
    let string=str.toLowerCase().split("");
    for(const i in string){
      for(const j in vowel){
        if(string[i]==vowel[j]){
          count++;
        }
      }
    }
    return count;

}


module.exports = countVowels; 