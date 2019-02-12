/* eslint-disable no-undef */
'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var result_sum = a + b;
  var sum_string = 'The sum of '+a+' and '+b+' is '+result_sum+'.';
  return [result_sum, sum_string];

}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
//return [11, 'The sum of 4 and 7 is 11.'];
console.log(testSum);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var result_multiply = a * b;
  var multiply_string = 'The product of '+a+' and '+b+' is '+result_multiply+'.';
  return [result_multiply, multiply_string];
}


// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/


// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

  var d = sum(a,b)[0]; // ==== sumValue === 11

  console.log(sum(a,b));
  // console.log([11, sum_string]);
  //perform its action
  // collapse to 'undefined'
  console.log('another sum : ', sum(99, 6));

  var sumAndMultiplyResultSum = sum (d,c);
  var stringSumOne = a+ ' and '+b+' and '+c+' sum to '+sumAndMultiplyResultSum[0]+'.';

  var e = multiply (a, b);
  var sumAndMultiplyResultProduct = multiply (e[0], c);
  var stringProductOne = 'The product of '+a+' and '+b+' and '+c+' is '+sumAndMultiplyResultProduct[0]+'.';

  return [sumAndMultiplyResultSum[0], sumAndMultiplyResultProduct[0], stringSumOne, stringProductOne];


}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line

  var numOne = sumArr[0];
  var numTwo = sumArr[1];
  var numThree = sumArr[2];

  var onePlusTwo = sum(numOne, numTwo);
  var sumArraySum = sum(onePlusTwo[0], numThree);

  var sumArrayString = numOne+','+numTwo+','+numThree+' was passed in as an array of numbers, and '+sumArraySum[0]+' is their sum.';
  return [sumArraySum[0], sumArrayString];

}
console.log(sumArray);
// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  var multOne = multArr[0];
  var multTwo = multArr[1];
  var multThree = multArr[2];

  var oneTimesTwo = multiply(multOne, multTwo);
  var multArrayProd = multiply(oneTimesTwo[0], multThree);
  console.log(multArrayProd);

  var multArrayString = 'The numbers '+multOne+','+multTwo+','+multThree+' have a product of '+multArrayProd[0]+'.';
  console.log(multArrayString);

  return [multArrayProd[0], multArrayString];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:
[1,2,3]
[1,2,3,4]
"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  // use a for loop to do what we were already doing, accessing the array[i]
  // declare a var related to i;

  var product = 1;
  var num_string = ''; // 1,2,3,4,5

  for (var i = 0; i < dynamicArray.length; i++){
    num_string += dynamicArray[i];
    if( i < dynamicArray.length - 1) {
      num_string += ',';
    }
  }

  for(var j = 0; j < dynamicArray.length; j++){
    product = multiply(product, dynamicArray[j])[0]; // [6, 'some string']
  }

  var result_string = 'The numbers ' + num_string + ' have a product of ' + product + '.';
  return [product, result_string];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
