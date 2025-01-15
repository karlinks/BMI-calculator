// Get the references to the elements
const bmiText = document.getElementById("bmi");  // Make sure this matches the ID in HTML
const descText = document.getElementById("desc");  // Make sure this matches the ID in HTML
const form = document.getElementById("bmiForm"); // Reference the form by ID

// Event listeners for form submission and reset
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

// Function to handle the reset event
function handleReset() {
  bmiText.textContent = 0;  // Reset BMI value
  bmiText.className = "";  // Reset the class to remove any color styling
  descText.textContent = "N/A";  // Reset description text
}

// Function to handle the form submission event
function handleSubmit(e) {
  e.preventDefault();  // Prevent form from submitting and page from refreshing

  // Get values from the form fields
  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  // Validate input values
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  // Convert height to meters (as it is inputted in cm)
  const heightInMeters = height / 100;  // Convert cm to meters
  const bmi = weight / Math.pow(heightInMeters, 2);  // BMI formula
  const desc = interpretBMI(bmi);  // Determine BMI category

  // Update the output with the calculated BMI and description
  bmiText.textContent = bmi.toFixed(2);  // Display the BMI value
  bmiText.className = desc;  // Apply the appropriate class (for color styling)
  descText.innerHTML = `You are <strong>${desc}</strong>`;  // Display BMI category
}

// Function to interpret the BMI value and return a category
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";  // Return "underweight" if BMI is less than 18.5
  } else if (bmi < 25) {
    return "healthy";  // Return "healthy" if BMI is between 18.5 and 24.9
  } else if (bmi < 30) {
    return "overweight";  // Return "overweight" if BMI is between 25 and 29.9
  } else {
    return "obese";  // Return "obese" if BMI is 30 or greater
  }
}
