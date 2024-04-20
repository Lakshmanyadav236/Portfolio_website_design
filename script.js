// script.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  // Check if name, email, and message fields are not empty
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    event.preventDefault();
    alert("Please fill out all fields.");
    return;
  }

  // Check if email follows a valid email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }
});

