'use strict';
// Define the function to sort an array
function sortArray(numbers) {
  // Create a copy of the array and sort it in ascending order
  return numbers.slice().sort((a, b) => a - b);
}

// Hard-coded array of numbers
const originalArray = [34, 7, 23, 32, 5, 62, 32];

// Display the original array
console.log("Original Array:", originalArray);

// Get the sorted array using the sortArray function
const sortedArray = sortArray(originalArray);

// Display the sorted array
console.log("Sorted Array:", sortedArray);

