// Function to prompt the user and display even numbers
function extractEvenNumbers() {
  // Define an empty array to store the numbers
  const numbers = [];

  // Prompt the user to enter numbers until they enter 'done'
  while (true) {
      const input = prompt("Enter a number (or 'done' to finish):");
      if (input.toLowerCase() === 'done') {
          break;
      }

      // Convert the input to a number
      const number = parseFloat(input);

      // Check if the input is a valid number
      if (!isNaN(number)) {
          numbers.push(number);
      } else {
          alert("Please enter a valid number.");
      }
  }

  // Prepare to display even numbers
  const evenNumbers = [];

  // Use for...of loop to iterate over the numbers
  for (const num of numbers) {
      // Check if the number is even
      if (num % 2 === 0) {
          evenNumbers.push(num);
      }
  }

  // Display the even numbers
  let result = "Even Numbers: ";
  if (evenNumbers.length > 0) {
      result += evenNumbers.join(", ");
  } else {
      result += "None";
  }

  // Display the result on the HTML document
  document.getElementById("target").innerText = result;
}

// Call the function to execute
extractEvenNumbers();
