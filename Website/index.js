
// Get the sign now button
const signNowButton = document.getElementById("sign-now-button");

// Initialize the count variable to 3 (default signatures)
let count = 3;

// Define the addSignature function
function addSignature() {
    // Get the name and hometown inputs from the form
    const nameInput = document.getElementById("nameInput").value.trim();
    const hometownInput = document.getElementById("hometownInput").value.trim();

    // Validate that both fields are filled
    if (!nameInput || !hometownInput) {
        alert("Please fill out both your name and hometown.");
        return; // Exit the function if validation fails
    }

    // Create a new paragraph element for the new signature
    const newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} supports this.`;

    // Append the new signature to the signatures section
    const signaturesSection = document.getElementById("signatures");
    signaturesSection.appendChild(newSignature);

    // Increment the count since a new signature was added
    count += 1;

    // Update the counter
    const counterElement = document.getElementById("counter");
    counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Clear the input fields after submission
    document.getElementById("nameInput").value = '';
    document.getElementById("hometownInput").value = '';
}

// Add an event listener to call addSignature when the button is clicked
signNowButton.addEventListener("click", addSignature);

  
