/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers.sort((a,b)=>a-b);
    let len=numbers.length-1;
    return numbers[len];
    
}

module.exports = findLargestElement;