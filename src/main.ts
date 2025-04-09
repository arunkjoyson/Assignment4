import paintRequiredCalculator from "./paintRequiredCalculator";

// Function to calculate the area of a triangle
function calculateTriangleArea(width: number, height: number): number {
  const base = width / 3;  // Triangle base is 1/3 of rectangle width
  return 0.5 * base * height;  // Area of triangle
}

// Main function
function main() {
  const width = 3;  // Rectangle width in meters
  const height = 2; // Rectangle height in meters
  const coveragePerLiter = 11.4; // Coverage in m² per liter

  // Prompt the user to enter the number of copies
  process.stdout.write("Enter the number of copies: ");

  // Read the input from stdin
  process.stdin.once('data', (data) => {
    const copies = parseInt(data.toString().trim());  // Convert the input to an integer

    // Validate input (number of copies should be positive)
    if (isNaN(copies) || copies <= 0) {
      console.log("Please enter a valid number of copies greater than 0.");
      process.exit(1); // Exit if input is invalid
    }

    // Calculate the area of one triangle
    const triangleArea = calculateTriangleArea(width, height);

    // Total area to be painted (for all copies)
    const totalPaintedArea = triangleArea * copies;

    // Calculate the amount of paint required using the paint calculator
    const paintRequired = paintRequiredCalculator(totalPaintedArea, coveragePerLiter);

    // Output the result
    console.log(`Paint required for ${copies} copies: ${paintRequired.toFixed(2)} liters`);

    // Exit the program
    process.exit(0);  // Exit cleanly after displaying the result
  });
}

// Run the program
main();
