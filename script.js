document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("⚠️ Please fill out all fields before submitting.");
    event.preventDefault(); // stop form submission
    return;
  }

  if (!emailPattern.test(email)) {
    alert("📧 Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  if (message.length < 10) {
    alert("📝 Your message should be at least 10 characters long.");
    event.preventDefault();
    return;
  }
  alert("✅ Form submitted successfully!");
});
