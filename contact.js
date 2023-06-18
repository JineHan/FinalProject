const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    if (isValidEmail(email)) {
      // All fields are filled and email is valid, proceed with form submission
      form.submit();
    } else {
      alert('Please enter a valid email address.');
    }
  } else {
    alert('Please fill in all fields.');
  }
});

function isValidEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
