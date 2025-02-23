// Toggle Dark Mode
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Modal and Form Validation Logic
// Modal and Form Validation Logic
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get form inputs
  const nameInput = document.getElementById('nameInput').value.trim();
  const hometownInput = document.getElementById('hometownInput').value.trim();
  const emailInput = document.getElementById('emailInput').value.trim();

  // Validate form fields
  if (nameInput && hometownInput && emailInput) {
    // Show the modal
    const modal = document.getElementById('thanks-modal');
    modal.style.display = 'block';

    // Optionally populate modal content dynamically
    const modalContent = document.getElementById('thanks-modal-content');
    modalContent.textContent = `Thank you, ${nameInput} from ${hometownInput}, for your support!`;

    // Optionally add a new signature to the list
    const signaturesDiv = document.querySelector('.signatures');
    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} supports this.`;
    signaturesDiv.appendChild(newSignature);

    // Clear form fields
    document.getElementById('myForm').reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

// Close Modal Logic
document.getElementById('close-modal-button').addEventListener('click', function () {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = 'none';
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('thanks-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('thanks-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
let rotationAngle = 0;

function rotateImage() {
  rotationAngle += 30; // Rotate by 30 degrees
  modalImage.style.transform = `rotate(${rotationAngle}deg)`; // Apply rotation
}
// Declare scaleFactor as a global variable
let scaleFactor = 1; // Start with a scale factor of 1 (default size)

// Select the image within the modal
let modalImage = document.getElementById("modal-image");

// Function to scale the image
function scaleImage() {
  // Toggle the scale factor
  if (scaleFactor === 1) {
    scaleFactor = 0.8; // Shrink the image
  } else {
    scaleFactor = 1; // Reset to original size
  }

  // Apply the scale transformation
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// Function to toggle the modal visibility
function toggleModal() {
  let modal = document.getElementById("modal");

  // Check if modal is currently visible
  if (modal.style.display === "flex") {
    modal.style.display = "none"; // Hide the modal
  } else {
    modal.style.display = "flex"; // Show the modal

    // Start the animation
    let intervalId = setInterval(scaleImage, 500);

    // Stop the animation after 3 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  }
}
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
};
let revealableContainers = document.querySelectorAll('.revealable');
function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);
function reduceMotion() {
  // Update animation properties for reduced motion
  animation.revealDistance = 50;
  animation.transitionDuration = '0.5s';
  animation.transitionTimingFunction = 'linear';

  // Apply updated styles to all revealable elements
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
}

// Add an event listener to the button
document.getElementById('reduce-motion').addEventListener('click', reduceMotion);
const revealables = document.querySelectorAll('.revealable');

window.addEventListener('scroll', () => {
    revealables.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});
