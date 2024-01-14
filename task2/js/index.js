function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let errorMessages = "";

    if (name === "") {
      errorMessages += "Name is required.\n";
    }

    if (email === "") {
      errorMessages += "Email is required.\n";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessages += "Invalid email format.\n";
      }
    }

    if (password === "") {
      errorMessages += "Password is required.\n";
    }

    if (confirmPassword === "") {
      errorMessages += "Confirm Password is required.\n";
    } else if (password !== confirmPassword) {
      errorMessages += "Passwords do not match.\n";
    }

    if (errorMessages !== "") {
      alert("Error:\n" + errorMessages);
    } else {
      alert("Form submitted successfully!");
    }
  }