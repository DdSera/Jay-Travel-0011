document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Navbar Toggle for Mobile
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Contact Form Validation
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    const firstName = document.querySelector('input[placeholder="First Name"]');
    const lastName = document.querySelector('input[placeholder="Last Name"]');
    const email = document.querySelector('input[placeholder="E-mail"]');
    const phone = document.querySelector('input[placeholder="Phone Number"]');

    if (firstName.value.trim() === "") {
      alert("First Name is required!");
      isValid = false;
    }

    if (lastName.value.trim() === "") {
      alert("Last Name is required!");
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      alert("Please enter a valid email address!");
      isValid = false;
    }

    if (!validatePhone(phone.value)) {
      alert("Please enter a valid phone number!");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset(); // Reset the form after submission
    }
  });

  // Email Validation Function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Phone Number Validation Function (Only Numbers)
  function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  }
});
