'use strict';

// Define the function to sort an array with a specified order
function sortArray(numbers, order) {
  // Create a copy of the array to avoid modifying the original
  const sortedArray = numbers.slice();

  // Check the order parameter and sort accordingly
  if (order === "asc") {
      // Sort in ascending order
      sortedArray.sort((a, b) => a - b);
  } else if (order === "desc") {
      // Sort in descending order
      sortedArray.sort((a, b) => b - a);
  } else {
      throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
  }

  // Return the sorted array
  return sortedArray;
}

// Test the function with different arrays and sorting orders
const numbers = [5, 2, 8, 1, 9];

console.log("Ascending Order:", sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log("Descending Order:", sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]

