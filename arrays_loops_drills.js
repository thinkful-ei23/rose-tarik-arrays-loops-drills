'use strict';
/*function max(numbers) {
    let largestNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNum) {
            largestNum = numbers[i];
        }
    }
    return largestNum; 
}
*/
function max(numbers) {
  let largestNum = 0; 
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];         
    }
    i++; 
  } 
  console.log(largestNum);
  return largestNum; 
}

max([1, 2, 3, 4, 1, 2]); 

function min(numbers) {
  let smallestNum = numbers[0];
  let i = 0; 
  while (i < numbers.length) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
    i++; 
  }
  console.log(smallestNum);
  return smallestNum; 
}
min([2, 5, 6, 1, 7]);