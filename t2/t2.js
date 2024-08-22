'use strice';
// Create an empty array called numbers
const numbers = [];

// Function to prompt user for numbers and perform operations
function performArrayOperations() {
    // Prompt the user to enter five numbers
    for (let i = 1; i <= 5; i++) {
        const input = prompt(`Enter Number ${i}:`);
        const number = parseFloat(input);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Invalid number entered. Please enter a valid number.");
            i--; // To ensure we get five valid numbers
        }
    }

    // Display the contents of the numbers array
    console.log("Numbers:", numbers);

    // Prompt the user to enter a number and check if it's in the array
    const searchNumber = parseFloat(prompt("Enter a Number to Search:"));
    if (numbers.includes(searchNumber)) {
        console.log(`Number ${searchNumber} is found in the array.`);
    } else {
        console.log(`Number ${searchNumber} is not found in the array.`);
    }

    // Remove the last number from the numbers array
    numbers.pop();

    // Display the updated numbers array
    console.log("Updated Numbers:", numbers);

    // Sort the numbers array in ascending numerical order
    numbers.sort((a, b) => a - b);

    // Display the sorted numbers array
    console.log("Sorted Numbers:", numbers);
}

// Call the function to execute the operations
performArrayOperations();

